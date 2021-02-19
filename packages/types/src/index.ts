export * from './friends'
export * from './accounts'
import * as MW from './mw'
import * as Routes from './routes'

export { MW, Routes }

export type Game = 'cw' | 'mw' | 'bo4' | 'wwii'
export type GameType = 'mp' | 'wz' | 'zm'
export type Tokens = { sso: string, atkn: string, xsrf: string }

export type Map = MW.Map
export type Mode = MW.Mode
export type Match = MW.Match
export type Weapon = MW.Weapon
export type Loadout = MW.Loadout
export type Summary = MW.Summary
export type Profile = MW.Profile
export type Killstreak = MW.Killstreak
