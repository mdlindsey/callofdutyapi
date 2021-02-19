import * as Schema from '@callofduty/types'
export * as MW from './mw'
// export * as BO4 from './bo4'

export const RankIcon = (level:number) => `https://www.callofduty.com/cdn/app/icons/mw/ranks/mp/icon_rank_${level}.png`

export interface PlatformDetails {
    id: Schema.Platform // API recognized name
    name: string // full name
    label: string // 3 letter abbr
}
export const Platform = (id:Schema.Platform):PlatformDetails => Platforms[id]
export const Platforms:Record<Schema.Platform, PlatformDetails> = {
    uno:    { id: 'uno',    label: 'ATV', name: 'Activision'          },
    xbl:    { id: 'xbl',    label: 'XBL', name: 'Xbox Live'           },
    psn:    { id: 'psn',    label: 'PSN', name: 'PlayStation Network' },
    steam:  { id: 'steam',  label: 'STM', name: 'Steam'               },
    battle: { id: 'battle', label: 'BTL', name: 'Battle.net'          },
}

export interface GameDetails {
    id: Schema.Game // API recognized name
    name: string // full name
    label: string // abbr
}
export const Game = (id:Schema.Game):GameDetails => Games[id]
export const Games:Record<Schema.Game, GameDetails> = {
    wwii: { id: 'wwii', label: 'WWII',  name: 'World War II'        },
    bo4:  { id: 'wwii', label: 'BO4',   name: 'Black Ops 4'         },
    mw:   { id: 'mw',   label: 'MW',    name: 'Modern Warfare'      },
    cw:   { id: 'cw',   label: 'CW',    name: 'Black Ops: Cold War' },
}


export interface GameTypeDetails {
    id: Schema.GameType // API recognized name
    name: string // full name
    label: string // abbr
}
export const GameType = (id:Schema.GameType):GameTypeDetails => GameTypes[id]
export const GameTypes:Record<Schema.GameType, GameTypeDetails> = {
    mp: { id: 'mp', label: 'MP',  name: 'Multiplayer' },
    wz: { id: 'wz', label: 'WZ',  name: 'Warzone'     },
    zm: { id: 'zm', label: 'ZOM', name: 'Zombies'     }, // only in cw
}
