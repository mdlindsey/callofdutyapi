import * as Schema from '../..'

export interface Summary {
    kills: number
    objectiveTeamWiped: number
    objectiveLastStandKill: number
    wallBangs: number
    avgLifeTime: number
    score: number
    headshots: number
    assists: number
    killsPerGame: number
    scorePerMinute: number
    distanceTraveled: number
    deaths: number
    objectiveDestroyedEquipment: number
    objectiveMedalScoreSsKillPrecisionAirstrike: number
    objectiveBrDownEnemyCircle3: number
    objectiveBrDownEnemyCircle2: number
    kdRatio: number
    objectiveBrDownEnemyCircle1: number
    objectiveBrMissionPickupTablet: number
    objectiveReviver: number
    objectiveBrKioskBuy: number
    gulagDeaths: number
    timePlayed: number
    headshotPercentage: number
    executions: number
    matchesPlayed: number
    gulagKills: number
    nearmisses: number
    objectiveBrCacheOpen: number
    damageDone: number
    damageTaken: number
}
export interface Team {
    name: string
    placement: number
    time: number
    plunder: null
    players: Team.Player[]
}
export namespace Team {
    export interface Player {
        uno: string
        username: string
        clantag: string
        platform: string
        team: string
        rank: number
        result: null
        playerStats: Player.Stats
        loadouts: Schema.MW.Loadout[]
    }
    export namespace Player {
        export interface Stats {
            rank: number
            score: number
            kills: number
            deaths: number
            kdRatio: number
            damageDone: number
            damageTaken: number
            timePlayed: number
            wallBangs: number
            headshots: number
            executions: number
            assists: number
            nearmisses: number
            longestStreak: number
            scorePerMinute: number
            distanceTraveled: number
            percentTimeMoving: number
        }
    }
}
export interface PlayerStats extends Schema.MW.Match.Generic.PlayerStats {
    bonusXp: number
    challengeXp: number
    teamPlacement: number
    teamSurvivalTime: number
    gulagKills?: number
    gulagDeaths?: number
    objectiveReviver?: number
    objectiveTeamWiped?: number
    objectiveBrKioskBuy?: number
    objectiveBrCacheOpen?: number
    objectiveLastStandKill?: number
    objectiveTrophyDefense?: number
    objectiveDestroyedEquipment?: number
    objectiveBrDownEnemyCircle1?: number
    objectiveBrDownEnemyCircle2?: number
    objectiveBrDownEnemyCircle3?: number
    objectiveBrDownEnemyCircle4?: number
    objectiveBrDownEnemyCircle5?: number
    objectiveBrDownEnemyCircle6?: number
    objectiveBrDownEnemyCircle7?: number
    objectiveBrDownEnemyCircle8?: number
    objectiveBrDownEnemyCircle9?: number
    objectiveBrDownEnemyCircle10?: number
    objectiveBrDownEnemyCircle11?: number
    objectiveBrMissionPickupTablet?: number
    objectiveMunitionsBoxTeammateUsed?: number
    objectiveManualFlareMissileRedirect?: number
    objectiveMedalScoreKillSsRadarDrone?: number
    objectiveMedalScoreSsKillTomaStrike?: number
}
