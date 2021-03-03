import * as deprecatedRequest from 'request'
import axios, { AxiosRequestConfig } from 'axios'
import * as Schema from '@callofduty/types'

/** Call of Duty API */
export default class {
    constructor(
        protected readonly tokens = <Schema.Tokens>{},
        protected readonly logger = <Function>console.log,
    ) {}
    /** Assign tokens for authenticated requests */
    public UseTokens({ sso, atkn, xsrf }:Schema.Tokens) {
        this.tokens.sso = sso
        this.tokens.atkn = atkn
        this.tokens.xsrf = xsrf
        return this
    }
    /** Fetches primary identity for the authenticated account */
    public async Identity():Promise<Schema.Routes.Identity> {
        return this.AuthenticatedRequest({ url: `/crm/cod/v2/identities` })
    }
    /** Fetches friends list for the authenticated account */
    public async Friends():Promise<Schema.Routes.Friends> {
        return this.AuthenticatedRequest({ url: `/codfriends/v1/compendium` })
    }
    /** Performs friend-related actions on a given unoId */
    public async FriendAction(unoId:string, action:'invite'|'uninvite'|'remove'|'block'|'unblock'):Promise<any> {
        return this.AuthenticatedRequest({ url: `/codfriends/v1/${action}/uno/id/${unoId}`, method: 'POST', data: JSON.stringify({}) })
    }
    /** Update search visibility for the authenticated account */
    public async SearchVisibility(visibility:'all'|'none'|'friends', platform:Schema.Platform):Promise<any> {
        return this.AuthenticatedRequest({ url: `/setGamerPreference/${platform}/searchable/${visibility}`, method: 'POST', baseURL: 'https://profile.callofduty.com/cod' })
    }
    /** Update profile visibility for the authenticated account */
    public async ProfileVisibility(visibility:'all'|'none'|'friends'|'friends_tourneys', platform:Schema.Platform):Promise<any> {
        return this.AuthenticatedRequest({ url: `/setGamerPreference/${platform}/data_visible/${visibility}`, method: 'POST', baseURL: 'https://profile.callofduty.com/cod' })
    }
    /** Fetches user information of the authenticated account */
    public async UserInfo():Promise<Schema.Routes.UserInfo> {
        return this.ParsedAuthenticatedRequest({
            method: 'GET',
            url: `/userInfo/${this.tokens.sso}`,
            baseURL: 'https://profile.callofduty.com/cod'
        }, (r:string):Schema.Routes.UserInfo => JSON.parse(r.replace(/^userInfo\((.*)\);?$/i, '$1')))
    }
    /** Fetches full account identifiers list for the authenticated account */
    public async Accounts(profileId:Schema.ProfileId):Promise<Schema.Routes.Accounts> {
        return this.AuthenticatedRequest({ url: `/crm/cod/v2/accounts/${this.PlayerUrl(profileId)}` })
    }
    /** Fetches profile data for the provided profile, game, and gameType */
    public async Profile(profileId:Schema.ProfileId, gameType:Schema.GameType, game:Schema.Game):Promise<Schema.Routes.Profile> {
        return this.AuthenticatedRequest({ url: `/stats/cod/v1/title/${game}/${this.PlayerUrl(profileId)}/profile/type/${gameType}` })
    }
    /** Fetches all match map events for the provided matchId and game */
    public async MatchEvents(matchId:string, game:Schema.Game):Promise<Schema.Routes.MatchEvents> {
        return this.GenericRequest({ url: `/ce/v1/title/${game}/platform/battle/match/${matchId}/matchMapEvents` })
    }
    /** Fetches all match details including player stats for the provided matchId, game, and gameType */
    public async MatchDetails(matchId:string, gameType:Schema.GameType, game:Schema.Game):Promise<Schema.Routes.MatchDetails> {
        return this.GenericRequest({ url: `/crm/cod/v2/title/${game}/platform/battle/fullMatch/${gameType}/${matchId}/it` })
    }
    /** Fetches up to 20 matches for the provided profile, game, and gameType */
    public async MatchHistory(profileId:Schema.ProfileId, gameType:Schema.GameType, game:Schema.Game, next:number=0, limit:number=20):Promise<Schema.Routes.MatchHistory> {
        return this.AuthenticatedRequest({ url: `/crm/cod/v2/title/${game}/${this.PlayerUrl(profileId)}/matches/${gameType}/start/0/end/${next}/details?limit=${limit}` })
    }
    /** Fetches an isolated match summary for the provided match history record */
    public async MatchSummary(match:Schema.Match, game:Schema.Game):Promise<Schema.Routes.MatchHistory> {
        const playerUrl = this.PlayerUrl({ unoId: match.player.uno })
        const endThreshold = (Number(match.utcEndSeconds) + 25) * 1000
        const startThreshold = (Number(match.utcStartSeconds) - 25) * 1000
        return this.AuthenticatedRequest({ url: `/crm/cod/v2/title/${game}/${playerUrl}/matches/${match.gameType}/start/${startThreshold}/end/${endThreshold}/details` })
    }
    /** Login - exchange username + password for authentication tokens */
    public async Authorize(email:string, password:string, useTokens:boolean=true):Promise<{ xsrf: string, atkn: string, sso: string }> {
        const initializeUrl = 'https://profile.callofduty.com/cod/login'
        this.logger(`[>] API.CallOfDuty: ${initializeUrl}`)
        const initialPageLoad = await axios.get(initializeUrl, { timeout: 5000 }).catch(() => { throw 'activision timeout; please retry' })
        const xsrf = initialPageLoad?.headers['set-cookie'].find((cookie:string) => cookie.includes('XSRF-TOKEN='))?.replace(/^XSRF-TOKEN=([^;]+);.*$/, '$1')
        if (!xsrf) {
            throw 'activision failure; missing token'
        }
        // No response cookies with Axios so fugg it for now
        const { headers } = await this.AnonymousRequest({
            method: 'POST',
            url: 'https://profile.callofduty.com/do_login?new_SiteId=cod',
            headers: {
                'Cookie': `XSRF-TOKEN=${xsrf}; new_SiteId=cod;`,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            form: {
                username:email,
                password,
                remember_me: 'true',
                _csrf: xsrf
            }
        })
        if (headers.location.toLowerCase().includes('captcha')) {
            throw 'captcha required'
        }
        try {
            const atkn = headers['set-cookie'].find((cookie:string) => cookie.includes('atkn='))?.replace(/^atkn=([^;]+);.*$/, '$1')
            const sso = headers['set-cookie'].find((cookie:string) => cookie.includes('ACT_SSO_COOKIE='))?.replace(/^ACT_SSO_COOKIE=([^;]+);.*$/, '$1')
            if (!atkn || !sso) throw 'invalid credentials'
            if (useTokens) {
                this.UseTokens({ xsrf, atkn, sso })
            }
            return { xsrf, atkn, sso }
        } catch(e) {
            throw 'invalid credentials'
        }
    }
    /** Generate platform profile URL for provided profileId */
    protected PlayerUrl(profileId:Schema.ProfileId) {
        const { unoId } = <Schema.UnoId>profileId
        const { username, platform } = <Schema.PlatformId>profileId
        const acctIdentifier = unoId ? unoId : username
        const platformSegment = unoId ? 'uno/uno' : `${platform}/gamer`
        return `platform/${platformSegment}/${encodeURIComponent(acctIdentifier)}`
    }
    /** Facilitate an anonymous request to any URL via deprecated request npm module */
    protected async AnonymousRequest(cfg:any):Promise<any> {
        return new Promise((resolve,reject) => deprecatedRequest(cfg, (err:any,res:any) => err ? reject(err) : resolve(res)))
    }
    /** Facilitate a generic request to the API client */
    protected async GenericRequest(config:Partial<AxiosRequestConfig>, headers?:any):Promise<any> {
        const requestConfig:Partial<AxiosRequestConfig> = {
            method: 'GET',
            baseURL: 'https://my.callofduty.com/api/papi-client',
            headers: { 'Cache-Control': 'no-cache', ...headers },
            ...config,
        }
        this.logger(`[>] API.CallOfDuty: ${requestConfig.baseURL}${requestConfig.url}`)
        const { data:res, status } = await axios(requestConfig)
        if (status !== 200 || res.status !== 'success') {
            this.logger('[!] API Error:', res.data.message.replace('Not permitted: ', ''), res)
            throw res.data.message.replace('Not permitted: ', '')
        }
        return res.data
    }
    /** Facilitate an authenticated request to the API client */
    protected async AuthenticatedRequest(config:Partial<AxiosRequestConfig>):Promise<any> {
        if (!this.tokens.xsrf || !this.tokens.atkn || !this.tokens.sso) {
            throw new Error('Missing tokens for Call of Duty API')
        }
        const headers = {
            'X-XSRF-TOKEN': this.tokens.xsrf,
            'X-CSRF-TOKEN': '3844e7b2-ac07-4c97-8c72-0fa9f43fdd26',
        }
        const cookieStr = `atkn=${this.tokens.atkn};`
            + `ACT_SSO_COOKIE=${this.tokens.sso};`
            + `API_CSRF_TOKEN=3844e7b2-ac07-4c97-8c72-0fa9f43fdd26;`
        return this.GenericRequest(config, { Cookie: cookieStr, ...headers })
    }
	/** Facilitate an authenticated request to the API client and parse the results before returning */
    protected async ParsedAuthenticatedRequest(config:Partial<AxiosRequestConfig>, parser:Function):Promise<any> {
        return parser(await this.AuthenticatedRequest(config))
    }
}
