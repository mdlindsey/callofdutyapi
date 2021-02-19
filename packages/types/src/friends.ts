import * as Schema from '.'

export interface Friend {
    username: string
    platform: Schema.Platform
    accountId: string
    dateAdded: number
    status: {
        online: boolean
        currentTitleId?: 'mw' | 'bo4' // only in the friends and firstParty it seems
    }
}

export namespace Friend {
    export interface Console {
        username: string
        platform: Schema.Platform
        avatarUrlLarge: string
        avatarUrlLargeSsl: string
        status: {
            online: boolean
        }
        identities?: {
            uno: {
                username: string
                platform: Schema.Platform
                accountId: string
            }
        }
    }
}
