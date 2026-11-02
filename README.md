# Christian VI: Rundetårnets Forbandelse

Et browserbaseret adventure-RPG bygget med Three.js, TypeScript og Vite. Kong Christian VI må gennem en forbandet skov, finde tre kongelige segl og forsvare Rundetårn mod en genopstået svensk hær og den maskerede bøddel.

## Krav

- Node.js 18 eller nyere
- En moderne desktopbrowser med WebGL2 (fx Chrome, Edge eller Firefox)

## Installation og start

```bash
npm install
npm run dev        # starter udviklingsserveren på http://localhost:5173
```

Produktionsbuild:

```bash
npm run build      # typetjek (tsc) og Vite-build til dist/
npm run preview    # lokal forhåndsvisning af dist/
```

## Styring

| Input | Handling |
| --- | --- |
| WASD eller piletaster | Bevægelse |
| Mus | Sigteretning |
| Venstre museknap | Sabelangreb |
| Højre museknap | Flintlåspistol (genladningstid) |
| Q | Helligt lys (kegle, skader og lammer) |
| E | Beskyttelsessegl (reducerer indgående skade) |
| Mellemrum | Undvigelse med kort cooldown |
| F | Interaktion (samle segl, bruge forsyninger, aktivere tårnet) |
| M | Lyd til/fra |
| Escape | Pause og styringsoversigt |

Lyden starter først efter et klik. Spillet kan gennemføres uden lyd.

## Forløb

1. Startskærm med titel, premis og knapperne "Start spil" og "Lyd".
2. Kort introduktion i skovens udkant.
3. Tre områder med et segl hver: den forladte lejr, de dødes lund og det ødelagte kapel.
4. Bøddelen forfølger spilleren undervejs. Han kan forsinkes, men først besejres i slutkampen.
5. Med alle segl samlet åbnes vejen til Rundetårn. Aktivér tårnets beskyttelse (F) og forsvar det mod to fjendebølger.
6. Bøddelen ankommer som slutboss. Spilleren vinder, hvis bossen besejres, og tårnet stadig står.
7. Spilleren taber, hvis kongens liv eller tårnets beskyttelse når nul. Der er et checkpoint før slutkampen.

Segl og opgraderinger: første segl giver stærkere sabel, andet segl giver mere mana, og tredje segl forbedrer beskyttelsesmagien.

## Projektstruktur

- `src/config.ts`: alle balanceværdier
- `src/game/game.ts`: spiltilstand, faser og gameloop
- `src/world/`: kort, kollision, procedurelle modeller og scene
- `src/entities/`: spiller og fjender
- `src/combat/`: skade, angreb og projektiler
- `src/input.ts`, `src/audio.ts`, `src/fx/effects.ts`, `src/ui/hud.ts`
- `src/style.css` og `index.html`: UI og skærme

Alle modeller er bygget med Three.js-geometri. Baggrundsmusikken er `public/music.m4a` og titelbilledet er `public/title.png`. Øvrig lyd er syntetiseret med Web Audio. Spillet kan gennemføres uden lyd.

## Kendte begrænsninger

- Spillet er kun testet i Chromium-baseret browser i headless tilstand, ikke i flere browsere.
- Fuld gennemspilning fra start til sejr er ikke verificeret automatisk; se testrapporten i den endelige besked.
- Touchstyring understøttes ikke.
- `npm audit` rapporterer 1 moderat og 1 høj sårbarhed i udviklingsafhængigheder (Vite 5). Den foreslåede løsning er en breaking-opgradering til Vite 7, som kræver nyere Node end 18, og er ikke udført.
- Produktionsbundlen er cirka 597 kB (153 kB gzip), og Vite viser en advarsel om bundtstørrelse.
