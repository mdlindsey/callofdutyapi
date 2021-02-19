import * as Schema from '../..'
import * as MP from './mp'
import * as WZ from './wz'

export type Match = Match.MP | Match.WZ
export type Summary = MP.Summary | WZ.Summary
export type MapEvents = MP.MapEvents
export type Team = MP.Team
export namespace Match {
    export interface MP extends Generic {
        gameType: 'mp'
        mode: Schema.MW.Mode.MP
        map: Schema.MW.Map.MP
        result: MP.Result
        winningTeam: MP.Team
        gameBattle: boolean
        team1Score: number
        team2Score: number
        isPresentAtEnd: boolean
        allPlayers: {}
        arena: boolean
        player: MP.Player
        playerStats: MP.PlayerStats
        weaponStats: { [key: string]: MP.WeaponStats } // weaponId: { weaponStats }
    }
    export interface WZ extends Generic {
        gameType: 'wz'
        mode: Schema.MW.Mode.WZ
        map: Schema.MW.Map.WZ
        draw: boolean
        playerCount: number
        teamCount: number
        player: Generic.Player
        playerStats: WZ.PlayerStats
        rankedTeams: null | WZ.Team[]
    }
    export interface Generic {
        utcStartSeconds: number
        utcEndSeconds: number
        map: Schema.MW.Map
        mode: Schema.MW.Mode
        matchID: string
        privateMatch: boolean
        duration: number
        playlistName: string
        version: number
        gameType: Schema.GameType
    }
    export namespace Generic {
        export interface Player {
            team: string
            rank: number
            awards: {}
            username: string
            clantag: string
            uno: string
            loadout: Schema.MW.Loadout[]
        }
        export interface PlayerStats {
            rank: number
            kills: number
            deaths: number
            kdRatio: number
            headshots: number
            assists: number
            executions: number
            wallBangs?: number
            nearmisses?: number
            damageDone: number
            damageTaken: number
            longestStreak: number
            scorePerMinute: number
            percentTimeMoving: number
            distanceTraveled: number
            timePlayed: number
            score: number
            miscXp: number
            medalXp: number
            matchXp: number
            scoreXp: number
            totalXp: number
        }
    }
}
