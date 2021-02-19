import * as Schema from '..'
export interface Loadout {
    primaryWeapon: Schema.MW.Weapon
    secondaryWeapon: Schema.MW.Weapon
    perks: { name: string }[]
    extraPerks: { name: string }[]
    killstreaks: { name: string }[]
    tactical: { name: string }
    lethal: { name: string }
}
