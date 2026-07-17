# Demystifying Bonk
Last updated: *17-7-2026, 19:48:59*

A repository for various resources to understand the inner workings of [bonk.io](https://bonk.io) api protocol 49.


<!-- reservedForToc -->
  - [Emit](#emit) *line 11*
- [Contributing to the repository](#contributing-to-the-repository) *line 254*
  - [Requested Todo](#requested-todo) *line 268*
    - [Modding](#modding) *line 276*
- [Network](#network) *line 279*
  - [Community Resources](#community-resources) *line 298*
  - [Incoming Packets (Server Client)](#incoming-packets-server-client) *line 322*
    - [On 1 - Update Pings](#on-1---update-pings) *line 324*
    - [On 2 - Room Created](#on-2---room-created) *line 362*
    - [On 3 - Room Join](#on-3---room-join) *line 400*
    - [On 4 - Player Join](#on-4---player-join) *line 463*
    - [On 5 - Player Leave](#on-5---player-leave) *line 481*
    - [On 6 - Host Leave](#on-6---host-leave) *line 494*
    - [On 7 - Inputs](#on-7---inputs) *line 508*
    - [On 8 - Ready Change](#on-8---ready-change) *line 521*
    - [On 9 - All Ready Reset](#on-9---all-ready-reset) *line 534*
    - [On 10 - Server Mute](#on-10---server-mute) *line 542*
    - [On 11 - Server Unmute](#on-11---server-unmute) *line 556*
    - [On 12 - Username Change](#on-12---username-change) *line 570*
    - [On 13 - Game End](#on-13---game-end) *line 583*
    - [On 14 - Reserved](#on-14---reserved) *line 591*
    - [On 15 - Game Start](#on-15---game-start) *line 600*
    - [On 16 - Status Message](#on-16---status-message) *line 614*
    - [On 17 - Reserved](#on-17---reserved) *line 626*
    - [On 18 - Team Change](#on-18---team-change) *line 635*
    - [On 19 - Teamlock Toggle](#on-19---teamlock-toggle) *line 648*
    - [On 20 - Chat Message](#on-20---chat-message) *line 660*
    - [On 21 - Initial Data](#on-21---initial-data) *line 673*
    - [On 23 - Timesync Response](#on-23---timesync-response) *line 685*
    - [On 24 - Player Banned/Kicked](#on-24---player-bannedkicked) *line 697*
    - [On 25 - Map Reorder](#on-25---map-reorder) *line 710*
    - [On 26 - Mode Change](#on-26---mode-change) *line 721*
    - [On 27 - Change WL (Rounds)](#on-27---change-wl-rounds) *line 734*
    - [On 28 - Map Delete](#on-28---map-delete) *line 746*
    - [On 29 - Map Switch](#on-29---map-switch) *line 756*
    - [On 30 - Typing](#on-30---typing) *line 768*
    - [On 31 - Admin Inputs](#on-31---admin-inputs) *line 781*
    - [On 32 - AFK Warn](#on-32---afk-warn) *line 812*
    - [On 33 - Map Suggest (Host)](#on-33---map-suggest-host) *line 820*
    - [On 34 - Map Suggest (Client)](#on-34---map-suggest-client) *line 833*
    - [On 35 - Change Mode](#on-35---change-mode) *line 847*
    - [On 36 - Balance Set](#on-36---balance-set) *line 857*
    - [On 37 - Reserved](#on-37---reserved) *line 870*
    - [On 38 - Debug Winner](#on-38---debug-winner) *line 879*
    - [On 39 - Team Settings Change](#on-39---team-settings-change) *line 893*
    - [On 40 - Save Replay](#on-40---save-replay) *line 903*
    - [On 41 - Host Change](#on-41---host-change) *line 915*
    - [On 42 - Friend Request](#on-42---friend-request) *line 925*
    - [On 43 - Countdown](#on-43---countdown) *line 937*
    - [On 44 - Abort Countdown](#on-44---abort-countdown) *line 949*
    - [On 45 - Player Leveled Up](#on-45---player-leveled-up) *line 957*
    - [On 46 - Local Gained XP](#on-46---local-gained-xp) *line 967*
    - [On 47 - Local Revert](#on-47---local-revert) *line 979*
    - [On 48 - Recv In Game](#on-48---recv-in-game) *line 989*
    - [On 49 - Room Share Link](#on-49---room-share-link) *line 999*
    - [On 50 - Map Vote Update](#on-50---map-vote-update) *line 1012*
    - [On 51 - More Quick Maps](#on-51---more-quick-maps) *line 1023*
    - [On 52 - Tabbed](#on-52---tabbed) *line 1031*
    - [On 53 - Desync Request](#on-53---desync-request) *line 1044*
    - [On 54 - Desync Response](#on-54---desync-response) *line 1056*
    - [On 57 - Curate Result](#on-57---curate-result) *line 1068*
    - [On 58 - Room Name Update](#on-58---room-name-update) *line 1081*
    - [On 59 - Room Password Update](#on-59---room-password-update) *line 1093*
    - [On 60 - Server Message](#on-60---server-message) *line 1105*
  - [Outgoing Packets](#outgoing-packets) *line 1113*
    - [Emit 1 - Ping Acknowledgement](#emit-1---ping-acknowledgement) *line 1115*
    - [Emit 2 - Test Ping](#emit-2---test-ping) *line 1127*
    - [Emit 3 - Get Debug](#emit-3---get-debug) *line 1136*
    - [Emit 4 - Send Inputs](#emit-4---send-inputs) *line 1145*
    - [Emit 5 - Trigger Start](#emit-5---trigger-start) *line 1159*
    - [Emit 6 - Change Own Team](#emit-6---change-own-team) *line 1172*
    - [Emit 7 - Team Lock](#emit-7---team-lock) *line 1182*
    - [Emit 8 - Silence Player](#emit-8---silence-player) *line 1192*
    - [Emit 9 - Kick/Ban Player](#emit-9---kickban-player) *line 1205*
    - [Emit 10 - Chat Message](#emit-10---chat-message) *line 1216*
    - [Emit 11 - Inform In Lobby](#emit-11---inform-in-lobby) *line 1226*
    - [Emit 12 - Create Room](#emit-12---create-room) *line 1239*
    - [Emit 13 - Join Room](#emit-13---join-room) *line 1269*
    - [Emit 14 - Return To Lobby](#emit-14---return-to-lobby) *line 1288*
    - [Emit 16 - Set Ready](#emit-16---set-ready) *line 1294*
    - [Emit 17 - All Ready Reset](#emit-17---all-ready-reset) *line 1304*
    - [Emit 18 - Timesync request](#emit-18---timesync-request) *line 1312*
    - [Emit 19 - Map Reorder](#emit-19---map-reorder) *line 1322*
    - [Emit 20 - Send Mode](#emit-20---send-mode) *line 1331*
    - [Emit 21 - Send WL (Rounds)](#emit-21---send-wl-rounds) *line 1344*
    - [Emit 22 - Map Delete](#emit-22---map-delete) *line 1354*
    - [Emit 23 - Map Add](#emit-23---map-add) *line 1362*
    - [Emit 24 - Send Typing](#emit-24---send-typing) *line 1374*
    - [Emit 25 - Admin Inputs](#emit-25---admin-inputs) *line 1383*
    - [Emit 26 - Change Other Team](#emit-26---change-other-team) *line 1395*
    - [Emit 27 - Map Suggest](#emit-27---map-suggest) *line 1406*
    - [Emit 28 - Change Mode](#emit-28---change-mode) *line 1418*
    - [Emit 29 - Send Balance](#emit-29---send-balance) *line 1428*
    - [Emit 30 - Version Check](#emit-30---version-check) *line 1441*
    - [Emit 31 - Send Debug Winner](#emit-31---send-debug-winner) *line 1450*
    - [Emit 32 - Team Settings Change](#emit-32---team-settings-change) *line 1463*
    - [Emit 33 - Arm Record](#emit-33---arm-record) *line 1475*
    - [Emit 34 - Host Change](#emit-34---host-change) *line 1483*
    - [Emit 35 - Send Friended](#emit-35---send-friended) *line 1495*
    - [Emit 36 - Start Countdown](#emit-36---start-countdown) *line 1507*
    - [Emit 37 - Abort Countdown](#emit-37---abort-countdown) *line 1519*
    - [Emit 38 - Request XP](#emit-38---request-xp) *line 1527*
    - [Emit 39 - Map Vote](#emit-39---map-vote) *line 1535*
    - [Emit 40 - Inform In Game](#emit-40---inform-in-game) *line 1548*
    - [Emit 41 - Get Pre Vote](#emit-41---get-pre-vote) *line 1561*
    - [Emit 42 - Get More Quick Play Maps](#emit-42---get-more-quick-play-maps) *line 1573*
    - [Emit 43 - Update RC Data](#emit-43---update-rc-data) *line 1581*
    - [Emit 44 - Tabbed](#emit-44---tabbed) *line 1591*
    - [Emit 45 - Desync Test](#emit-45---desync-test) *line 1603*
    - [Emit 46 - Send Desync Response](#emit-46---send-desync-response) *line 1617*
    - [Emit 47 - Round Complete](#emit-47---round-complete) *line 1631*
    - [Emit 50 - No Host Swap](#emit-50---no-host-swap) *line 1642*
    - [Emit 51 - Curate](#emit-51---curate) *line 1650*
    - [Emit 52 - Room Name Update](#emit-52---room-name-update) *line 1664*
    - [Emit 53 - Room Password Update](#emit-53---room-password-update) *line 1676*
- [Common Data Schemes](#common-data-schemes) *line 1686*
  - [Data](#data) *line 1688*
    - [Token Format](#token-format) *line 1690*
  - [Enums](#enums) *line 1716*
    - [Team](#team) *line 1718*
    - [Server Mute Broadcast type enum](#server-mute-broadcast-type-enum) *line 1729*
    - [Game Engine Enum](#game-engine-enum) *line 1737*
    - [Game Mode Enum](#game-mode-enum) *line 1746*
    - [Body Type Enum](#body-type-enum) *line 1760*
    - [Quality Enum](#quality-enum) *line 1770*
    - [Projectile Type Enum](#projectile-type-enum) *line 1780*
    - [Avatar Shape Enum](#avatar-shape-enum) *line 1788*
    - [Disc Death Method Enum](#disc-death-method-enum) *line 1839*
  - [Inputs](#inputs) *line 1850*
    - [Input Flags](#input-flags) *line 1899*
    - [Input Object](#input-object) *line 1917*
    - [Frame Input](#frame-input) *line 1925*
  - [Game Configuration](#game-configuration) *line 1938*
    - [Game Settings Object (`gs`)](#game-settings-object-gs) *line 1940*
    - [Mode Settings Object](#mode-settings-object) *line 1956*
    - [Team Settings Object](#team-settings-object) *line 1965*
  - [Map](#map) *line 1974*
    - [Map Settings](#map-settings) *line 1976*
    - [Map Metadata](#map-metadata) *line 1988*
    - [Map Data Format](#map-data-format) *line 2010*
      - [Capture Zone](#capture-zone) *line 2021*
    - [Physics](#physics) *line 2034*
      - [Shapes](#shapes) *line 2038*
        - [Base Shape](#base-shape) *line 2042*
        - [Box Shape](#box-shape) *line 2049*
        - [Circle Shape](#circle-shape) *line 2061*
        - [Poly Shape](#poly-shape) *line 2071*
        - [Chain Shape](#chain-shape) *line 2082*
      - [Fixture](#fixture) *line 2096*
      - [Body](#body) *line 2113*
      - [Joints](#joints) *line 2142*
        - [Base Joint](#base-joint) *line 2146*
        - [Revolute Joint](#revolute-joint) *line 2160*
        - [Distance Joint](#distance-joint) *line 2182*
        - [Legacy Path Joint](#legacy-path-joint) *line 2200*
        - [Legacy Springy Joint](#legacy-springy-joint) *line 2222*
        - [Prismatic Joint](#prismatic-joint) *line 2240*
        - [Soft Rod Joint](#soft-rod-joint) *line 2262*
        - [Gear Joint](#gear-joint) *line 2278*
      - [Physics State](#physics-state) *line 2292*
  - [Game State](#game-state) *line 2305*
    - [Initial Game State](#initial-game-state) *line 2307*
      - [Bonk Game State](#bonk-game-state) *line 2324*
      - [Football Game State](#football-game-state) *line 2349*
    - [Full Game State Data](#full-game-state-data) *line 2370*
  - [Discs](#discs) *line 2416*
    - [Bonk Disc](#bonk-disc) *line 2418*
    - [Football Disc](#football-disc) *line 2449*
    - [Disc Death](#disc-death) *line 2465*
      - [DiscDeathMethod](#discdeathmethod) *line 2479*
  - [Common Types](#common-types) *line 2489*
    - [Point 2D](#point-2d) *line 2491*
    - [Point 2D Vector](#point-2d-vector) *line 2500*
    - [Sounds This Step](#sounds-this-step) *line 2509*
    - [Swing State](#swing-state) *line 2518*
  - [Common Types](#common-types) *line 2528*
    - [Avatar Data Format](#avatar-data-format) *line 2530*
      - [Avatar](#avatar) *line 2534*
      - [AvatarLayer](#avatarlayer) *line 2541*
  - [Server](#server) *line 2559*
    - [Status Codes](#status-codes) *line 2561*
    - [Timesync Response Data](#timesync-response-data) *line 2607*
    - [Admin Input Data](#admin-input-data) *line 2614*
- [HTTP Requests](#http-requests) *line 2621*
  - [Account Endpoints](#account-endpoints) *line 2628*
    - [register_legacy.php](#register_legacyphp) *line 2630*
    - [login_legacy.php](#login_legacyphp) *line 2658*
    - [login_auto.php](#login_autophp) *line 2671*
    - [login_clearauto.php](#login_clearautophp) *line 2682*
    - [account_changepassword.php](#account_changepasswordphp) *line 2690*
    - [account_savecontrols.php](#account_savecontrolsphp) *line 2707*
  - [Friends Endpoints](#friends-endpoints) *line 2716*
    - [friends.php](#friendsphp) *line 2718*
  - [Map Endpoints](#map-endpoints) *line 2737*
    - [Map Favorite Endpoints](#map-favorite-endpoints) *line 2739*
      - [map_fave.php](#map_favephp) *line 2741*
    - [Map Search Endpoints](#map-search-endpoints) *line 2758*
      - [map_getsearch.php](#map_getsearchphp) *line 2760*
      - [map_getfresh.php](#map_getfreshphp) *line 2780*
      - [map_getfave.php](#map_getfavephp) *line 2796*
      - [map_getown.php](#map_getownphp) *line 2813*
    - [Map B1 Endpoints (Bonk1 Legacy Maps)](#map-b1-endpoints-bonk1-legacy-maps) *line 2829*
      - [map_b1_getfave.php](#map_b1_getfavephp) *line 2831*
      - [map_b1_getown.php](#map_b1_getownphp) *line 2848*
      - [map_b1_getbest.php](#map_b1_getbestphp) *line 2865*
      - [map_b1_getsearch.php](#map_b1_getsearchphp) *line 2881*
    - [Map Management Endpoints](#map-management-endpoints) *line 2901*
      - [map_save_pub.php](#map_save_pubphp) *line 2903*
      - [map_delete.php](#map_deletephp) *line 2928*
  - [Replay Endpoints](#replay-endpoints) *line 2937*
      - [replay_submit.php](#replay_submitphp) *line 2939*
      - [replay_get.php](#replay_getphp) *line 2950*
      - [replay_report.php](#replay_reportphp) *line 2968*
  - [Room Endpoints](#room-endpoints) *line 2982*
      - [getrooms.php](#getroomsphp) *line 2984*
      - [getroomaddress.php](#getroomaddressphp) *line 3006*
  - [Matchmaking Endpoints](#matchmaking-endpoints) *line 3026*
      - [matchmaking_maps.php](#matchmaking_mapsphp) *line 3028*
      - [matchmaking_query.php](#matchmaking_queryphp) *line 3040*
  - [Avatar Endpoints](#avatar-endpoints) *line 3063*
      - [avatar_update.php](#avatar_updatephp) *line 3065*
  - [static Endpoints](#static-endpoints) *line 3077*
      - [combinedplayercount.txt](#combinedplayercounttxt) *line 3081*
      - [Hot Maps Cache](#hot-maps-cache) *line 3111*
    - [picks](#picks) *line 3135*
- [Source Code / Deobfuscation](#source-code-deobfuscation) *line 3151*
  - [Deobfuscation Tools](#deobfuscation-tools) *line 3162*
    - [[kookywarrior/bonk-deobfuscator](https://github.com/kookywarrior/bonk-deobfuscator)](#kookywarriorbonk-deobfuscatorhttpsgithubcomkookywarriorbonk-deobfuscator) *line 3164*
    - [[Kitaes-software/bonk-deobfuscator](https://github.com/Kitaes-software/bonk-deobfuscator)](#kitaes-softwarebonk-deobfuscatorhttpsgithubcomkitaes-softwarebonk-deobfuscator) *line 3169*
- [Snippets](#snippets) *line 3179*
  - [PeerID](#peerid) *line 3182*
- [Foot Notes](#foot-notes) *line 3228*

  
<a name="contributing-to-the-repository"></a>
## Contributing to the repository

Contributions are welcome (*and apperciated*)! If you have information, resources, or corrections to add, please open a [pull request](../../pulls) or create an [issue](../../issues) describing what you'd like to add or change.

If you have used AI in your research, please mention it in either the pull request or the issue. This helps keep the repository as accurate as possible.
In fact, much of this README was written with the help of AI. However, the research itself was conducted primarily through **human** manual, heuristic, and automated analysis. *dirty clankers*

> [!NOTE]
> A [ReadMe fixer](fixReadMe.ts) script is run after every commit (or you can run it yourself after committing / before submitting a pull request). It handles the following automatically:
> - **Last updated** timestamp is automatically updated.
> - **Table of Contents** is generated from headings, along with custom anchors put before them automatically for linking.[^CustomAnchors]
> - To exclude a heading from the Table of Contents, add `<!-- skipForTableContent -->` on the line before it.
> - **Footnote references** are applied automatically. For example, if a footnote `` is defined, every occurrence of `AST` will have `` appended. Please be mindful of capitalisation as matching is case-sensitive.[^AST]

<a name="requested-todo"></a>
### Requested Todo

- Anything marked with "todo" is
- Any types marked as "any" or "?"
- <a href="hot-maps-cache">Hot Maps Cache</a> and <a href="picks">Picks</a> have a missing response table for "maps" aswell
- Add Replay Data format
- Create Room Mode enum `"custom"`, `"bonkquick"`, `"arrowsquick"`, or `"grapplequick"`

<a name="modding"></a>
#### Modding
Any information about "modding" or creating userscripts is highly appreciated. The focus should be on the basics rather than in-depth topics such as reverse engineering the game. Simple explanations of how the [Code Injector](https://greasyfork.org/en/scripts/433861-code-injector-bonk-io) works, including how to replace a string with regex to modify the game's behavior, or access certain things (e.g like the current gamestate)

<a name="network"></a>
## Network

Bonk.io networking uses **Socket.IO** for client-server communication. Each game packet is a JSON array prefixed with `42`, where the first element is the Packet ID:[^PacketID][^Socket.IO]

```
42[packetID, ...args]
```

> [!NOTE]
> The same Packet ID may serve different purposes depending on direction (incoming `socket.on()` vs outgoing `socket.emit()`).[^PacketID][^Emit]

There is a exception to this rule however __<a href="#emit-18---timesync-request">Emit 18</a>__:
```
42ackID[18,{...}]
```

> [!NOTE]
> ackID is a number that increments each time the message containing it gets sent.

<a name="community-resources"></a>
### Community Resources

- [BonkBot Library Python](https://github.com/Fenekiro/bonk_bot)
> [!NOTE]
> Quite a decently written library for creating clients/bots to connect to the Socket.IO server for Python[^Socket.IO]

- [BonkBot (JavaScript)](https://github.com/PixelMelt/BonkBot)
> [!NOTE]
> Similar type of bot library as https://github.com/Fenekiro/bonk_bot, except written in JavaScript. It is less stable and the codebase is quite messy written, it is still a useful reference/resource.

- [Manifold Server](https://github.com/SneezingCactus/manifold-server)
- [Manifold Client](https://github.com/SneezingCactus/manifold-client)
> [!NOTE]
> Open-source implementation of the bonk.io multiplayer server and a corresponding client, designed to allow complete freedom over game backend and restrictions.

- [DemystifyBonk](https://github.com/UnmatchedBracket/DemystifyBonk) - Community-maintained bonk.io reverse engineering project, mostly regarding
> [!WARNING]
> This project is quite outdated, and there isn't anything in packets.md that is not included in this repository, however I have taken quite some information from the pa

- [greasyfork.org/scripts?q=bonk.io](https://greasyfork.org/scripts?filter_locale=0&q=bonk.io)
Userscripts for bonk.io to mod the game, most of these userscripts require [Code Injector](https://greasyfork.org/en/scripts/433861-code-injector-bonk-io).
> [!WARNING]
> Information on creating these mods, or using them is currently not documented, this is TODO and I will gladly accept help. See<a href="#modding">Requested Todo - Modding</a>

<a name="incoming-packets-server-client"></a>
### Incoming Packets (Server Client)

<a name="on-1---update-pings"></a>
#### On 1 - Update Pings

Provides other players' ping times and measures your own. The client must echo back the ping ID to complete the round-trip measurement.

Example: `42[1,{"30":180,"33":148,"34":190},9]`

<details>
<!-- skipForTableContent -->
<summary><a name="snippet-deobfuscated-handler-code-on-1-333"></a>Deobfuscated Handler Code On 1</summary>

```js
_SocketIO__server.on(1, (Y_W, _id) => {
  _SocketIO__server.emit(1, {
    id: _id
  });
  _emitEvent_("gotPingData", Y_W);
});

function _onGotPingData(pingDict) {
  for (var playerId in pingDict) {
    if (_playersArray__playerArray[playerId]) {
      _playersArray__playerArray[playerId].ping = pingDict[playerId];
    }
  }
  if (_Lobby) {
    _Lobby.updatePings();
  }
}
```
</details>

| # | Description |
|---|-------------|
| 1 | Object with Player IDs as keys and ping times (ms) as values |
| 2 | Ping request ID - echo back as `42[1,{"id":<number>}]` |

---

<a name="on-2---room-created"></a>
#### On 2 - Room Created

Sent when you have successfully created a room. Your player slot ID is always 0.

Example: `42[2,"TCwlcVAGzgI6J-4gAAHo",1,null]`

<details>
<!-- skipForTableContent -->
<summary><a name="snippet-deobfuscated-handler-code-on-2-371"></a>Deobfuscated Handler Code On 2</summary>

```js
_SocketIO__server.on(2, function (roomAddress, team, mapListQuick) {
  localSessionID = 0;
  _emitEvent_("status", "Room created");
  _emitEvent_("createdRoom", team, mapListQuick);
});

function _onCreatedRoom(team, mapListQuick) {
  if (mapListQuick) {
    _QuickPlayMaps.addMaps(mapListQuick);
  }
  if (quick) {
    _startGame_();
  } else {
    _Lobby.show();
  }
}
```
</details>

| # | Description |
|---|-------------|
| 1 | Room Address - equal to the one you would get if you'd send a request to <a href="getroomaddressphp">getroomaddress.php</a>
| 2 | Team |
| 3 | Map list object for quick play |

---

<a name="on-3---room-join"></a>
#### On 3 - Room Join

Provides lobby information when you join an existing room.

Example: `42[3,3,0,[{"peerID":"vuzvugdrnja00000","userName":"user one","guest":true,"team":1,"level":0,"ready":false,"tabbed":true,"avatar":{"layers":[],"bc":9315498}},null,null,{"peerID":"nx25am3w8d700000","userName":"left paren","guest":false,"team":1,"level":106,"ready":false,"tabbed":false,"avatar":{...}}],0,false,901003,"mtomw",null]`[^PeerID]

<details>
<!-- skipForTableContent -->
<summary><a name="snippet-deobfuscated-handler-code-on-3-409"></a>Deobfuscated Handler Code On 3</summary>

```js
_SocketIO__server.on(3, function (sessionId, hostID, playerList, timestamp, teamsLock, _autoJoinID, _autoJoinPassBypass, mapListQuick) {
  localSessionID = sessionId;
  this.hostID = hostID;
  this.autoJoinID = _autoJoinID;
  this.autoJoinPassBypass = _autoJoinPassBypass;
  for (let i = 0; i < playerList.length; i++) {
    if (playerList[i]) {
      connectedPeers[i] = new _NetworkPeer_(playerList[i].peerID);
      if (i != localSessionID) {
        if (enableP2PConnections && !_NetworkEngine_.np) {
          _connectToPlayerP2P_(i);
        }
      }
    }
  }
  _emitEvent_("status", "Joined room, awaiting first data");
  _emitEvent_("joinedRoom", localSessionID, playerList, 2, timestamp, mapListQuick);
  _timeout = setTimeout(_onInitialDataTimeout_, 6000);
});

function _onJoinedRoom(localSessionId, playerList, C2u, timestamp, mapsQuickplay) {
  _currentPlayerID__localPlayer = localSessionId;
  if (mapsQuickplay) {
    _QuickPlayMaps.addMaps(mapsQuickplay);
  }
  for (var i = 0; i < playerList.length; i++) {
    if (playerList[i]) {
      _playersArray__playerArray[i] = {};
      for (var _player in playerList[i]) {
        _playersArray__playerArray[i][_player] = playerList[i][_player];
      }
      _playersArray__playerArray[i].avatar = new _Avatar_();
      _playersArray__playerArray[i].avatar.fromObject(playerList[i].avatar);
    }
  }
}
```
</details>

| # | Description |
|---|-------------|
| 1 | Your Player ID |[^PlayerID]
| 2 | Host's Player ID |[^PlayerID][^Host]
| 3 | Player list array (indexed by slot ID, `null` = empty slot). Each player: `{ peerID, userName, guest, team, level, ready, tabbed, avatar }` |[^PeerID]
| 4 | Server Unix timestamp |
| 5 | `true` if teams are locked |
| 6 | Room ID for share link (`https://bonk.io/<roomID padded to 6 digits><bypass>`) (autoJoinID) |
| 7 | Room bypass code for share link (autoJoinPassBypass) |
| 8 | Map list for quick play (`null` normally) |

---

<a name="on-4---player-join"></a>
#### On 4 - Player Join

A new player has joined the room.

Example: `42[4,21,"0qh12mq737fh0000","left paren",false,39,1,{"layers":[],"bc":61591}]`

| # | Description |
|---|-------------|
| 1 | New Player ID |[^PlayerID]
| 2 | PeerID |[^PeerID]
| 3 | Username |
| 4 | `true` if guest |
| 5 | Player level (0 if guest) |
| 6 | Whether joined via share link bypass |
| 7 | <a href="#avatar-data-format">Avatar</a> data `{ layers, bc }` |

---

<a name="on-5---player-leave"></a>
#### On 5 - Player Leave

A player has disconnected from the room.

Example: `42[5,13,14511]`

| # | Description |
|---|-------------|
| 1 | Player ID |[^PlayerID]
| 2 | Accumulator / frame tick at time of departure |

---

<a name="on-6---host-leave"></a>
#### On 6 - Host Leave

The host left; a new host is assigned (host migration).[^Host]

Examples: `42[6,1,0,49753339064], `42[6,0,-1,49753339073]`

| # | Description |
|---|-------------|
| 1 | Old host's ID |[^Host]
| 2 | New host's ID (`-1` = host closed the room) |[^Host]
| 3 | Accumulator |

---

<a name="on-7---inputs"></a>
#### On 7 - Inputs

Game input data from another player, relayed through the server.

Examples: `42[7,1,{"i":38,"f":324,"c":45}]`, `42[7,1,{"i":25,"f":531,"c":108}]`

| # | Description |
|---|-------------|
| 1 | Player ID of the sender |[^PlayerID]
| 2 | <see <a href="#input-object">Input Object</a> |

---

<a name="on-8---ready-change"></a>
#### On 8 - Ready Change

A player toggled their ready status.

Example: `42[8,1,true]`

| # | Description |
|---|-------------|
| 1 | Player ID |[^PlayerID]
| 2 | `true` if ready (checkmark), `false` otherwise |

---

<a name="on-9---all-ready-reset"></a>
#### On 9 - All Ready Reset

All players' ready states have been reset (e.g., after a setting change).

Example: `42[9]`

---

<a name="on-10---server-mute"></a>
#### On 10 - Server Mute

> [!NOTE]
> This Packet ID is as of the ReadMe's last updated time unused or was left in the game debugging purposes[^PacketID]

Received when a player is muted by the server.

| # | Description |
|---|-------------|
| 1 | Muted player's slot ID |
| 2 | (see <a href="#broadcast-type-enum">Broadcast Type Enum</a>) |

---

<a name="on-11---server-unmute"></a>
#### On 11 - Server Unmute

> [!NOTE]
> This Packet ID is as of the ReadMe's last updated time unused or was left in the game debugging purposes[^PacketID]

Received when a player is unmuted by the server.

| # | Description |
|---|-------------|
| 1 | Unmuted player's slot ID |
| 2 | (see <a href="#broadcast-type-enum">Broadcast Type Enum</a>) |

---

<a name="on-12---username-change"></a>
#### On 12 - Username Change

A non-guest player with the same username as a guest joined, so the guest's username is forced to change.

Example: `42[12,0,"123qwe2"]`

| # | Description |
|---|-------------|
| 1 | Player ID |[^PlayerID]
| 2 | New username |

---

<a name="on-13---game-end"></a>
#### On 13 - Game End

The game has ended and all players return to the lobby.

Example: `42[13]`

---

<a name="on-14---reserved"></a>
#### On 14 - Reserved

> [!NOTE]
> This Packet ID is as of the ReadMe's last updated time unused or was left in the game debugging purposes[^PacketID]

Registered but handler is empty. Reserved for future use or deprecated.

---

<a name="on-15---game-start"></a>
#### On 15 - Game Start

A game has been scheduled to start by the host.[^Host]

Example: `42[15,1658450696036,"jWCW9ahaqG6GsGbWmycybYa...","ILAM..."]`

| # | Description |
|---|-------------|
| 1 | Unix timestamp of game start |
| 2 | Initial game state (see <a href="#initial-game-state">Initial Game State</a>) |
| 3 | Game settings object (see <a href="#game-settings-object-gs">Game Settings Object (`gs`)</a>) |

---

<a name="on-16---status-message"></a>
#### On 16 - Status Message

A status/error message from the server.

Example: `42[16,"rate_limit_ready"]`

| # | Description |
|---|-------------|
| 1 | Status code - see <a href="#status-codes">Status COdes</a> |

---

<a name="on-17---reserved"></a>
#### On 17 - Reserved

> [!NOTE]
> This Packet ID is as of the ReadMe's last updated time unused or was left in the game debugging purposes[^PacketID]

Registered but handler is empty. Reserved for future use or deprecated.

---

<a name="on-18---team-change"></a>
#### On 18 - Team Change

A player changed teams.

Example: `42[18,2,0]`

| # | Description |
|---|-------------|
| 1 | Player ID |[^PlayerID]
| 2 | New <a href="#team">Team</a> value |

---

<a name="on-19---teamlock-toggle"></a>
#### On 19 - Teamlock Toggle

Teams were locked or unlocked.

Example: `42[19,true]`

| # | Description |
|---|-------------|
| 1 | `true` if locked, `false` if unlocked |

---

<a name="on-20---chat-message"></a>
#### On 20 - Chat Message

A chat message was received.

Example: `42[20,0,"hello"]`

| # | Description |
|---|-------------|
| 1 | Sender's Player ID |[^PlayerID]
| 2 | Message text |

---

<a name="on-21---initial-data"></a>
#### On 21 - Initial Data

Sent by the host after you join a room, containing map and game data. Clears the 6-second initial data timeout.[^Host]

Example: `42[21,{"map":{"v":15,"s":{"re":false,"nc":false,"pq":1,"gd":25,"fl":false},"physics":{"shapes":[],"fixtures":[],"bodies":[],"bro":[],"joints":[],"ppm":12},"spawns":[],"capZones":[],"m":{"a":"riggad","n":"Unnamed","dbv":2,"dbid":-1,"authid":-1,"date":"","rxid":0,"rxn":"","rxa":"","rxdb":1,"cr":[],"pub":false,"mo":""}},"gt":2,"wl":3,"q":false,"tl":false,"tea":false,"ga":"b","mo":"b","bal":[]}]`

| # | Description |
|---|-------------|
| 1 | Game settings object (see <a href="#game-settings-object-gs">Game Settings Object (`gs`)</a>) with full lobby state |

---

<a name="on-23---timesync-response"></a>
#### On 23 - Timesync Response

Time synchronization response from the server. Used by the `timesync` library, not a game packet.

Example `42[23,{"id":82,"result":1784281173297}]`

| # | Description |
|---|-------------|
| 1 | Timesync response data object (see <a href="#timesync-response-data">Timesync Response Data</a>) |

---

<a name="on-24---player-bannedkicked"></a>
#### On 24 - Player Banned/Kicked

The host has kicked or banned a player.[^Host]

Example: `42[24,1,false]`

| # | Description |
|---|-------------|
| 1 | Kicked/banned Player ID |[^PlayerID]
| 2 | `true` = kick only (can rejoin), `false` = banned (permanent for this room session) |

---

<a name="on-25---map-reorder"></a>
#### On 25 - Map Reorder

The map queue order has been changed.

| # | Description |
|---|-------------|
| 1 | Source index |
| 2 | Destination index |

---

<a name="on-26---mode-change"></a>
#### On 26 - Mode Change

Mode changed.

Example: `42[26,"b","ard"]`

| # | Description |
|---|-------------|
| 1 | (see <a href="#game-engine-enum">Game Engine Enum</a>) |
| 2 | (see <a href="#game-mode-enum">Game Mode Enum</a>) |

---

<a name="on-27---change-wl-rounds"></a>
#### On 27 - Change WL (Rounds)

Win/loss round count changed.

Example: `42[27,7]`

| # | Description |
|---|-------------|
| 1 | New round count |

---

<a name="on-28---map-delete"></a>
#### On 28 - Map Delete

A map was removed from the queue.

| # | Description |
|---|-------------|
| 1 | Index of deleted map |

---

<a name="on-29---map-switch"></a>
#### On 29 - Map Switch

A new map has been added to the queue. (see <a href="#map-data-format">Map Data</a>)

Example: `42[29,"ILAMJAhBFBjBzCTlMiAJgNQEYFsCsAFtgOqYDWIhAjLAEyYCeAkgOICcArgFrQr8gACgHpRwgBwpEAWQFyQAXiA"]`

| # | Description |
|---|-------------|
| 1 | (see <a href="#map-data-format">Map Data</a>) |

---

<a name="on-30---typing"></a>
#### On 30 - Typing

> [!NOTE]
> This Packet ID is as of the ReadMe's last updated time unused or was left in the game debugging purposes[^PacketID]

A player is typing in the chat. Unused in bonk.io.

| # | Description |
|---|-------------|
| 1 | Typing player's slot ID |

---

<a name="on-31---admin-inputs"></a>
#### On 31 - Admin Inputs

| # | Description |
|---|-------------|
| 1 | Admin input data object (see <a href="#admin-input-data">Admin Input Data</a>) |

<details>
<!-- skipForTableContent -->
<summary><a name="snippet-deobfuscated-handler-code-on-31-790"></a>Deobfuscated Handler Code On 31</summary>

```js
this.recvAdmin = function (adminInputsRecvData) {
  var inputsForFrame, _T9P__4_;
  var frame = adminInputsRecvData.f;
  var accumulator = adminInputsRecvData.a;
  adminInputs[frame] = accumulator;
  for (var i = frame; i < frameCount; i++) {
    inputsForFrame = getPlayerInputsForFrame(i);
    if (_a5H__74_[i + 1]) {
      _T9P__4_ = _a5H__74_[i + 1];
    } else {
      _T9P__4_ = _SelectedBonkEngine.step(_a5H__4_[i], inputsForFrame, adminInputs[i], 30, _gameSettings3, _a5H__13_, isTutorialEnabled, _a5H__50_);
    }
    _a5H__4_[i + 1] = _T9P__4_;
  }
};
```
</details>

---

<a name="on-32---afk-warn"></a>
#### On 32 - AFK Warn

Warning that you're about to be disconnected for being AFK.

Example: `42[32]`

---

<a name="on-33---map-suggest-host"></a>
#### On 33 - Map Suggest (Host)

A player has suggested a map. Only the host sees this packet - other players see <a href="#on-34---map-suggest-client">Packet 34</a> instead. (see <a href="#map-data-format">Map Data</a>)

Example: `42[33,"ILAMJAhBFBjBzCTl...",2]`

| # | Description |
|---|-------------|
| 1 | (see <a href="#map-data-format">Map Data</a>) |
| 2 | Player ID of who suggested the map |[^PlayerID]

---

<a name="on-34---map-suggest-client"></a>
#### On 34 - Map Suggest (Client)

Non-host clients receive this instead of <a href="#on-33---map-suggest-host">Packet 33</a>. Contains only the map title and author.

Example: `42[34,"CDball","MuadDib",2]`

| # | Description |
|---|-------------|
| 1 | Map title |
| 2 | Map author |
| 3 | Player ID of who suggested the map |[^PlayerID]

---

<a name="on-35---change-mode"></a>
#### On 35 - Change Mode

Game mode settings changed (distinct from <a href="#on-26---mode-change">Packet 26</a> which changes engine+mode together).

| # | Description |
|---|-------------|
| 1 | Mode settings object (see <a href="#mode-settings-object">Mode Settings Object</a>) |

---

<a name="on-36---balance-set"></a>
#### On 36 - Balance Set

A player's balance/handicap was changed.

Example: `42[36,1,-55]`

| # | Description |
|---|-------------|
| 1 | Player ID |[^PlayerID]
| 2 | Balance amount (integer, -100 to 100) |

---

<a name="on-37---reserved"></a>
#### On 37 - Reserved

> [!NOTE]
> This Packet ID is as of the ReadMe's last updated time unused or was left in the game debugging purposes[^PacketID]

Registered but handler is empty. Reserved for future use or deprecated.

---

<a name="on-38---debug-winner"></a>
#### On 38 - Debug Winner

> [!NOTE]
> This Packet ID is as of the ReadMe's last updated time unused or was left in the game debugging purposes[^PacketID]

Debug information about the round winner.

| # | Description |
|---|-------------|
| 1 | Winner's slot ID |
| 2 | Debug data |

---

<a name="on-39---team-settings-change"></a>
#### On 39 - Team Settings Change

Team configuration settings have been modified.

| # | Description |
|---|-------------|
| 1 | New team settings object (see <a href="#team-settings-object">Team Settings Object</a>) |

---

<a name="on-40---save-replay"></a>
#### On 40 - Save Replay

A player saved a replay.

Example: `42[40,1]`

| # | Description |
|---|-------------|
| 1 | Player ID of who saved the replay |[^PlayerID]

---

<a name="on-41---host-change"></a>
#### On 41 - Host Change

The room host has been transferred to a different player.[^Host]

| # | Description |
|---|-------------|
| 1 | Object: `{ "newHost": <new host's Player ID> }` |[^PlayerID][^Host]

---

<a name="on-42---friend-request"></a>
#### On 42 - Friend Request

A player sent you a friend request.

Example: `42[42,1]`

| # | Description |
|---|-------------|
| 1 | Player ID of who sent the friend request |[^PlayerID]

---

<a name="on-43---countdown"></a>
#### On 43 - Countdown

Countdown before game start.

Example: `42[43,3]`

| # | Description |
|---|-------------|
| 1 | Countdown number |

---

<a name="on-44---abort-countdown"></a>
#### On 44 - Abort Countdown

The game start countdown was aborted.

Example: `42[44]`

---

<a name="on-45---player-leveled-up"></a>
#### On 45 - Player Leveled Up

Example: `42[45,{"sid":1,"lv":69}]`

| # | Description |
|---|-------------|
| 1 | Object: `"sid"` = Player ID, `"lv"` = new level |[^PlayerID]

---

<a name="on-46---local-gained-xp"></a>
#### On 46 - Local Gained XP

You gained XP. May include a new auth token if you leveled up.[^Token]

Example: `42[46,{"newXP":300}]`

| # | Description |
|---|-------------|
| 1 | Object: `"newXP"` = cumulative XP total. Optionally `"newLevel"` and `"newToken"` if leveled up |

---

<a name="on-47---local-revert"></a>
#### On 47 - Local Revert

Server instructs the client to revert local state (desync recovery).

| # | Description |
|---|-------------|
| 1 | Revert data |

---

<a name="on-48---recv-in-game"></a>
#### On 48 - Recv In Game

Initial game state data sent when joining a room that is currently in-game. Clears the 6-second initial data timeout.

| # | Description |
|---|-------------|
| 1 | Full game state data object (see <a href="#full-game-state-data">Full Game State Data</a>) |

---

<a name="on-49---room-share-link"></a>
#### On 49 - Room Share Link

Room ID and bypass code for generating the share URL.

Example: `42[49,261254,"agsey"]`

| # | Description |
|---|-------------|
| 1 | Room database ID (numeric part of share link) |
| 2 | Bypass code (appended after padded room ID: `https://bonk.io/<ID padded to 6 digits><bypass>`) |

---

<a name="on-50---map-vote-update"></a>
#### On 50 - Map Vote Update

A map vote has been recorded.

| # | Description |
|---|-------------|
| 1 | Map ID |
| 2 | Vote data |

---

<a name="on-51---more-quick-maps"></a>
#### On 51 - More Quick Maps

| # | Description |
|---|-------------|
| 1 | Quick play map data |

---

<a name="on-52---tabbed"></a>
#### On 52 - Tabbed

A player changed their tab/focus state (AFK status).

Example: `42[52,3,false]`

| # | Description |
|---|-------------|
| 1 | Player ID |[^PlayerID]
| 2 | `true` = tabbed out/unfocused, `false` = focused |

---

<a name="on-53---desync-request"></a>
#### On 53 - Desync Request

Desynchronization test request from the server.

| # | Description |
|---|-------------|
| 1 | Request ID |
| 2 | Target data |
| 3 | Accumulator |

---

<a name="on-54---desync-response"></a>
#### On 54 - Desync Response

Desynchronization test response.

| # | Description |
|---|-------------|
| 1 | Response data |
| 2 | State data |
| 3 | Accumulator |

---

<a name="on-57---curate-result"></a>
#### On 57 - Curate Result

Result of a map curation action (`/curate` + `/curateyes`).

Examples: `42[57,false,"unauthorised"]`, `42[57,true,""]`

| # | Description |
|---|-------------|
| 1 | `true` if curation succeeded, `false` if failed |
| 2 | Error/status code: `rate_limit`, `not_logged_in`, `invalid_mapid`, `invalid_comment`, `comment_too_long`, `invalid_dbv`, `unauthorised`, `map_private`, or empty string |

---

<a name="on-58---room-name-update"></a>
#### On 58 - Room Name Update

Host changed room name via `/roomname "text"`.[^Host]

Example: `42[58,"hello world"]`

| # | Description |
|---|-------------|
| 1 | New room name |

---

<a name="on-59---room-password-update"></a>
#### On 59 - Room Password Update

Host changed password via `/roompass` or `/clearroompass`.[^Host]

Example: `42[59,1]`

| # | Description |
|---|-------------|
| 1 | `0` = password cleared, `1` = password was set |

---

<a name="on-60---server-message"></a>
#### On 60 - Server Message

A direct message from the server (system announcement, etc.).

| # | Description |
|---|-------------|
| 1 | Server message text |

<a name="outgoing-packets"></a>
### Outgoing Packets

<a name="emit-1---ping-acknowledgement"></a>
#### Emit 1 - Ping Acknowledgement

Auto-response inside the <a href="#on-1---update-pings">Packet 1</a> handler.

Example: `42[1,{"id":9}]`

| Key | Description |
|-----|-------------|
| `id` | The ping request ID received from the server |

---

<a name="emit-2---test-ping"></a>
#### Emit 2 - Test Ping

> [!NOTE]
> This Packet ID is as of the ReadMe's last updated time unused or was left in the game debugging purposes[^PacketID]

Example: `42[2]`

---

<a name="emit-3---get-debug"></a>
#### Emit 3 - Get Debug

> [!NOTE]
> This Packet ID is as of the ReadMe's last updated time unused or was left in the game debugging purposes[^PacketID]

Example: `42[3]`

---

<a name="emit-4---send-inputs"></a>
#### Emit 4 - Send Inputs

Send game inputs.

Examples: `42[4,{"i":38,"f":324,"c":45}]`, `42[4,{"i":25,"f":531,"c":108}]`

| Key | Description |
|-----|-------------|
| `i` | Input bitmask - see <a href="#inputs">Inputs</a> |
| `f` | Frame number this input was performed on |
| `c` | Sequence number (starts at 0, increments per input, lasts entire session) |

---

<a name="emit-5---trigger-start"></a>
#### Emit 5 - Trigger Start

Start the game as host.[^Host]

Example: `42[5,{"is":"jWCW9ahaqG6...","gs":{"map":"ILAM...","gt":2,"wl":3,"q":false,"tl":false,"tea":false,"ga":"b","mo":"b","bal":[]}}]`

| Key | Description |
|-----|-------------|
| `is` | Initial game state (see <a href="#initial-game-state">Initial Game State</a>) |
| `gs` | Game settings object (see <a href="#game-settings-object-gs">Game Settings Object (`gs`)</a>) |

---

<a name="emit-6---change-own-team"></a>
#### Emit 6 - Change Own Team

Example: `42[6,{"targetTeam":0}]`

| Key | Description |
|-----|-------------|
| `targetTeam` | <a href="#team">Team</a> value to move to |

---

<a name="emit-7---team-lock"></a>
#### Emit 7 - Team Lock

Example: `42[7,{"teamLock":false}]`

| Key | Description |
|-----|-------------|
| `teamLock` | `true` to lock teams, `false` to unlock |

---

<a name="emit-8---silence-player"></a>
#### Emit 8 - Silence Player

> [!NOTE]
> This Packet ID is as of the ReadMe's last updated time unused or was left in the game debugging purposes[^PacketID]

| Key | Description |
|-----|-------------|
| `muteID` | Target Player ID |[^PlayerID]
| `muteType` | (see <a href="#broadcast-type-enum">Broadcast Type Enum</a>) |
| `action` | `"mute"` or `"unmute"` |

---

<a name="emit-9---kickban-player"></a>
#### Emit 9 - Kick/Ban Player

Example: `42[9,{"banshortid":6,"kickonly":true}]`

| Key | Description |
|-----|-------------|
| `banshortid` | Player ID |[^PlayerID]
| `kickonly` | `true` = kick (can rejoin), `false` = ban (permanent) |

---

<a name="emit-10---chat-message"></a>
#### Emit 10 - Chat Message

Example: `42[10,{"message":"Hello, World!"}]`

| Key | Description |
|-----|-------------|
| `message` | Message text to send |

---

<a name="emit-11---inform-in-lobby"></a>
#### Emit 11 - Inform In Lobby

Sent by host to joining players with game settings.[^Host]

Example: `42[11,{"sid":2,"gs":{"map":{"v":15,"s":{"re":false,"nc":false,"pq":1,"gd":25,"fl":false},"physics":{"shapes":[],"fixtures":[],"bodies":[],"bro":[],"joints":[],"ppm":12},"spawns":[],"capZones":[],"m":{"a":"riggad","n":"Unnamed","dbv":2,"dbid":-1,"authid":-1,"date":"","rxid":0,"rxn":"","rxa":"","rxdb":1,"cr":[],"pub":false,"mo":""}},"gt":2,"wl":3,"q":false,"tl":false,"tea":false,"ga":"b","mo":"b","bal":[]}}]`

| Key | Description |
|-----|-------------|
| `sid` | Slot ID assigned to the joining player |
| `gs` | Game settings object (see <a href="#game-settings-object-gs">Game Settings Object (`gs`)</a>) |

---

<a name="emit-12---create-room"></a>
#### Emit 12 - Create Room

Example (guest): `42[12,{"peerID":"einit1u6bp800000","roomName":"digga's game","maxPlayers":6,"password":"","dbid":0,"guest":true,"minLevel":0,"maxLevel":999,"latitude":52.3816,"longitude":4.8883,"country":"NL","version":49,"hidden":0,"quick":false,"mode":"custom","guestName":"digga","avatar":{"layers":[],"bc":6732650}}]`[^PeerID]

The differences are when logged in a token parameter is passed, guest is set to false, and the parameter "guestName" is omitted[^Token]
Example (logged in): `42[12,{"peerID":"einit1u6bp800000","roomName":"rigga acc's game","maxPlayers":6,"password":"","dbid":0,"guest":false,"minLevel":0,"maxLevel":999,"latitude":52.3816,"longitude":4.8883,"country":"NL","version":49,"hidden":0,"quick":false,"mode":"custom","token":"TOKENHERE","avatar":{"layers":[],"bc":6732650}}]`[^Token][^PeerID]

| Key | Description |
|-----|-------------|
| `peerID` | Your peerID |[^PeerID]
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
| `token` | Optional Auth token (only if not guest) |[^Token]
| `avatar` | <a href="#avatar-data-format">Skin data</a> |

---

<a name="emit-13---join-room"></a>
#### Emit 13 - Join Room

Example: `42[13,{"joinID":"dZCuw96RZ60KGK8FAALp","roomPassword":"","guest":true,"dbid":2,"version":49,"peerID":"3vss1i0oywz00000","bypass":"","guestName":"digga","avatar":{"layers":[],"bc":6732650}}]`[^PeerID]

| Key | Description |
|-----|-------------|
| `joinID` | Room address - obtained through a request to <a href="getroomaddressphp">getroomaddress.php</a> |
| `roomPassword` | Room password (empty if none) |
| `guest` | Whether you are a guest |
| `dbid` | Database ID (hardcoded to 2) |
| `version` | Bonk.io version |
| `peerID` | Your peerID |[^PeerID]
| `bypass` | Auto-join bypass token (empty if none) |[^Token]
| `avatar` | <a href="#avatar-data-format">Skin data</a> |
| `guestName` | Guest name (only if guest) |
| `token` | OPTIONAL Auth token (only passed if not guest) |[^Token]

---

<a name="emit-14---return-to-lobby"></a>
#### Emit 14 - Return To Lobby

Example: `42[14]`

---

<a name="emit-16---set-ready"></a>
#### Emit 16 - Set Ready

Example: `42[16,{"ready":false}]`

| Key | Description |
|-----|-------------|
| `ready` | `true` for ready (checkmark), `false` otherwise |

---

<a name="emit-17---all-ready-reset"></a>
#### Emit 17 - All Ready Reset

Host sets everyone's ready status to false.[^Host]

Example: `42[17]`

---

<a name="emit-18---timesync-request"></a>
#### Emit 18 - Timesync request

Example: `4229[18,{"jsonrpc":"2.0","id":354,"method":"timesync"}]`

| Key | Description |
|-----|-------------|
| `id` | Timesync request ID |

---

<a name="emit-19---map-reorder"></a>
#### Emit 19 - Map Reorder

| Key | Description |
|-----|-------------|
| `s` | Source index |
| `e` | End index |

---

<a name="emit-20---send-mode"></a>
#### Emit 20 - Send Mode

Change game engine and mode.

Example: `42[20,{"ga":"b","mo":"ar"}]`

| Key | Description |
|-----|-------------|
| `ga` | (see <a href="#game-engine-enum">Game Engine Enum</a>) |
| `mo` | (see <a href="#game-mode-enum">Game Mode Enum</a>) |

---

<a name="emit-21---send-wl-rounds"></a>
#### Emit 21 - Send WL (Rounds)

Example: `42[21,{"w":6}]`

| Key | Description |
|-----|-------------|
| `w` | Number of rounds to win |

---

<a name="emit-22---map-delete"></a>
#### Emit 22 - Map Delete

| Key | Description |
|-----|-------------|
| `d` | Map index? to delete |

---

<a name="emit-23---map-add"></a>
#### Emit 23 - Map Add

Add a map to the queue (see <a href="#map-data-format">Map Data</a>)

Example: `42[23,{"m":"ILAMJAhBFBjBzCTl..."}]`

| Key | Description |
|-----|-------------|
| `m` | (see <a href="#map-data-format">Map Data</a>) |

---

<a name="emit-24---send-typing"></a>
#### Emit 24 - Send Typing

> [!NOTE]
> This Packet ID is as of the ReadMe's last updated time unused or was left in the game debugging purposes[^PacketID]

Send a typing indicator to other players.

---

<a name="emit-25---admin-inputs"></a>
#### Emit 25 - Admin Inputs

Send admin/host commands during a game.[^Host]

also seems to store inputs for playersLeft, playersJoined?

| # | Description |
|---|-------------|
| 1 | Admin input data object (see <a href="#admin-input-data">Admin Input Data</a>) |

---

<a name="emit-26---change-other-team"></a>
#### Emit 26 - Change Other Team

Example: `42[26,{"targetID":1,"targetTeam":1}]`

| Key | Description |
|-----|-------------|
| `targetID` | Player ID to move |[^PlayerID]
| `targetTeam` | Target <a href="#team">Team</a> value |

---

<a name="emit-27---map-suggest"></a>
#### Emit 27 - Map Suggest

Example: `42[27,{"m":"ILAM...","mapname":"Cool Map","mapauthor":"Chaz"}]`

| Key | Description |
|-----|-------------|
| `m` | (see <a href="#map-data-format">Map Data</a>) |
| `mapname` | Map name |
| `mapauthor` | Map author |

---

<a name="emit-28---change-mode"></a>
#### Emit 28 - Change Mode

Change game mode settings.

| # | Description |
|---|-------------|
| 1 | (see <a href="#game-mode-enum">Game Engine Enum</a>) |

---

<a name="emit-29---send-balance"></a>
#### Emit 29 - Send Balance

Change a player's nerf/buff.

Example: `42[29,{"sid":2,"bal":-55}]`

| Key | Description |
|-----|-------------|
| `sid` | Player ID |[^PlayerID]
| `bal` | Balance amount (-100 to 100) |

---

<a name="emit-30---version-check"></a>
#### Emit 30 - Version Check

> [!NOTE]
> This Packet ID is as of the ReadMe's last updated time unused or was left in the game debugging purposes[^PacketID]

Example: `42[30]`

---

<a name="emit-31---send-debug-winner"></a>
#### Emit 31 - Send Debug Winner

> [!NOTE]
> This Packet ID is as of the ReadMe's last updated time unused or was left in the game debugging purposes[^PacketID]

Example: `42[31,{"wid":0}]`

| Key | Description |
|-----|-------------|
| `wid` | Winner's ID |

---

<a name="emit-32---team-settings-change"></a>
#### Emit 32 - Team Settings Change

Enable/disable teams.

Example: `42[32,{"t":true}]`

| Key | Description |
|-----|-------------|
| `t` | `true` to enable teams, `false` to disable |

---

<a name="emit-33---arm-record"></a>
#### Emit 33 - Arm Record

Save a replay.

Example: `42[33]`

---

<a name="emit-34---host-change"></a>
#### Emit 34 - Host Change

Transfer host to another player.[^Host]

Example: `42[34,{"id":1}]`

| Key | Description |
|-----|-------------|
| `id` | Player ID receiving host |[^PlayerID][^Host]

---

<a name="emit-35---send-friended"></a>
#### Emit 35 - Send Friended

Send a friend request.

Example: `42[35,{"id":5}]`

| Key | Description |
|-----|-------------|
| `id` | Player ID to friend |[^PlayerID]

---

<a name="emit-36---start-countdown"></a>
#### Emit 36 - Start Countdown

Send "Game Starting in X" message.

Example: `42[36,{"num":3}]`

| Key | Description |
|-----|-------------|
| `num` | Countdown number |

---

<a name="emit-37---abort-countdown"></a>
#### Emit 37 - Abort Countdown

Send "countdown aborted" message.

Example: `42[37]`

---

<a name="emit-38---request-xp"></a>
#### Emit 38 - Request XP

Usually sent after a round. Server responds with <a href="#on-46---local-gained-xp">Packet 46</a>.

Example: `42[38]`

---

<a name="emit-39---map-vote"></a>
#### Emit 39 - Map Vote

Vote up/down on a map.

Example: `42[39,{"mapid":12345,"vote":1}]`

| Key | Description |
|-----|-------------|
| `mapid` | Map database ID |
| `vote` | `1` = thumbs up, `0` = thumbs down |

---

<a name="emit-40---inform-in-game"></a>
#### Emit 40 - Inform In Game

Sent by host to a player joining mid-game with the full game state.[^Host]

Example: `42[40,{"sid":1,"allData":{"state":"jWCW9ah...","stateID":1,"fc":7,"inputs":[],"admin":[],"gs":{...},"random":[]}}]`

| Key | Description |
|-----|-------------|
| `sid` | Player to inform |
| `allData` | Full game state: `state` (LZ-String compressed), `stateID`, `fc` (frame count), `inputs` (input history), `admin` (admin inputs), `gs` (game settings), `random` (seed data) |[^LZString]

---

<a name="emit-41---get-pre-vote"></a>
#### Emit 41 - Get Pre Vote

Sent when a map starts playing to retrieve pre-existing vote data.

Example: `42[41,{"mapid":831011}]`

| Key | Description |
|-----|-------------|
| `mapid` | Map database ID |

---

<a name="emit-42---get-more-quick-play-maps"></a>
#### Emit 42 - Get More Quick Play Maps

| Key | Description |
|-----|-------------|
| `sf` | Search filter |

---

<a name="emit-43---update-rc-data"></a>
#### Emit 43 - Update RC Data

Updates the round count for the current game.

| Key | Description |
|-----|-------------|
| `rc` | Round count - indicates how many rounds have passed since the game started |

---

<a name="emit-44---tabbed"></a>
#### Emit 44 - Tabbed

AFK status.

Example: `42[44,{"out":true}]`

| Key | Description |
|-----|-------------|
| `out` | `true` = tabbed out/unfocused, `false` = focused |

---

<a name="emit-45---desync-test"></a>
#### Emit 45 - Desync Test

> [!NOTE]
> This Packet ID is as of the ReadMe's last updated time unused or was left in the game debugging purposes[^PacketID]

Test whether a player is desynced.

| Key | Description |
|-----|-------------|
| `sid` | Target player's slot ID |
| `a` | Accumulator |

---

<a name="emit-46---send-desync-response"></a>
#### Emit 46 - Send Desync Response

> [!NOTE]
> This Packet ID is as of the ReadMe's last updated time unused or was left in the game debugging purposes[^PacketID]

| Key | Description |
|-----|-------------|
| `rid` | Request ID |
| `sid` | Slot ID |
| `s` | State data |
| `a` | Accumulator |

---

<a name="emit-47---round-complete"></a>
#### Emit 47 - Round Complete

Sent when a round is completed.

| Key | Description |
|-----|-------------|
| `mo` | Mode data |
| `mid` | Map ID |

---

<a name="emit-50---no-host-swap"></a>
#### Emit 50 - No Host Swap

When host leaves, the room ends instead of migrating.[^Host]

Example: `42[50]`

---

<a name="emit-51---curate"></a>
#### Emit 51 - Curate

Curate a map via `/curate message` then `/curateyes`.

Example: `42[51,{"mapid":543321,"dbv":1,"comment":"wow, this should get added to the hotlist chaz"}]`

| Key | Description |
|-----|-------------|
| `mapid` | Map database ID |
| `dbv` | Database version |
| `comment` | Curation comment |

---

<a name="emit-52---room-name-update"></a>
#### Emit 52 - Room Name Update

Change room name via `/roomname "text"`.

Example: `42[52,{"newName":"text here"}]`

| Key | Description |
|-----|-------------|
| `newName` | New room name |

---

<a name="emit-53---room-password-update"></a>
#### Emit 53 - Room Password Update

Change/clear room password via `/roompass` or `/clearroompass`.

Example: `42[53,{"newPass":"password here"}]`

| Key | Description |
|-----|-------------|
| `newPass` | New password (empty string for `/clearroompass`) |

<a name="common-data-schemes"></a>
## Common Data Schemes

<a name="data"></a>
### Data

<a name="token-format"></a>
#### Token Format

A JSON Web Token (JWT) authentication credential assigned to user accounts.[^Token]

```json
{
  "uid": "12348636",
  "uip": "123.123.255.255",
  "un": "username",
  "ev": true,
  "lv": 1,
  "exp": 1783951113,
  "g": "b"
}
```

| Field | Type | Description |
|-------|------|-------------|
| `uid` | string | User ID - unique identifier for the account |
| `uip` | string | User IP - IP address associated with the token |[^Token]
| `un` | string | Username |
| `ev` | boolean | Email Verified - Whether email has been verified |
| `lv` | number | Level |
| `exp` | number | Expiration - Unix timestamp (seconds) when token expires |[^Token]
| `g` | string | Game - the game that this token is for, for bonk.io this is "b" |[^Token]

<a name="enums"></a>
### Enums

<a name="team"></a>
#### Team

| Value | Name | Description |
|-------|------|-------------|
| `0` | Spec | Spectator |
| `1` | FFA | Free for all |
| `2` | Red | Red team |
| `3` | Blue | Blue team |
| `4` | Green | Green team |
| `5` | Yellow | Yellow team |

<a name="server-mute-broadcast-type-enum"></a>
#### Server Mute Broadcast type enum

| Value | Description |
|-------|-------------|
| `1` | Everyone - broadcast to all players |
| `2` | Everyone except player - broadcast to all except one |
| `3` | Nobody - don't broadcast |

<a name="game-engine-enum"></a>
#### Game Engine Enum
This tells the game which "GameEngine" to use, so it knows how to render, step, and initialise the game state.
All modes except "football"

| Value | Description |
|-------|-------------|
| `"b"` | Standard - Uses the BonkEngine class |
| `"f"` | Football - Uses the FootballEngine class |

<a name="game-mode-enum"></a>
#### Game Mode Enum

| Value | Description |
|-------|-------------|
| `"ar"` | Arrows |
| `"ard"` | Arrows Death |
| `"b"` | Classic (Bonk) |
| `"bs"` | Simple (Bonk Simple) |
| `"f"` | Football |
| `"sp"` | Grapple (Swing Proximity) |
| `"v"` | VTOL |
| `"sl"` | Quickplay |
| `"ft"` | Quickplay Football |

<a name="body-type-enum"></a>
#### Body Type Enum

Defines the physical body type for physics objects in maps.

| Value | Description |
|-------|-------------|
| `'s'` | Static - does not move |
| `'k'` | Kinematic - moves but is not affected by physics |
| `'d'` | Dynamic - affected by physics and gravity |

<a name="quality-enum"></a>
#### Quality Enum

Graphics quality settings.

| Value | Description |
|-------|-------------|
| `1` | Low |
| `2` | Medium |
| `3` | High |

<a name="projectile-type-enum"></a>
#### Projectile Type Enum

Types of projectiles that can be launched in-game.

| Value | Description |
|-------|-------------|
| `"arrow"` | Currently the only projectile type |

<a name="avatar-shape-enum"></a>
#### Avatar Shape Enum

Avatar layer shape IDs for player skin customization. Each enum value represents a unique shape that can be used as a layer in an avatar (maximum 15 layers per avatar).

<details>
<summary>Table</summary>

| Index | Shape | Index | Shape | Index | Shape |
|-------|-------|-------|-------|-------|-------|
| 0 | Alien1 | 1 | Alien2 | 2 | Alien3 |
| 3 | Alien4 | 4 | Alien5 | 5 | Alien6 |
| 6 | Barbedwire1 | 7 | Barbedwire2 | 8 | Barbedwire3 |
| 9 | Barbedwire4 | 10 | Barbedwire5 | 11 | Barbedwire6 |
| 12 | Circle | 13 | Crescent | 14 | Cross1 |
| 15 | Cross2 | 16 | Cross3 | 17 | Cross4 |
| 18 | Cross5 | 19 | Cross6 | 20 | Cross7 |
| 21 | Face1 | 22 | Face10 | 23 | Face11 |
| 24 | Face12 | 25 | Face13 | 26 | Face14 |
| 27 | Face15 | 28 | Face16 | 29 | Face17 |
| 30 | Face18 | 31 | Face2 | 32 | Face19 |
| 33 | Face20 | 34 | Face21 | 35 | Face3 |
| 36 | Face4 | 37 | Face5 | 38 | Face6 |
| 39 | Face7 | 40 | Face8 | 41 | Face9 |
| 42 | Flames1 | 43 | Flames10 | 44 | Flames2 |
| 45 | Flames3 | 46 | Flames4 | 47 | Flames5 |
| 48 | Flames6 | 49 | Flames7 | 50 | Flames8 |
| 51 | Flames9 | 52 | Skull1 | 53 | Cross |
| 54 | Star1 | 55 | Triangle | 56 | Grungecircle |
| 57 | Grungeheart1 | 58 | Grungeheart2 | 59 | Grungeleaf1 |
| 60 | Grungeleaf2 | 61 | Grungeleaf3 | 62 | Skull2 |
| 63 | Shoeprint | 64 | Handprint | 65 | Fingerprint |
| 66 | Print2 | 67 | Grungelines1 | 68 | Grungelines2 |
| 69 | Splat | 70 | Pentagon | 71 | Rectangle1 |
| 72 | Triangletall1 | 73 | Rectangle2 | 74 | Rectangle3 |
| 75 | Rectanglefat | 76 | Semicircle | 77 | Roundedrectangle |
| 78 | Moon | 79 | Triangleeven | 80 | Triangletall2 |
| 81 | Splat1 | 82 | Splat2 | 83 | Splat3 |
| 84 | Square | 85 | Star2 | 86 | Radioactive1 |
| 87 | World | 88 | Signal | 89 | Skullcross |
| 90 | Skull3 | 91 | Exclamation | 92 | Electricity |
| 93 | Chain | 94 | Scope1 | 95 | Scope2 |
| 96 | Radioactive2 | 97 | Biohazard | 98 | Fire1 |
| 99 | Fire2 | 100 | Oxidiser | 101 | Ball |
| 102 | Atomic | 103 | Freeze | 104 | Whisp1 |
| 105 | Whisp2 | 106 | Whisp3 | 107 | Whisp4 |
| 108 | Whisp5 | 109 | Whisp6 | 110 | Whisp7 |
| 111 | Whisp8 | 112 | Whisp9 | 113 | Whisp10 |
| 114 | Whisp11 | | | | |

</details>

<a name="disc-death-method-enum"></a>
#### Disc Death Method Enum

Method describing how a disc/player died.

| Value | Description |
|-------|-------------|
| `1` | Hit a death object (e.g., death arrow or "death" platform) |
| `2` | Hit a laser (lasers were removed in bonk 2 beta) |
| `3` | Another player won through "capture", so other player discs died |
| `4` | Fell out of bounds |

<a name="inputs"></a>
### Inputs

<details>
<!-- skipForTableContent -->
<summary><a name="snippet-python-parsing-1855"></a>Python Parsing</summary>

```python
class PlayerInput:
    inputMapping: dict[str, int] = { 
        'left': Input.LEFT.value,
        'right': Input.RIGHT.value,
        'up': Input.UP.value,
        'down': Input.DOWN.value,
        'action': Input.ACTION.value,
        'heavy': Input.ACTION.value,
        'action2': Input.ACTION2.value,
        'special': Input.ACTION2.value
    }

    def __init__(self, inputBits: int = 0, frame: int = 0, sequenceNumber: int = 0):
        self.inputBits: int = inputBits
        self.frame: int = frame
        self.sequenceNumber: int = sequenceNumber
    
    def isDown(self, inputName: str) -> bool:
        return (self.inputBits & PlayerInput.inputMapping.get(inputName.lower(), 0)) != 0

    def unset(self, inputName: str) -> 'PlayerInput':
        newInputBits = self.inputBits & ~(self.inputMapping[inputName.lower()])
        return PlayerInput(newInputBits, self.frame, self.sequenceNumber)

    def set(self, inputName: str) -> 'PlayerInput':
        newInputBits = self.inputBits | self.inputMapping.get(inputName.lower(), 0)
        return PlayerInput(newInputBits, self.frame, self.sequenceNumber)

    def clear(self) -> 'PlayerInput':
        return PlayerInput(0, self.frame, self.sequenceNumber)

    def serialize(self, raw: bool = True) -> dict[str, int]:
        if raw:
            return {"i":self.inputBits, 'f':self.frame, 'c':self.sequenceNumber}
        return {"inputBits":self.inputBits, 'frame':self.frame, 'sequenceNumber':self.sequenceNumber}

    def getInputsDown(self) -> list[str]:
        return [inputName for inputName in PlayerInput.inputMapping.keys() if self.isDown(inputName)]
```

</details>

<a name="input-flags"></a>
#### Input Flags

| Flag | Bit | Value | Description |
|------|-----|-------|-------------|
| `None` | - | 0 | No flags set |
| `Left` | 0 | 1 | Move left |
| `Right` | 1 | 2 | Move right |
| `Up` | 2 | 4 | Move up |
| `Down` | 3 | 8 | Move down |
| `Heavy` | 4 | 16 | Action 1 / primary action |
| `Special` | 5 | 32 | Action 2 / secondary action |

**Bit operations:**
- Check if key is down: `(inputBits & InputFlags.Right) != 0`
- Set a key: `inputBits | InputFlags.Left`
- Unset a key: `inputBits & ~InputFlags.Left`
- Example: Right + Up + Special = 2 + 4 + 32 = 38

<a name="input-object"></a>
#### Input Object

| Field | Type | Description |
|-------|------|-------------|
| `"i"` | int | Input bitmask (see <a href="input-flags">Input FLags</a>) |
| `"f"` | int | Frame number |
| `"c"` | int | Sequence number (increments per input) |

<a name="frame-input"></a>
#### Frame Input

Represents the current input state for a frame - which keys are being pressed.

| Field | Type | Description |
|-------|------|-------------|
| `action` | boolean | Primary action (typically Heavy/bow pull) |
| `action2` | boolean | Secondary action (typically Special/grapple) |
| `down` | boolean | Down arrow key pressed |
| `left` | boolean | Left arrow key pressed |
| `right` | boolean | Right arrow key pressed |
| `up` | boolean | Up arrow key pressed |

<a name="game-configuration"></a>
### Game Configuration

<a name="game-settings-object-gs"></a>
#### Game Settings Object (`gs`)

Complete game configuration settings.

| Field | Type | Description |
|-------|------|-------------|
| `map` | string \| object | Map data - either LZ-String compressed + Base64 encoded object, or string map name for quickplay |[^LZString][^Base64]
| `gt` | number? | Game type - internal game type identifier (optional) |
| `wl` | number | Rounds to win - number of rounds needed to win the match |
| `q` | boolean \| string? | Quick play mode - false for custom map, "custom" for custom lobby, "bonkquick" for quickplay (optional) |
| `tl` | boolean | Team lock - whether team selection is locked |
| `tea` | boolean | Teams enabled - whether teams mode is on (false = FFA mode) |
| `ga` | string? | Game engine - "b" for Bonk, "f" for Football (optional) |
| `mo` | string | Game mode - game mode identifier (see eMode enum) |
| `bal` | int[]? | Balance/handicap array - per-player balance settings (optional) |

<a name="mode-settings-object"></a>
#### Mode Settings Object

Received via [Packet 35](#on-35---change-mode) when the host changes the game mode or engine.

| Field | Type | Description |
| ----- | ---- | ----- |
| `ga` | string | (see <a href="#game-engine-enum">Game Engine Enum</a>) |
| `mo` | string | (see <a href="#game-engine-enum">Game Engine Enum</a>) |

<a name="team-settings-object"></a>
#### Team Settings Object

Received via [Packet 39](#on-39---team-settings-change) when the host changes team settings or team lock status.

| Field | Type | Description |
| ----- | ---- | ----- |
| `teamsEnabled` | boolean | Whether teams are enabled or FFA mode |
| `teamLock` | boolean | Whether the team selection is locked (players cannot change teams) |

<a name="map"></a>
### Map

<a name="map-settings"></a>
#### Map Settings

Settings applied to a map that affect gameplay behavior.

| Field | Type | Description |
|-------|------|-------------|
| `re` | boolean | Respawn on death - whether discs respawn after dying |
| `nc` | boolean | No collision - when true, players don't collide with each other (false = collision enabled) |
| `pq` | number | Physics quality - determines physics complexity (1 << 1 = complex physics, otherwise normal) |
| `gd` | number | Grid dimension - map editor grid size (no effect on gameplay) |
| `fl` | boolean | Flight - whether discs can "fly" (fly maps) |

<a name="map-metadata"></a>
#### Map Metadata

Metadata information about a map including author, name, and publishing details.

| Field | Type | Description |
|-------|------|-------------|
| `a` | string | Author - map creator's username |
| `n` | string | Name - map name |
| `dbv` | number | Database version - 1 for Flash maps, 2 for Bonk2 maps |
| `dbid` | number | Database ID - unique identifier in the map database |
| `authid` | number? | Author ID - user ID of the map creator (optional) |
| `date` | string? | Creation/publication date (optional) |
| `rxid` | number? | Remix/original map ID (optional) |
| `rxn` | string | Remix name - original map name (only on remixed maps, "" for originals) |
| `rxa` | string | Remix author - original map author (only on remixed maps, "" for originals) |
| `rxdb` | number | Remix database - original map database version (1 for originals) |
| `cr` | string[]? | Credits - usernames of contributors (optional) |
| `pub` | boolean? | Published - whether the map is publicly available (optional) |
| `mo` | string | Mode - recommended game mode (see eMode enum) |
| `vu` | number? | Votes up - number of upvotes (optional) |
| `vd` | number? | Votes down - number of downvotes (optional) |

<a name="map-data-format"></a>
#### Map Data Format

Map data is an object compressed with LZ-String and encoded in Base64.[^LZString][^Base64]

For the full map data structure and key mappings (e.g. `v` -> `version`), see:
- [bonk-map](https://github.com/PixelMelt/bonk-map) - Community map parsing library
- [nameConverter.ts](https://github.com/PixelMelt/bonk-map/blob/23c39313420741709cea089b136f152900d3f3e5/src/util/nameConverter.ts#L1) - Actual mappings of the shorthand keys to their full names

> [!WARNING]
> THIS IS NOT FULLY ACCURATE, AND MIGHT BE INCOMPLETE FOR SOME STUFF, (like <a href="capture-zone">Capture Znono/a>)

<a name="capture-zone"></a>
##### Capture Zone

| Field | Type | Description |
|-------|------|-------------|
| `n` | string | Name of the capture zone |
| `ty` | number | Type |
| `l` | number | Capture length (seconds in map form, frames in physics form) |
| `i` | number | Fixture index |[^Fixture]
| `f` | number | Final countdown - jumps to 20 upon capture, decreases by one per frame, on zero win is executed |
| `o` | number? | Owner Player ID (after capture) |[^PlayerID]
| `ot` | <a href="#team">Team</a>? | Owner team (after capture) |
| `p` | number? | Power / capture completion |

<a name="physics"></a>
#### Physics

Physics objects define the layout and behavior of maps using Box2D physics engine.

<a name="shapes"></a>
##### Shapes

Base shape type for all physics shapes.

<a name="base-shape"></a>
###### Base Shape

| Field | Type | Description |
|-------|------|-------------|
| `type` | string | Shape type identifier |
| `c` | <a href="#point-2d">Point2D</a>? | Coordinates [x, y] - position of the shape (optional) |

<a name="box-shape"></a>
###### Box Shape

Rectangular shape.

| Field | Type | Description |
|-------|------|-------------|
| `type` | string | "bx" - Box shape identifier |
| `w` | number | Width |
| `h` | number | Height |
| `a` | number | Angle in degrees |
| `sk` | boolean | Shrink - apply shrink wrapping |

<a name="circle-shape"></a>
###### Circle Shape

Circular shape.

| Field | Type | Description |
|-------|------|-------------|
| `type` | string | "ci" - Circle shape identifier |
| `r` | number | Radius |
| `sk` | boolean | Shrink - apply shrink wrapping |

<a name="poly-shape"></a>
###### Poly Shape

Polygon shape.

| Field | Type | Description |
|-------|------|-------------|
| `type` | string | "po" - Polygon shape identifier |
| `v` | []  | Vertices array |
| `s` | number | Scale |
| `a` | number | Angle in degrees |

<a name="chain-shape"></a>
###### Chain Shape

Chain/path of line segments.

| Field | Type | Description |
|-------|------|-------------|
| `type` | string | "ch" - Chain shape identifier |
| `c` | <a href="#point-2d">Point2D</a>? | Coordinates - position (optional) |
| `v` | <a href="#point-2d">Point2D</a>[] | Vectors - array of [x, y] points |
| `s` | number | Scale |
| `a` | number | Angle in degrees |
| `l` | boolean | Line - whether to connect last point to first |
| `sk` | boolean | Shrink - apply shrink wrapping |

<a name="fixture"></a>
##### Fixture

A fixture applies properties to a shape - friction, bounciness, whether it causes death, etc.[^Fixture]

| Field | Type | Description |
|-------|------|-------------|
| `sh` | number | Shape - index of the shape this fixture uses |[^Fixture]
| `n` | string | Name - fixture name |[^Fixture]
| `fr` | number | Friction - friction coefficient |
| `fp` | boolean? | Friction players - whether friction applies to players (optional) |
| `re` | number | Restitution - bounciness coefficient |
| `de` | number | Density - mass per unit area |
| `f` | number | Filter - collision filter value |
| `d` | boolean | Death - whether this fixture kills players on contact |[^Fixture]
| `np` | boolean | No physics - whether physics are disabled |
| `ng` | boolean | No grapple - whether grappling is disabled |

<a name="body"></a>
##### Body

A physics body in the world - either a static platform, moving object, or player.

| Field | Type | Description |
|-------|------|-------------|
| `type` | eBodyType | Body type - static, kinematic, or dynamic |
| `n` | string | Name - body name |
| `p` | <a href="#point-2d">Point2D</a> | Position - [x, y] coordinates |
| `a` | number | Angle - rotation in degrees |
| `fric` | number | Friction - friction coefficient |
| `fricp` | boolean | Friction players - whether friction applies to players |
| `re` | number | Restitution - bounciness |
| `de` | number | Density - mass per unit area |
| `lv` | <a href="#point-2d">Point2D</a> | Linear velocity - [vx, vy] |
| `av` | number | Angular velocity - rotation speed |
| `ld` | number | Linear damping - linear velocity damping |
| `ad` | number | Angular damping - angular velocity damping |
| `fr` | boolean | Fixed rotation - whether rotation is locked |
| `bu` | boolean | Bullet - high-speed collision flag |
| `cf` | object | Constant force - {x, y, w, ct} |
| `fx` | number[] | Fixtures - array of fixture indices |[^Fixture]
| `f_c` | number | Filter collision - collision category |
| `f_p` | boolean | Filter property |
| `f_1` | boolean | Filter 1 |
| `f_2` | boolean | Filter 2 |
| `f_3` | boolean | Filter 3 |
| `f_4` | boolean | Filter 4 |

<a name="joints"></a>
##### Joints

Joints connect two bodies together with various constraints.

<a name="base-joint"></a>
###### Base Joint

Common properties for all joint types.

| Field | Type | Description |
|-------|------|-------------|
| `type` | string | Joint type identifier |
| `ba` | number | Body A - first body ID |
| `d`  | object | Stands for drawing, contains properties (below) about how to "draw" or rather how it should be displayed and function |
| `bb` | number | Body B - second body ID |
| `d.bf` | number? | Begin fill / base force (optional) |
| `d.cc` | boolean | Collide connected - whether connected bodies collide |
| `d.dl` | boolean? | Draw line (optional) |

<a name="revolute-joint"></a>
###### Revolute Joint

Rotational joint - one body rotates around the other.

| Field | Type | Description |
|-------|------|-------------|
| `type` | string | "rv" - Revolute joint identifier |
| `ba` | number | Body A - first body ID |
| `bb` | number | Body B - second body ID |
| `aa` | <a href="#point-2d">Point2D</a> | Anchor A - [x, y] |
| `ab` | <a href="#point-2d">Point2D</a>? | Anchor B - [x, y] (optional) |
| `d`  | object | Stands for drawing, contains properties (below) about how to "draw" or rather how it should be displayed and function |
| `d.la` | number | Lower angle - minimum rotation (degrees) |
| `d.ua` | number | Upper angle - maximum rotation (degrees) |
| `d.mmt` | number | Max motor torque |
| `d.ms` | number | Motor speed |
| `d.el` | boolean | Enable limit |
| `d.em` | boolean | Enable motor |
| `d.cc` | boolean | Collide connected |
| `d.bf` | number | Base force |
| `d.dl` | boolean | Draw line |

<a name="distance-joint"></a>
###### Distance Joint

Maintains a fixed distance between two points.

| Field | Type | Description |
|-------|------|-------------|
| `type` | string | "d" - Distance joint identifier |
| `ba` | number | Body A |
| `bb` | number | Body B |
| `aa` | <a href="#point-2d">Point2D</a> | Anchor A - [x, y] |
| `ab` | <a href="#point-2d">Point2D</a> | Anchor B - [x, y] |
| `d`  | object | Stands for drawing, contains properties (below) about how to "draw" or rather how it should be displayed and function |
| `d.dr` | number | Damping ratio |
| `d.fh` | number | Frequency Hz |
| `d.cc` | boolean | Collide connected |
| `d.bf` | number | Base force |
| `d.dl` | boolean | Draw line |

<a name="legacy-path-joint"></a>
###### Legacy Path Joint

Constrains a body to move along a path.

| Field | Type | Description |
|-------|------|-------------|
| `type` | string | "lpj" - Legacy path joint identifier |
| `ba` | number | Body A |
| `bb` | number | Body B |
| `pax` | number | Path anchor X |
| `pay` | number | Path anchor Y |
| `pa` | number | Path angle (degrees) |
| `pf` | number | Path force |
| `pl` | number | Path length |
| `pu` | number | Path upper (likely unused) |
| `plen` | number | Path length (alternate) |
| `pms` | number | Path max speed |
| `d`  | object | Stands for drawing, contains properties (below) about how to "draw" or rather how it should be displayed and function |
| `d.cc` | boolean | Collide connected |
| `d.bf` | number | Base force |
| `d.dl` | boolean | Draw line |

<a name="legacy-springy-joint"></a>
###### Legacy Springy Joint

Spring-like joint with damping.

| Field | Type | Description |
|-------|------|-------------|
| `type` | string | "lsj" - Legacy springy joint identifier |
| `ba` | number | Body A |
| `bb` | number | Body B |
| `sax` | number | Springy anchor X |
| `say` | number | Springy anchor Y |
| `sf` | number | Springy force |
| `slen` | number | Springy length |
| `d`  | object | Stands for drawing, contains properties (below) about how to "draw" or rather how it should be displayed and function |
| `d.cc` | boolean | Collide connected |
| `d.bf` | number | Base force |
| `d.dl` | boolean | Draw line |

<a name="prismatic-joint"></a>
###### Prismatic Joint

Constrains motion to a single axis (sliding joint).

| Field | Type | Description |
|-------|------|-------------|
| `type` | string | "p" - Prismatic joint identifier |
| `ba` | number | Body A |
| `bb` | number | Body B |
| `aa` | <a href="#point-2d">Point2D</a> | Anchor A - [x, y] |
| `ab` | <a href="#point-2d">Point2D</a> | Anchor B - [x, y] |
| `axa` | <a href="#point-2d">Point2D</a>? | Axis A - [x, y] (optional) |
| `cs` | number? | Change side - motor side control (optional) |
| `d`  | object | Stands for drawing, contains properties (below) about how to "draw" or rather how it should be displayed and function |
| `d.ut` | number | Upper translation - max slide distance |
| `d.lt` | number | Lower translation - min slide distance |
| `d.mmf` | number | Max motor force |
| `d.ms` | number | Motor speed |
| `d.el` | boolean? | Enable limit (optional) |
| `d.em` | boolean? | Enable motor (optional) |
| `d.cc` | boolean? | Collide connected (optional) |

<a name="soft-rod-joint"></a>
###### Soft Rod Joint

Distance joint with flexibility.

| Field | Type | Description |
|-------|------|-------------|
| `type` | string | "d" - Soft rod joint identifier |
| `ba` | number | Body A |
| `bb` | number | Body B |
| `aa` | <a href="#point-2d">Point2D</a> | Anchor A - [x, y] |
| `ab` | <a href="#point-2d">Point2D</a> | Anchor B - [x, y] |
| `len` | number? | Length (optional) |
| `d.dr` | number | Damping ratio |
| `d.fh` | number | Frequency Hz |
| `d.cc` | boolean | Collide connected |

<a name="gear-joint"></a>
###### Gear Joint

Connects two joints so they work in sync.

| Field | Type | Description |
|-------|------|-------------|
| `type` | string | "g" - Gear joint identifier |
| `ba` | number | Body A |
| `bb` | number | Body B |
| `ja` | number? | Joint A (optional) |
| `jb` | number? | Joint B (optional) |
| `d.r` | number | Ratio - gear ratio |
| `d.cc` | boolean? | Collide connected (optional) |

<a name="physics-state"></a>
##### Physics State

Complete physics simulation state for a map.

| Field | Type | Description |
|-------|------|-------------|
| `bodies` | (body \| undefined)[] | Array of all physics bodies |
| `bro` | number[] | Body render order |
| `fixtures` | (fixture \| undefined)[] | Array of all fixtures |[^Fixture]
| `joints` | (joint \| undefined)[] | Array of all joints |
| `shapes` | (shape \| undefined)[] | Array of all shapes |
| `ppm` | number | Pixels per meter - scale factor for the map |

<a name="game-state"></a>
### Game State

<a name="initial-game-state"></a>
#### Initial Game State
A string compressed with LZ-String and encoded in Base64, in PSON format, with cases for the first 101 characters flipped.[^LZString][^PSON][^Base64]

<details>
<!-- skipForTableContent -->
<summary><a name="snippet-javascript-flipunflip-case-works-both-ways-2313"></a>Javascript: Flip/unflip case (works both ways)</summary>

```js
let str = "";
for (let i = 0; i < 101; i++){
  str += String.fromCharCode(initialState.charCodeAt(i) ^ 32)
}
str += initialState.slice(101)
```

</details>

<a name="bonk-game-state"></a>
##### Bonk Game State

Used for all modes except Football.

| Field | Type | Description |
|-------|------|-------------|
| `capZones` | <a href="#capture-zone">captureZone</a>[] | Capture zones |
| `discDeaths` | <a href="#disc-death">discDeath</a>[] | Array of player discs when they died |
| `discs` | <a href="#bonk-disc">BonkDisc</a>[] | Array of player discs, ordered by disc/Player ID (`discs[0]` is disc with ID 0, `discs[2]` is disc with ID 2, etc.) |
| `fte` | number | Frames to end - timer for how many steps remain until the round ends. `-1` = inactive |
| `ftu` | number | Frames to unfreeze - timer for how many steps until the world unfreezes and players can move. `-1` = inactive |
| `lscr` | <a href="#team">Team</a> | Last scored current round - Player ID (FFA) or team that won the round. `-1` = draw |
| `mm` |  | Map metadata (name, author, etc.) (see <a href="#map-data-format">Map Data</a>) |
| `ms` | mapSettings | Map settings (e.g respawn on death, etc..) (see <a href="#map-data-format">Map Data</a>)|
| `physics` | physicsState | Bodies, Joints, Shapes, Fixtures, Z-indexes, Shape shrinks |
| `players` | (playerInfo\|null)[] | Array containing info about players |
| `projectiles` | projectile[] | Array of projectiles (e.g. arrows), ordered by projectile ID |
| `rc` | number | Round count - how many rounds have passed since the game started |
| `rl` | number | Round length - amount of steps since last round start |
| `scores` | number[] | Array containing the amount of wins for each player/team. On a Free For All game, these scores are ordered by Player ID and each one corresponds to a player (e.g. `scores[10]` = Player ID 10's wins). On a <a href="#team">Teams</a> game, there are up to 4 items, each one corresponding to a specific <a href="#team">Team</a>, in the following order: 0=red, 1=blue, 2=green, 3=yellow (e.g. `scores[2]` = <a href="#team">Team</a> Green's wins). Note: these indices do not match the <a href="#team">Team</a> enum values. |
| `seed` | number | Random seed |
| `shk` | <a href="#point-2d">Point2D</a> | Screen shake |
| `sts` | (<a href="#sounds-this-step">soundsThisStep</a>\|number\|undefined)[]\|null | Sounds this step |
| `dontInterpolate` | boolean? | If `true`, skip interpolation this step. |

<a name="football-game-state"></a>
##### Football Game State

Used for Football mode only.

| Field | Type | Description |
|-------|------|-------------|
| `scores` | number[] | Array containing the amount of wins for each <a href="#team">Team</a>. This item does not have to be a number although the game always does set it with numbers. On a football game, there are up to 4 items, with each one corresponding to a specific <a href="#team">Team</a>, in the following order: 0=unused in football, 1=unused in football, 2=Red, 3=Blue. For example: `scores[2]` would be <a href="#team">Team</a> Red's amount of wins. Note: these indices do not match the <a href="#team">Team</a> enum values. |
| `goalHeight` | number | The goal height. Always `13` |
| `borderThickness` | number | Border thickness. Always `5` |
| `borderThicknessXInner` | number | Border thickness X inner. Always `25` |
| `borderThicknessYInner` | number | Border thickness Y inner. Always `70` |
| `ppm` | number | Likely stands for "pixels per meter". It determines the size of the map: bigger ppm, smaller map. Despite the name, a ppm of 1 will not make every meter a screen pixel wide, instead it will make them around 1.5 pixels wide due to an internal parameter called "scale ratio" that assures an optimal resolution according to the client's display size. |
| `lscr` | number | Likely stands for "last scored current round". On a football game, it indicates the team that just won the round |
| `seed` | number | Random seed |
| `sts` | (<a href="#sounds-this-step">soundsThisStep</a>\|number\|undefined)[]\|null | Sounds this step |
| `ni` | boolean | No interpolation - if `true`, skip interpolation this step.|
| `players` | (playerInfo\|null)[] | Array containing info about players |
| `fte` | number | Frames to end - timer for how many steps remain until the round ends. `-1` = inactive |
| `ftu` | number | Frames to unfreeze - timer for how many steps until the world unfreezes and players can move. `-1` = inactive |
| `discs` | <a href="#football-disc">FootballDisc</a>[] | Array of player discs, ordered by disc/Player ID (`discs[0]` is disc with ID 0, `discs[2]` is disc with ID 2, etc.) |

<a name="full-game-state-data"></a>
#### Full Game State Data

Complete game state containing all physics, player, and game information. Structure varies based on game engine type.

**Bonk Game State** (`bonkGamestate`):

| Field | Type | Description |
| ----- | ---- | ----- |
| `capZones` | captureZone[] | Array of capture zones for CTF/Capture mode |
| `discDeaths` | discDeath[] | Array of player discs that died this round |
| `discs` | disc[] | Array of all active player discs, ordered by disc ID |
| `fte` | number | Frames to end - countdown until round ends (-1 = inactive) |
| `ftu` | number | Frames to unfreeze - countdown until world unfreezes (-1 = inactive) |
| `lscr` | Team or number | Last scored current round - player/team that won; -1 = draw |
| `mm` | mapMetadata | Map metadata (name, author, etc.) |
| `ms` | mapSettings | Map settings (respawn on death, collision, etc.) |
| `physics` | physicsState | Physics bodies, joints, shapes, and fixtures |
| `players` | (playerInfo \| null)[] | Array of player information |
| `projectiles` | projectile[] | Array of active projectiles (e.g. arrows) |
| `rc` | number | Round count - how many rounds have passed |
| `rl` | number | Round length - frames elapsed since round start |
| `scores` | number[] | Win scores (indexed by player ID for FFA, team for Teams) |[^PlayerID]
| `seed` | number | Random seed for the game |
| `shk` | <a href="#point-2d">Point2D</a> | Screen shake vector |
| `sts` | (soundsThisStep \| number)[] \| null | Sounds to play this step |
| `dontInterpolate` | boolean | Skip interpolation this step |

**Football Game State** (`footballGameState`):

| Field | Type | Description |
| ----- | ---- | ----- |
| `scores` | number[] | Win scores by team (indices: 0=unused, 1=unused, 2=Red, 3=Blue) |
| `goalHeight` | number | Height of goal area (always 13) |
| `borderThickness` | number | Border thickness (always 5) |
| `borderThicknessXInner` | number | Inner border X thickness (always 25) |
| `borderThicknessYInner` | number | Inner border Y thickness (always 70) |
| `ppm` | number | Pixels per meter - determines map size |
| `lscr` | number | Last scored current round - team that won |
| `seed` | number | Random seed |
| `sts` | (soundsThisStep \| number)[] \| null | Sounds to play this step |
| `ni` | boolean | No interpolation - skip interpolation this step |
| `players` | (playerInfo \| null)[] | Array of player information |
| `fte` | number | Frames to end - countdown until round ends |
| `ftu` | number | Frames to unfreeze - countdown until world unfreezes |
| `discs` | disc[] | Array of all active football discs (ball + player discs) |

<a name="discs"></a>
### Discs

<a name="bonk-disc"></a>
#### Bonk Disc

Disc object representing a player in BonkEngine. Contains position, velocity, and action state.

| Field | Type | Description |
| ----- | ---- | ----- |
| `x` | number | Position X |
| `y` | number | Position Y |
| `xv` | number | Velocity X |
| `yv` | number | Velocity Y |
| `sx` | number | Spawn position X (optional) |
| `sy` | number | Spawn position Y (optional) |
| `sxv` | number | Spawn velocity X (optional) |
| `syv` | number | Spawn velocity Y (optional) |
| `a` | number | Angle/rotation (optional) |
| `av` | number | Angular velocity (optional) |
| `a1a` | number | Action 1 ammo count (optional) |
| `a1` | boolean | Action 1 pressed (optional) |
| `a2` | boolean | Action 2 pressed (optional) |
| `team` | eTeam | Team ID (optional) |
| `ds` | number | Draw strength (for grapple/bow) (optional) |
| `da` | number | Draw angle (for grapple/bow) (optional) |
| `ni` | boolean | No interpolation - skip interpolation this frame (optional) |
| `swing` | swingState | Swing/grapple state (optional) |
| `lht` | number | Last hit time (optional) |
| `lhid` | number | Last hit disc ID (optional) |
| `kickReady` | boolean | Can kick (football only) (optional) |
| `extraVelX` | number | Extra velocity X (optional) |
| `extraVelY` | number | Extra velocity Y (optional) |
| `radius` | number | Disc radius (optional) |

<a name="football-disc"></a>
#### Football Disc

Disc object representing a player or ball in Football mode. Typically only includes essential fields.

| Field | Type | Description |
| ----- | ---- | ----- |
| `x` | number | Position X |
| `y` | number | Position Y |
| `xv` | number | Velocity X |
| `yv` | number | Velocity Y |
| `team` | eTeam | Team ID (Red=2, Blue=3, or -1 for ball) |
| `kickReady` | boolean | Player can kick the ball |
| `a` | number | Angle/rotation (optional) |
| `av` | number | Angular velocity (optional) |
| `radius` | number | Disc radius (optional) |

<a name="disc-death"></a>
#### Disc Death

Contains info about a disc/player when they died.

| Field | Type | Description |
|-------|------|-------------|
| `f` | number | Frames - frames till the player death |
| `i` | number | The ID of the disc that died |
| `m` | <a href="#discdeathmethod">DiscDeathMethod</a> | Method of how the disc died |
| `x` | number | Position X |
| `y` | number | Position Y |
| `xv` | number | Velocity X |
| `yv` | number | Velocity Y |

<a name="discdeathmethod"></a>
##### DiscDeathMethod

Could also be referred to as DiedThisStepMethod. Method of how a disc died (all players have a disc ID).

| Value | Description |
|-------|-------------|
| `1` | DeathPhysicsObject - e.g. death arrow or "death" platform |
| `3` | CaptureComplete |
| `4` | OutOfBounds |

<a name="common-types"></a>
### Common Types

<a name="point-2d"></a>
#### Point 2D

A 2D point object. This is a array (`[x, y]`).

| Index | Type | Description |
|-------|------|-------------|
| 0 | number | X coordinate |
| 1 | number | Y coordinate |

<a name="point-2d-vector"></a>
#### Point 2D Vector

A 2D point object. This is a object (`{x: x, y: y}`)

| Field | Type | Description |
|-------|------|-------------|
| `x` | number | X coordinate |
| `y` | number | Y coordinate |

<a name="sounds-this-step"></a>
#### Sounds This Step

| Field | Type | Description |
|-------|------|-------------|
| `i` | number | Sound ID |
| `v` | number | Volume |
| `p` | string? | Sound type |
| `f` | number | Frame |

<a name="swing-state"></a>
#### Swing State

State information for an active swing/grapple action.

| Field | Type | Description |
|-------|------|-------------|
| `b` | number | Body - physics body ID that the swing is attached to |
| `l` | number | Length - length of the swing rope/grapple |
| `p` | <a href="#point-2d">Point2D</a> | Point - anchor point [x, y] of the swing |

<a name="common-types"></a>
### Common Types

<a name="avatar-data-format"></a>
#### Avatar Data Format

The avatar object is an object containing layers with information to render the skin.

<a name="avatar"></a>
##### Avatar

| Field | Type | Description |
|-------|------|-------------|
| `layers` | `(avatarLayer \| undefined)[]` | The different "layers" of shapes on the skin. For a skin to be usable this must not be over 15 layers. |
| `bc` | `number` | Background colour of the skin. |

<a name="avatarlayer"></a>
##### AvatarLayer

| Field | Type | Constraints | Description |
|-------|------|-------------|-------------|
| `id` | [Avatar Shape Enum](#avatar-shape-enum)| min: 1, max: 115 | The shape ID. Will revert to 1 if out of range. |
| `scale` | `number` | min: -9999, max: 9999 | The scale of the shape. Will revert to 0 if out of range. |
| `angle` | `number` | - | The angle of the shape in degrees. |
| `x` | `number` | - | X position of the shape. |
| `y` | `number` | - | Y position of the shape. |
| `flipX` | `boolean` | - | Whether to flip the shape horizontally (x axis). |
| `flipY` | `number` | - | Whether to flip the shape vertically (y axis). |
| `color` | `number` | min: 0, max: 16777215 | The shape colour. Will revert to 0 if out of range. |

For the full avatar data structure, skin shape IDs, and rendering, see the full-fledged library:
- [bonk-skin](https://github.com/PixelMelt/bonk-skin) - Community skin parsing library
> [!NOTE]
> As of 12/07/2026 this repository contains more up to date definitions, however it is sitll recommended to use if you need a library.

<a name="server"></a>
### Server

<a name="status-codes"></a>
#### Status Codes

Status messages received via <a href="#on-16---status-message">Packet 16</a>:

| Code | Description |
|------|-------------|
| `""` | Status message was raised without a message |
| `null` | couldn't reproduce protocol version 49, keep in mind that this could be possible |
| `avatar_data_invalid` | N/A |
| `bad_instruction_map_reorder` | N/A |
| `cant_ban_yourself` | You tried to kick yourself. You just can't do that. |
| `host_change_rate_limited` | You tried to give host too quickly. |[^Host]
| `invalid guest name` | N/A |
| `invalid` | Generic/DesyncTest/Response Value Error, the reason this is returned changes with backend changes, it's likely returned as a last resort try catch till Chaz recodes it |
| `invalid_max_players` | N/A |
| `invalid_params (token)` | N/A |[^Token]
| `invalid_params` | Error occurrs when invalid parameter inputs are send, this is a generic error most commonly found by Create room error/generic |
| `invalid_target_team` | You tried to change a players team into the wrong type. |
| `not_hosting` | You attempted to do an action that requires you to be the game's host. |[^Host]
| `players_xp_too_high` | N/A |
| `players_xp_too_low` | N/A |
| `rate_limit` | Generic rate-limit. You did something too fast in a short period of time. |[^RateLimit]
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
| `Initial data timeout` | You did not receive the initial data from the host after 6 seconds passed. |[^Host]
| `already_in_this_room` | You tried to join a room that your user is already in. |
| `arm rate limited` | You spammed "Save Replay" too fast. |
| `banned` | You tried to join a room you've been banned from. |
| `guest` | You attemped to perform an action that requires you to be logged in. |
| `host change rate limited` | You changed hosts too fast |[^Host]
| `join_rate_limited` | You've tried to join rooms too quickly. |
| `no_client_entry` | You sent some action but you're not in the room, or you were not permitted to. |
| `old_rotation` | N/A |
| `password_wrong` | You tried to join a passworded room, but you used the wrong password. |
| `room_full` | You tried to join a full room. |
| `room_not_found` | You tried to join a room that doesn't exist anymore. |

<a name="timesync-response-data"></a>
#### Timesync Response Data

| Field | Description |
| ----- | ----- |
| id | Timesync request ID |
| result | Unix timestamp of the server time (in milliseconds) |

<a name="admin-input-data"></a>
#### Admin Input Data

| Field | Description |
| ----- | ----- |
| f | TODO | Frame
| a | TODO | Accumulator

<a name="http-requests"></a>
## HTTP Requests

This section documents all jQuery AJAX requests all requests are `$.post` unless mentioned otherwise.

> [!NOTE]
> All bonk endpoints are specified with "https://bonk2.io/scripts/" unless otherwise specified

<a name="account-endpoints"></a>
### Account Endpoints

<a name="register_legacyphp"></a>
#### register_legacy.php

<h5>Body</h5>

| Field | Type | Description |
|-------|------|-------------|
| `username` | string | Username for new account |
| `password` | string | Password for new account |
| `remember` | boolean | Enable remember me functionality |

<h5>Response</h5>

| Field | Type | Description |
|-------|------|-------------|
| `r` | string | Response status: "success" or error code |
| `token` | string | Authentication token (on success) |[^Token]
| `xp` | number | User's current XP |
| `username` | string | Confirmed username |
| `id` | string | User database ID |
| `avatar` | string | Encoded default avatar data |
| `avatar1` - `avatar5` | string | Encoded avatar data for slots 2-5 |
| `activeAvatarNumber` | number | Currently active avatar slot (1-5) |
| `controls` | string | Serialized control configuration |
| `friends` | array | List of friends |
| `legacyFriends` | string | Legacy friends data |
| `rememberToken` | string | Token for automatic login (if remember enabled) |[^Token][^RememberToken]
| `e` | string | Error code on failure: "username_invalid", "username_taken", "rate_limited", "data_missing", "password_weak" |

<a name="login_legacyphp"></a>
#### login_legacy.php

<h5>Body</h5>

| Field | Type | Description |
|-------|------|-------------|
| `username` | string | Username |
| `password` | string | Password |
| `remember` | boolean | Enable remember me functionality |

<h5>Response</h5>
Same as register_legacy.php

<a name="login_autophp"></a>
#### login_auto.php

<h5>Body</h5>

| Field | Type | Description |
|-------|------|-------------|
| `rememberToken` | string | Token from previous automatic login session |[^Token][^RememberToken]

<h5>Response</h5>
Same as register_legacy.php (on successful auto-login)

<a name="login_clearautophp"></a>
#### login_clearauto.php

<h5>Body</h5>

| Field | Type | Description |
|-------|------|-------------|
| `rememberToken` | string | Token to invalidate/clear |[^Token][^RememberToken]

<a name="account_changepasswordphp"></a>
#### account_changepassword.php

<h5>Body</h5>

| Field | Type | Description |
|-------|------|-------------|
| `token` | string | Authentication token |[^Token]
| `oldpass` | string | Current/old password |
| `newpass` | string | New password |

<h5>Response</h5>

| Field | Type | Description |
|-------|------|-------------|
| `r` | string | Response status: "success" or error |
| `e` | string | Error code: "ratelimited", "token", "server_error_1", "server_error_2", "oldpass_wrong" |[^Token]

<a name="account_savecontrolsphp"></a>
#### account_savecontrols.php

<h5>Body</h5>

| Field | Type | Description |
|-------|------|-------------|
| `controls` | string | Serialized control/input configuration |
| `token` | string | Authentication token |[^Token]

<a name="friends-endpoints"></a>
### Friends Endpoints

<a name="friendsphp"></a>
#### friends.php

<h5>Body</h5>

| Field | Type | Description |
|-------|------|-------------|
| `token` | string | Authentication token |[^Token]
| `task` | string | Operation: "getfriends", "send", "unfriend", "deleterequest" |
| `theirname` | string | Target username (required for "send") |
| `theirid` | number | Target user ID (required for "unfriend", "deleterequest") |

<h5>Response</h5>

| Field | Type | Description |
|-------|------|-------------|
| `r` | string | Response status: "success" or error |
| `e` | string | Error code: "map_unpublished", "not_faved", etc. |
| (varies by task) | (varies) | Task-specific response data |

<a name="map-endpoints"></a>
### Map Endpoints

<a name="map-favorite-endpoints"></a>
#### Map Favorite Endpoints

<a name="map_favephp"></a>
##### map_fave.php

<h5>Body</h5>

| Field | Type | Description |
|-------|------|-------------|
| `token` | string | Authentication token |[^Token]
| `mapid` | number | Map database ID |
| `action` | string | "a" for add/favorite, "u" for unfavorite |

<h5>Response</h5>

| Field | Type | Description |
|-------|------|-------------|
| `r` | string | Response status: "success" or error |
| `e` | string | Error code: "map_unpublished", "not_faved", etc. |

<a name="map-search-endpoints"></a>
#### Map Search Endpoints

<a name="map_getsearchphp"></a>
##### map_getsearch.php

<h5>Body</h5>

| Field | Type | Description |
|-------|------|-------------|
| `searchauthor` | boolean | Search by author name |
| `searchmapname` | boolean | Search by map name |
| `searchsort` | string | Sort order |
| `searchstring` | string | Query string |
| `startingfrom` | number | Pagination offset |

<h5>Response</h5>

| Field | Type | Description |
|-------|------|-------------|
| `r` | string | Response status: "success" |
| `maps` | array | Array of map objects matching query |
| `more` | boolean | Whether more results available |

<a name="map_getfreshphp"></a>
##### map_getfresh.php

<h5>Body</h5>

| Field | Type | Description |
|-------|------|-------------|
| `startingfrom` | number | Pagination offset |

<h5>Response</h5>

| Field | Type | Description |
|-------|------|-------------|
| `r` | string | Response status: "success" |
| `maps` | array | Array of recently added maps |
| `more` | boolean | Whether more results available |

<a name="map_getfavephp"></a>
##### map_getfave.php

<h5>Body</h5>

| Field | Type | Description |
|-------|------|-------------|
| `token` | string | Authentication token |[^Token]
| `startingfrom` | number | Pagination offset |

<h5>Response</h5>

| Field | Type | Description |
|-------|------|-------------|
| `r` | string | Response status: "success" |
| `maps` | array | Array of user's favorite maps |
| `more` | boolean | Whether more results available |

<a name="map_getownphp"></a>
##### map_getown.php

<h5>Body</h5>

| Field | Type | Description |
|-------|------|-------------|
| `token` | string | Authentication token |[^Token]
| `startingfrom` | number | Pagination offset |

<h5>Response</h5>

| Field | Type | Description |
|-------|------|-------------|
| `r` | string | Response status: "success" |
| `maps` | array | Array of maps created by user |

<a name="map-b1-endpoints-bonk1-legacy-maps"></a>
#### Map B1 Endpoints (Bonk1 Legacy Maps)

<a name="map_b1_getfavephp"></a>
##### map_b1_getfave.php

<h5>Body</h5>

| Field | Type | Description |
|-------|------|-------------|
| `token` | string | Authentication token |[^Token]
| `startingfrom` | number | Pagination offset |

<h5>Response</h5>

| Field | Type | Description |
|-------|------|-------------|
| `r` | string | Response status: "success" |
| `maps` | string | URL-encoded map data string |
| `more` | boolean | Whether more results available |

<a name="map_b1_getownphp"></a>
##### map_b1_getown.php

<h5>Body</h5>

| Field | Type | Description |
|-------|------|-------------|
| `token` | string | Authentication token |[^Token]
| `startingfrom` | number | Pagination offset |

<h5>Response</h5>

| Field | Type | Description |
|-------|------|-------------|
| `r` | string | Response status: "success" |
| `maps` | string | URL-encoded map data string |
| `more` | boolean | Whether more results available |

<a name="map_b1_getbestphp"></a>
##### map_b1_getbest.php

<h5>Body</h5>

| Field | Type | Description |
|-------|------|-------------|
| `startingfrom` | number | Pagination offset |

<h5>Response</h5>

| Field | Type | Description |
|-------|------|-------------|
| `r` | string | Response status: "success" |
| `maps` | string | URL-encoded map data string |
| `more` | boolean | Whether more results available |

<a name="map_b1_getsearchphp"></a>
##### map_b1_getsearch.php

<h5>Body</h5>

| Field | Type | Description |
|-------|------|-------------|
| `searchsort` | string | Sort order: "ctr" for best, "id" for recent |
| `searchauthor` | string | "true" or empty string |
| `searchmapname` | string | "true" or empty string |
| `startingfrom` | number | Pagination offset |
| `searchstring` | string | Query string |

<h5>Response</h5>

| Field | Type | Description |
|-------|------|-------------|
| `r` | string | Response status: "success" |
| `maps` | string | URL-encoded map data string |
| `more` | boolean | Whether more results available |

<a name="map-management-endpoints"></a>
#### Map Management Endpoints

<a name="map_save_pubphp"></a>
##### map_save_pub.php

<h5>Body</h5>

| Field | Type | Description |
|-------|------|-------------|
| `mapname` | string | Name for the map |
| `overwriteok` | string | "true" to overwrite, "false" to check if exists |
| `leveldata` | string | Encoded map data (compressed/encoded) |
| `token` | string | Authentication token |[^Token]
| `rxid` | string | Map revision/export ID |
| `rxdb` | string | Map revision database reference |
| `rxn` | string | Map revision name |
| `rxa` | string | Map revision author |
| `public` | string | "true" to make public, "false" for private |
| `mo` | string | Game mode for map |

<h5>Response</h5>

| Field | Type | Description |
|-------|------|-------------|
| `r` | string | "success", "overwrite_confirm", or error |
| `mapid` | string | Database ID of saved map (on success) |
| `e` | string | Error code on failure |

<a name="map_deletephp"></a>
##### map_delete.php

<h5>Body</h5>

| Field | Type | Description |
|-------|------|-------------|
| `token` | string | Authentication token |[^Token]
| `mapid` | number | Map database ID to delete |

<a name="replay-endpoints"></a>
### Replay Endpoints

<a name="replay_submitphp"></a>
##### replay_submit.php

<h5>Body</h5>

| Field | Type | Description |
|-------|------|-------------|
| `version` | string | Game version |
| `replaydata` | string | Encoded replay data (game state, inputs, players) |
| `mapid` | number | Database ID of map played |
| `mode` | string | Game mode (optional in some calls) |

<a name="replay_getphp"></a>
##### replay_get.php

<h5>Body</h5>

| Field | Type | Description |
|-------|------|-------------|
| version | int | Api Protocol version, as of 17/7/2026 this is 49 |
| mode | string | filterMode (see <a href="#game-mode-enum">Game Mode Enum</a>)  |
| offset | int | TODO |
| `startingfrom` | number | Pagination offset |

<h5>Response</h5>

| Field | Type | Description |
|-------|------|-------------|
| r | TODO | Response Status |
| replays | TODO | TODO |

<a name="replay_reportphp"></a>
##### replay_report.php

<h5>Body</h5>

| Field | Type | Description |
|-------|------|-------------|
| replayid | ? | TODO |

<h5>Response</h5>

| Field | Type | Description |
|-------|------|-------------|
| ? | ? | TODO |

<a name="room-endpoints"></a>
### Room Endpoints

<a name="getroomsphp"></a>
##### getrooms.php

<h5>Body</h5>

| Field | Type | Description |
|-------|------|-------------|
| `version` | string | Game version |
| `gl` | string |  "y" or "n" game language? |
| `token` | string | Authentication token |[^Token]

<h5>Response</h5>

| Field | Type | Description |
|-------|------|-------------|
| `rooms` | array | Array of available game rooms |
| `friends` | array | Array of friend objects with `roomid` and `name` |
| `lat` | string | User's latitude (if available) |
| `long` | string | User's longitude (if available) |
| `city` | string | User's city (if available) |
| `country` | string | User's country (if available) |
| `createserver` | string | Server address for creating new rooms |

<a name="getroomaddressphp"></a>
##### getroomaddress.php

Room address is used for initializing a connection to a room through <a href="emit-13---join-room">Emit 13 - Join Room</a>[^Emit]

<h5>Body</h5>

| Field | Type | Description |
|-------|------|-------------|
| `id` | number | Room ID to get address for |

<h5>Response</h5>

| Field | Type | Description |
|-------|------|-------------|
| `r` | string | Response status: "success" or error |
| `id` | number | Echo of requested room ID |
| `address` | string | Server address to connect to |
| `server` | string | Server identifier/name |
| `e` | string | Error code on failure |

<a name="matchmaking-endpoints"></a>
### Matchmaking Endpoints

<a name="matchmaking_mapsphp"></a>
##### matchmaking_maps.php

<h5>Body</h5>
(No parameters)

<h5>Response</h5>

| Field | Type | Description |
|-------|------|-------------|
| `r` | string | Response status: "success" |
| `t1` | array | Array of training/quickplay maps with `name`, `authorname`, `id`, `leveldata` |

<a name="matchmaking_queryphp"></a>
##### matchmaking_query.php

<h5>Body</h5>

| Field | Type | Description |
|-------|------|-------------|
| `version` | string | Game version |
| `mode` | string | Game mode (e.g., "arrowsquick", "b", "ard") |
| `excludeaddresses` | string | Comma-separated (#) server addresses to exclude |
| `token` | string | Authentication token |[^Token]

<h5>Response</h5>

| Field | Type | Description |
|-------|------|-------------|
| `r` | string | Response status: "fail", "join", or "create" |
| `address` | string | Server address (if r="join") |
| `server` | string | Server identifier (if r="join" or "create") |
| `lat` | string | Latitude (if r="create") |
| `long` | string | Longitude (if r="create") |
| `country` | string | Country (if r="create") |
| `e` | string | Error code (if r="fail") |

<a name="avatar-endpoints"></a>
### Avatar Endpoints

<a name="avatar_updatephp"></a>
##### avatar_update.php

<h5>Body</h5>

| Field | Type | Description |
|-------|------|-------------|
| `token` | string | Authentication token |[^Token]
| `task` | string | Operation: "updateslot" or "updateavatar" |
| `newactive` | number | New active avatar slot number (for "updateslot") |
| `newavatarslot` | number | Avatar slot to update (for "updateavatar") |
| `newavatar` | string | Encoded avatar data (for "updateavatar") |

<a name="static-endpoints"></a>
### static Endpoints

These endpoints are simple get requests with no request body.

<a name="combinedplayercounttxt"></a>
##### combinedplayercount.txt

<h5>Response</h5>

| Field | Type | Description |
|-------|------|-------------|
| `bonk` | object | Contains player count data for Bonk.io |
| `car` | object | Contains player count data for supercarstadium.com (GAME NO LONGER EXISTS) |

<details>
<!-- skipForTableContent -->
<summary><a name="snippet-example-response-3093"></a>Example response</summary>

```json
{
   "car":{
      "custom":"0"
   },
   "bonk":{
      "quick_classic":"4",
      "quick_arrows":"3",
      "quick_grapple":"0",
      "custom":"53",
      "quick_simple":"0",
      "total":60
   }
}
```
</details>

<a name="hot-maps-cache"></a>
##### Hot Maps Cache

> ![NOTE]
> This is a get request, unlike the others.

Constructs a URL to fetch paginated hot/trending maps by game mode.

<h5>Body</h5>
(No body - GET request with URL parameters)

URL format: `https://bonk2.io/scripts/hotmaps/cache3_[page]_[modeCode].txt`

| Parameter | Values | Description |
|-----------|--------|-------------|
| `page` | number | Page number (1-indexed) for pagination |
| `modeCode` | "hot", "ard", "sp" | Game mode: "hot" (general), "ard" (death arrows), "sp" (grapple) |

<h5>Response</h5>

| Field | Type | Description |
|-------|------|-------------|
| `r` | string | Response status: "success" or error |
| `maps` | object[] | Array of hot map objects for requested page/mode |

<a name="picks"></a>
#### picks

> ![NOTE]
> This is a get request, unlike the others.

> [!NOTE]
> An exception to the rule of hotmaps cache  is `https://bonk2.io/scripts/hotmaps/picks.txt`

<h5>Response</h5>

| Field | Type | Description |
|-------|------|-------------|
| `r` | string | Response status: "success" or error |
| `maps`| object[] | Array of featured/community-picked maps |
<!-- TODO object to actual table-->

<a name="source-code-deobfuscation"></a>
## Source Code / Deobfuscation

> [!WARNING]
> THIS SECTION IS NOT ALLOWED CONTRIBUTIONS, WILL BE PURELY WRITTEN BY ME.

If you are interested in making your own deobfuscator, you should learn **AST parsing**. Check out this resource:[^AST]

- [AST Parsing Guide](https://gist.github.com/0xdevalias/d8b743efb82c0e9406fc69da0d6c6581)[^AST]

The [Community Resources](#community-resources) section below will also help you get started if you're just interested in using something public.

<a name="deobfuscation-tools"></a>
### Deobfuscation Tools

<a name="kookywarriorbonk-deobfuscatorhttpsgithubcomkookywarriorbonk-deobfuscator"></a>
#### [kookywarrior/bonk-deobfuscator](https://github.com/kookywarrior/bonk-deobfuscator)

> [!WARNING]
> This deobfuscator is very bare bones and may have limited functionality.

<a name="kitaes-softwarebonk-deobfuscatorhttpsgithubcomkitaes-softwarebonk-deobfuscator"></a>
#### [Kitaes-software/bonk-deobfuscator](https://github.com/Kitaes-software/bonk-deobfuscator)

> [!NOTE]
> Whilst this tool is quite badly coded and does not do AST parsing (similar to the previous option above) and will break with new versions, it does produce very nice results.[^AST]

> [!WARNING]
> Please do not ask for better options. Other options by me or the community often involve automatic renaming heuristics through AST or AI, and ARE PRIVATE.[^AST]

<a name="snippets"></a>
## Snippets

<details>
<summary>All Code Blocks</summary>

<!-- snippetSummaryIndex -->
- <a href="#snippet-deobfuscated-handler-code-on-1-333">Deobfuscated Handler Code On 1</a>
- <a href="#snippet-deobfuscated-handler-code-on-2-371">Deobfuscated Handler Code On 2</a>
- <a href="#snippet-deobfuscated-handler-code-on-3-409">Deobfuscated Handler Code On 3</a>
- <a href="#snippet-deobfuscated-handler-code-on-31-790">Deobfuscated Handler Code On 31</a>
- <a href="#snippet-python-parsing-1855">Python Parsing</a>
- <a href="#snippet-javascript-flipunflip-case-works-both-ways-2313">Javascript: Flip/unflip case (works both ways)</a>
- <a href="#snippet-example-response-3093">Example response</a>
<!-- /snippetSummaryIndex -->

</details>

<a name="peerid"></a>
### PeerID

Generating a unique peerID to use[^PeerID]

<details>
<summary>python</summary>

```py
alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_"
def yeast():
    num = math.floor(time.time()*1000)
    encoded = ""
    while num > 0 or encoded == "":
        encoded = alphabet[num % len(alphabet)] + encoded
        num = math.floor(num / len(alphabet))
    return encoded

```
</details>

<details>
<summary>csharp</summary>

```csharp
public class Util
{
    private const string Alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_";

    public static string Yeast()
    {
        long timestamp = DateTimeOffset.UtcNow.ToUnixTimeMilliseconds();
        string result = "";

        do
        {
            result = Alphabet[(int)(timestamp % Alphabet.Length)] + result;
            timestamp /= Alphabet.Length;
        }
        while (timestamp > 0);

        return result;
    }
}
```
</details>

<a name="foot-notes"></a>
## Foot Notes
: **Custom Anchors** `<a name="...">` tags placed before headings for linking to different places in the markdown file. See github docs: [custom anchors](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#custom-anchors).
: **AST** Abstract syntax tree

: **LZ-String** A string compression algorithm used for encoding map and game state data. [GitHub](https://github.com/pieroxy/lz-string)
: **Packet ID** A Packet ID is a numeric or identifier value used to distinguish different network packets in a communication system. It is commonly used in both client and server networking to determine how incoming and outgoing messages should be handled. Packet ID may serve different purposes depending on direction (incoming `socket.on()` vs outgoing `socket.emit()`).
: **PSON** An efficient binary encoding for JSON data. [GitHub](https://github.com/dcodeIO/PSON)
: **Player ID** Each player in a room has a Player ID. It is an auto-incrementing integer assigned when a player joins the room, starting from 0 (the __original__ host). Player IDs are used to map players to their discs, scores, inputs, and other per-player data.
: **Session Id** Unanimous with "Player ID"
: **Token** A [JWT](https://www.jwt.io/) authentication token credential that belongs to an account. Obtained after successful response from login endpoints: [login_legacy.php](#login_legacyphp), [login_auto.php](#login_autophp), or [register_legacy.php](#register_legacyphp). See [Token Format](#token-format) for structure details.
: **Remember Token** The same as token except it doesn't expire unless the server explicitly expires it.
: **Socket.IO** A real-time bidirectional communication library built on top of WebSockets. It enables event-driven, low-latency communication between client and server. [Website](https://socket.io/)
: **Base64** A binary-to-text encoding scheme that represents binary data in ASCII string format. Used throughout Bonk for encoding map data, replay data, and other binary information as transmittable strings.
: **Fixture** In Box2D, a fixture attaches a shape (collision geometry) to a body see [docs/classb2_fixture.html](https://box2d.org/doc_version_2_4/classb2_fixture.html)
: **Rate Limit** A server-side throttling mechanism that prevents clients from performing actions too frequently. Protects against spam and exploits by enforcing cooldown periods between actions.
: **Host** The player controlling the room
: **Emit** In Socket.IO context, to send data from client to server (or vice versa). An event is "emitted" with associated data to trigger server-side handlers.
: **Peer ID** is a random, 20-character string that acts as a client's address, it must however match a specific "yeast" format. <a href="peerid">Snippets for generating them</a> 
