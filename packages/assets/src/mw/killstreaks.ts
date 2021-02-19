import * as Schema from '@callofduty/types'

export interface KillstreakDetails {
    id: Schema.MW.Killstreak
    name: string
    props: {
        kills: string
        takedowns: string
    }
    reward?: {
        kills?: number
        score?: number
    }
}

const snakeToPascal = (input:string) => (input + '').split('_').map(s => s.slice(0,1).toUpperCase() + s.slice(1, s.length)).join('')
const KillstreakKillsProp = (killstreakId:string) => `objectiveMedalScoreSsKill${snakeToPascal(killstreakId)}`
const KillstreakTakedownsProp = (killstreakId:string) => `objectiveMedalScoreKillSs${snakeToPascal(killstreakId)}`

const Killstreak = (id:Schema.MW.Killstreak):KillstreakDetails => Killstreaks[id]
const KillstreakObjective = (objectiveProp:string):Schema.MW.Killstreak => 
    objectiveProp.replace('objectiveMedalScoreSsKill', '')
        .replace('objectiveMedalScoreKillSs', '')
        .match(/[A-Z]*[^A-Z]+/g)
        .map(s => s.toLowerCase()).join('_') as Schema.MW.Killstreak
const Killstreaks:{[key:string]: KillstreakDetails} = {
    radar_drone_overwatch: {
        id: 'radar_drone_overwatch',
        name: 'Personal Radar',
        reward: { kills: 2, score: null },
        props: {
            kills: KillstreakKillsProp('radar_drone_overwatch'),
            takedowns: KillstreakTakedownsProp('radar_drone_overwatch'),
        }
    },
    manual_turret: {
        id: 'manual_turret',
        name: 'Shield Turret',
        reward: { kills: 2, score: null },
        props: {
            kills: KillstreakKillsProp('manual_turret'),
            takedowns: KillstreakTakedownsProp('manual_turret'),
        }
    },
    scrambler_drone_guard: {
        id: 'scrambler_drone_guard',
        name: 'Counter UAV',
        reward: { kills: 2, score: null },
        props: {
            kills: KillstreakKillsProp('scrambler_drone_guard'),
            takedowns: KillstreakTakedownsProp('scrambler_drone_guard'),
        }
    },
    uav: {
        id: 'uav',
        name: 'UAV',
        reward: { kills: 3, score: null },
        props: {
            kills: KillstreakKillsProp('uav'),
            takedowns: KillstreakTakedownsProp('uav'),
        }
    },
    airdrop: {
        id: 'airdrop',
        name: 'Care Package',
        reward: { kills: 4, score: null },
        props: {
            kills: KillstreakKillsProp('airdrop'),
            takedowns: KillstreakTakedownsProp('airdrop'),
        }
    },
    toma_strike: {
        id: 'toma_strike',
        name: 'Cluster Strike',
        reward: { kills: 5, score: null },
        props: {
            kills: KillstreakKillsProp('toma_strike'),
            takedowns: KillstreakTakedownsProp('toma_strike'),
        }
    },
    cruise_predator: {
        id: 'cruise_predator',
        name: 'Cruise Missile',
        reward: { kills: 5, score: null },
        props: {
            kills: KillstreakKillsProp('cruise_predator'),
            takedowns: KillstreakTakedownsProp('cruise_predator'),
        }
    },
    precision_airstrike: {
        id: 'precision_airstrike',
        name: 'Precision Airstrike',
        reward: { kills: 6, score: null },
        props: {
            kills: KillstreakKillsProp('precision_airstrike'),
            takedowns: KillstreakTakedownsProp('precision_airstrike'),
        }
    },
    bradley: {
        id: 'bradley',
        name: 'Infantry Assault Vehicle',
        reward: { kills: 6, score: null },
        props: {
            kills: KillstreakKillsProp('bradley'),
            takedowns: KillstreakTakedownsProp('bradley'),
        }
    },
    sentry_gun: {
        id: 'sentry_gun',
        name: 'Sentry Gun',
        reward: { kills: 7, score: null },
        props: {
            kills: KillstreakKillsProp('sentry_gun'),
            takedowns: KillstreakTakedownsProp('sentry_gun'),
        }
    },
    pac_sentry: {
        id: 'pac_sentry',
        name: 'Wheelson',
        reward: { kills: 7, score: null },
        props: {
            kills: KillstreakKillsProp('pac_sentry'),
            takedowns: KillstreakTakedownsProp('pac_sentry'),
        }
    },
    airdrop_multiple: {
        id: 'airdrop_multiple',
        name: 'Emergency Airdrop',
        reward: { kills: 8, score: null },
        props: {
            kills: KillstreakKillsProp('airdrop_multiple'),
            takedowns: KillstreakTakedownsProp('airdrop_multiple'),
        }
    },
    hover_jet: {
        id: 'hover_jet',
        name: 'VTOL Jet',
        reward: { kills: 8, score: null },
        props: {
            kills: KillstreakKillsProp('hover_jet'),
            takedowns: KillstreakTakedownsProp('hover_jet'),
        }
    },
    white_phosphorus: {
        id: 'white_phosphorus',
        name: 'White Phosphorus',
        reward: { kills: 10, score: null },
        props: {
            kills: KillstreakKillsProp('white_phosphorus'),
            takedowns: KillstreakTakedownsProp('white_phosphorus'),
        }
    },
    chopper_gunner: {
        id: 'chopper_gunner',
        name: 'Chopper Gunner',
        reward: { kills: 10, score: null },
        props: {
            kills: KillstreakKillsProp('chopper_gunner'),
            takedowns: KillstreakTakedownsProp('chopper_gunner'),
        }
    },
    chopper_support: {
        id: 'chopper_support',
        name: 'Support Helo',
        reward: { kills: 11, score: null },
        props: {
            kills: KillstreakKillsProp('chopper_support'),
            takedowns: KillstreakTakedownsProp('chopper_support'),
        }
    },
    gunship: {
        id: 'gunship',
        name: 'Gunship',
        reward: { kills: 12, score: null },
        props: {
            kills: KillstreakKillsProp('gunship'),
            takedowns: KillstreakTakedownsProp('gunship'),
        }
    },
    directional_uav: {
        id: 'directional_uav',
        name: 'Advanced UAV',
        reward: { kills: 13, score: null },
        props: {
            kills: KillstreakKillsProp('directional_uav'),
            takedowns: KillstreakTakedownsProp('directional_uav'),
        }
    },
    juggernaut: {
        id: 'juggernaut',
        name: 'Juggernaut',
        reward: { kills: 15, score: null },
        props: {
            kills: KillstreakKillsProp('juggernaut'),
            takedowns: KillstreakTakedownsProp('juggernaut'),
        }
    },
    nuke: {
        id: 'nuke',
        name: 'Nuke',
        reward: { kills: 30, score: null },
        props: {
            kills: KillstreakKillsProp('nuke'),
            takedowns: KillstreakTakedownsProp('nuke'),
        }
    },
} 

export { Killstreak, KillstreakObjective, Killstreaks }
