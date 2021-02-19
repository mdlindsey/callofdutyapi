export interface Weapon {
    name: Weapon.Name
    label: string
    imageLoot: string
    imageIcon: string
    variant: string
    attachments: Weapon.Attachment[]
}
export namespace Weapon {
    export interface Attachment {
        name: string
        label: string
        image: string
        category: null
    }
    export type Name = 
        // pistols
        'iw8_pi_cpapa' | 'iw8_pi_decho' | 'iw8_pi_mike1911' | 'iw8_pi_papa320' | 'iw8_pi_mike9' | 'iw8_pi_golf21' |
        // shotguns
        'iw8_sh_charlie725' | 'iw8_sh_romeo870' | 'iw8_sh_oscar12' | 'iw8_sh_dpapa12' | 'iw8_sh_mike26' |
        // submachine guns
        'iw8_sm_augolf' | 'iw8_sm_victor' | 'iw8_sm_mpapa5' | 'iw8_sm_mpapa7' | 'iw8_sm_papa90' | 'iw8_sm_beta' | 'iw8_sm_smgolf45' | 'iw8_sm_uzulu' |
        // assault rifles
        'iw8_ar_akilo47' | 'iw8_ar_galima' | 'iw8_ar_falima' | 'iw8_ar_scharlie' | 'iw8_ar_falpha' | 'iw8_ar_sierra552' | 'iw8_ar_kilo433' | 'iw8_ar_mcharlie' |
        'iw8_ar_mike4' | 'iw8_ar_asierra12' | 'iw8_ar_tango21' |
        // light machineguns
        'iw8_lm_mkilo3' | 'iw8_lm_mgolf36' | 'iw8_lm_kilo121' | 'iw8_lm_mgolf34' | 'iw8_lm_pkilo' | 'iw8_lm_lima86' |
        // sniper/marksman rifles
        'iw8_sn_alpha50' | 'iw8_sn_crossbow' | 'iw8_sn_delta' | 'iw8_sn_mike14' | 'iw8_sn_hdromeo' | 'iw8_sn_kilo98' | 'iw8_sn_sbeta' | 'iw8_sn_xmike109' | 'iw8_sn_sksierra' |
        // launchers
        'iw8_la_juliet' | 'iw8_la_gromeo' | 'iw8_la_rpapa7' | 'iw8_la_kgolf' |
        // melee/misc
        'iw8_me_soscar' | 'iw8_me_akimboblades' | 'iw8_me_akimboblunt' | 'iw8_me_riotshield'
}
