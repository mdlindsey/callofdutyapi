import * as Schema from '@callofduty/types'

const minimap = (mapId:Schema.MW.Map) => `https://www.callofduty.com/cdn/app/maps/mw/compass_map_${mapId}.jpg`
const thumbnail = (mapId:Schema.MW.Map) => `https://www.callofduty.com/cdn/app/base-maps/mw/${mapId}.jpg`

export interface MapDetails {
    id: Schema.MW.Map
    name: string
    type: Schema.GameType
    category?: 'groundwar' | 'cage'
    images: {
        minimap?: string // only available for MP maps
        thumbnail: string
    }
}
const Map = (id:Schema.MW.Map):MapDetails => Maps[id]
const Maps:Record<Schema.MW.Map, MapDetails> = {
    mp_hackney_am: {
        id: 'mp_hackney_am',
        name: 'Hackney Yard',
        type: 'mp',
        images: {
            minimap: minimap('mp_hackney_am'),
            thumbnail: thumbnail('mp_hackney_am'),
        }
    },
    mp_hackney_yard: {
        id: 'mp_hackney_yard',
        name: 'Hackney Yard (Night)',
        type: 'mp',
        images: {
            minimap: minimap('mp_hackney_yard'),
            thumbnail: thumbnail('mp_hackney_yard'),
        }
    },
    mp_m_train: {
        id: 'mp_m_train',
        name: 'Station',
        type: 'mp',
        images: {
            minimap: minimap('mp_m_train'),
            thumbnail: thumbnail('mp_m_train'),
        }
    },
    mp_malyshev: {
        id: 'mp_malyshev',
        name: 'Mialstor Tank Factory',
        type: 'mp',
        images: {
            minimap: minimap('mp_malyshev'),
            thumbnail: thumbnail('mp_malyshev'),
        }
    },
    mp_aniyah: {
        id: 'mp_aniyah',
        name: 'Aniyah Palace',
        type: 'mp',
        images: {
            minimap: minimap('mp_aniyah'),
            thumbnail: thumbnail('mp_aniyah'),
        }
    },
    mp_broadcast2: {
        id: 'mp_broadcast2',
        name: 'Broadcast',
        type: 'mp',
        images: {
            minimap: minimap('mp_broadcast2'),
            thumbnail: thumbnail('mp_broadcast2'),
        }
    },
    mp_euphrates: {
        id: 'mp_euphrates',
        name: 'Euphrates Bridge',
        type: 'mp',
        images: {
            minimap: minimap('mp_euphrates'),
            thumbnail: thumbnail('mp_euphrates'),
        }
    },
    mp_raid: {
        id: 'mp_raid',
        name: 'Grazna Raid',
        type: 'mp',
        images: {
            minimap: minimap('mp_raid'),
            thumbnail: thumbnail('mp_raid'),
        }
    },
    mp_m_pine: {
        id: 'mp_m_pine',
        name: 'Pine',
        type: 'mp',
        images: {
            minimap: minimap('mp_m_pine'),
            thumbnail: thumbnail('mp_m_pine'),
        }
    },
    mp_m_stack: {
        id: 'mp_m_stack',
        name: 'Stack',
        type: 'mp',
        images: {
            minimap: minimap('mp_m_stack'),
            thumbnail: thumbnail('mp_m_stack'),
        }
    },
    mp_deadzone: {
        id: 'mp_deadzone',
        name: 'Arklov Peak',
        type: 'mp',
        images: {
            minimap: minimap('mp_deadzone'),
            thumbnail: thumbnail('mp_deadzone'),
        }
    },
    mp_quarry2: {
        id: 'mp_quarry2',
        name: 'Karst River Quarry',
        type: 'mp',
        images: {
            minimap: minimap('mp_quarry2'),
            thumbnail: thumbnail('mp_quarry2'),
        }
    },
    mp_m_overunder: {
        id: 'mp_m_overunder',
        name: 'Docks',
        type: 'mp',
        images: {
            minimap: minimap('mp_m_overunder'),
            thumbnail: thumbnail('mp_m_overunder'),
        }
    },
    mp_cave_am: {
        id: 'mp_cave_am',
        name: 'Azhir Cave',
        type: 'mp',
        images: {
            minimap: minimap('mp_cave_am'),
            thumbnail: thumbnail('mp_cave_am'),
        }
    },
    mp_cave: {
        id: 'mp_cave',
        name: 'Azhir Cave (Night)',
        type: 'mp',
        images: {
            minimap: minimap('mp_cave'),
            thumbnail: thumbnail('mp_cave'),
        }
    },
    mp_runner: {
        id: 'mp_runner',
        name: 'Gun Runner',
        type: 'mp',
        images: {
            minimap: minimap('mp_runner'),
            thumbnail: thumbnail('mp_runner'),
        }
    },
    mp_runner_pm: {
        id: 'mp_runner_pm',
        name: 'Gun Runner (Night)',
        type: 'mp',
        images: {
            minimap: minimap('mp_runner_pm'),
            thumbnail: thumbnail('mp_runner_pm'),
        }
    },
    mp_piccadilly: {
        id: 'mp_piccadilly',
        name: 'Piccadilly',
        type: 'mp',
        images: {
            minimap: minimap('mp_piccadilly'),
            thumbnail: thumbnail('mp_piccadilly'),
        }
    },
    mp_spear: {
        id: 'mp_spear',
        name: 'Rammaza',
        type: 'mp',
        images: {
            minimap: minimap('mp_spear'),
            thumbnail: thumbnail('mp_spear'),
        }
    },
    mp_spear_pm: {
        id: 'mp_spear_pm',
        name: 'Rammaza (Night)',
        type: 'mp',
        images: {
            minimap: minimap('mp_spear_pm'),
            thumbnail: thumbnail('mp_spear_pm'),
        }
    },
    mp_petrograd: {
        id: 'mp_petrograd',
        name: 'St. Petrograd',
        type: 'mp',
        images: {
            minimap: minimap('mp_petrograd'),
            thumbnail: thumbnail('mp_petrograd'),
        }
    },
    mp_m_hill: {
        id: 'mp_m_hill',
        name: 'Hill',
        type: 'mp',
        images: {
            minimap: minimap('mp_m_hill'),
            thumbnail: thumbnail('mp_m_hill'),
        }
    },
    mp_m_king: {
        id: 'mp_m_king',
        name: 'King',
        type: 'mp',
        images: {
            minimap: minimap('mp_m_king'),
            thumbnail: thumbnail('mp_m_king'),
        }
    },
    mp_m_speedball: {
        id: 'mp_m_speedball',
        name: 'Speedball',
        type: 'mp',
        images: {
            minimap: minimap('mp_m_speedball'),
            thumbnail: thumbnail('mp_m_speedball'),
        }
    },
    mp_m_showers: {
        id: 'mp_m_showers',
        name: 'Gulag Showers',
        type: 'mp',
        category: 'cage',
        images: {
            minimap: minimap('mp_m_showers'),
            thumbnail: thumbnail('mp_m_showers'),
        }
    },
    mp_downtown_gw: {
        id: 'mp_downtown_gw',
        name: 'Tarvosk District',
        type: 'mp',
        category: 'groundwar',
        images: {
            minimap: minimap('mp_downtown_gw'),
            thumbnail: thumbnail('mp_downtown_gw'),
        }
    },
    mp_m_speed: {
        id: 'mp_m_speed',
        name: 'Shoot House',
        type: 'mp',
        images: {
            minimap: minimap('mp_m_speed'),
            thumbnail: thumbnail('mp_m_speed'),
        }
    },
    mp_farms2_gw: {
        id: 'mp_farms2_gw',
        name: 'Krovnik Farmland',
        type: 'mp',
        category: 'groundwar',
        images: {
            minimap: minimap('mp_farms2_gw'),
            thumbnail: thumbnail('mp_farms2_gw'),
        }
    },
    mp_port2_gw: {
        id: 'mp_port2_gw',
        name: 'Port',
        type: 'mp',
        category: 'groundwar',
        images: {
            minimap: minimap('mp_port2_gw'),
            thumbnail: thumbnail('mp_port2_gw'),
        }
    },
    mp_crash2: {
        id: 'mp_crash2',
        name: 'Crash',
        type: 'mp',
        images: {
            minimap: minimap('mp_crash2'),
            thumbnail: thumbnail('mp_crash2'),
        }
    },
    mp_vacant: {
        id: 'mp_vacant',
        name: 'Vacant',
        type: 'mp',
        images: {
            minimap: minimap('mp_vacant'),
            thumbnail: thumbnail('mp_vacant'),
        }
    },
    mp_shipment: {
        id: 'mp_shipment',
        name: 'Shipment',
        type: 'mp',
        images: {
            minimap: minimap('mp_shipment'),
            thumbnail: thumbnail('mp_shipment'),
        }
    },
    mp_m_cargo: {
        id: 'mp_m_cargo',
        name: 'Cargo',
        type: 'mp',
        images: {
            minimap: minimap('mp_m_cargo'),
            thumbnail: thumbnail('mp_m_cargo'),
        }
    },
    mp_m_cage: {
        id: 'mp_m_cage',
        name: 'Atrium',
        type: 'mp',
        images: {
            minimap: minimap('mp_m_cage'),
            thumbnail: thumbnail('mp_m_cage'),
        }
    },
    mp_m_overwinter: {
        id: 'mp_m_overwinter',
        name: 'Docks', // two docks? + overunder
        type: 'mp',
        images: {
            minimap: minimap('mp_m_overwinter'),
            thumbnail: thumbnail('mp_m_overwinter'),
        }
    },
    mp_m_stadium: {
        id: 'mp_m_stadium',
        name: 'Verdansk Stadium',
        type: 'mp',
        images: {
            minimap: minimap('mp_m_stadium'),
            thumbnail: thumbnail('mp_m_stadium'),
        }
    },
    mp_emporium: {
        id: 'mp_emporium',
        name: 'Atlas Superstore',
        type: 'mp',
        images: {
            minimap: minimap('mp_emporium'),
            thumbnail: thumbnail('mp_emporium'),
        }
    },
    mp_rust: {
        id: 'mp_rust',
        name: 'Rust',
        type: 'mp',
        images: {
            minimap: minimap('mp_rust'),
            thumbnail: thumbnail('mp_rust'),
        }
    },
    mp_boneyard_gw: {
        id: 'mp_boneyard_gw',
        name: 'Zhokov Boneyard',
        type: 'mp',
        images: {
            minimap: minimap('mp_boneyard_gw'),
            thumbnail: thumbnail('mp_boneyard_gw'),
        }
    },
    mp_m_fork: {
        id: 'mp_m_fork',
        name: 'Bazaar',
        type: 'mp',
        images: {
            minimap: minimap('mp_m_fork'),
            thumbnail: thumbnail('mp_m_fork'),
        }
    },
    mp_donetsk: {
        id: 'mp_donetsk',
        name: 'Verdansk',
        type: 'wz',
        images: {
            // minimap: minimap('mp_donetsk'),
            thumbnail: thumbnail('mp_donetsk'),
        }
    },
    mp_donetsk2: {
        id: 'mp_donetsk2',
        name: 'Verdansk',
        type: 'wz',
        images: {
            // minimap: minimap('mp_donetsk2'),
            thumbnail: thumbnail('mp_donetsk2'),
        }
    },
    mp_kstenod: {
        id: 'mp_kstenod',
        name: 'Verdansk',
        type: 'wz',
        images: {
            // minimap: minimap('mp_don3'),
            thumbnail: thumbnail('mp_don3'),
        }
    },
    mp_don3: {
        id: 'mp_don3',
        name: 'Verdansk',
        type: 'wz',
        images: {
            // minimap: minimap('mp_don3'),
            thumbnail: thumbnail('mp_don3'),
        }
    },
    mp_hideout: {
        id: 'mp_hideout',
        name: 'Khandor Hideout',
        type: 'mp',
        images: {
            minimap: minimap('mp_hideout'),
            thumbnail: thumbnail('mp_hideout'),
        }
    },
    mp_aniyah_tac: {
        id: 'mp_aniyah_tac',
        name: 'Aniyah Incursion',
        type: 'mp',
        images: {
            minimap: minimap('mp_aniyah_tac'),
            thumbnail: thumbnail('mp_aniyah_tac'),
        }
    },
    mp_backlot2: {
        id: 'mp_backlot2',
        name: 'Talsik Backlot',
        type: 'mp',
        images: {
            minimap: minimap('mp_backlot2'),
            thumbnail: thumbnail('mp_backlot2'),
        }
    },
    mp_village2: {
        id: 'mp_village2',
        name: 'Hovec Sawmill',
        type: 'mp',
        images: {
            minimap: minimap('mp_village2'),
            thumbnail: thumbnail('mp_village2'),
        }
    },
    mp_hardhat: {
        id: 'mp_hardhat',
        name: 'Hardhat',
        type: 'mp',
        images: {
            minimap: minimap('mp_hardhat'),
            thumbnail: thumbnail('mp_hardhat'),
        }
    },
    mp_m_wallco2: {
        id: 'mp_m_wallco2',
        name: 'Aisle 9',
        type: 'mp',
        images: {
            minimap: minimap('mp_m_wallco2'),
            thumbnail: thumbnail('mp_m_wallco2'),
        }
    },
    mp_scrapyard: {
        id: 'mp_scrapyard',
        name: 'Zhokov Scrapyard',
        type: 'mp',
        images: {
            minimap: minimap('mp_scrapyard'),
            thumbnail: thumbnail('mp_scrapyard'),
        }
    },
    mp_m_trench: {
        id: 'mp_m_trench',
        name: 'Trench',
        type: 'mp',
        category: 'cage',
        images: {
            minimap: minimap('mp_m_trench'),
            thumbnail: thumbnail('mp_m_trench'),
        }
    },
    mp_promenade_gw: {
        id: 'mp_promenade_gw',
        name: 'Barakett Promenade',
        type: 'mp',
        category: 'groundwar',
        images: {
            minimap: minimap('mp_promenade_gw'),
            thumbnail: thumbnail('mp_promenade_gw'),
        }
    },
    mp_garden: {
        id: 'mp_garden',
        name: 'Cheshire Park',
        type: 'mp',
        images: {
            minimap: minimap('mp_garden'),
            thumbnail: thumbnail('mp_garden'),
        }
    },
    mp_oilrig: {
        id: 'mp_oilrig',
        name: 'Petrov Oil Rig',
        type: 'mp',
        images: {
            minimap: minimap('mp_oilrig'),
            thumbnail: thumbnail('mp_oilrig'),
        }
    },
    mp_harbor: {
        id: 'mp_harbor',
        name: 'Suldal Harbor',
        type: 'mp',
        images: {
            minimap: minimap('mp_harbor'),
            thumbnail: thumbnail('mp_harbor'),
        }
    },
    mp_layover_gw: {
        id: 'mp_layover_gw',
        name: 'Verdansk International Airport',
        type: 'mp',
        category: 'groundwar',
        images: {
            minimap: minimap('mp_layover_gw'),
            thumbnail: thumbnail('mp_layover_gw'),
        }
    },
    mp_m_cornfield: {
        id: 'mp_m_cornfield',
        name: 'Livestock',
        type: 'mp',
        category: 'cage',
        images: {
            minimap: minimap('mp_m_cornfield'),
            thumbnail: thumbnail('mp_m_cornfield'),
        }
    }
}

export { Map, Maps }
