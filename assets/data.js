/* =============================================================
   Housebets Sportsbook — sample data
   All names are real competitions/venues, but every player,
   price and result here is invented for this prototype.
   No real money. No real player data.
   ============================================================= */

const HB = {};

/* ---------- brand ---------- */
HB.brand = {
  name: 'Housebets',
  weeklyPrize: '$50,000.00'
};

/* ---------- competitions ---------- */
HB.comps = [
  { id: 'pl',    name: 'Premier League',   short: 'PL',     sport: 'soccer', crest: 'pl' },
  { id: 'ucl',   name: 'Champions League', short: 'UCL',    sport: 'soccer', crest: 'ucl' },
  { id: 'liga',  name: 'LaLiga',           short: 'LAL',    sport: 'soccer', crest: 'lal' },
  { id: 'seria', name: 'Serie A',          short: 'SA',     sport: 'soccer', crest: 'sa' },
  { id: 'bund',  name: 'Bundesliga',       short: 'BL',     sport: 'soccer', crest: 'bl' }
];

/* ---------- teams ---------- */
HB.teams = {
  ARS:  { name: 'Arsenal',                abbr: 'ARS', sname: 'Arsenal',  col: '#E5323B', col2: '#FFFFFF' },
  BHA:  { name: 'Brighton & Hove Albion', abbr: 'BHA', sname: 'Brighton',  col: '#005DAA', col2: '#FFE500' },
  LIV:  { name: 'Liverpool',              abbr: 'LIV', sname: 'Liverpool',  col: '#C8102E', col2: '#00B2A9' },
  MUN:  { name: 'Manchester United',      abbr: 'MUN', sname: 'Man Utd',  col: '#DA291C', col2: '#FBE122' },
  INT:  { name: 'Inter',                  abbr: 'INT', sname: 'Inter',  col: '#0068A8', col2: '#010E80' },
  RMA:  { name: 'Real Madrid',            abbr: 'RMA', sname: 'Real Madrid',  col: '#FEBE10', col2: '#00529F' },
  BAY:  { name: 'Bayern Munich',          abbr: 'BAY', sname: 'Bayern',  col: '#DC052D', col2: '#0066B2' },
  MCI:  { name: 'Manchester City',        abbr: 'MCI', sname: 'Man City',  col: '#6CABDD', col2: '#1C2C5B' },
  TOT:  { name: 'Tottenham Hotspur',      abbr: 'TOT', sname: 'Spurs',  col: '#132257', col2: '#FFFFFF' },
  ATM:  { name: 'Atletico Madrid',        abbr: 'ATM', sname: 'Atletico',  col: '#CB3524', col2: '#FFFFFF' },
  SEV:  { name: 'Sevilla',                abbr: 'SEV', sname: 'Sevilla',  col: '#D9042B', col2: '#FFFFFF' },
  NAP:  { name: 'Napoli',                 abbr: 'NAP', sname: 'Napoli',  col: '#12A0D7', col2: '#FFFFFF' },
  MIL:  { name: 'Milan',                  abbr: 'MIL', sname: 'Milan',  col: '#FB090B', col2: '#000000' },
  BVB:  { name: 'Borussia Dortmund',      abbr: 'BVB', sname: 'Dortmund',  col: '#FDE100', col2: '#000000' },
  CHE:  { name: 'Chelsea',                abbr: 'CHE', sname: 'Chelsea',  col: '#034694', col2: '#FFFFFF' },
  JUV:  { name: 'Juventus',               abbr: 'JUV', sname: 'Juventus',  col: '#000000', col2: '#FFFFFF' }
};

/* ---------- scorer names (invented) ---------- */
HB.scorers = ['T. Reyes', 'M. Okonkwo', 'L. Vazquez', 'D. Halvorsen', 'J. Whitlock', 'S. Amankwah'];

/* ---------- matches ----------
   state: 'live' | 'soon' | 'pre'
   susp:  true = whole market group suspended
------------------------------------------------- */
HB.matches = [
  {
    id: 'ars-bha', comp: 'pl', state: 'live', clock: "52'", minute: 52,
    home: 'ARS', away: 'BHA', hs: 1, as: 0,
    kick: 'LIVE', day: '', marketsCount: 115,
    odds: { 'mr-home': 1.30, 'mr-draw': 4.60, 'mr-away': 11.00 }
  },
  {
    id: 'liv-mun', comp: 'pl', state: 'soon', clock: '', minute: 0,
    home: 'LIV', away: 'MUN', hs: null, as: null,
    kick: '16:30', day: 'Sun, Oct 18', marketsCount: 187,
    odds: { 'mr-home': 1.65, 'mr-draw': 4.00, 'mr-away': 4.33 }
  },
  {
    id: 'ars-int', comp: 'ucl', state: 'pre', clock: '', minute: 0,
    home: 'ARS', away: 'INT', hs: null, as: null,
    kick: '20:00', day: 'Tue, Oct 20', marketsCount: 85,
    odds: { 'mr-home': 1.95, 'mr-draw': 3.50, 'mr-away': 4.00 }
  },
  {
    id: 'atm-sev', comp: 'liga', state: 'live', clock: "37'", minute: 37,
    home: 'ATM', away: 'SEV', hs: 1, as: 0,
    kick: 'LIVE', day: '', marketsCount: 96, susp: true,
    odds: { 'mr-home': 1.44, 'mr-draw': 4.20, 'mr-away': 8.50 }
  },
  {
    id: 'rma-bay', comp: 'ucl', state: 'pre', clock: '', minute: 0,
    home: 'RMA', away: 'BAY', hs: null, as: null,
    kick: '20:00', day: 'Tue, Oct 20', marketsCount: 110,
    odds: { 'mr-home': 2.20, 'mr-draw': 3.70, 'mr-away': 2.90 }
  },
  {
    id: 'mci-tot', comp: 'pl', state: 'live', clock: "51'", minute: 51,
    home: 'MCI', away: 'TOT', hs: 2, as: 0,
    kick: 'LIVE', day: '', marketsCount: 132,
    odds: { 'mr-home': 1.18, 'mr-draw': 7.50, 'mr-away': 15.00 }
  },
  {
    id: 'nap-mil', comp: 'seria', state: 'live', clock: "74'", minute: 74,
    home: 'NAP', away: 'MIL', hs: 1, as: 1,
    kick: 'LIVE', day: '', marketsCount: 74,
    odds: { 'mr-home': 2.60, 'mr-draw': 3.10, 'mr-away': 2.90 }
  },
  {
    id: 'bvb-che', comp: 'bund', state: 'pre', clock: '', minute: 0,
    home: 'BVB', away: 'CHE', hs: null, as: null,
    kick: '20:00', day: 'Wed, Oct 21', marketsCount: 88,
    odds: { 'mr-home': 2.40, 'mr-draw': 3.60, 'mr-away': 2.80 }
  },
  {
    id: 'juv-int', comp: 'seria', state: 'soon', clock: '', minute: 0,
    home: 'JUV', away: 'INT', hs: null, as: null,
    kick: '20:45', day: 'Sun, Oct 18', marketsCount: 91,
    odds: { 'mr-home': 2.75, 'mr-draw': 3.30, 'mr-away': 2.55 }
  },
  {
    id: 'sev-rma', comp: 'liga', state: 'pre', clock: '', minute: 0,
    home: 'SEV', away: 'RMA', hs: null, as: null,
    kick: '21:00', day: 'Mon, Oct 19', marketsCount: 103,
    odds: { 'mr-home': 4.10, 'mr-draw': 3.90, 'mr-away': 1.80 }
  },
  {
    id: 'che-liv', comp: 'pl', state: 'live', clock: "34'", minute: 34,
    home: 'CHE', away: 'LIV', hs: 0, as: 1,
    kick: 'LIVE', day: '', marketsCount: 168,
    odds: { 'mr-home': 4.20, 'mr-draw': 3.60, 'mr-away': 1.85 }
  },
  {
    id: 'int-nap', comp: 'seria', state: 'live', clock: "68'", minute: 68,
    home: 'INT', away: 'NAP', hs: 2, as: 1,
    kick: 'LIVE', day: '', marketsCount: 141,
    odds: { 'mr-home': 1.44, 'mr-draw': 4.50, 'mr-away': 7.00 }
  },
  {
    id: 'bay-sev', comp: 'ucl', state: 'live', clock: "12'", minute: 12,
    home: 'BAY', away: 'SEV', hs: 0, as: 0,
    kick: 'LIVE', day: '', marketsCount: 122,
    odds: { 'mr-home': 1.55, 'mr-draw': 4.10, 'mr-away': 6.00 }
  }
];

/* ---------- sports nav ---------- */
HB.sports = [
  { id: 'home',      label: 'Home',      icon: 'home',   count: 0 },
  { id: 'live',      label: 'Live',      icon: 'live',   count: 13 },
  { id: 'soccer',    label: 'Soccer',    icon: 'soccer', count: 0 },
  { id: 'tennis',    label: 'Tennis',    icon: 'tennis', count: 0 },
  { id: 'basket',    label: 'Basketball',icon: 'hoop',   count: 0 },
  { id: 'baseball',  label: 'Baseball',  icon: 'base',   count: 0 },
  { id: 'nfl',       label: 'American Football', icon: 'nfl', count: 0 },
  { id: 'esports',   label: 'Esports',   icon: 'esport', count: 0 },
  { id: 'volley',    label: 'Volleyball',icon: 'volley', count: 0 },
  { id: 'rugby',     label: 'Rugby',     icon: 'rugby',  count: 0 }
];

/* ---------- market groups (match page) ----------
   Six groups exactly as the brief requires.
   `n` = number of markets in the group (shown on the tab badge,
   and it matches exactly how many are rendered).
------------------------------------------------- */
HB.marketGroups = [
  { id: 'popular', label: 'Popular',         n: 10 },
  { id: 'goals',   label: 'Goals',           n: 8 },
  { id: 'halves',  label: 'Halves',          n: 6 },
  { id: 'hcaps',   label: 'Handicaps',       n: 6 },
  { id: 'scorers', label: 'Goalscorers',     n: 5 },
  { id: 'cards',   label: 'Corners & cards', n: 6 }
];

/* Markets rendered per group.
   Every `k` must be unique across the whole object — the price
   engine namespaces by `fixtureId:outcomeKey`. */
HB.markets = {
  popular: [
    { id: 'mr',    name: 'Match result', cols: 3, suspended: false,
      outs: [{ k: 'mr-home', n: 'Arsenal', v: 1.30 }, { k: 'mr-draw', n: 'Draw', v: 4.60 }, { k: 'mr-away', n: 'Brighton', v: 11.00 }] },
    { id: 'dc',    name: 'Double chance', cols: 3, suspended: false,
      outs: [{ k: 'dc-hd', n: 'Arsenal/Draw', v: 1.01 }, { k: 'dc-ha', n: 'Arsenal/Brighton', v: 1.16 }, { k: 'dc-da', n: 'Draw/Brighton', v: 3.24 }] },
    { id: 'btts',  name: 'Both teams to score', cols: 2, suspended: false,
      outs: [{ k: 'btts-y', n: 'Yes', v: 1.72 }, { k: 'btts-n', n: 'No', v: 2.05 }] },
    { id: 'tg',    name: 'Total goals', cols: 3, suspended: false,
      outs: [{ k: 'tg-o25', n: 'Over 2.5', v: 1.57 }, { k: 'tg-u25', n: 'Under 2.5', v: 2.30 }, { k: 'tg-o35', n: 'Over 3.5', v: 2.65 }] },
    { id: 'dnbt',  name: 'Draw no bet', cols: 2, suspended: false,
      outs: [{ k: 'dnbt-h', n: 'Arsenal', v: 1.14 }, { k: 'dnbt-a', n: 'Brighton', v: 7.50 }] },
    { id: 'tg35',  name: 'Over/Under 3.5 goals', cols: 2, suspended: false,
      outs: [{ k: 'tg35-o', n: 'Over 3.5', v: 2.65 }, { k: 'tg35-u', n: 'Under 3.5', v: 1.44 }] },
    { id: 'ah05',  name: 'Asian handicap -0.5', cols: 2, suspended: false,
      outs: [{ k: 'ah05-h', n: 'Arsenal -0.5', v: 1.30 }, { k: 'ah05-a', n: 'Brighton +0.5', v: 3.30 }] },
    { id: 'htft',  name: 'Half-time / Full-time', cols: 3, suspended: false,
      outs: [{ k: 'htft-hh', n: 'Arsenal / Arsenal', v: 1.85 }, { k: 'htft-hd', n: 'Arsenal / Draw', v: 13.00 }, { k: 'htft-dh', n: 'Draw / Arsenal', v: 4.20 }] },
    { id: 'cs',    name: 'Correct score', cols: 3, suspended: false,
      outs: [{ k: 'cs-10', n: '1-0', v: 5.50 }, { k: 'cs-20', n: '2-0', v: 6.50 }, { k: 'cs-21', n: '2-1', v: 8.50 }] },
    { id: 'tgoe',  name: 'Total goals odd/even', cols: 2, suspended: false,
      outs: [{ k: 'tgoe-o', n: 'Odd', v: 1.90 }, { k: 'tgoe-e', n: 'Even', v: 1.90 }] }
  ],
  goals: [
    { id: 'o15',  name: 'Over/Under 1.5 goals', cols: 2, suspended: false,
      outs: [{ k: 'o15-o', n: 'Over 1.5', v: 1.22 }, { k: 'o15-u', n: 'Under 1.5', v: 4.00 }] },
    { id: 'o45',  name: 'Over/Under 4.5 goals', cols: 2, suspended: false,
      outs: [{ k: 'o45-o', n: 'Over 4.5', v: 4.75 }, { k: 'o45-u', n: 'Under 4.5', v: 1.18 }] },
    { id: 'nxg',  name: 'Next goal', cols: 3, suspended: false,
      outs: [{ k: 'nxg-h', n: 'Arsenal', v: 1.66 }, { k: 'nxg-n', n: 'No goal', v: 13.00 }, { k: 'nxg-a', n: 'Brighton', v: 2.90 }] },
    { id: 'rts',  name: 'Team to score', cols: 2, suspended: true,
      outs: [{ k: 'rts-h', n: 'Arsenal', v: 1.11 }, { k: 'rts-a', n: 'Brighton', v: 2.40 }] },
    { id: 'o05',  name: 'Over/Under 0.5 goals', cols: 2, suspended: false,
      outs: [{ k: 'o05-o', n: 'Over 0.5', v: 1.05 }, { k: 'o05-u', n: 'Under 0.5', v: 9.00 }] },
    { id: 'o55',  name: 'Over/Under 5.5 goals', cols: 2, suspended: false,
      outs: [{ k: 'o55-o', n: 'Over 5.5', v: 9.50 }, { k: 'o55-u', n: 'Under 5.5', v: 1.04 }] },
    { id: 'ttg',  name: 'Arsenal total goals', cols: 2, suspended: false,
      outs: [{ k: 'ttg-o', n: 'Over 1.5', v: 1.95 }, { k: 'ttg-u', n: 'Under 1.5', v: 1.85 }] },
    { id: 'wm',   name: 'Winning margin', cols: 3, suspended: false,
      outs: [{ k: 'wm-1', n: 'Arsenal by 1', v: 3.40 }, { k: 'wm-2', n: 'Arsenal by 2+', v: 3.10 }, { k: 'wm-a', n: 'Brighton', v: 9.50 }] }
  ],
  halves: [
    { id: 'h1',  name: '1st half result', cols: 3, suspended: false,
      outs: [{ k: 'h1-h', n: 'Arsenal', v: 1.73 }, { k: 'h1-d', n: 'Draw', v: 2.62 }, { k: 'h1-a', n: 'Brighton', v: 7.50 }] },
    { id: 'h2',  name: '2nd half result', cols: 3, suspended: false,
      outs: [{ k: 'h2-h', n: 'Arsenal', v: 1.90 }, { k: 'h2-d', n: 'Draw', v: 2.75 }, { k: 'h2-a', n: 'Brighton', v: 6.00 }] },
    { id: 'hhc', name: 'Half handicap', cols: 2, suspended: false,
      outs: [{ k: 'hhc-h', n: 'Arsenal -0.5', v: 1.68 }, { k: 'hhc-a', n: 'Brighton +0.5', v: 2.15 }] },
    { id: 'h1tg', name: '1st half total goals', cols: 2, suspended: false,
      outs: [{ k: 'h1tg-o', n: 'Over 1.5', v: 2.60 }, { k: 'h1tg-u', n: 'Under 1.5', v: 1.48 }] },
    { id: 'h1btts', name: '1st half both teams to score', cols: 2, suspended: false,
      outs: [{ k: 'h1btts-y', n: 'Yes', v: 4.20 }, { k: 'h1btts-n', n: 'No', v: 1.20 }] },
    { id: 'hsh', name: 'Highest scoring half', cols: 3, suspended: false,
      outs: [{ k: 'hsh-1', n: '1st half', v: 3.10 }, { k: 'hsh-2', n: '2nd half', v: 1.95 }, { k: 'hsh-t', n: 'Tie', v: 3.60 }] }
  ],
  hcaps: [
    { id: 'ah1', name: 'Asian handicap -1', cols: 2, suspended: false,
      outs: [{ k: 'ah1-h', n: 'Arsenal -1', v: 1.98 }, { k: 'ah1-a', n: 'Brighton +1', v: 1.92 }] },
    { id: 'ah2', name: 'Asian handicap -1.5', cols: 2, suspended: false,
      outs: [{ k: 'ah2-h', n: 'Arsenal -1.5', v: 2.38 }, { k: 'ah2-a', n: 'Brighton +1.5', v: 1.60 }] },
    { id: 'eh',  name: 'European handicap', cols: 3, suspended: true,
      outs: [{ k: 'eh-h', n: 'Arsenal -2', v: 4.20 }, { k: 'eh-d', n: 'Draw', v: 4.10 }, { k: 'eh-a', n: 'Brighton +2', v: 1.72 }] },
    { id: 'ah3', name: 'Asian handicap -2', cols: 2, suspended: false,
      outs: [{ k: 'ah3-h', n: 'Arsenal -2', v: 3.60 }, { k: 'ah3-a', n: 'Brighton +2', v: 1.30 }] },
    { id: 'ah25', name: 'Asian handicap -2.5', cols: 2, suspended: false,
      outs: [{ k: 'ah25-h', n: 'Arsenal -2.5', v: 4.40 }, { k: 'ah25-a', n: 'Brighton +2.5', v: 1.22 }] },
    { id: 'ahp1', name: 'Asian handicap +1', cols: 2, suspended: false,
      outs: [{ k: 'ahp1-h', n: 'Arsenal +1', v: 1.10 }, { k: 'ahp1-a', n: 'Brighton -1', v: 7.00 }] }
  ],
  scorers: [
    { id: 'fgs', name: 'First goalscorer', cols: 3, suspended: false,
      outs: [{ k: 'fgs-1', n: 'T. Reyes', v: 5.50 }, { k: 'fgs-2', n: 'M. Okonkwo', v: 7.00 }, { k: 'fgs-3', n: 'L. Vazquez', v: 9.50 }] },
    { id: 'ags', name: 'Anytime goalscorer', cols: 3, suspended: false,
      outs: [{ k: 'ags-1', n: 'T. Reyes', v: 2.10 }, { k: 'ags-2', n: 'M. Okonkwo', v: 2.75 }, { k: 'ags-3', n: 'D. Halvorsen', v: 3.40 }] },
    { id: 'lgs', name: 'Last goalscorer', cols: 3, suspended: true,
      outs: [{ k: 'lgs-1', n: 'S. Amankwah', v: 6.00 }, { k: 'lgs-2', n: 'J. Whitlock', v: 8.00 }, { k: 'lgs-3', n: 'L. Vazquez', v: 10.00 }] },
    { id: 'g2p', name: 'To score 2 or more', cols: 3, suspended: false,
      outs: [{ k: 'g2p-1', n: 'T. Reyes', v: 12.00 }, { k: 'g2p-2', n: 'M. Okonkwo', v: 17.00 }, { k: 'g2p-3', n: 'J. Whitlock', v: 21.00 }] },
    { id: 'hat', name: 'To score a hat-trick', cols: 3, suspended: false,
      outs: [{ k: 'hat-1', n: 'T. Reyes', v: 51.00 }, { k: 'hat-2', n: 'M. Okonkwo', v: 67.00 }, { k: 'hat-3', n: 'S. Amankwah', v: 81.00 }] }
  ],
  cards: [
    { id: 'corn', name: 'Total corners', cols: 3, suspended: false,
      outs: [{ k: 'corn-o95', n: 'Over 9.5', v: 1.85 }, { k: 'corn-u95', n: 'Under 9.5', v: 1.95 }, { k: 'corn-o115', n: 'Over 11.5', v: 3.10 }] },
    { id: 'crt',  name: 'Total cards', cols: 2, suspended: false,
      outs: [{ k: 'crt-o35', n: 'Over 3.5', v: 1.90 }, { k: 'crt-u35', n: 'Under 3.5', v: 1.90 }] },
    { id: 'first',name: 'First card', cols: 2, suspended: true,
      outs: [{ k: 'first-h', n: 'Arsenal', v: 2.05 }, { k: 'first-a', n: 'Brighton', v: 1.75 }] },
    { id: 'cornh', name: 'Corner handicap', cols: 2, suspended: false,
      outs: [{ k: 'cornh-h', n: 'Arsenal -1.5', v: 2.20 }, { k: 'cornh-a', n: 'Brighton +1.5', v: 1.70 }] },
    { id: 'corn1h', name: '1st half total corners', cols: 2, suspended: false,
      outs: [{ k: 'corn1h-o', n: 'Over 4.5', v: 1.95 }, { k: 'corn1h-u', n: 'Under 4.5', v: 1.85 }] },
    { id: 'cardh', name: 'Card handicap', cols: 2, suspended: false,
      outs: [{ k: 'cardh-h', n: 'Arsenal -0.5', v: 1.98 }, { k: 'cardh-a', n: 'Brighton +0.5', v: 1.82 }] }
  ]
};

/* ---------- sample settled / open bets (My bets) ---------- */
HB.seedBets = [
  { id: 'b1', sel: 'Arsenal', market: 'Match result', fixture: 'Arsenal v Brighton & Hove Albion',
    odds: 1.30, stake: 100.00, status: 'open', placedAt: 'Today 15:42', cashout: 118.40 },
  { id: 'b2', sel: 'Over 2.5 goals', market: 'Total goals', fixture: 'Liverpool v Manchester United',
    odds: 1.85, stake: 50.00, status: 'open', placedAt: 'Today 14:10', cashout: 41.20 },
  { id: 'b3', sel: 'Real Madrid', market: 'Match result', fixture: 'Real Madrid v Bayern Munich',
    odds: 2.20, stake: 25.00, status: 'won',  placedAt: 'Sat 21:05', ret: 55.00 },
  { id: 'b4', sel: 'Draw', market: 'Match result', fixture: 'Napoli v Milan',
    odds: 3.40, stake: 20.00, status: 'lost', placedAt: 'Sat 18:45', ret: 0.00 }
];

/* ---------- searchable index (teams, players, competitions, markets) ---------- */
HB.searchIndex = (function () {
  const out = [];
  Object.keys(HB.teams).forEach(k => out.push({ kind: 'Team', label: HB.teams[k].name, go: '#/football' }));
  HB.comps.forEach(c => out.push({ kind: 'Competition', label: c.name, go: '#/football' }));
  HB.scorers.forEach(s => out.push({ kind: 'Player', label: s, go: '#/match/ars-bha' }));
  ['Match result', 'Double chance', 'Both teams to score', 'Total goals', 'Over/Under 2.5',
   'Asian handicap', 'First goalscorer', 'Anytime goalscorer', 'Total corners', 'Total cards'
  ].forEach(m => out.push({ kind: 'Market', label: m, go: '#/match/ars-bha' }));
  return out;
})();
