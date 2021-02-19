export type Mode = Mode.MP | Mode.WZ
export namespace Mode {
    export type MP = 
        // multiplayer
        'dm' | 'tdef' | 'war' | 'dom' | 'conf' | 'koth' | 'hq' | 'dd' | 'sd' | 'cyber' | 'grind' | 'grnd' | 'ctf' |
        // hc_* appears in profile endpoint and *_hc appears in matches so mapping both
        'hc_dm' | 'dm_hc' | 'hc_dd' | 'dd_hc' | 'hc_hq' | 'hq_hc' | 'hc_sd' | 'sd_hc' | 'hc_dom' | 'dom_hc' |
        'hc_war' | 'war_hc' | 'hc_conf' | 'conf_hc' | 'hc_koth' | 'koth_hc' | 'hc_cyber' | 'cyber_hc' |
        // special modes
        'arm' | 'gun' | 'arena' | 'infect'
    export type WZ =
        // warzone plunder
        'br_dmz_38' | 'br_dmz_76' | 'br_dmz_85' | 'br_dmz_104' | 'br_dmz_plndtrios' | 'br_dmz_plunquad' |
        'br_dmz_plnbld' | 'br_dmz_plndcndy' |
        // night duos/trios and zombies
        'br_brduohwn' | 'br_zxp_zmbroy' | 'br_brhwntrios' |
        // warzone br
        'br_25' | 'br_71' | 'br_74' | 'br_77' | 'br_86' | 'br_87' | 'br_88' | 'br_89' | 
        'br_brsolo' | 'br_brduos' | 'br_brtrios' | 'br_brquads' | 'br_br_real' | 'br_brthquad' |
        'brtdm_rmbl' | 'br_mini_miniroyale' | 'br_jugg_brtriojugr' | 'br_jugg_brquadjugr' | 'br_brbbsolo' |
        'br_brtriostim_name2' | 'br_brduostim_name2' | 'br_brbbquad' | 'br_truckwar_trwarsquads' | 'br_kingslayer_kingsltrios'
}
