import * as Schema from '..'

export interface Profile {
    title: 'mw'
    platform: Schema.Platform
    username: string
    type: Schema.GameType
    level: number
    maxLevel: number
    levelXpRemainder: number
    levelXpGained: number
    prestige: number
    prestigeId: number
    maxPrestige: number
    totalXp: number
    paragonRank: number
    paragonId: number
    s: number
    p: number
    weekly: Profile.Weekly
    lifetime: Profile.Lifetime
}
export namespace Profile {
    export type Properties<T> = { properties: T }
    export interface Weekly {
        map: {}
        mode: Modes
        all: Properties<Profile.Properties.All>
    }
    export interface Lifetime extends Weekly {
        itemData: Profile.ItemData
        accoladeData: Properties<AccoladeData>
        scorestreakData: ScorestreakData
    }
    export namespace Properties {
        export interface All {
            recordLongestWinStreak: number
            recordXpInAMatch: number
            accuracy: number
            losses: number
            totalGamesPlayed: number
            score: number
            winLossRatio: number
            totalShots: number
            bestScoreXp: number
            gamesPlayed: number
            bestSquardKills: number
            bestSguardWave: number
            bestConfirmed: number
            deaths: number
            wins: number
            bestSquardCrates: number
            kdRatio: number
            bestAssists: number
            bestFieldgoals: number
            bestScore: number
            recordDeathsInAMatch: number
            scorePerGame: number
            bestSPM: number
            bestKillChains: number
            recordKillsInAMatch: number
            suicides: number
            wlRatio: number
            currentWinStreak: number
            bestMatchBonusXp: number
            bestMatchXp: number
            bestSguardWeaponLevel: number
            bestKD: number
            kills: number
            bestKillsAsInfected: number
            bestReturns: number
            bestStabs: number
            bestKillsAsSurvivor: number
            timePlayedTotal: number
            bestDestructions: number
            headshots: number
            bestRescues: number
            assists: number
            ties: number
            recordKillStreak: number
            bestPlants: number
            misses: number
            bestDamage: number
            bestSetbacks: number
            bestTouchdowns: number
            scorePerMinute: number
            bestDeaths: number
            bestMedalXp: number
            bestDefends: number
            bestSquardRevives: number
            bestKills: number
            bestDefuses: number
            bestCaptures: number
            hits: number
            bestKillStreak: number
            bestDenied: number
        }
        export interface Equipment {
            hits: number
            kills: number
            shots: number
            deaths: number
            headShots: number
        }
        export interface Weapon extends Equipment {
            kdRatio: number
            accuracy: number
        }
    }
    export interface Modes {
        br: Properties<Mode.WZ>
        br_dmz: Properties<Mode.WZ>
        br_all: Properties<Mode.WZ>
        gun: Properties<Mode.MP>
        dom: Properties<Mode.MP>
        war: Properties<Mode.MP>
        hq: Properties<Mode.MP>
        koth: Properties<Mode.MP>
        conf: Properties<Mode.MP>
        arena: Properties<Mode.MP>
        sd: Properties<Mode.MP>
        cyber: Properties<Mode.MP>
        grnd: Properties<Mode.MP>
        arm: Properties<Mode.MP>
        infect: Properties<Mode.MP>
        hc_sd: Properties<Mode.MP>
        hc_hq: Properties<Mode.MP>
        hc_war: Properties<Mode.MP>
        hc_dom: Properties<Mode.MP>
        hc_conf: Properties<Mode.MP>
        hc_cyber: Properties<Mode.MP>
    }
    export namespace Mode {
        export interface MP {
            kills: number
            score: number
            timePlayed: number
            kdRatio: number
            setBacks: number
            scorePerMinute: number
            stabs: number
            deaths: number
        }
        export interface WZ {
            wins: number
            kills: number
            kdRatio: number
            downs: number
            topTwentyFive: number
            topTen: number
            contracts: number
            revives: number
            topFive: number
            score: number
            timePlayed: number
            gamesPlayed: number
            tokens: number
            scorePerMinute: number
            cash: number
            deaths: number
        }
    }
    export interface ScorestreakData {
        lethalScorestreakData: {
            precision_airstrike: Properties<ScorestreakData.Scorestreak>
            cruise_predator: Properties<ScorestreakData.Scorestreak>
            manual_turret: Properties<ScorestreakData.Scorestreak>
            white_phosphorus: Properties<ScorestreakData.Scorestreak>
            hover_jet: Properties<ScorestreakData.Scorestreak>
            chopper_gunner: Properties<ScorestreakData.Scorestreak>
            gunship: Properties<ScorestreakData.Scorestreak>
            sentry_gun: Properties<ScorestreakData.Scorestreak>
            toma_strike: Properties<ScorestreakData.Scorestreak>
            pac_sentry: Properties<ScorestreakData.Scorestreak>
            chopper_support: Properties<ScorestreakData.Scorestreak>
            bradley: Properties<ScorestreakData.Scorestreak>
            juggernaut: Properties<ScorestreakData.Scorestreak>
            nuke: Properties<ScorestreakData.Scorestreak>
        }
        supportScorestreakData: {
            uav: Properties<ScorestreakData.Scorestreak>
            airdrop: Properties<ScorestreakData.Scorestreak>
            radar_drone_overwatch: Properties<ScorestreakData.Scorestreak>
            scrambler_drone_guard: Properties<ScorestreakData.Scorestreak>
            airdrop_multiple: Properties<ScorestreakData.Scorestreak>
            directional_uav: Properties<ScorestreakData.Scorestreak>
        }
    }
    export namespace ScorestreakData {
        export interface Scorestreak {
            uses: number
            awardedCount: number
            extraStat1: number
        }
    }
    export interface AccoladeData {
        classChanges: number
        highestAvgAltitude: number
        killsFromBehind: number
        lmgDeaths: number
        riotShieldDamageAbsorbed: number
        flashbangHits: number
        meleeKills: number
        tagsLargestBank: number
        shotgunKills: number
        sniperDeaths: number
        timeProne: number
        killstreakWhitePhosphorousKillsAssists: number
        shortestLife: number
        deathsFromBehind: number
        higherRankedKills: number
        mostAssists: number
        leastKills: number
        tagsDenied: number
        killstreakWheelsonKills: number
        sniperHeadshots: number
        killstreakJuggernautKills: number
        smokesUsed: number
        avengerKills: number
        decoyHits: number
        killstreakCarePackageUsed: number
        molotovKills: number
        gasHits: number
        comebackKills: number
        lmgHeadshots: number
        smgDeaths: number
        carrierKills: number
        deployableCoverUsed: number
        thermiteKills: number
        arKills: number
        c4Kills: number
        suicides: number
        clutch: number
        survivorKills: number
        killstreakGunshipKills: number
        timeSpentAsPassenger: number
        returns: number
        smgHeadshots: number
        launcherDeaths: number
        oneShotOneKills: number
        ammoBoxUsed: number
        spawnSelectSquad: number
        weaponPickups: number
        pointBlankKills: number
        tagsCaptured: number
        killstreakGroundKills: number
        distanceTraveledInVehicle: number
        longestLife: number
        stunHits: number
        spawnSelectFlag: number
        shotgunHeadshots: number
        bombDefused: number
        snapshotHits: number
        noKillsWithDeath: number
        killstreakAUAVAssists: number
        killstreakPersonalUAVKills: number
        tacticalInsertionSpawns: number
        launcherKills: number
        spawnSelectVehicle: number
        mostKillsLeastDeaths: number
        mostKills: number
        defends: number
        timeSpentAsDriver: number
        bombDetonated: number
        arHeadshots: number
        timeOnPoint: number
        lmgKills: number
        killstreakUAVAssists: number
        carepackagesCaptured: number
        mostKillsLongestStreak: number
        killstreakCruiseMissileKills: number
        longestStreak: number
        destroyedKillstreaks: number
        hipfireKills: number
        stimDamageHealed: number
        skippedKillcams: number
        leastAssists: number
        mostMultikills: number
        highestRankedKills: number
        killstreakAirstrikeKills: number
        distanceTravelled: number
        killstreakKills: number
        semtexKills: number
        penetrationKills: number
        explosionsSurvived: number
        highestMultikill: number
        arDeaths: number
        longshotKills: number
        proximityMineKills: number
        tagsMegaBanked: number
        mostKillsMostHeadshots: number
        firstInfected: number
        killstreakCUAVAssists: number
        throwingKnifeKills: number
        executionKills: number
        lastSurvivor: number
        reconDroneMarks: number
        deadSilenceKills: number
        revengeKills: number
        infectedKills: number
        killEnemyTeam: number
        sniperKills: number
        killstreakCluserStrikeKills: number
        meleeDeaths: number
        timeWatchingKillcams: number
        killstreakTankKills: number
        noKillNoDeath: number
        shotgunDeaths: number
        killstreakChopperGunnerKills: number
        shotsFired: number
        stoppingPowerKills: number
        pistolPeaths: number
        killstreakShieldTurretKills: number
        timeCrouched: number
        noDeathsFromBehind: number
        bombPlanted: number
        setbacks: number
        smgKills: number
        claymoreKills: number
        kills10NoDeaths: number
        pistolHeadshots: number
        killstreakVTOLJetKills: number
        headshots: number
        mostDeaths: number
        adsKills: number
        empDroneHits: number
        defenderKills: number
        launcherHeadshots: number
        timesSelectedAsSquadLeader: number
        killstreakAirKills: number
        assaults: number
        fragKills: number
        killstreakEmergencyAirdropUsed: number
        captures: number
        killstreakChopperSupportKills: number
        spawnSelectBase: number
        noKill10Deaths: number
        leastDeaths: number
        killstreakSentryGunKills: number
        longestTimeSpentOnWeapon: number
        lowerRankedKills: number
        trophySystemHits: number
        clutchRevives: number
        lowestAvgAltitude: number
        pickups: number
        pistolKills: number
        reloads: number
    }
    export interface ItemData {
        lethals: {
            equip_c4: Profile.Properties<Profile.Properties.Equipment>
            equip_frag: Profile.Properties<Profile.Properties.Equipment>
            equip_semtex: Profile.Properties<Profile.Properties.Equipment>
            equip_at_mine: Profile.Properties<Profile.Properties.Equipment>
            equip_molotov: Profile.Properties<Profile.Properties.Equipment>
            equip_claymore: Profile.Properties<Profile.Properties.Equipment>
            equip_thermite: Profile.Properties<Profile.Properties.Equipment>
            equip_throwing_knife: Profile.Properties<Profile.Properties.Equipment>
        }
        tacticals: {
            equip_decoy: Profile.Properties<Profile.Properties.Equipment>
            equip_smoke: Profile.Properties<Profile.Properties.Equipment>
            equip_flash: Profile.Properties<Profile.Properties.Equipment>
            equip_hb_sensor: Profile.Properties<Profile.Properties.Equipment>
            equip_concussion: Profile.Properties<Profile.Properties.Equipment>
            equip_adrenaline: Profile.Properties<Profile.Properties.Equipment>
            equip_gas_grenade: Profile.Properties<Profile.Properties.Equipment>
            equip_snapshot_grenade: Profile.Properties<Profile.Properties.Equipment>
        }
        weapon_smg: {
            iw8_sm_mpapa7: Profile.Properties<Profile.Properties.Weapon>
            iw8_sm_augolf: Profile.Properties<Profile.Properties.Weapon>
            iw8_sm_papa90: Profile.Properties<Profile.Properties.Weapon>
            iw8_sm_charlie9: Profile.Properties<Profile.Properties.Weapon>
            iw8_sm_mpapa5: Profile.Properties<Profile.Properties.Weapon>
            iw8_sm_smgolf45: Profile.Properties<Profile.Properties.Weapon>
            iw8_sm_beta: Profile.Properties<Profile.Properties.Weapon>
            iw8_sm_victor: Profile.Properties<Profile.Properties.Weapon>
            iw8_sm_uzulu: Profile.Properties<Profile.Properties.Weapon>
        }
        weapon_lmg: {
            iw8_lm_kilo121: Profile.Properties<Profile.Properties.Weapon>
            iw8_lm_mkilo3: Profile.Properties<Profile.Properties.Weapon>
            iw8_lm_mgolf34: Profile.Properties<Profile.Properties.Weapon>
            iw8_lm_lima86: Profile.Properties<Profile.Properties.Weapon>
            iw8_lm_pkilo: Profile.Properties<Profile.Properties.Weapon>
            iw8_lm_sierrax: Profile.Properties<Profile.Properties.Weapon>
            iw8_lm_mgolf36: Profile.Properties<Profile.Properties.Weapon>
        }
        weapon_melee: {
            iw8_knife: Profile.Properties<Profile.Properties.Weapon>
            iw8_me_akimboblunt: Profile.Properties<Profile.Properties.Weapon>
            iw8_me_akimboblades: Profile.Properties<Profile.Properties.Weapon>
        }
        weapon_other: {
            iw8_me_riotshield: Profile.Properties<Profile.Properties.Weapon>
        }
        weapon_pistol: {
            iw8_pi_cpapa: Profile.Properties<Profile.Properties.Weapon>
            iw8_pi_mike9: Profile.Properties<Profile.Properties.Weapon>
            iw8_pi_mike1911: Profile.Properties<Profile.Properties.Weapon>
            iw8_pi_golf21: Profile.Properties<Profile.Properties.Weapon>
            iw8_pi_decho: Profile.Properties<Profile.Properties.Weapon>
            iw8_pi_papa320: Profile.Properties<Profile.Properties.Weapon>
        }
        weapon_sniper: {
            iw8_sn_alpha50: Profile.Properties<Profile.Properties.Weapon>
            iw8_sn_hdromeo: Profile.Properties<Profile.Properties.Weapon>
            iw8_sn_delta: Profile.Properties<Profile.Properties.Weapon>
            iw8_sn_xmike109: Profile.Properties<Profile.Properties.Weapon>
        }
        weapon_shotgun: {
            iw8_sh_mike26: Profile.Properties<Profile.Properties.Weapon>
            iw8_sh_charlie725: Profile.Properties<Profile.Properties.Weapon>
            iw8_sh_oscar12: Profile.Properties<Profile.Properties.Weapon>
            iw8_sh_romeo870: Profile.Properties<Profile.Properties.Weapon>
            iw8_sh_dpapa12: Profile.Properties<Profile.Properties.Weapon>
        }
        weapon_launcher: {
            iw8_la_gromeo: Profile.Properties<Profile.Properties.Weapon>
            iw8_la_rpapa7: Profile.Properties<Profile.Properties.Weapon>
            iw8_la_kgolf: Profile.Properties<Profile.Properties.Weapon>
            iw8_la_juliet: Profile.Properties<Profile.Properties.Weapon>
            iw8_la_mike32: Profile.Properties<Profile.Properties.Weapon>
        }
        weapon_marksman: {
            iw8_sn_sbeta: Profile.Properties<Profile.Properties.Weapon>
            iw8_sn_crossbow: Profile.Properties<Profile.Properties.Weapon>
            iw8_sn_kilo98: Profile.Properties<Profile.Properties.Weapon>
            iw8_sn_mike14: Profile.Properties<Profile.Properties.Weapon>
            iw8_sn_sksierra: Profile.Properties<Profile.Properties.Weapon>
        }
        weapon_assault_rifle: {
            iw8_ar_falima: Profile.Properties<Profile.Properties.Weapon>
            iw8_ar_tango21: Profile.Properties<Profile.Properties.Weapon>
            iw8_ar_mike4: Profile.Properties<Profile.Properties.Weapon>
            iw8_ar_anovember94: Profile.Properties<Profile.Properties.Weapon>
            iw8_ar_falpha: Profile.Properties<Profile.Properties.Weapon>
            iw8_ar_mcharlie: Profile.Properties<Profile.Properties.Weapon>
            iw8_ar_akilo47: Profile.Properties<Profile.Properties.Weapon>
            iw8_ar_kilo433: Profile.Properties<Profile.Properties.Weapon>
            iw8_ar_scharlie: Profile.Properties<Profile.Properties.Weapon>
            iw8_ar_asierra12: Profile.Properties<Profile.Properties.Weapon>
            iw8_ar_galima: Profile.Properties<Profile.Properties.Weapon>
            iw8_ar_sierra552: Profile.Properties<Profile.Properties.Weapon>
        }
    }
}
