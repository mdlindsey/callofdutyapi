import * as Schema from '@callofduty/types'

const WeaponsRaw = {
    "arsenal:weapons_equip_gas_grenade:1": "Gas Grenade",
    "arsenal:weapons_equip_snapshot_grenade:1": "Snapshot Grenade",
    "arsenal:weapons_equip_decoy:1": "Decoy Grenade",
    "arsenal:weapons_equip_smoke:1": "Smoke Grenade",
    "arsenal:weapons_equip_concussion:1": "Stun Grenade",
    "arsenal:weapons_equip_hb_sensor:1": "Heartbeat Sensor",
    "arsenal:weapons_equip_flash:1": "Flash Grenade",
    "arsenal:weapons_equip_adrenaline:1": "Stim",
    "arsenal:weapons_equip_frag:1": "Frag Grenade",
    "arsenal:weapons_equip_thermite:1": "Thermite",
    "arsenal:weapons_equip_semtex:1": "Semtex",
    "arsenal:weapons_equip_claymore:1": "Claymore",
    "arsenal:weapons_equip_c4:1": "C4",
    "arsenal:weapons_equip_at_mine:1": "Proximity Mine",
    "arsenal:weapons_equip_throwing_knife:1": "Throwing Knife",
    "arsenal:weapons_equip_molotov:1": "Molotov Cocktail",
    "arsenal:weapons_iw8_knife:1": "Combat Knife",
    "arsenal:weapon_other:1": "Primary Melee",
    "arsenal:weapons_iw8_me_akimboblunt:1": "Kali Sticks",
    "arsenal:weapons_iw8_ar_anovember94:1": "AN-94",
    "arsenal:weapons_iw8_sm_charlie9:1": "ISO",
    "arsenal:weapons_iw8_me_akimboblades:1": "Dual Kodachis",
    "arsenal:weapons_iw8_lm_sierrax:1": "FiNN",
}

export interface WeaponDetails {
    id: Schema.MW.Weapon.Name
    name: string
    image: string
    blueprints: string[]
    season?: number
    unlock?: {
        rank?: number
        battlepass?: number
        challenge?: {
            objective: string // LMG kills while enemy is close to smoke
            requirement: number // 3 required per game
            games: number // 10 games total required for unlock
            consecutive?: boolean // true if games must be consecutive
        }
    }
}
const image = (weaponId:Schema.MW.Weapon.Name) => `https://titles.trackercdn.com/modern-warfare/db/images/icon_cac_weapon_${weaponId.replace('iw8_', '')}.png`
const Weapons:Record<Schema.MW.Weapon.Name, WeaponDetails> = {
    iw8_pi_mike9: {
        id: 'iw8_pi_mike9',
        name: 'Renetti',
        image: image('iw8_pi_mike9'),
        blueprints: [],
    },
    iw8_pi_papa320: {
        id: 'iw8_pi_papa320',
        name: 'M19',
        image: image('iw8_pi_papa320'),
        blueprints: [],
    },
    iw8_pi_golf21: {
        id: 'iw8_pi_golf21',
        name: 'X16',
        image: image('iw8_pi_golf21'),
        blueprints: [],
    },
    iw8_pi_cpapa: {
        id: 'iw8_pi_cpapa',
        name: '.357',
        image: image('iw8_pi_cpapa'),
        blueprints: [],
    },
    iw8_pi_decho: {
        id: 'iw8_pi_decho',
        name: '.50 GS',
        image: image('iw8_pi_decho'),
        blueprints: [],
        unlock: {
            rank: 1
        }
    },
    iw8_pi_mike1911: {
        id: 'iw8_pi_mike1911',
        name: '1911',
        image: image('iw8_pi_mike1911'),
        blueprints: [],
        unlock: {
            rank: 1
        }
    },
    iw8_sm_beta: {
        id: 'iw8_sm_beta',
        name: 'PP19 Bizon',
        image: image('iw8_sm_beta'),
        blueprints: [],
    },
    iw8_sm_papa90: {
        id: 'iw8_sm_papa90',
        name: 'P90',
        image: image('iw8_sm_papa90'),
        blueprints: [],
    },
    iw8_sm_mpapa5: {
        id: 'iw8_sm_mpapa5',
        name: 'MP5',
        image: image('iw8_sm_mpapa5'),
        blueprints: [],
    },
    iw8_sm_mpapa7: {
        id: 'iw8_sm_mpapa7',
        name: 'MP7',
        image: image('iw8_sm_mpapa7'),
        blueprints: [],
    },
    iw8_sm_smgolf45: {
        id: 'iw8_sm_smgolf45',
        name: 'Striker 45',
        image: image('iw8_sm_smgolf45'),
        blueprints: [],
    },
    iw8_sm_uzulu: {
        id: 'iw8_sm_uzulu',
        name: 'Uzi',
        image: image('iw8_sm_uzulu'),
        blueprints: [],
    },
    iw8_sm_victor: {
        id: 'iw8_sm_victor',
        name: 'Fennec',
        image: image('iw8_sm_victor'),
        blueprints: [],
    },
    iw8_sm_augolf: {
        id: 'iw8_sm_augolf',
        name: 'AUG',
        image: image('iw8_sm_augolf'),
        blueprints: [],
        unlock: {
            rank: 1
        }
    },
    iw8_sh_charlie725: {
        id: 'iw8_sh_charlie725',
        name: '725',
        image: image('iw8_sh_charlie725'),
        blueprints: [],
        unlock: {
            rank: 1
        }
    },
    iw8_ar_akilo47: {
        id: 'iw8_ar_akilo47',
        name: 'AK-47',
        image: image('iw8_ar_akilo47'),
        blueprints: [],
        unlock: {
            rank: 1
        }
    },
    iw8_sn_alpha50: {
        id: 'iw8_sn_alpha50',
        name: 'AX-50',
        image: image('iw8_sn_alpha50'),
        blueprints: [],
        unlock: {
            rank: 1
        }
    },
    iw8_lm_mkilo3: {
        id: 'iw8_lm_mkilo3',
        name: 'Bruen Mk9',
        image: image('iw8_lm_mkilo3'),
        blueprints: [],
        unlock: {
            challenge: {
                objective: 'LMG kills while enemy is close to smoke',
                requirement: 3,
                games: 15,
            }
        }
    },
    iw8_ar_galima: {
        id: 'iw8_ar_galima',
        name: 'CR-56 AMAX',
        image: image('iw8_ar_galima'),
        blueprints: [],
        season: 5,
        unlock: {
            battlepass: 31
        }
    },
    iw8_me_soscar: {
        id: 'iw8_me_soscar',
        name: 'Combat Knife',
        image: image('iw8_me_soscar'),
        blueprints: [],
    },
    iw8_sn_crossbow: {
        id: 'iw8_sn_crossbow',
        name: 'Crossbow',
        image: image('iw8_sn_crossbow'),
        blueprints: [],
    },
    iw8_sn_delta: {
        id: 'iw8_sn_delta',
        name: 'Dragunov',
        image: image('iw8_sn_delta'),
        blueprints: [],
    },
    iw8_me_akimboblades: {
        id: 'iw8_me_akimboblades',
        name: 'Dual Kodachis',
        image: image('iw8_me_akimboblades'),
        blueprints: [],
    },
    iw8_sn_mike14: {
        id: 'iw8_sn_mike14',
        name: 'EBR-14',
        image: image('iw8_sn_mike14'),
        blueprints: [],
    },
    iw8_ar_falima: {
        id: 'iw8_ar_falima',
        name: 'FAL',
        image: image('iw8_ar_falima'),
        blueprints: [],
    },
    iw8_ar_scharlie: {
        id: 'iw8_ar_scharlie',
        name: 'FN Scar 17',
        image: image('iw8_ar_scharlie'),
        blueprints: [],
    },
    iw8_ar_falpha: {
        id: 'iw8_ar_falpha',
        name: 'FR 5.56',
        image: image('iw8_ar_falpha'),
        blueprints: [],
    },
    iw8_ar_sierra552: {
        id: 'iw8_ar_sierra552',
        name: 'Grau 5.56',
        image: image('iw8_ar_sierra552'),
        blueprints: [],
    },
    iw8_sn_hdromeo: {
        id: 'iw8_sn_hdromeo',
        name: 'HDR',
        image: image('iw8_sn_hdromeo'),
        blueprints: [],
    },
    iw8_lm_mgolf36: {
        id: 'iw8_lm_mgolf36',
        name: 'Holger-26',
        image: image('iw8_lm_mgolf36'),
        blueprints: [],
    },
    iw8_la_juliet: {
        id: 'iw8_la_juliet',
        name: 'JOKR',
        image: image('iw8_la_juliet'),
        blueprints: [],
    },
    iw8_me_akimboblunt: {
        id: 'iw8_me_akimboblunt',
        name: 'Kali Sticks',
        image: image('iw8_me_akimboblunt'),
        blueprints: [],
    },
    iw8_sn_kilo98: {
        id: 'iw8_sn_kilo98',
        name: 'Kar98k',
        image: image('iw8_sn_kilo98'),
        blueprints: [],
    },
    iw8_ar_kilo433: {
        id: 'iw8_ar_kilo433',
        name: 'Kilo 141',
        image: image('iw8_ar_kilo433'),
        blueprints: [],
    },
    iw8_ar_mcharlie: {
        id: 'iw8_ar_mcharlie',
        name: 'M13',
        image: image('iw8_ar_mcharlie'),
        blueprints: [],
    },
    iw8_ar_mike4: {
        id: 'iw8_ar_mike4',
        name: 'M4A1',
        image: image('iw8_ar_mike4'),
        blueprints: [],
    },
    iw8_lm_kilo121: {
        id: 'iw8_lm_kilo121',
        name: 'M91',
        image: image('iw8_lm_kilo121'),
        blueprints: [],
    },
    iw8_lm_mgolf34: {
        id: 'iw8_lm_mgolf34',
        name: 'MG34',
        image: image('iw8_lm_mgolf34'),
        blueprints: [],
    },
    iw8_sn_sbeta: {
        id: 'iw8_sn_sbeta',
        name: 'MK2 Carbine',
        image: image('iw8_sn_sbeta'),
        blueprints: [],
    },
    iw8_sh_romeo870: {
        id: 'iw8_sh_romeo870',
        name: 'Model 680',
        image: image('iw8_sh_romeo870'),
        blueprints: [],
    },
    iw8_ar_asierra12: {
        id: 'iw8_ar_asierra12',
        name: 'Oden',
        image: image('iw8_ar_asierra12'),
        blueprints: [],
    },
    iw8_sh_oscar12: {
        id: 'iw8_sh_oscar12',
        name: 'Origin 12',
        image: image('iw8_sh_oscar12'),
        blueprints: [],
    },
    iw8_la_gromeo: {
        id: 'iw8_la_gromeo',
        name: 'PILA',
        image: image('iw8_la_gromeo'),
        blueprints: [],
    },
    iw8_lm_pkilo: {
        id: 'iw8_lm_pkilo',
        name: 'PKM',
        image: image('iw8_lm_pkilo'),
        blueprints: [],
    },
    iw8_sh_dpapa12: {
        id: 'iw8_sh_dpapa12',
        name: 'R9-0',
        image: image('iw8_sh_dpapa12'),
        blueprints: [],
    },
    iw8_ar_tango21: {
        id: 'iw8_ar_tango21',
        name: 'RAM-7',
        image: image('iw8_ar_tango21'),
        blueprints: [],
    },
    iw8_la_rpapa7: {
        id: 'iw8_la_rpapa7',
        name: 'RPG-7',
        image: image('iw8_la_rpapa7'),
        blueprints: [],
    },
    iw8_me_riotshield: {
        id: 'iw8_me_riotshield',
        name: 'Riot Shield',
        image: image('iw8_me_riotshield'),
        blueprints: [],
    },
    iw8_sn_xmike109: {
        id: 'iw8_sn_xmike109',
        name: 'Rytec AMR',
        image: image('iw8_sn_xmike109'),
        blueprints: [],
    },
    iw8_lm_lima86: {
        id: 'iw8_lm_lima86',
        name: 'SA87',
        image: image('iw8_lm_lima86'),
        blueprints: [],
    },
    iw8_sn_sksierra: {
        id: 'iw8_sn_sksierra',
        name: 'SKS',
        image: image('iw8_sn_sksierra'),
        blueprints: [],
    },
    iw8_la_kgolf: {
        id: 'iw8_la_kgolf',
        name: 'Strela-P',
        image: image('iw8_la_kgolf'),
        blueprints: [],
    },
    iw8_sh_mike26: {
        id: 'iw8_sh_mike26',
        name: 'VLK Rogue',
        image: image('iw8_sh_mike26'),
        blueprints: [],
    },
}

const Weapon = (weaponId:Schema.MW.Weapon.Name) => Weapons[weaponId]

export { Weapons, Weapon }
