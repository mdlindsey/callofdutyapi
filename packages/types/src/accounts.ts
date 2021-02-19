export type ProfileLookup = Partial<Record<Platform, Username>>
export type Username = string
export type Platform = 'uno' | 'battle' | 'psn' | 'xbl' | 'steam'
export type ProfileId = UnoId | PlatformId
export interface PlatformId { username: string, platform: Platform }
export interface UnoId { unoId: string }

