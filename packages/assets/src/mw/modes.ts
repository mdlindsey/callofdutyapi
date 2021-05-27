import * as Schema from '@callofduty/types'

export interface ModeDetails {
    id: Schema.MW.Mode
    name: string
    games: Schema.Game[]
    teamSize: number
    lobbySize: number
    type: Schema.GameType
    category?: 'br' | 'br_mini' | 'br_tdm' | 'plunder'
    gulag?: boolean
    realism?: boolean
    hardcore?: boolean
    respawns?: boolean
    buybacks?: boolean
}

const Mode = (modeId:Schema.MW.Mode):ModeDetails => Modes[modeId]
const Modes = {} as Record<Schema.MW.Mode, ModeDetails>

/*
br_104
br_76
br_brbbduo
br_brdov_dov2
br_brhwnquad
br_brsolohwn
br_brz_brduos
br_brz_brquads
br_brz_brsolo
br_brz_brtrios
br_dmz_bldmnyquad
br_dmz_bldmnytrio
br_dmz_plndval1
br_exfiltrios
br_jugg_jugpmpkn
br_kingslayer_rebirth_king_slayer
br_mini_rebirth_mini_royale_duos
br_mini_rebirth_mini_royale_quads
br_mini_rebirth_mini_royale_solo
br_mini_rebirth_mini_royale_trios
br_miniroyale

br_plnbld
br_plndtrios
br_plndval1
br_plunquad

br_rbrthduos
br_rbrthquad
br_rbrthtrios
br_rebirth_mini_royale_duos
br_rebirth_mini_royale_quads
br_rebirth_rbrthduos
br_rebirth_rbrthex
br_rebirth_rbrthquad
br_rebirth_rbrthtrios
br_rebirth_resurgence_trios

br_reveal_2_dov2
br_reveal_dov

*/

// BR Solos
Modes.br_87 = {
    id: 'br_87',
    games: ['mw'],
    name: 'BR Solos',
    type: 'wz',
    category: 'br',
    lobbySize: 150,
    teamSize: 1,
    gulag: true,
}
Modes.br_71 = { ...Modes.br_87, id: 'br_71' }
Modes.br_brsolo = { ...Modes.br_87, id: 'br_brsolo' }
Modes.br_brbbsolo = { ...Modes.br_87, id: 'br_brbbsolo', name: 'BR Buyback Solos' } // auto respawn if >$4500

// BR Duos
Modes.br_88 = {
    id: 'br_88',
    games: ['mw'],
    name: 'BR Duos',
    type: 'wz',
    category: 'br',
    lobbySize: 150,
    teamSize: 2,
    gulag: true,
    buybacks: true,
}
Modes.br_brduos = { ...Modes.br_88, id: 'br_brduos' }
Modes.br_brduostim_name2 = { ...Modes.br_88, id: 'br_brduostim_name2', name: 'BR Stimulus Duos' }  // auto respawn if >$4500
Modes.br_brduohwn = { ...Modes.br_88, id: 'br_brduohwn', name: 'BR Duos (Night)' }  // night map

// BR Trios
Modes.br_74 = {
    id: 'br_74',
    games: ['mw'],
    name: 'BR Trios',
    type: 'wz',
    category: 'br',
    lobbySize: 150,
    teamSize: 3,
    gulag: true,
    buybacks: true,
}
Modes.br_77 = { ...Modes.br_74, id: 'br_77' }
Modes.br_25 = { ...Modes.br_74, id: 'br_25' }
Modes.br_brtrios = { ...Modes.br_74, id: 'br_brtrios' }
Modes.br_jugg_brtriojugr = { ...Modes.br_74, id: 'br_jugg_brtriojugr', name: 'BR Juggernaut Trios' } // juggernaut drops in trios
Modes.br_brtriostim_name2 = { ...Modes.br_74, id: 'br_brtriostim_name2', name: 'BR Stimulus Trios' } // auto respawn if >$4500
Modes.br_zxp_zmbroy = { ...Modes.br_74, id: 'br_zxp_zmbroy', name: 'Zombie Royale', respawns: true, gulag: false } // respawn as zombie if die as human
Modes.br_zmbroy = { ...Modes.br_zxp_zmbroy, id: 'br_zmbroy' }
Modes.br_brhwntrios = { ...Modes.br_74, id: 'br_brhwntrios', name: 'BR Trios (Night)' }  // night map
Modes.br_kingslayer_kingsltrios = { ...Modes.br_74, id: 'br_kingslayer_kingsltrios', name: 'King Slayer Trios' }  // kingslayer

// BR Quads
Modes.br_89 = {
    id: 'br_89',
    games: ['mw'],
    name: 'BR Quads',
    type: 'wz',
    category: 'br',
    lobbySize: 152,
    teamSize: 4,
    gulag: true,
    buybacks: true,
}
Modes.br_brquads = { ...Modes.br_89, id: 'br_brquads' }
Modes.br_brthquad = { ...Modes.br_89, id: 'br_brthquad', lobbySize: 200, name: 'BR Quads 200' } // 200 person quads
Modes.br_86 = { ...Modes.br_89, id: 'br_86', realism: true, buybacks: false, name: 'BR Realism Quads' } // Realism quads
Modes.br_br_real = { ...Modes.br_86, id: 'br_br_real' }
Modes.br_jugg_brquadjugr = { ...Modes.br_89, id: 'br_jugg_brquadjugr', name: 'BR Juggernaut Quads' } // juggernaut drops in quads
Modes.br_brbbquad = { ...Modes.br_89, id: 'br_brbbquad', name: 'BR Buyback Quads' } // auto respawn if >$4500
Modes.br_truckwar_trwarsquads = { ...Modes.br_89, id: 'br_truckwar_trwarsquads', name: 'Armored Royale Quads', respawns: true, gulag: false } // armored truck respawn points

// Resurgence / rebirth
// Modes.br_rebirth_resurgence_trios = {  }

// BR Mini
Modes.br_mini_miniroyale = { ...Modes.br_74, lobbySize: 75, respawns: true, name: 'Mini Royale', id: 'br_mini_miniroyale' } // mini trios

// BR TDM
Modes.brtdm_rmbl = { ...Modes.br_89, lobbySize: 150, teamSize: 6, respawns: true, name: 'Warzone Rumble', id: 'brtdm_rmbl' }
Modes.brtdm_wzrumval2 = { ...Modes.brtdm_rmbl, id: 'brtdm_wzrumval2' }

// Plunder
Modes.br_dmz_76 = {
    id: 'br_dmz_38',
    games: ['mw'],
    name: 'Plunder',
    type: 'wz',
    category: 'plunder',
    lobbySize: 152,
    teamSize: 4,
    respawns: true,
}
Modes.br_dmz_85 = { ...Modes.br_dmz_76, id: 'br_dmz_85' }
Modes.br_dmz_104 = { ...Modes.br_dmz_76, id: 'br_dmz_104' }
Modes.br_dmz_38 = { ...Modes.br_dmz_76, id: 'br_dmz_38', lobbySize: 150, teamSize: 3, name: 'Plunder Trios' }
Modes.br_dmz_plndtrios = { ...Modes.br_dmz_38, id: 'br_dmz_plndtrios' }
Modes.br_dmz_plunquad = { ...Modes.br_dmz_76, id: 'br_dmz_plunquad', lobbySize: 152, teamSize: 4, name: 'Plunder Quads' }
Modes.br_dmz_plnbld = { ...Modes.br_dmz_76, id: 'br_dmz_plnbld', lobbySize: 152, teamSize: 4, name: 'Plunder: Blood Money' }
Modes.br_dmz_plndcndy = { ...Modes.br_dmz_76, id: 'br_dmz_plndcndy', lobbySize: 152, teamSize: 4, name: 'Plunder: Candy Collector' }

// Multiplayer
Modes.grind = {
    id: 'grind',
    games: ['mw'],
    name: 'Grind',
    type: 'mp',
    lobbySize: 12,
    teamSize: 1,
    respawns: true,
}
Modes.grnd = { ...Modes.grind, id: 'grnd' }
Modes.dm = {
    id: 'dm',
    games: ['mw'],
    name: 'Free-for-all',
    type: 'mp',
    lobbySize: 8,
    teamSize: 1,
    respawns: true,
}
Modes.tdef = {
    id: 'tdef',
    games: ['mw'],
    name: 'Team Defender',
    type: 'mp',
    lobbySize: 12,
    teamSize: 6,
    respawns: true,
}
Modes.war = {
    id: 'war',
    games: ['mw'],
    name: 'Team Deathmatch',
    type: 'mp',
    lobbySize: 12,
    teamSize: 6,
    respawns: true,
}
Modes.dom = {
    id: 'dom',
    games: ['mw'],
    name: 'Domination',
    type: 'mp',
    lobbySize: 12,
    teamSize: 6,
    respawns: true,
}
Modes.conf = {
    id: 'conf',
    games: ['mw'],
    name: 'Kill Confirmed',
    type: 'mp',
    lobbySize: 12,
    teamSize: 6,
    respawns: true,
}
Modes.koth = {
    id: 'koth',
    games: ['mw'],
    name: 'Hardpoint',
    type: 'mp',
    lobbySize: 12,
    teamSize: 6,
    respawns: true,
}
Modes.ctf = {
    id: 'ctf',
    games: ['mw'],
    name: 'Capture the Flag',
    type: 'mp',
    lobbySize: 12,
    teamSize: 6,
    respawns: true,
}
Modes.hq = {
    id: 'hq',
    games: ['mw'],
    name: 'Headquarters',
    type: 'mp',
    lobbySize: 12,
    teamSize: 6,
    respawns: true,
}
Modes.dd = {
    id: 'dd',
    games: ['mw'],
    name: 'Demolition',
    type: 'mp',
    lobbySize: 12,
    teamSize: 6,
    respawns: true,
}
Modes.sd = {
    id: 'sd',
    games: ['mw'],
    name: 'Search + Destroy',
    type: 'mp',
    lobbySize: 12,
    teamSize: 6,
    respawns: false,
}
Modes.cyber = {
    id: 'cyber',
    games: ['mw'],
    name: 'Cyber Attack',
    type: 'mp',
    lobbySize: 12,
    teamSize: 6,
    respawns: false,
}
Modes.arm = {
    id: 'arm',
    games: ['mw'],
    name: 'Ground War',
    type: 'mp',
    lobbySize: 64,
    teamSize: 4,
    respawns: true,
}
Modes.gun = {
    id: 'gun',
    games: ['mw'],
    name: 'Gun Game',
    type: 'mp',
    lobbySize: 12,
    teamSize: 1,
    respawns: true,
}
Modes.arena = {
    id: 'arena',
    games: ['mw'],
    name: 'Gunfight',
    type: 'mp',
    lobbySize: 4,
    teamSize: 2,
    respawns: false,
}
Modes.infect = {
    id: 'infect',
    games: ['mw'],
    name: 'Infected',
    type: 'mp',
    lobbySize: 32,
    teamSize: 4,
    respawns: false,
}
Modes.hc_dm = { ...Modes.dm, id: 'hc_dm', hardcore: true, name: 'Hardcore Free-for-all' }
Modes.dm_hc = { ...Modes.hc_dm, id: 'dm_hc' }
Modes.hc_dd = { ...Modes.dd, id: 'hc_dd', hardcore: true, name: 'Hardcore Demolition' }
Modes.dd_hc = { ...Modes.hc_dd, id: 'dd_hc' }
Modes.hc_hq = { ...Modes.hq, id: 'hc_hq', hardcore: true, name: 'Hardcore Headquarters' }
Modes.hq_hc = { ...Modes.hc_hq, id: 'hq_hc' }
Modes.hc_sd = { ...Modes.sd, id: 'hc_sd', hardcore: true, name: 'Hardcore Search + Destroy' }
Modes.sd_hc = { ...Modes.hc_sd, id: 'sd_hc' }
Modes.hc_dom = { ...Modes.dom, id: 'hc_dom', hardcore: true, name: 'Hardcore Domination' }
Modes.dom_hc = { ...Modes.hc_dom, id: 'dom_hc' }
Modes.hc_war = { ...Modes.war, id: 'hc_war', hardcore: true, name: 'Hardcore Team Deathmatch' }
Modes.war_hc = { ...Modes.hc_war, id: 'war_hc' }
Modes.hc_conf = { ...Modes.conf, id: 'hc_conf', hardcore: true, name: 'Hardcore Kill Confirmed' }
Modes.conf_hc = { ...Modes.hc_conf, id: 'war_hc' }
Modes.hc_koth = { ...Modes.koth, id: 'hc_koth', hardcore: true, name: 'Hardcore Hardpoint' }
Modes.koth_hc = { ...Modes.hc_koth, id: 'koth_hc' }
Modes.hc_cyber = { ...Modes.cyber, id: 'hc_cyber', hardcore: true, name: 'Hardcore Cyber Attack' }
Modes.cyber_hc = { ...Modes.hc_cyber, id: 'cyber_hc' }

export { Mode, Modes }
