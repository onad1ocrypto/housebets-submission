# Housebets Sportsbook — contest prototype

Clickable prototype for **Housebets Sportsbook is coming** ($15,000, Housebets Contest Labs).

**Five pages, one shell, sample data. No login, no backend, no real money.**

## Pages

| # | Page | Route |
|---|---|---|
| 1 | Sports home | `#/home` |
| 2 | Live | `#/live` |
| 3 | Football | `#/football` |
| 4 | Match page | `#/match/ars-bha` |
| 5 | Bet slip + My bets | `#/bets` |

Designed at **1440px** and **390px**. On phones the bet slip is a bar at the bottom of the screen that opens into a sheet.

## Run it

No build step. Any static server works:

```bash
python3 -m http.server 4173
# or
npx serve .
```

Or just open `index.html`.

## Structure

```
index.html          shell markup, boots the app
assets/app.css      design system, components, 1440/390 breakpoints
assets/data.js      teams, competitions, fixtures, markets, sample bets
assets/app.js       hash router, odds + clock engine, slip, cash out, state lab
assets/brand/       official Housebets wordmark and mark (SVG, from housebets.com)
SUBMISSION.md       copy for the contest form
```

## Design direction

**Live first.** The match is the product: score and clock dominate, markets compress underneath.

Colour carries meaning rather than decorating:

| Role | Colour | Why |
|---|---|---|
| Score | `#FFFFFF` | what happened — brightest |
| Team | `#DCE9F0` | who — near white |
| Market name | `#78909E` | what kind of bet — dim, labels recede |
| Odds | `#3ED0DA` | what you can act on — the only accent |

Live matches are lit (brighter surface, red 3px spine, pulsing dot); pre-match recedes (darker surface, dimmed team names). Odds stay fully lit in both — the price is the thing you act on, so it is never dimmed.

## State lab

The flask button, bottom right, fires every state in the scorecard on demand:

odds move up · odds move down · odds changed (must accept) · market group suspended · selection suspended in slip · bet placed · bet failed · nothing live · cash out · empty slip · pause live odds.

Judges should not have to wait for randomness to see any of these.

## Scope

In: singles only, decimal odds, stakes in USDT, stake/odds/potential return, odds-changed acceptance, suspended markets and selections, bet placed and bet failed, open/settled/cash out, six market groups, search across teams/players/competitions/markets.

Out (per the brief): multis and bet builders, boosts and free bets, outrights and specials, stats widgets and match trackers, AI search.

## Sample data

Every price, score and player name is invented. No real players, no real money, no backend. The Housebets wordmark is the official SVG served from housebets.com.
