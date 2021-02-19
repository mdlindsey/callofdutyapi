![Call of Duty Logo](https://i.imgur.com/fqd9Sw0.png)

[Call of Duty API](https://callofdutyapi.com) provided by [Stagg.co](https://stagg.co)

Feeling stuck? Feel free to [join our Discord](http://discord.callofdutyapi.com) and ask for help!

## Getting Started

Install the package:

```
# Using npm
npm i @callofduty/api
```

```
# Using yarn
yarn add @callofduty/api
```

After installation is complete, you will have access to the API library:

```ts
import API from '@callofduty/api'
```

### Schemas

If you're using TypeScript, you'll notice that all API route responses are typed and that we offer interfaces for our standardized models, which can be found in the accompanying `@callofduty/types`. This separation is to allow API types as devDependencies on front-end clients without the need to accomodate the deprecated `request` package.

### API Library

After creating [the most comprehensive documentation for the official Call of Duty API](http://postman.callofdutyapi.com), it was time to streamline this functionality into an NPM module that comes complete with TypeScript support right out of the box.

#### Authentication

Unless you are accessing the [Public API Routes](https://documenter.getpostman.com/view/5519582/SzzgAefq#77e19cd5-d629-4b06-a2f3-057ef9f4378f) you must be authenticated for all transactions. To authenticate the API instance, you must pass the `xsrf`, `sso`, and `atkn` tokens to the constructor on instantiation or update an existing instance via `API.UseTokens({ xsrf, sso, atkn })`.

When authenticating a new user whose tokens are not yet saved, you must first instantiate the API instance without tokens as the the tokens are only returned after we login.

```ts
import API from '@callofduty/api'

// Step 1: Instantiate the API
const CallOfDutyAPI = new API()
// Step 2: Login with email + password (top-level await as shown below may not be available in your environment, wrap as necessary)
const { xsrf, sso, atkn } = await CallOfDutyAPI.Authorize('foo@bar.com', 'shhhhh!')
// Step 3: Update API instance and continue as an authenticated user
CallOfDutyAPI.UseTokens({ xsrf, sso, atkn })
// Step 4: Fetch the identity for this account to find username/platform for desired game
const { titleIdentities } = await CallOfDutyAPI.Identity()
// Step 5: Filter for game-specific profiles (we'll use MW and assume there is only one profile but multiple are supported)
const { username, platform } = titleIdentities.find(identity => identity.title === 'mw')
```

At this point you have authentication tokens (`xsrf`, `sso`, and `atkn`) in addition to a `username` and `platform` pair. These are the only inputs required in upcoming examples, so congratulations, you're good to go! For all proceeding examples we will assume we already have these variables defined.

#### Private Routes

Some functionality is only available for the user whose tokens are actively being used for authentication. In other words, you can only fetch private routes for _yourself_ and cannot fetch this information for any players other than the currently authenticated user. It's worth mentioning that the above `API.Identity()` invocation relies on a private route as well, but you will most likely only need to use it for the purpose of identifying a newly authenticated user.

```ts
import API from '@callofduty/api'
// { xsrf, sso, atkn } are assumed to be defined already (see first example)
const CallOfDutyAPI = new API({ xsrf, sso, atkn })
// API.Accounts() - Get all platform profiles for this account
const { uno, xbl, psn, battle, steam } = await API.Accounts()
const { username } = uno // uno = activision, swap for other platforms as needed
// API.Friends() - Get all friend profiles for this account
const { uno, incomingInvitations, outgoingInvitations, blocked } = await API.Friends()
// uno is an array of friend profiles
for(const friend of uno) {
    const { username, platform, accountId, status: { online, curentTitleId } } = friend
    // ... do the things ...
}
// incomingInvitations and outgoingInvitations share the same schema as friends without currentTitleId
for(const stans of incomingInvitations) {
    const { username, platform, accountId, status: { online } } = friend
    // ... do the things ...
}
```

#### Protected Routes

Luckily, match and profile data can be fetched for _any_ user given that we're already authenticated.

Profiles can be fetched for any user when provided with a `username`, `platform`, `mode` (`wz` or `mp`), and `game` (eg: `mw`) input.

```ts
import API from '@callofduty/api'
// { xsrf, sso, atkn } are assumed to be defined already (see first example)
const CallOfDutyAPI = new API({ xsrf, sso, atkn })
const profileData = await CallOfDutyAPI.Profile({ username: 'HusKerrs', platform: 'uno' }, 'wz', 'mw')
```

Fetching matches is also simple, it just requires the same `username`, `platform`, `mode` (`wz` or `mp`), and `game` (eg: `mw`) input to fetch the last 20 matches for any given player.

```ts
import API from '@callofduty/api'
// { xsrf, sso, atkn } are assumed to be defined already (see first example)
const CallOfDutyAPI = new API({ xsrf, sso, atkn })
const lastTwentyMatches = await CallOfDutyAPI.MatchHistory({ username: 'HusKerrs', platform: 'uno' }, 'wz', 'mw')
```

If you want to fetch more than the last 20 matches or want to fetch matches from a specific period of time, you can provide a millisecond timestamp to the `next` parameter at the end of the call signature.

```ts
import API from '@callofduty/api'
// { xsrf, sso, atkn } are assumed to be defined already (see first example)
const CallOfDutyAPI = new API({ xsrf, sso, atkn })
const millisecondTimestamp = new Date().getUTCMilliseconds()
const nextTwentyMatches = await CallOfDutyAPI.MatchHistory({ username: 'HusKerrs', platform: 'uno' }, 'wz', 'mw', millisecondTimestamp)
```

#### Match Events

Although this route only works for multiplayer (`mp`) games, it works without authentication and only requires a `matchId` and `game` (eg: `mw`) input. In exchange, it provides all data necessary to generate hotspot charts and retrive the universal account ID of any player in the game (which we can use to fetch _their_ profile and matches and create an endless scraping scenario). 

```ts
import API from '@callofduty/api'

const CallOfDutyAPI = new API()
const matchEvents = await CallOfDutyAPI.MatchEvents('16435623658620974427', 'mw')
```

### Asset Library

Currently a work-in-progress, the goal of this library is to offer standardized models and comprehensive details for all in-game assets including maps, modes, weapons, killstreaks, and more.

```ts
import { Assets } from '@callofduty/assets'
```

## Discovery + Findings

**`timePlayed`** - The amount of time you spend in the game after the pre-game lobby including the final cut-scene
**`teamSurvivalTime`** - The amount of time your team was alive including gulag, down to the last player alive on the team

### Assets & Resources

1. [Map, Mode, and Weapon names](https://my.callofduty.com/content/atvi/callofduty/mycod/web/en/data/json/iq-content-xweb.js)
2. [Heatmap data (MatchEvents)](https://my.callofduty.com/api/papi-client/ce/v1/title/mw/platform/battle/match/8944019869464002060/matchMapEvents)

Franchise Store:

https://my.callofduty.com/api/papi-client/loot/title/mw/platform/battle/list/loot_season_6/en
https://my.callofduty.com/api/papi-client/loot/title/mw/platform/battle/gamer/Dan%2317890/status/en
https://my.callofduty.com/api/papi-client/inventory/v1/title/mw/platform/battle/gamer/Dan%2317890/currency
https://my.callofduty.com/api/papi-client/inventory/v1/title/mw/platform/battle/purchasable/gamer/Dan%2317890/en
