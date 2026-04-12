# Demystifying Bonk
Last updated: *8-4-2026, 16:55:38*

A repository for various resources to understand the inner workings of [bonk.io](https://bonk.io) api protocol 49.

<!-- reservedForToc -->
- [Contributing to the repository](#contributing-to-the-repository) *line 143*
- [Network](#network) *line 157*
  - [Community Resources](#community-resources) *line 168*
  - [Incoming Packets (Server → Client)](#incoming-packets-server-client) *line 187*
    - [On 1 — Update Pings](#on-1-update-pings) *line 189*
    - [On 2 — Room Created](#on-2-room-created) *line 202*
    - [On 3 — Room Join](#on-3-room-join) *line 216*
    - [On 4 — Player Join](#on-4-player-join) *line 235*
    - [On 5 — Player Leave](#on-5-player-leave) *line 253*
    - [On 6 — Host Leave](#on-6-host-leave) *line 266*
    - [On 7 — Inputs](#on-7-inputs) *line 280*
    - [On 8 — Ready Change](#on-8-ready-change) *line 293*
    - [On 9 — All Ready Reset](#on-9-all-ready-reset) *line 306*
    - [On 10 — Server Mute](#on-10-server-mute) *line 314*
    - [On 11 — Server Unmute](#on-11-server-unmute) *line 328*
    - [On 12 — Username Change](#on-12-username-change) *line 342*
    - [On 13 — Game End](#on-13-game-end) *line 355*
    - [On 14 — Reserved](#on-14-reserved) *line 363*
    - [On 15 — Game Start](#on-15-game-start) *line 372*
    - [On 16 — Status Message](#on-16-status-message) *line 386*
    - [On 17 — Reserved](#on-17-reserved) *line 398*
    - [On 18 — Team Change](#on-18-team-change) *line 407*
    - [On 19 — Teamlock Toggle](#on-19-teamlock-toggle) *line 420*
    - [On 20 — Chat Message](#on-20-chat-message) *line 432*
    - [On 21 — Initial Data](#on-21-initial-data) *line 445*
    - [On 22 — UnknownPacket](#on-22-unknownpacket) *line 457*
    - [On 23 — Timesync Response](#on-23-timesync-response) *line 462*
    - [On 24 — Player Banned/Kicked](#on-24-player-bannedkicked) *line 472*
    - [On 25 — Map Reorder](#on-25-map-reorder) *line 485*
    - [On 26 — Mode Change](#on-26-mode-change) *line 496*
    - [On 27 — Change WL (Rounds)](#on-27-change-wl-rounds) *line 509*
    - [On 28 — Map Delete](#on-28-map-delete) *line 521*
    - [On 29 — Map Switch](#on-29-map-switch) *line 531*
    - [On 30 — Typing](#on-30-typing) *line 543*
    - [On 31 — Admin Inputs](#on-31-admin-inputs) *line 556*
    - [On 32 — AFK Warn](#on-32-afk-warn) *line 564*
    - [On 33 — Map Suggest (Host)](#on-33-map-suggest-host) *line 572*
    - [On 34 — Map Suggest (Client)](#on-34-map-suggest-client) *line 585*
    - [On 35 — Change Mode](#on-35-change-mode) *line 599*
    - [On 36 — Balance Set](#on-36-balance-set) *line 609*
    - [On 37 — Reserved](#on-37-reserved) *line 622*
    - [On 38 — Debug Winner](#on-38-debug-winner) *line 631*
    - [On 39 — Team Settings Change](#on-39-team-settings-change) *line 645*
    - [On 40 — Save Replay](#on-40-save-replay) *line 655*
    - [On 41 — Host Change](#on-41-host-change) *line 667*
    - [On 42 — Friend Request](#on-42-friend-request) *line 677*
    - [On 43 — Countdown](#on-43-countdown) *line 689*
    - [On 44 — Abort Countdown](#on-44-abort-countdown) *line 701*
    - [On 45 — Player Leveled Up](#on-45-player-leveled-up) *line 709*
    - [On 46 — Local Gained XP](#on-46-local-gained-xp) *line 719*
    - [On 47 — Local Revert](#on-47-local-revert) *line 731*
    - [On 48 — Recv In Game](#on-48-recv-in-game) *line 741*
    - [On 49 — Room Share Link](#on-49-room-share-link) *line 751*
    - [On 50 — Map Vote Update](#on-50-map-vote-update) *line 764*
    - [On 51 — More Quick Maps](#on-51-more-quick-maps) *line 775*
    - [On 52 — Tabbed](#on-52-tabbed) *line 783*
    - [On 53 — Desync Request](#on-53-desync-request) *line 796*
    - [On 54 — Desync Response](#on-54-desync-response) *line 808*
    - [On 55 — UnknownPacket](#on-55-unknownpacket) *line 820*
    - [On 56 — UnknownPacket](#on-56-unknownpacket) *line 825*
    - [On 57 — Curate Result](#on-57-curate-result) *line 830*
    - [On 58 — Room Name Update](#on-58-room-name-update) *line 843*
    - [On 59 — Room Password Update](#on-59-room-password-update) *line 855*
    - [On 60 — Server Message](#on-60-server-message) *line 867*
  - [Outgoing Packets (Client → Server)](#outgoing-packets-client-server) *line 875*
    - [Emit 1 — Ping Acknowledgement](#emit-1-ping-acknowledgement) *line 877*
    - [Emit 2 — Test Ping](#emit-2-test-ping) *line 889*
    - [Emit 3 — Get Debug](#emit-3-get-debug) *line 898*
    - [Emit 4 — Send Inputs](#emit-4-send-inputs) *line 907*
    - [Emit 5 — Trigger Start](#emit-5-trigger-start) *line 921*
    - [Emit 6 — Change Own Team](#emit-6-change-own-team) *line 934*
    - [Emit 7 — Team Lock](#emit-7-team-lock) *line 944*
    - [Emit 8 — Silence Player](#emit-8-silence-player) *line 954*
    - [Emit 9 — Kick/Ban Player](#emit-9-kickban-player) *line 967*
    - [Emit 10 — Chat Message](#emit-10-chat-message) *line 978*
    - [Emit 11 — Inform In Lobby](#emit-11-inform-in-lobby) *line 988*
    - [Emit 12 — Create Room](#emit-12-create-room) *line 1001*
    - [Emit 13 — Join Room](#emit-13-join-room) *line 1030*
    - [Emit 14 — Return To Lobby](#emit-14-return-to-lobby) *line 1047*
    - [Emit 15 — UnknownPacket](#emit-15-unknownpacket) *line 1053*
    - [Emit 16 — Set Ready](#emit-16-set-ready) *line 1058*
    - [Emit 17 — All Ready Reset](#emit-17-all-ready-reset) *line 1068*
    - [Emit 18 — Timesync Request](#emit-18-timesync-request) *line 1076*
    - [Emit 19 — Map Reorder](#emit-19-map-reorder) *line 1081*
    - [Emit 20 — Send Mode](#emit-20-send-mode) *line 1090*
    - [Emit 21 — Send WL (Rounds)](#emit-21-send-wl-rounds) *line 1103*
    - [Emit 22 — Map Delete](#emit-22-map-delete) *line 1113*
    - [Emit 23 — Map Add](#emit-23-map-add) *line 1121*
    - [Emit 24 — Send Typing](#emit-24-send-typing) *line 1133*
    - [Emit 25 — Admin Inputs](#emit-25-admin-inputs) *line 1142*
    - [Emit 26 — Change Other Team](#emit-26-change-other-team) *line 1152*
    - [Emit 27 — Map Suggest](#emit-27-map-suggest) *line 1163*
    - [Emit 28 — Change Mode](#emit-28-change-mode) *line 1175*
    - [Emit 29 — Send Balance](#emit-29-send-balance) *line 1185*
    - [Emit 30 — Version Check](#emit-30-version-check) *line 1198*
    - [Emit 31 — Send Debug Winner](#emit-31-send-debug-winner) *line 1207*
    - [Emit 32 — Team Settings Change](#emit-32-team-settings-change) *line 1220*
    - [Emit 33 — Arm Record](#emit-33-arm-record) *line 1232*
    - [Emit 34 — Host Change](#emit-34-host-change) *line 1240*
    - [Emit 35 — Send Friended](#emit-35-send-friended) *line 1252*
    - [Emit 36 — Start Countdown](#emit-36-start-countdown) *line 1264*
    - [Emit 37 — Abort Countdown](#emit-37-abort-countdown) *line 1276*
    - [Emit 38 — Request XP](#emit-38-request-xp) *line 1284*
    - [Emit 39 — Map Vote](#emit-39-map-vote) *line 1292*
    - [Emit 40 — Inform In Game](#emit-40-inform-in-game) *line 1305*
    - [Emit 41 — Get Pre Vote](#emit-41-get-pre-vote) *line 1318*
    - [Emit 42 — Get More Quick Play Maps](#emit-42-get-more-quick-play-maps) *line 1330*
    - [Emit 43 — Update RC Data](#emit-43-update-rc-data) *line 1338*
    - [Emit 44 — Tabbed](#emit-44-tabbed) *line 1347*
    - [Emit 45 — Desync Test](#emit-45-desync-test) *line 1359*
    - [Emit 46 — Send Desync Response](#emit-46-send-desync-response) *line 1373*
    - [Emit 47 — Round Complete](#emit-47-round-complete) *line 1387*
    - [Emit 48 — UnknownPacket](#emit-48-unknownpacket) *line 1398*
    - [Emit 49 — UnknownPacket](#emit-49-unknownpacket) *line 1403*
    - [Emit 50 — No Host Swap](#emit-50-no-host-swap) *line 1408*
    - [Emit 51 — Curate](#emit-51-curate) *line 1416*
    - [Emit 52 — Room Name Update](#emit-52-room-name-update) *line 1430*
    - [Emit 53 — Room Password Update](#emit-53-room-password-update) *line 1442*
- [Source Code / Deobfuscation](#source-code-deobfuscation) *line 1452*
- [Common Data Schemes](#common-data-schemes) *line 1454*
  - [Team](#team) *line 1456*
  - [Inputs](#inputs) *line 1469*
    - [Input Flags](#input-flags) *line 1471*
    - [Input Object](#input-object) *line 1490*
  - [Game Engine Enum](#game-engine-enum) *line 1498*
  - [Game Mode Enum](#game-mode-enum) *line 1508*
  - [Game Settings Object (`gs`)](#game-settings-object-gs) *line 1525*
  - [Map Data Format](#map-data-format) *line 1544*
  - [Status Codes](#status-codes) *line 1552*
  - [Initial Game State](#initial-game-state) *line 1598*
  - [Timesync Response Data](#timesync-response-data) *line 1604*
  - [Admin Input Data](#admin-input-data) *line 1610*
  - [Mode Settings Object](#mode-settings-object) *line 1616*
  - [Team Settings Object](#team-settings-object) *line 1622*
  - [Full Game State Data](#full-game-state-data) *line 1628*
  - [DiscDeathMethod](#discdeathmethod) *line 1634*
- [Foot Notes](#foot-notes) *line 1648*

  
<a name="contributing-to-the-repository"></a>
## Contributing to the repository

Contributions are welcome (*and apperciated*)! If you have information, resources, or corrections to add, please open a [pull request](../../pulls) or create an [issue](../../issues) describing what you'd like to add or change.

If you have used AI in your research, please mention it in either the pull request or the issue. This helps keep the repository as accurate as possible.
In fact, much of this README was written with the help of AI. However, the research itself was conducted primarily through **human** manual, heuristic, and automated analysis. *dirty clankers*

> [!NOTE]
> A [ReadMe fixer](fixReadMe.ts) script is run after every commit (or you can run it yourself after committing / before submitting a pull request). It handles the following automatically:
> - **Last updated** timestamp is automatically updated.
> - **Table of Contents** is generated from headings, along with custom anchors[^custom-anchors] put before them automatically for linking.
> - To exclude a heading from the Table of Contents, add `<!-- skipForTableContent -->` on the line before it.
> - **Footnote references** are applied automatically. For example, if a footnote `[^AST]` is defined, every occurrence of `AST[^AST]` will have `[^AST]` appended. Please be mindful of capitalisation as matching is case-sensitive.
  
<a name="network"></a>
## Network

Bonk.io networking uses **Socket.IO** for client-server communication. Each game packet __except emit 18__ is a JSON array prefixed with `42`, where the first element is the Packet ID[^Packet-ID]:

```
42[packetID[^Packet-ID], ...args]
```
```
42ackID[18,{...}]
```

> [!NOTE]
> ackID is a number that increments each time the message containing it gets sent.
> [!NOTE]
> The same Packet ID[^Packet-ID] may serve different purposes depending on direction (incoming `socket.on()` vs outgoing `socket.emit()`).

<a name="community-resources"></a>
### Community Resources

- [DemystifyBonk](https://github.com/UnmatchedBracket/DemystifyBonk) — Community-maintained bonk.io reverse engineering project, mostly regarding
> [!NOTE]
> This project is quite outdated, and there isn't anything in packets.md that is not included in this repository, however I have taken quite some information from the packets.md file and therefore feel like linking it.

- [BonkBot Library Python](https://github.com/Fenekiro/bonk_bot)
> [!NOTE]
> Quite a decently written library for creating clients/bots to connect to the Socket.IO server for Python

- [BonkBot (JavaScript)](https://github.com/PixelMelt/BonkBot)
> [!NOTE]
> Similar type of bot library as https://github.com/Fenekiro/bonk_bot, except written in JavaScript. It is less stable and the codebase is quite messy written, it is still a useful reference/resource.

- [Manifold Server](https://github.com/SneezingCactus/manifold-server)
- [Manifold Client](https://github.com/SneezingCactus/manifold-client)
> [!NOTE]
> Open-source implementation of the bonk.io multiplayer server and a corresponding client, designed to allow complete freedom over game backend and restrictions.

<a name="incoming-packets-server-client"></a>
### Incoming Packets (Server → Client)

<a name="on-1-update-pings"></a>
#### On 1 — Update Pings

Provides other players' ping times and measures your own. The client must echo back the ping ID to complete the round-trip measurement.

Example: `42[1,{"30":180,"33":148,"34":190},9]`

| # | Description |
|---|-------------|
| 1 | Object with player IDs as keys and ping times (ms) as values |
| 2 | Ping request ID — echo back as `42[1,{"id":<number>}]` |

---

<a name="on-2-room-created"></a>
#### On 2 — Room Created

Sent when you have successfully created a room. Your player slot ID is always 0.

Example: `42[2,"TCwlcVAGzgI6J-4gAAHo",1,null]`

| # | Description |
|---|-------------|
| 1 | Room ID (Socket.IO session ID) |
| 2 | Team
| 3 | Map list object for quick play (`null` normally) — `{ size, maps }` |

---

<a name="on-3-room-join"></a>
#### On 3 — Room Join

Provides lobby information when you join an existing room.

Example: `42[3,3,0,[{"peerID":"vuzvugdrnja00000","userName":"user one","guest":true,"team":1,"level":0,"ready":false,"tabbed":true,"avatar":{"layers":[],"bc":9315498}},null,null,{"peerID":"nx25am3w8d700000","userName":"left paren","guest":false,"team":1,"level":106,"ready":false,"tabbed":false,"avatar":{...}}],0,false,901003,"mtomw",null]`

| # | Description |
|---|-------------|
| 1 | Your player ID |
| 2 | Host's player ID |
| 3 | Player list array (indexed by slot ID, `null` = empty slot). Each player: `{ peerID, userName, guest, team, level, ready, tabbed, avatar }` |
| 4 | Server Unix timestamp |
| 5 | `true` if teams are locked |
| 6 | Room ID for share link (`https://bonk.io/<roomID padded to 6 digits><bypass>`) |
| 7 | Room bypass code for share link |
| 8 | Map list for quick play (`null` normally) |

---

<a name="on-4-player-join"></a>
#### On 4 — Player Join

A new player has joined the room.

Example: `42[4,21,"0qh12mq737fh0000","left paren",false,39,1,{"layers":[...],"bc":61591}]`

| # | Description |
|---|-------------|
| 1 | New player's ID |
| 2 | Peer ID |
| 3 | Username |
| 4 | `true` if guest |
| 5 | Player level (0 if guest) |
| 6 | Whether joined via share link bypass |
| 7 | Avatar data `{ layers, bc }` |

---

<a name="on-5-player-leave"></a>
#### On 5 — Player Leave

A player has disconnected from the room.

Example: `42[5,13,14511]`

| # | Description |
|---|-------------|
| 1 | Player's ID |
| 2 | Accumulator / frame tick at time of departure |

---

<a name="on-6-host-leave"></a>
#### On 6 — Host Leave

The host left; a new host is assigned (host migration).

Examples: `42[6,1,0,49753339064]` · `42[6,0,-1,49753339073]`

| # | Description |
|---|-------------|
| 1 | Old host's ID |
| 2 | New host's ID (`-1` = host closed the room) |
| 3 | Accumulator |

---

<a name="on-7-inputs"></a>
#### On 7 — Inputs

Game input data from another player, relayed through the server.

Examples: `42[7,1,{"i":38,"f":324,"c":45}]` · `42[7,1,{"i":25,"f":531,"c":108}]`

| # | Description |
|---|-------------|
| 1 | Player ID of the sender |
| 2 | Input object (see <a href="#input-object">Input Object</a>): `"i"` = input bitmask, `"f"` = frame number, `"c"` = sequence number (increments per input) |

---

<a name="on-8-ready-change"></a>
#### On 8 — Ready Change

A player toggled their ready status.

Example: `42[8,1,true]`

| # | Description |
|---|-------------|
| 1 | Player ID |
| 2 | `true` if ready (checkmark), `false` otherwise |

---

<a name="on-9-all-ready-reset"></a>
#### On 9 — All Ready Reset

All players' ready states have been reset (e.g., after a setting change).

Example: `42[9]`

---

<a name="on-10-server-mute"></a>
#### On 10 — Server Mute

> [!NOTE]
> This Packet ID[^Packet-ID] is as of the ReadMe's last updated time unused or was left in the game debugging purposes

Received when a player is muted by the server.

| # | Description |
|---|-------------|
| 1 | Muted player's slot ID |
| 2 | Mute type/info |
| 3 | Who was told about it. 1 - Everyone, 2 - Everyone except muted player

---

<a name="on-11-server-unmute"></a>
#### On 11 — Server Unmute

> [!NOTE]
> This Packet ID[^Packet-ID] is as of the ReadMe's last updated time unused or was left in the game debugging purposes

Received when a player is unmuted by the server.

| # | Description |
|---|-------------|
| 1 | Unmuted player's slot ID |
| 2 | Unmute type/info |
| 3 | Who was told about it. 1 - Everyone, 2 - Everyone except muted player

---

<a name="on-12-username-change"></a>
#### On 12 — Username Change

A non-guest player with the same username as a guest joined, so the guest's username is forced to change.

Example: `42[12,0,"123qwe2"]`

| # | Description |
|---|-------------|
| 1 | Player ID |
| 2 | New username |

---

<a name="on-13-game-end"></a>
#### On 13 — Game End

The game has ended and all players return to the lobby.

Example: `42[13]`

---

<a name="on-14-reserved"></a>
#### On 14 — Reserved

> [!NOTE]
> This Packet ID[^Packet-ID] is as of the ReadMe's last updated time unused or was left in the game debugging purposes

Registered but handler is empty. Reserved for future use or deprecated.

---

<a name="on-15-game-start"></a>
#### On 15 — Game Start

A game has been scheduled to start by the host.

Example: `42[15,1658450696036,"jWCW9ahaqG6GsGbWmycybYa...","ILAM..."]`

| # | Description |
|---|-------------|
| 1 | Unix timestamp of game start |
| 2 | Initial game state (see <a href="#initial-game-state">Initial Game State</a>) |
| 3 | Game settings object (see <a href="#game-settings-object-gs">Game Settings Object (`gs`)</a>) |

---

<a name="on-16-status-message"></a>
#### On 16 — Status Message

A status/error message from the server.

Example: `42[16,"rate_limit_ready"]`

| # | Description |
|---|-------------|
| 1 | Status code string — see [Status Codes](#status-codes) |

---

<a name="on-17-reserved"></a>
#### On 17 — Reserved

> [!NOTE]
> This Packet ID[^Packet-ID] is as of the ReadMe's last updated time unused or was left in the game debugging purposes

Registered but handler is empty. Reserved for future use or deprecated.

---

<a name="on-18-team-change"></a>
#### On 18 — Team Change

A player changed teams.

Example: `42[18,2,0]`

| # | Description |
|---|-------------|
| 1 | Player ID |
| 2 | New `Team` value |

---

<a name="on-19-teamlock-toggle"></a>
#### On 19 — Teamlock Toggle

Teams were locked or unlocked.

Example: `42[19,true]`

| # | Description |
|---|-------------|
| 1 | `true` if locked, `false` if unlocked |

---

<a name="on-20-chat-message"></a>
#### On 20 — Chat Message

A chat message was received.

Example: `42[20,0,"hello"]`

| # | Description |
|---|-------------|
| 1 | Sender's player ID |
| 2 | Message text |

---

<a name="on-21-initial-data"></a>
#### On 21 — Initial Data

Sent by the host after you join a room, containing map and game data. Clears the 6-second initial data timeout.

Example: `42[21,{"map":{"v":13,"s":{...},"physics":{...},"spawns":[],...},"gt":2,"wl":3,"q":false,"tl":true,"tea":false,"ga":"b","mo":"b","bal":[]}]`

| # | Description |
|---|-------------|
| 1 | Game settings object (see <a href="#game-settings-object-gs">Game Settings Object (`gs`)</a>) with full lobby state |

---

<a name="on-22-unknownpacket"></a>
#### On 22 — UnknownPacket
TODO

---

<a name="on-23-timesync-response"></a>
#### On 23 — Timesync Response

Time synchronization response from the server. Used by the `timesync` library, not a game packet.

| # | Description |
|---|-------------|
| 1 | Timesync response data object (see <a href="#timesync-response-data">Timesync Response Data</a>) |

---

<a name="on-24-player-bannedkicked"></a>
#### On 24 — Player Banned/Kicked

The host has kicked or banned a player.

Example: `42[24,1,false]`

| # | Description |
|---|-------------|
| 1 | Kicked/banned player's ID |
| 2 | `true` = kick only (can rejoin), `false` = banned (permanent for this room session) |

---

<a name="on-25-map-reorder"></a>
#### On 25 — Map Reorder

The map queue order has been changed.

| # | Description |
|---|-------------|
| 1 | Source index |
| 2 | Destination index |

---

<a name="on-26-mode-change"></a>
#### On 26 — Mode Change

Mode changed.

Example: `42[26,"b","ard"]`

| # | Description |
|---|-------------|
| 1 | (see <a href="#game-engine-enum">Game Engine Enum</a>) |
| 2 | (see <a href="#game-mode-enum">Game Mode Enum</a>) |

---

<a name="on-27-change-wl-rounds"></a>
#### On 27 — Change WL (Rounds)

Win/loss round count changed.

Example: `42[27,7]`

| # | Description |
|---|-------------|
| 1 | New round count |

---

<a name="on-28-map-delete"></a>
#### On 28 — Map Delete

A map was removed from the queue.

| # | Description |
|---|-------------|
| 1 | Index of deleted map |

---

<a name="on-29-map-switch"></a>
#### On 29 — Map Switch

A new map has been added to the queue. (see <a href="#map-data-format">Map Data</a>)

Example: `42[29,"ILAMJAhBFBjBzCTlMiAJgNQEYFsCsAFtgOqYDWIhAjLAEyYCeAkgOICcArgFrQr8gACgHpRwgBwpEAWQFyQAXiA"]`

| # | Description |
|---|-------------|
| 1 | (see <a href="#map-data-format">Map Data</a>) |

---

<a name="on-30-typing"></a>
#### On 30 — Typing

> [!NOTE]
> This Packet ID[^Packet-ID] is as of the ReadMe's last updated time unused or was left in the game debugging purposes

A player is typing in the chat. Unused in bonk.io.

| # | Description |
|---|-------------|
| 1 | Typing player's slot ID |

---

<a name="on-31-admin-inputs"></a>
#### On 31 — Admin Inputs

| # | Description |
|---|-------------|
| 1 | Admin input data object (see <a href="#admin-input-data">Admin Input Data</a>) |

---

<a name="on-32-afk-warn"></a>
#### On 32 — AFK Warn

Warning that you're about to be disconnected for being AFK.

Example: `42[32]`

---

<a name="on-33-map-suggest-host"></a>
#### On 33 — Map Suggest (Host)

A player has suggested a map. Only the host sees this packet — other players see Packet 34 instead. (see <a href="#map-data-format">Map Data</a>)

Example: `42[33,"ILAMJAhBFBjBzCTl...",2]`

| # | Description |
|---|-------------|
| 1 | (see <a href="#map-data-format">Map Data</a>) |
| 2 | Player ID of who suggested the map |

---

<a name="on-34-map-suggest-client"></a>
#### On 34 — Map Suggest (Client)

Non-host clients receive this instead of Packet 33. Contains only the map title and author.

Example: `42[34,"CDball","MuadDib",2]`

| # | Description |
|---|-------------|
| 1 | Map title |
| 2 | Map author |
| 3 | Player ID of who suggested the map |

---

<a name="on-35-change-mode"></a>
#### On 35 — Change Mode

Game mode settings changed (distinct from Packet 26 which changes engine+mode together).

| # | Description |
|---|-------------|
| 1 | Mode settings object (see <a href="#mode-settings-object">Mode Settings Object</a>) |

---

<a name="on-36-balance-set"></a>
#### On 36 — Balance Set

A player's balance/handicap was changed.

Example: `42[36,1,-55]`

| # | Description |
|---|-------------|
| 1 | Player ID |
| 2 | Balance amount (integer, -100 to 100) |

---

<a name="on-37-reserved"></a>
#### On 37 — Reserved

> [!NOTE]
> This Packet ID[^Packet-ID] is as of the ReadMe's last updated time unused or was left in the game debugging purposes

Registered but handler is empty. Reserved for future use or deprecated.

---

<a name="on-38-debug-winner"></a>
#### On 38 — Debug Winner

> [!NOTE]
> This Packet ID[^Packet-ID] is as of the ReadMe's last updated time unused or was left in the game debugging purposes

Debug information about the round winner.

| # | Description |
|---|-------------|
| 1 | Winner's slot ID |
| 2 | Debug data |

---

<a name="on-39-team-settings-change"></a>
#### On 39 — Team Settings Change

Team configuration settings have been modified.

| # | Description |
|---|-------------|
| 1 | New team settings object (see <a href="#team-settings-object">Team Settings Object</a>) |

---

<a name="on-40-save-replay"></a>
#### On 40 — Save Replay

A player saved a replay.

Example: `42[40,1]`

| # | Description |
|---|-------------|
| 1 | Player ID of who saved the replay |

---

<a name="on-41-host-change"></a>
#### On 41 — Host Change

The room host has been transferred to a different player.

| # | Description |
|---|-------------|
| 1 | Object: `{ "newHost": <new host's player ID> }` |

---

<a name="on-42-friend-request"></a>
#### On 42 — Friend Request

A player sent you a friend request.

Example: `42[42,1]`

| # | Description |
|---|-------------|
| 1 | Player ID of who sent the friend request |

---

<a name="on-43-countdown"></a>
#### On 43 — Countdown

Countdown before game start.

Example: `42[43,3]`

| # | Description |
|---|-------------|
| 1 | Countdown number |

---

<a name="on-44-abort-countdown"></a>
#### On 44 — Abort Countdown

The game start countdown was aborted.

Example: `42[44]`

---

<a name="on-45-player-leveled-up"></a>
#### On 45 — Player Leveled Up

Example: `42[45,{"sid":1,"lv":69}]`

| # | Description |
|---|-------------|
| 1 | Object: `"sid"` = player ID, `"lv"` = new level |

---

<a name="on-46-local-gained-xp"></a>
#### On 46 — Local Gained XP

You gained XP. May include a new auth token if you leveled up.

Example: `42[46,{"newXP":300}]`

| # | Description |
|---|-------------|
| 1 | Object: `"newXP"` = cumulative XP total. Optionally `"newLevel"` and `"newToken"` if leveled up |

---

<a name="on-47-local-revert"></a>
#### On 47 — Local Revert

Server instructs the client to revert local state (desync recovery).

| # | Description |
|---|-------------|
| 1 | Revert data |

---

<a name="on-48-recv-in-game"></a>
#### On 48 — Recv In Game

Initial game state data sent when joining a room that is currently in-game. Clears the 6-second initial data timeout.

| # | Description |
|---|-------------|
| 1 | Full game state data object (see <a href="#full-game-state-data">Full Game State Data</a>) |

---

<a name="on-49-room-share-link"></a>
#### On 49 — Room Share Link

Room ID and bypass code for generating the share URL.

Example: `42[49,261254,"agsey"]`

| # | Description |
|---|-------------|
| 1 | Room database ID (numeric part of share link) |
| 2 | Bypass code (appended after padded room ID: `https://bonk.io/<ID padded to 6 digits><bypass>`) |

---

<a name="on-50-map-vote-update"></a>
#### On 50 — Map Vote Update

A map vote has been recorded.

| # | Description |
|---|-------------|
| 1 | Map ID |
| 2 | Vote data |

---

<a name="on-51-more-quick-maps"></a>
#### On 51 — More Quick Maps

| # | Description |
|---|-------------|
| 1 | Quick play map data |

---

<a name="on-52-tabbed"></a>
#### On 52 — Tabbed

A player changed their tab/focus state (AFK status).

Example: `42[52,3,false]`

| # | Description |
|---|-------------|
| 1 | Player ID |
| 2 | `true` = tabbed out/unfocused, `false` = focused |

---

<a name="on-53-desync-request"></a>
#### On 53 — Desync Request

Desynchronization test request from the server.

| # | Description |
|---|-------------|
| 1 | Request ID |
| 2 | Target data |
| 3 | Additional data |

---

<a name="on-54-desync-response"></a>
#### On 54 — Desync Response

Desynchronization test response.

| # | Description |
|---|-------------|
| 1 | Response data |
| 2 | State data |
| 3 | Additional data |

---

<a name="on-55-unknownpacket"></a>
#### On 55 — UnknownPacket
TODO

---

<a name="on-56-unknownpacket"></a>
#### On 56 — UnknownPacket
TODO

---

<a name="on-57-curate-result"></a>
#### On 57 — Curate Result

Result of a map curation action (`/curate` + `/curateyes`).

Examples: `42[57,false,"unauthorised"]` · `42[57,true,""]`

| # | Description |
|---|-------------|
| 1 | `true` if curation succeeded, `false` if failed |
| 2 | Error/status code: `rate_limit`, `not_logged_in`, `invalid_mapid`, `invalid_comment`, `comment_too_long`, `invalid_dbv`, `unauthorised`, `map_private`, or empty string |

---

<a name="on-58-room-name-update"></a>
#### On 58 — Room Name Update

Host changed room name via `/roomname "text"`.

Example: `42[58,"hello world"]`

| # | Description |
|---|-------------|
| 1 | New room name |

---

<a name="on-59-room-password-update"></a>
#### On 59 — Room Password Update

Host changed password via `/roompass` or `/clearroompass`.

Example: `42[59,1]`

| # | Description |
|---|-------------|
| 1 | `0` = password cleared, `1` = password was set |

---

<a name="on-60-server-message"></a>
#### On 60 — Server Message

A direct message from the server (system announcement, etc.).

| # | Description |
|---|-------------|
| 1 | Server message text |

<a name="outgoing-packets-client-server"></a>
### Outgoing Packets (Client → Server)

<a name="emit-1-ping-acknowledgement"></a>
#### Emit 1 — Ping Acknowledgement

Auto-response inside the Packet 1 handler.

Example: `42[1,{"id":9}]`

| Key | Description |
|-----|-------------|
| `id` | The ping request ID received from the server |

---

<a name="emit-2-test-ping"></a>
#### Emit 2 — Test Ping

> [!NOTE]
> This Packet ID[^Packet-ID] is as of the ReadMe's last updated time unused or was left in the game debugging purposes

Example: `42[2]`

---

<a name="emit-3-get-debug"></a>
#### Emit 3 — Get Debug

> [!NOTE]
> This Packet ID[^Packet-ID] is as of the ReadMe's last updated time unused or was left in the game debugging purposes

Example: `42[3]`

---

<a name="emit-4-send-inputs"></a>
#### Emit 4 — Send Inputs

Send game inputs.

Examples: `42[4,{"i":38,"f":324,"c":45}]` · `42[4,{"i":25,"f":531,"c":108}]`

| Key | Description |
|-----|-------------|
| `i` | Input bitmask — see [Input Bitmask](#inputs) |
| `f` | Frame number this input was performed on |
| `c` | Sequence number (starts at 0, increments per input, lasts entire session) |

---

<a name="emit-5-trigger-start"></a>
#### Emit 5 — Trigger Start

Start the game as host.

Example: `42[5,{"is":"jWCW9ahaqG6...","gs":{"map":"ILAM...","gt":2,"wl":3,"q":false,"tl":false,"tea":false,"ga":"b","mo":"b","bal":[]}}]`

| Key | Description |
|-----|-------------|
| `is` | Initial game state (see <a href="#initial-game-state">Initial Game State</a>) |
| `gs` | Game settings object (see <a href="#game-settings-object-gs">Game Settings Object (`gs`)</a>) |

---

<a name="emit-6-change-own-team"></a>
#### Emit 6 — Change Own Team

Example: `42[6,{"targetTeam":0}]`

| Key | Description |
|-----|-------------|
| `targetTeam` | `Team` value to move to |

---

<a name="emit-7-team-lock"></a>
#### Emit 7 — Team Lock

Example: `42[7,{"teamLock":false}]`

| Key | Description |
|-----|-------------|
| `teamLock` | `true` to lock teams, `false` to unlock |

---

<a name="emit-8-silence-player"></a>
#### Emit 8 — Silence Player

> [!NOTE]
> This Packet ID[^Packet-ID] is as of the ReadMe's last updated time unused or was left in the game debugging purposes

| Key | Description |
|-----|-------------|
| `muteID` | Target player's ID |
| `muteType` | Who to tell about it. 1 - Everyone, 2 - Everyone except the player, 3 - Nobody |
| `action` | `"mute"` or `"unmute"` |

---

<a name="emit-9-kickban-player"></a>
#### Emit 9 — Kick/Ban Player

Example: `42[9,{"banshortid":6,"kickonly":true}]`

| Key | Description |
|-----|-------------|
| `banshortid` | Player's ID |
| `kickonly` | `true` = kick (can rejoin), `false` = ban (permanent) |

---

<a name="emit-10-chat-message"></a>
#### Emit 10 — Chat Message

Example: `42[10,{"message":"Hello, World!"}]`

| Key | Description |
|-----|-------------|
| `message` | Message text to send |

---

<a name="emit-11-inform-in-lobby"></a>
#### Emit 11 — Inform In Lobby

Sent by host to joining players with game settings.

Example: `42[11,{"sid":2,"gs":{"map":{...},"gt":2,"wl":3,"q":false,"tl":false,"tea":false,"ga":"b","mo":"b","bal":[]}}]`

| Key | Description |
|-----|-------------|
| `sid` | Slot ID assigned to the joining player |
| `gs` | Game settings object (see <a href="#game-settings-object-gs">Game Settings Object (`gs`)</a>) |

---

<a name="emit-12-create-room"></a>
#### Emit 12 — Create Room

Example (logged in): `42[12,{"peerID":"ht1a3nt5tgc00000","roomName":"Showcase's game","maxPlayers":6,"password":"","dbid":12741896,"guest":false,...,"token":"TOKENHERE","avatar":{...}}]`

Example (guest): `42[12,{"peerID":"b6sg533lh1v00000","roomName":"net's game","maxPlayers":6,"password":"","dbid":12741896,"guest":true,...,"guestName":"net","avatar":{...}}]`

| Key | Description |
|-----|-------------|
| `peerID` | Your peer ID |
| `roomName` | Room name |
| `maxPlayers` | Max players allowed |
| `password` | Room password (empty = no password) |
| `dbid` | Database ID |
| `guest` | Whether you are a guest |
| `minLevel` | Min level to join |
| `maxLevel` | Max level to join |
| `latitude` | Room location latitude |
| `longitude` | Room location longitude |
| `country` | Country code |
| `version` | Bonk.io version |
| `hidden` | Whether room is hidden from list |
| `quick` | Whether quickplay |
| `mode` | `"custom"`, `"bonkquick"`, `"arrowsquick"`, or `"grapplequick"` |
| `guestName` | Guest display name (only if guest) |
| `token` | Auth token (only if not guest) |
| `avatar` | Skin data |

---

<a name="emit-13-join-room"></a>
#### Emit 13 — Join Room

| Key | Description |
|-----|-------------|
| `joinID` | Room join ID / address |
| `roomPassword` | Room password (empty if none) |
| `guest` | Whether you are a guest |
| `dbid` | Database ID (hardcoded to 2) |
| `version` | Bonk.io version |
| `peerID` | Your peer ID |
| `bypass` | Auto-join bypass token (empty if none) |
| `avatar` | Skin data |
| `guestName` | Guest name (only if guest) |
| `token` | Auth token (only if not guest) |

---

<a name="emit-14-return-to-lobby"></a>
#### Emit 14 — Return To Lobby

Example: `42[14]`

---

<a name="emit-15-unknownpacket"></a>
#### Emit 15 — UnknownPacket
TODO

---

<a name="emit-16-set-ready"></a>
#### Emit 16 — Set Ready

Example: `42[16,{"ready":false}]`

| Key | Description |
|-----|-------------|
| `ready` | `true` for ready (checkmark), `false` otherwise |

---

<a name="emit-17-all-ready-reset"></a>
#### Emit 17 — All Ready Reset

Host sets everyone's ready status to false.

Example: `42[17]`

---

<a name="emit-18-timesync-request"></a>
#### Emit 18 — Timesync request

Example: `4229[18,{"jsonrpc":"2.0","id":354,"method":"timesync"}]`

| Key | Description |
|-----|-------------|
| `id` | Timesync request ID |

---

<a name="emit-19-map-reorder"></a>
#### Emit 19 — Map Reorder

| Key | Description |
|-----|-------------|
| `s` | Source index |
| `e` | End index |

---

<a name="emit-20-send-mode"></a>
#### Emit 20 — Send Mode

Change game engine and mode.

Example: `42[20,{"ga":"b","mo":"ar"}]`

| Key | Description |
|-----|-------------|
| `ga` | (see <a href="#game-engine-enum">Game Engine Enum</a>) |
| `mo` | (see <a href="#game-mode-enum">Game Mode Enum</a>) |

---

<a name="emit-21-send-wl-rounds"></a>
#### Emit 21 — Send WL (Rounds)

Example: `42[21,{"w":6}]`

| Key | Description |
|-----|-------------|
| `w` | Number of rounds to win |

---

<a name="emit-22-map-delete"></a>
#### Emit 22 — Map Delete

| Key | Description |
|-----|-------------|
| `d` | Map index to delete |

---

<a name="emit-23-map-add"></a>
#### Emit 23 — Map Add

Add a map to the queue (see <a href="#map-data-format">Map Data</a>)

Example: `42[23,{"m":"ILAMJAhBFBjBzCTl..."}]`

| Key | Description |
|-----|-------------|
| `m` | (see <a href="#map-data-format">Map Data</a>) |

---

<a name="emit-24-send-typing"></a>
#### Emit 24 — Send Typing

> [!NOTE]
> This Packet ID[^Packet-ID] is as of the ReadMe's last updated time unused or was left in the game debugging purposes

Send a typing indicator to other players.

---

<a name="emit-25-admin-inputs"></a>
#### Emit 25 — Admin Inputs

Send admin/host commands during a game.

| # | Description |
|---|-------------|
| 1 | Admin input data object (see <a href="#admin-input-data">Admin Input Data</a>) (passed directly) |

---

<a name="emit-26-change-other-team"></a>
#### Emit 26 — Change Other Team

Example: `42[26,{"targetID":1,"targetTeam":1}]`

| Key | Description |
|-----|-------------|
| `targetID` | Player ID to move |
| `targetTeam` | Target `Team` value |

---

<a name="emit-27-map-suggest"></a>
#### Emit 27 — Map Suggest

Example: `42[27,{"m":"ILAM...","mapname":"Cool Map","mapauthor":"Chaz"}]`

| Key | Description |
|-----|-------------|
| `m` | (see <a href="#map-data-format">Map Data</a>) |
| `mapname` | Map name |
| `mapauthor` | Map author |

---

<a name="emit-28-change-mode"></a>
#### Emit 28 — Change Mode

Change game mode settings.

| # | Description |
|---|-------------|
| 1 | (see <a href="#game-mode-enum">Game Engine Enum</a>) |

---

<a name="emit-29-send-balance"></a>
#### Emit 29 — Send Balance

Change a player's nerf/buff.

Example: `42[29,{"sid":2,"bal":-55}]`

| Key | Description |
|-----|-------------|
| `sid` | Player ID |
| `bal` | Balance amount (-100 to 100) |

---

<a name="emit-30-version-check"></a>
#### Emit 30 — Version Check

> [!NOTE]
> This Packet ID[^Packet-ID] is as of the ReadMe's last updated time unused or was left in the game debugging purposes

Example: `42[30]`

---

<a name="emit-31-send-debug-winner"></a>
#### Emit 31 — Send Debug Winner

> [!NOTE]
> This Packet ID[^Packet-ID] is as of the ReadMe's last updated time unused or was left in the game debugging purposes

Example: `42[31,{"wid":0}]`

| Key | Description |
|-----|-------------|
| `wid` | Winner's ID |

---

<a name="emit-32-team-settings-change"></a>
#### Emit 32 — Team Settings Change

Enable/disable teams.

Example: `42[32,{"t":true}]`

| Key | Description |
|-----|-------------|
| `t` | `true` to enable teams, `false` to disable |

---

<a name="emit-33-arm-record"></a>
#### Emit 33 — Arm Record

Save a replay.

Example: `42[33]`

---

<a name="emit-34-host-change"></a>
#### Emit 34 — Host Change

Transfer host to another player.

Example: `42[34,{"id":1}]`

| Key | Description |
|-----|-------------|
| `id` | Player ID receiving host |

---

<a name="emit-35-send-friended"></a>
#### Emit 35 — Send Friended

Send a friend request.

Example: `42[35,{"id":5}]`

| Key | Description |
|-----|-------------|
| `id` | Player ID to friend |

---

<a name="emit-36-start-countdown"></a>
#### Emit 36 — Start Countdown

Send "Game Starting in X" message.

Example: `42[36,{"num":3}]`

| Key | Description |
|-----|-------------|
| `num` | Countdown number |

---

<a name="emit-37-abort-countdown"></a>
#### Emit 37 — Abort Countdown

Send "countdown aborted" message.

Example: `42[37]`

---

<a name="emit-38-request-xp"></a>
#### Emit 38 — Request XP

Usually sent after a round. Server responds with Packet 46.

Example: `42[38]`

---

<a name="emit-39-map-vote"></a>
#### Emit 39 — Map Vote

Vote up/down on a map.

Example: `42[39,{"mapid":12345,"vote":1}]`

| Key | Description |
|-----|-------------|
| `mapid` | Map database ID |
| `vote` | `1` = thumbs up, `0` = thumbs down |

---

<a name="emit-40-inform-in-game"></a>
#### Emit 40 — Inform In Game

Sent by host to a player joining mid-game with the full game state.

Example: `42[40,{"sid":1,"allData":{"state":"jWCW9ah...","stateID":1,"fc":7,"inputs":[],"admin":[],"gs":{...},"random":[]}}]`

| Key | Description |
|-----|-------------|
| `sid` | Player to inform |
| `allData` | Full game state: `state` (LZ-String[^LZ-String] compressed), `stateID`, `fc` (frame count), `inputs` (input history), `admin` (admin inputs), `gs` (game settings), `random` (seed data) |

---

<a name="emit-41-get-pre-vote"></a>
#### Emit 41 — Get Pre Vote

Sent when a map starts playing to retrieve pre-existing vote data.

Example: `42[41,{"mapid":831011}]`

| Key | Description |
|-----|-------------|
| `mapid` | Map database ID |

---

<a name="emit-42-get-more-quick-play-maps"></a>
#### Emit 42 — Get More Quick Play Maps

| Key | Description |
|-----|-------------|
| `sf` | Search filter |

---

<a name="emit-43-update-rc-data"></a>
#### Emit 43 — Update RC Data
TODO verify ROUND COUNT

| Key | Description |
|-----|-------------|
| `rc` | RC data |

---

<a name="emit-44-tabbed"></a>
#### Emit 44 — Tabbed

AFK status.

Example: `42[44,{"out":true}]`

| Key | Description |
|-----|-------------|
| `out` | `true` = tabbed out/unfocused, `false` = focused |

---

<a name="emit-45-desync-test"></a>
#### Emit 45 — Desync Test

> [!NOTE]
> This Packet ID[^Packet-ID] is as of the ReadMe's last updated time unused or was left in the game debugging purposes

Test whether a player is desynced.

| Key | Description |
|-----|-------------|
| `sid` | Target player's slot ID |
| `a` | Test data / accumulator |

---

<a name="emit-46-send-desync-response"></a>
#### Emit 46 — Send Desync Response

> [!NOTE]
> This Packet ID[^Packet-ID] is as of the ReadMe's last updated time unused or was left in the game debugging purposes

| Key | Description |
|-----|-------------|
| `rid` | Request ID |
| `sid` | Slot ID |
| `s` | State data |
| `a` | Accumulator |

---

<a name="emit-47-round-complete"></a>
#### Emit 47 — Round Complete

Sent when a round is completed.

| Key | Description |
|-----|-------------|
| `mo` | Mode data |
| `mid` | Map ID |

---

<a name="emit-48-unknownpacket"></a>
#### Emit 48 — UnknownPacket
TODO

---

<a name="emit-49-unknownpacket"></a>
#### Emit 49 — UnknownPacket
TODO

---

<a name="emit-50-no-host-swap"></a>
#### Emit 50 — No Host Swap

When host leaves, the room ends instead of migrating.

Example: `42[50]`

---

<a name="emit-51-curate"></a>
#### Emit 51 — Curate

Curate a map via `/curate message` then `/curateyes`.

Example: `42[51,{"mapid":543321,"dbv":1,"comment":"wow, this should get added to the hotlist chaz"}]`

| Key | Description |
|-----|-------------|
| `mapid` | Map database ID |
| `dbv` | Database version |
| `comment` | Curation comment |

---

<a name="emit-52-room-name-update"></a>
#### Emit 52 — Room Name Update

Change room name via `/roomname "text"`.

Example: `42[52,{"newName":"text here"}]`

| Key | Description |
|-----|-------------|
| `newName` | New room name |

---

<a name="emit-53-room-password-update"></a>
#### Emit 53 — Room Password Update

Change/clear room password via `/roompass` or `/clearroompass`.

Example: `42[53,{"newPass":"password here"}]`

| Key | Description |
|-----|-------------|
| `newPass` | New password (empty string for `/clearroompass`) |

<a name="source-code-deobfuscation"></a>
## Source Code / Deobfuscation
> [^WARNING]
> THIS SECTION IS NOT ALLOWED CONTRIBUTIONS, WILL BE PURELY WRITTEN BY ME.
> 
<a name="common-data-schemes"></a>
## Common Data Schemes

<a name="team"></a>
### Team

```ts
enum Team {
  Spec   = 0, // Spectator
  FFA    = 1,
  Red    = 2,
  Blue   = 3,
  Green  = 4,
  Yellow = 5,
}
```

<a name="inputs"></a>
### Inputs

<a name="input-flags"></a>
#### Input Flags

```ts
enum InputFlags {
  None    = 0 << 0,  // 0
  Left    = 1 << 0,  // 1
  Right   = 1 << 1,  // 2
  Up      = 1 << 2,  // 4
  Down    = 1 << 3,  // 8
  Heavy   = 1 << 4,  // 16 (bit 4, also known as "Action 1")
  Special = 1 << 5,  // 32 (bit 5, also known as "Action 2")
}
```
For example, Right, Up and Special down (38) = InputFlags.Right | InputFlags.Up | InputFlags.Special // (1 << 1 | 1 << 2 | 1 << 5)

To check if a key is down = `(inputBits & InputFlags.Right) != 0` // bitwise AND mask check
To set a key = `inputBits | InputFlags.Left` `// bitwise OR adds flag`
To unset a key = `inputBits & ~Input.Left` // bitwise AND with NOT mask removes flag

<a name="input-object"></a>
#### Input Object

| Field | Type | Description |
|-------|------|-------------|
| `"i"` | int | Input bitmask (see [Input Flags](#input-flags)) |
| `"f"` | int | Frame number |
| `"c"` | int | Sequence number (increments per input) |

<a name="game-engine-enum"></a>
### Game Engine Enum
This tells the game which "GameEngine" to use, so it knows how to render, step, and initialise the game state.
All modes except "football"
```ts
enum GameEngine {
  Standard = "b",  // Uses the BonkEngine class
  Football = "f", // Uses the FootballEngine class
}
```

<a name="game-mode-enum"></a>
### Game Mode Enum

```ts
enum GameMode {
    Arrows = "ar",
    ArrowsDeath = "ard",
    Classic = "b", // Stands for "bonk"
    Simple = "bs", //Likely stands for "bonk simple"
    Football = "f", //Stands for "football"
    Grapple = "sp",  //Stands for "swing proximity"
    VTOL = "v", //probably stands for "vtol"
    SL = "sl", // quickplay, swingL?
    FT = "ft" // quickplay // Football
}

```

<a name="game-settings-object-gs"></a>
### Game Settings Object (`gs`)

TODO verify map: string comment
TODO verify q: boolean | string; 

```ts
interface GameSettings {
  map: string | object;  // Map data (typically not encoded? TODO verify)
  gt: number;            // Game type
  wl: number;            // Win/loss rounds
  q: boolean | string;   // Quick play (`false`, `"custom"`, `"bonkquick"`, etc.)
  tl: boolean;           // Team lock
  tea: boolean;          // Teams enabled
  ga: GameEngine;        // Game engine see
  mo: GameMode;          // Game mode
  bal: number[];         // Player balance/handicap array
}
```

<a name="map-data-format"></a>
### Map Data Format

Map data is an object compressed with LZ-String[^LZ-String] and encoded in Base64.

For the full map data structure and key mappings (e.g. `v` → `version`), see:
- [bonk-map](https://github.com/PixelMelt/bonk-map) — Community map parsing library
- [nameConverter.ts](https://github.com/PixelMelt/bonk-map/blob/23c39313420741709cea089b136f152900d3f3e5/src/util/nameConverter.ts#L1) — Actual mappings of the shorthand keys to their full names

<a name="status-codes"></a>
### Status Codes

Status messages received via Packet 16:

| Code | Description |
|------|-------------|
| `""` | Status message was raised without a message |
| `null` | couldn't reproduce protocol version 49, keep in mind that this could be possible |
| `avatar_data_invalid` | N/A |
| `bad_instruction_map_reorder` | N/A |
| `cant_ban_yourself` | You tried to kick yourself. You just can't do that. |
| `host_change_rate_limited` | You tried to give host too quickly. |
| `invalid guest name` | N/A |
| `invalid` | Generic/DesyncTest/Response Value Error, the reason this is returned changes with backend changes, it's likely returned as a last resort try catch till Chaz recodes it |
| `invalid_max_players` | N/A |
| `invalid_params (token)` | N/A |
| `invalid_params` | Error occurrs when invalid parameter inputs are send, this is a generic error most commonly found by Create room error/generic |
| `invalid_target_team` | You tried to change a players team into the wrong type. |
| `not_hosting` | You attempted to do an action that requires you to be the game's host. |
| `players_xp_too_high` | N/A |
| `players_xp_too_low` | N/A |
| `rate_limit` | Generic rate-limit. You did something too fast in a short period of time. |
| `rate_limit_abortcountdown` | You sent too many "Countdown aborted!" messages, in a short period of time. |
| `rate_limit_cot` | You changed other teams too quickly. |
| `rate_limit_countdown` | You sent too many "Game starting in \<x\>" messages, in a short period of time. |
| `rate_limit_mapsuggest` | You suggested maps too quickly. |
| `rate_limit_pong` | You sent the ping packet too quickly. |
| `rate_limit_ready` | You send READY too quickly, or pressed the [READY] button too quickly. |
| `rate_limit_rtl` | You tried to return to lobby paet too quickly in a short period of time. |
| `rate_limit_sgt` | You changed game type/mode too quickly. |
| `rate_limit_sma` | You changed the map too quickly. |
| `rate_limit_tl` | You locked the teams too quickly |
| `Connect error` | Generic Connect Error |
| `Initial data timeout` | You did not receive the initial data from the host after 6 seconds passed. |
| `already_in_this_room` | You tried to join a room that your user is already in. |
| `arm rate limited` | You spammed "Save Replay" too fast. |
| `banned` | You tried to join a room you've been banned from. |
| `guest` | You attemped to perform an action that requires you to be logged in. |
| `host change rate limited` | You changed hosts too fast |
| `join_rate_limited` | You've tried to join rooms too quickly. |
| `no_client_entry` | You sent some action but you're not in the room, or you were not permitted to. |
| `old_rotation` | N/A |
| `password_wrong` | You tried to join a passworded room, but you used the wrong password. |
| `room_full` | You tried to join a full room. |
| `room_not_found` | You tried to join a room that doesn't exist anymore. |

<a name="initial-game-state"></a>
### Initial Game State
A string compressed with LZ-String[^LZ-String] and encoded in Base64, in PSON[^PSON] format, with cases for the first 101 characters flipped.

To flip/unflip the case (works both ways):

```ts
let str = "";
for (let i = 0; i < 101; i++){
  str += String.fromCharCode(initialState.charCodeAt(i) ^ 32)
}
str += initialState.slice(101)
```

| Field | Description | Mode |
| ----- | ---- | ----- |
| players | Array of players | Any |
| discs | Array of player discs | Any |
| discDeaths | Array of player discs when they died | Any except football |
| scores | Player scores. Array index is player ID | Any |
| lscr | Winner ID | Any |
| fte | Frames till end | Any |
| ftu | Frames till unfreeze (start) | Any |
| seed | Random seed | Any |
| sts | Sounds this step | Any |
| ni | No Interpolation | Any |
| mm | Map info (name, author etc) | Any except football |
| ms | Map settings | Any except football |
| rl | Unused | Any except football |
| capZones | Capture zones | Any except football |
| physics | Bodies, Joints, Shapes, Fixtures, Z-indexes, Shape shrinks | Any except football |
| projectiles | Arrows | Arrows and Death Arrows |
| goalHeight | Goal Height. Always 13 | Football |
| borderThickness | Border Thickness. Always 5 | Football |
| borderThicknessXInner | Border Thickness X Inner. Always 25 | Football |
| borderThicknessYInner | Border Thickness Y Inner. Always 70 | Football |

<a name="timesync-response-data"></a>
### Timesync Response Data

| Field | Description |
| ----- | ----- |
| id | Timesync request ID |
| result | Unix timestamp of the server time (in milliseconds) |

<a name="admin-input-data"></a>
### Admin Input Data

| Field | Type | Notes |
| ----- | ---- | ----- |
| TODO  | TODO | TODO  |

<a name="mode-settings-object"></a>
### Mode Settings Object

| Field | Type | Notes |
| ----- | ---- | ----- |
| TODO  | TODO | TODO  |

<a name="team-settings-object"></a>
### Team Settings Object

| Field | Type | Notes |
| ----- | ---- | ----- |
| TODO  | TODO | TODO  |

<a name="full-game-state-data"></a>
### Full Game State Data

| Field | Type | Notes |
| ----- | ---- | ----- |
| TODO  | TODO | TODO  |

<a name="discdeathmethod"></a>
### DiscDeathMethod

Could also be refered to as DiedThisStepMethod. Method how a disc died, (all players have a disc id)

| Field | Description |
|-------|-------------|
| ? | N/A |
| DeathPhysicsObject | N/A |
| ? | N/A |
| CaptureComplete | N/A |
| OutOfBounds | N/A |

(see <a href="#map-data-format">Map Data</a>)

<a name="foot-notes"></a>
## Foot Notes
  [^custom-anchors]: **Custom Anchors** `<a name="...">` tags placed before headings for linking to different places in the markdown file. See github docs: [custom anchors](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#custom-anchors).
  [^AST]: **AST** Abstract syntax tree
  [^LZ-String]: **LZ-String** A string compression algorithm used for encoding map and game state data. [GitHub](https://github.com/pieroxy/lz-string)
  [^Packet-ID]: **Packet ID** A Packet ID is a numeric or identifier value used to distinguish different network packets in a communication system. It is commonly used in both client and server networking to determine how incoming and outgoing messages should be handled. Packet ID may serve different purposes depending on direction (incoming `socket.on()` vs outgoing `socket.emit()`).
  [^PSON]: **PSON** An efficient binary encoding for JSON data. [GitHub](https://github.com/dcodeIO/PSON)