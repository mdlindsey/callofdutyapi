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
