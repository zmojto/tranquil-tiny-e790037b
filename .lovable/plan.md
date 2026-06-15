## Blog článok slugs – stav

Z 16 článkov sú 3 v angličtine. Tie aktualizujem podľa slovenského názvu článku:

| Aktuálny (EN) slug | Názov článku | Nový (SK) slug |
|---|---|---|
| `plant-based-wellness-retreat` | Ajurvédske jedlá | `ajurvedske-jedla` |
| `mindfulness-meditation-guide` | Kompletný sprievodca meditáciou všímavosti | `kompletny-sprievodca-meditaciou-vsimavosti` |
| `morning-yoga-routine-beginners` | 5 ranných jógových pozícií, ktoré vám pomôžu správne začať deň | `ranne-jogove-pozicie-pre-spravny-zaciatok-dna` |

Ostatných 13 slugov je už v slovenčine – ponechávam.

## Zmeny

1. **DB update** v tabuľke `articles` – `UPDATE` slugov pre 3 vyššie uvedené riadky.
2. **Sitemap** (`public/sitemap.xml`) sa pri ďalšom `predev`/`prebuild` automaticky pregeneruje z DB cez `scripts/generate-sitemap.ts` – netreba ručný zásah.
3. **Žiadny kód** v `src/` na tieto slugy priamo neodkazuje (články sa načítavajú z DB cez `useArticle(slug)`), takže nie sú potrebné úpravy v React kóde.

## Poznámka k SEO

Staré URL (`/blog/plant-based-wellness-retreat` atď.) po zmene vrátia 404. Ak chcete zachovať redirecty zo starých EN slugov na nové SK, viem doplniť mapovanie v `BlogArticle.tsx` alebo v `NotFound.tsx` – dajte vedieť, či to chcete.

## Tretí slug – návrh

Pre článok „5 ranných jógových pozícií…" som zvolil `ranne-jogove-pozicie-pre-spravny-zaciatok-dna` (bez úvodnej číslice, čistejšie pre SEO). Ak preferujete doslovnejšiu verziu `5-rannych-jogovych-pozicii-na-spravny-zaciatok-dna`, dajte vedieť pred spustením.
