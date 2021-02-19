import * as Schema from '../..'

export type Team = 'allies' | 'axis'
export type Result = 'win' | 'loss' | 'draw'

export interface Match extends Schema.MW.Match.Generic {
    gameType: 'mp'
    mode: Schema.MW.Mode
    map: Schema.MW.Map
    result: Result
    winningTeam: Team
    gameBattle: boolean
    team1Score: number
    team2Score: number
    isPresentAtEnd: boolean
    allPlayers: {}
    arena: boolean
    player: Player
    playerStats: PlayerStats
    weaponStats: { [key: string]: WeaponStats } // weaponId: { weaponStats }
}

export interface Summary {
    matchXp: number
    scoreXp: number
    accuracy: number
    objectiveMedalScoreKillSsSentryGun: number
    losses: number
    shotsLanded: number
    objectiveMedalModeXAssaultScore: number
    objectiveMedalModeXDefendScore: number
    score: number
    totalXp: number
    objectiveMedalModeHpSecureScore: number
    rank: number
    objectiveMedalScoreSsKillPacSentry: number
    deaths: number
    objectiveDestroyedEquipment: number
    wins: number
    objectiveMedalScoreKillSsHoverJet: number
    kdRatio: number
    shotsMissed: number
    objectiveMedalScoreSsKillChopperGunner: number
    scorePerGame: number
    timePlayed: number
    headshotPercentage: number
    objectiveKillConfirmed: number
    matchesPlayed: number
    suicides: number
    objectiveKothInObj: number
    wlRatio: number
    nearmisses: number
    percentTimeMoving: number
    damageDone: number
    shotsFired: number
    kills: number
    medalXp: number
    averageSpeedDuringMatch: number
    objectiveMedalModeDomSecureScore: number
    wallBangs: number
    avgLifeTime: number
    objectiveMedalModeDomSecureAssistScore: number
    headshots: number
    assists: number
    scorePerMinute: number
    distanceTraveled: number
    objectiveKillDenied: number
    objectiveMedalModeDomSecureNeutralScore: number
    objectiveKcFriendlyPickup: number
    executions: number
    seasonRank: number
    objectiveObjProgDefend: number
    objectiveMedalModeDomSecureBScore: number
    miscXp: number
    longestStreak: number
    objectiveMedalScoreKillSsPacSentry: number
    objectiveMedalScoreSsKillHoverJet: number
    objectiveMedalModeKcOwnTagsScore: number
    objectiveCaptureKill: number
    damageTaken: number
}

export interface WeaponStats {
    hits: number
    kills: number
    headshots: number
    loadoutIndex: number
    shots: number
    startingWeaponXp: number
    deaths: number
    xpEarned: number
}
export interface Player extends Schema.MW.Match.Generic.Player {
    nemesis: string
    mostKilled: string
    killstreakUsage: {
        radar_drone_overwatch?: number
        manual_turret?: number
        scrambler_drone_guard?: number
        uav?: number
        airdrop?: number
        toma_strike?: number
        cruise_predator?: number
        precision_airstrike?: number
        bradley?: number
        sentry_gun?: number
        pac_sentry?: number
        airdrop_multiple?: number
        hover_jet?: number
        white_phosphorus?: number
        chopper_gunner?: number
        chopper_support?: number
        gunship?: number
        directional_uav?: number
        juggernaut?: number
        nuke?: number
    }
}
export interface PlayerStats extends Schema.MW.Match.Generic.PlayerStats {
    suicides: number
    accuracy: number
    shotsLanded: number
    shotsMissed: number
    shotsFired: number
    bonusXp: number
    totalXp: number
    challengeXp: number
    averageSpeedDuringMatch: number
    objectiveCaptureKill?: number
    objectiveObjProgDefend?: number
    objectiveGainedGunRank?: number
    objectiveKillConfirmed?: number
    objectiveKillDenied?: number
    objectiveKcFriendlyPickup?: number
    objectiveMedalModeKcOwnTagsScore?: number
    objectiveDestroyedEquipment?: number
    objectiveMedalModeXAssaultScore?: number
    objectiveMedalModeXDefendScore?: number
    objectiveMedalModeDomSecureScore?: number
    objectiveMedalModeDomSecureBScore?: number
    objectiveMedalModeDomSecureNeutralScore?: number
    objectiveMedalModeDomSecureAssistScore?: number
    objectiveMedalScoreSsKillRadarDroneOverwatch?: number
    objectiveMedalScoreKillSsRadarDroneOverwatch?: number
    objectiveMedalScoreSsKillManualTurret?: number
    objectiveMedalScoreKillSsManualTurret?: number
    objectiveMedalScoreSsKillScramblerDroneGuard?: number
    objectiveMedalScoreKillSsScramblerDroneGuard?: number
    objectiveMedalScoreSsKillUav?: number
    objectiveMedalScoreKillSsUav?: number
    objectiveMedalScoreSsKillAirdrop?: number
    objectiveMedalScoreKillSsAirdrop?: number
    objectiveMedalScoreSsKillTomaStrike?: number
    objectiveMedalScoreKillSsTomaStrike?: number
    objectiveMedalScoreSsKillCruisePredator?: number
    objectiveMedalScoreKillSsCruisePredator?: number
    objectiveMedalScoreSsKillPrecisionAirstrike?: number
    objectiveMedalScoreKillSsPrecisionAirstrike?: number
    objectiveMedalScoreSsKillBradley?: number
    objectiveMedalScoreKillSsBradley?: number
    objectiveMedalScoreSsKillSentryGun?: number
    objectiveMedalScoreKillSsSentryGun?: number
    objectiveMedalScoreSsKillPacSentry?: number
    objectiveMedalScoreKillSsPacSentry?: number
    objectiveMedalScoreSsKillAirdropMultiple?: number
    objectiveMedalScoreKillSsAirdropMultiple?: number
    objectiveMedalScoreSsKillHoverJet?: number
    objectiveMedalScoreKillSsHoverJet?: number
    objectiveMedalScoreSsKillWhitePhosphorus?: number
    objectiveMedalScoreKillSsWhitePhosphorus?: number
    objectiveMedalScoreSsKillChopperGunner?: number
    objectiveMedalScoreKillSsChopperGunner?: number
    objectiveMedalScoreSsKillChopperSupport?: number
    objectiveMedalScoreKillSsChopperSupport?: number
    objectiveMedalScoreSsKillGunship?: number
    objectiveMedalScoreKillSsGunship?: number
    objectiveMedalScoreSsKillDirectionalUav?: number
    objectiveMedalScoreKillSsDirectionalUav?: number
    objectiveMedalScoreSsKillJuggernaut?: number
    objectiveMedalScoreKillSsJuggernaut?: number
    objectiveMedalScoreSsKillNuke?: number
    objectiveMedalScoreKillSsNuke?: number
}

export interface MapEvents {
    matchId: string
    mode: Schema.MW.Mode.MP
    matchStart: number // milliseconds
    matchEnd: number // milliseconds
    map: {
        mapId: Schema.MW.Map
        imageUrl: string // no http, just filename
        left: number
        right: number
        top: number
        bottom: number
        rotation: null
    }
    teams: MapEvents.Team[]
    engagements: MapEvents.Engagement[]
}
export namespace MapEvents {
    export type Team = Team.Member[]
    export namespace Team {
        export interface Member {
            provider: Schema.Platform
            username: string
            unoId: string
            unoUsername: string
        }
    }
    export interface Engagement {
        time: number
        a: number
        v: number
        ax: number
        ay: number
        vx: number
        vy: number
        aLoc: number
        vLoc: number
        cause: Engagement.Cause
    }
    export namespace Engagement {
        export type Cause = 'crush' | 'falling' | 'impact' | 'suicide' |
            'melee' | 'execution' |
            'fire' | 'explosive' | 'grenade_splash' |
            'head_shot' | 'rifle_bullet' | 'pistol_bullet' |
            'projectile' | 'projectile_splash'
    }
}
