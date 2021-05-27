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
        'br_dmz_plnbld' | 'br_dmz_plndcndy' | 'br_dmz_bldmnyquad' | 'br_dmz_bldmnytrio' | 'br_dmz_plndval1' |
        'br_plnbld' | 'br_plndtrios' | 'br_plndval1' | 'br_plunquad' |
        // night duos/trios and zombies
        'br_brduohwn' | 'br_zxp_zmbroy' | 'br_brhwntrios' |
        // warzone br
        'br_25' | 'br_71' | 'br_74' | 'br_77' | 'br_86' | 'br_87' | 'br_88' | 'br_89' | 'br_104' | 'br_76' |
        'br_brsolo' | 'br_brduos' | 'br_brtrios' | 'br_brquads' | 'br_br_real' | 'br_brthquad' | 'br_brbbduo' |
        'br_brdov_dov2' | 'br_brhwnquad' | 'br_brsolohwn' | 'br_brz_brduos' | 'br_brz_brquads' | 'br_brz_brsolo' |
        'br_brz_brtrios' |
        'brtdm_rmbl' | 'br_mini_miniroyale' | 'br_jugg_brtriojugr' | 'br_jugg_brquadjugr' | 'br_brbbsolo' |
        'br_brtriostim_name2' | 'br_brduostim_name2' | 'br_brbbquad' | 'br_truckwar_trwarsquads' | 'br_kingslayer_kingsltrios' |
        'brtdm_wzrumval2' | 'br_exfiltrios' | 'br_jugg_jugpmpkn' | 'br_kingslayer_rebirth_king_slayer' |
        'br_mini_rebirth_mini_royale_duos' | 'br_mini_rebirth_mini_royale_quads' | 'br_mini_rebirth_mini_royale_solo' | 'br_mini_rebirth_mini_royale_trios' |
        'br_miniroyale' | 'br_rbrthquad' | 'br_rbrthduos' | 'br_rbrthtrios' | 'br_rebirth_mini_royale_duos' | 'br_rebirth_mini_royale_quads' | 'br_rebirth_rbrthduos' |
        'br_rebirth_rbrthex' | 'br_rebirth_rbrthquad' | 'br_rebirth_rbrthtrios' | 'br_rebirth_resurgence_trios' | 'br_reveal_2_dov2' |
        'br_reveal_dov' | 'brtdm_wzrumval2' | 'br_zmbroy'
}
