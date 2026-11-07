# Housebets Sportsbook is coming — submission copy

Contest closes **14 Nov 2026, 18:00 UTC** (= 15 Nov 2026, 01:00 WIB).
Fill the form with the four fields below.

---

## 1 — Link to your clickable prototype

**https://housebets-sportsbook-ashy.vercel.app**

Opens without a login. Works at 1440px and 390px.

Verified on the live deploy:
- [x] Opens **without a login** (200 on `/`, no auth wall)
- [x] All four asset files load (css, js, data, official wordmark)
- [x] Renders on desktop (1440) and phone (390), no horizontal overflow
- [x] `https://`, no mixed content
- [x] 11/11 functional checks passed on the live URL

---

## 2 — Pages in your prototype (tick all five)

| # | Page | Route | Status |
|---|---|---|---|
| 1 | Sports home | `#/home` | ✅ Live now · Starting soon · Top competitions · Sports nav · Search (teams, players, competitions, **markets**) |
| 2 | Live | `#/live` | ✅ Every match in play · filter by **sport and competition** · live score + clock · **nothing live → Starting soon** |
| 3 | Football | `#/football` | ✅ PL · UCL · LaLiga · Serie A · Bundesliga · match-result odds on every row · **follow a team or competition** |
| 4 | Match page | `#/match/ars-bha` | ✅ Arsenal v Brighton, live · scoreboard score + clock · **all six market groups** · odds moving · markets suspended |
| 5 | Bet slip + My bets | `#/bets` | ✅ Singles only · decimal odds · stake in **USDT** · stake/odds/potential return · **odds changed → Accept** · selection suspended · bet placed · bet failed · **open / settled / cash out** · one page |

---

## 3 — Your big idea (80–800 characters)

Copy-paste this (371 characters, inside the limit):

```
Housebets is crypto-first, so the sportsbook should feel like a trading surface, not a bingo card. One hairline rhythm, tabular figures, and prices that tell you what moved since you last looked. Every state explains itself in one plain sentence — suspended, changed, failed — and the slip never guesses on your behalf: it asks. Singles only, so the whole page fits in one decision.
```

Shorter alternative (191 characters) if the field is tight:

```
Odds are the content. One hairline rhythm, tabular figures, and prices that tell you what moved. Every state explains itself in one plain sentence, and the slip never guesses — it asks.
```

---

## 4 — Tools and templates you used

```
Arena.ai Agent Mode (AI agent) — direction, information architecture, and all code.
Hand-written HTML, CSS and vanilla JavaScript. No framework, no build step.
No Figma file, no v0, no UI kit, no template, no component library.
Icons: original inline SVG set drawn for this entry.
Typeface: Inter (Google Fonts, open source).
Colour palette and page structure measured from the official contest wireframes
on the Housebets contest page (desk-home 1440x900 plus the six phone wireframes).
The Housebets wordmark is the official SVG served from housebets.com.
The starter-file pack referenced in the brief is not published anywhere: the
entry form only asks for a link, there is no download on the contest page, and
no pack reference exists in the site bundle. The shell was therefore rebuilt
from the official wireframes rather than imported. Sample data only.
```

---

## Confirmations you tick

- ✅ My bet slip takes singles only. No multis, boosts or free bets.
- ✅ No real player data and no real money anywhere in it.
- ✅ It's my own work. I've named any tools, templates or kits I used in this form.
- ✅ Housebets can share my entry publicly.
- ✅ If I win, the prize is the full payment and Housebets owns the winning code, designs and rights.

---

## Where the 100 points are covered

| Criterion | Pts | What to point the judges at |
|---|---|---|
| Sports home | 15 | Live now, Starting soon, Top competitions, 8-sport nav, search across teams/players/competitions/**markets** |
| Live | 10 | Sport + competition filters, live score and clock, **empty state → Starting soon** |
| Football | 10 | Five named competitions, match-result odds on every row, follow on team **and** competition |
| **Match page** | **20** | Arsenal v Brighton live, scoreboard, all **six** market groups, odds moving with ▲▼, groups suspended and still readable |
| **Bet slip + My bets** | **20** | Add from any odds, singles only, USDT stake, stake/odds/return, Accept on change, suspended selection, receipt on success, failure with retry, open/settled/cash out — one page |
| Feels like Housebets | 15 | Navy surfaces from the official wireframes, aqua reserved for prices and the one primary action, tabular figures, hairline 1px rules, Inter, 18+ shell |
| Every state | 10 | **State lab** (flask button, bottom-right) fires all ten states on demand |

---

## State lab — how a judge uses it

Bottom-right flask icon → menu. Every state in the scorecard, fired on purpose:

| Button | What it shows |
|---|---|
| Odds move up | green ▲ flash on a live price |
| Odds move down | red ▼ flash on a live price |
| Odds changed → must accept | slip locks, **Accept / Remove**, Place bet disabled until resolved |
| Market group suspended | group greys out, lock icon, prices still readable |
| Selection suspended in slip | slip row disabled with a one-line reason |
| Bet placed (receipt) | receipt with stake, return, reference |
| Bet failed (next attempt) | failure toast, Place bet becomes **Retry bet** |
| Nothing live | Live page shows the empty state + Starting soon |
| Cash out on an open bet | My bets → cash-out value → confirm → settled |
| Empty slip state | illustration + "tap any odds to add" |
| Pause live odds | freezes the drift engine so nothing moves while they look at one state |

---

## Notes I'd want a judge to read

1. **Six market groups, not "some markets"** — Popular, Goals, Halves, Handicaps, Goalscorers, Corners & cards.
2. **Double chance is derived** from each fixture's own 1X2 (`1/(1/x + 1/y)`), so odds across the page are internally consistent.
3. **Nothing is out of scope** — no multis, no bet builder, no boosts, no free bets, no outrights, no stats widgets, no AI search.
4. **390px and 1440px both designed**, not just responsive by accident: the phone table collapses to cards, and the bet slip becomes a bottom bar + sheet.
5. **Prices are per-fixture**, not a shared global list, so every row on the Football page is plausible.
