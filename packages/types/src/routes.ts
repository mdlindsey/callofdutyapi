import * as Schema from '.'

export type Generic<ResponseModel> = { status: 'success' | 'error', data: ResponseModel }

export type Accounts = Partial<Record<Schema.Platform, { username: Schema.Username }>>
export type Identity = {
    titleIdentities: {
        title: Schema.Game
        platform: Schema.Platform
        username: string
        activeDate: number
        activityType: 'wz'
    }[]
}
export type Friends = {
    uno: Schema.Friend[]
    incomingInvitations: Schema.Friend[]
    outgoingInvitations: Schema.Friend[]
    blocked: Schema.Friend[]
    firstParty?: {
        xbl?: Schema.Friend.Console[]
        psn?: Schema.Friend.Console[]
    }
}

export type Profile = Schema.MW.Profile
export type MatchEvents = Schema.MW.MapEvents
export type MatchDetails = {
    allPlayers: Schema.MW.Match[]
}
export type MatchHistory = {
    matches: Schema.MW.Match[]
    summary: Record<'all' | Schema.MW.Mode, Schema.MW.Summary>
}
export type UserInfo = {
    status: null
    errors: {}
    exceptionMessageCode: null
    exceptionMessageList: string[]
    userInfo: {
        userName: string
        friendCount: number
        notificationCount: number
        isAuthenticated: Boolean
        profilImageUrl: null
        phoneNumber: string
        countryCode: string
        postalCode: string
        isElite: null
        isGraceLogin: Boolean
        graceLoginCount: number
        userNameEmpty: Boolean
        jiveUserName: string
    }
    identities: {
        provider: Schema.Platform
        username: string
        tokens: null
        authorized: Boolean
        created: Date
        updated: Date
        accountID: string
        secondaryAccountID: null
    }[]
    sessionID: null
    accountPercentageCompletion: number
    facebookLinked: Boolean
    twitterLinked: Boolean
    youtubeLinked: Boolean
    twitchLinked: Boolean
    amazonLinked: Boolean
    emailValidated: Boolean
    gamerAccountLinked: Boolean
    codPreferences: {
        in_game_events_sms: Boolean
        gameplay_help_and_tips_sms: Boolean
        news_and_community_updates: Boolean
        esports_sms: Boolean
        sales_and_promotions: Boolean
        news_and_community_updates_sms: Boolean
        gameplay_help_and_tips: Boolean
        in_game_events: Boolean
        sales_and_promotions_sms: Boolean
        esports: Boolean
    }
    playerSupportPreferences: {
        service_and_support: Boolean
        service_and_support_sms: Boolean
        my_support: Boolean
        my_support_sms: Boolean
    }
}