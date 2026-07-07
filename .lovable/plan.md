Cieľ: Upraviť hodnotu `spotsLeft` pre tri konkrétne pobyty v `src/data/retreats.ts`.

Zmeny:
- `cyprus-awakening` (Cyprus Awakening): `spotsLeft` z `8` na `6`
- `krpacovo-soul` (Krpáčovo Soul): `spotsLeft` z `8` na `4`
- `blatinka-retreat` (Blatinka Roots): `spotsLeft` z `8` na `6`

Ostatné pobyty zostávajú bez zmeny.

Overenie:
- `bun run build` prejde úspešne.
- Komponenty `EventsSection` a `RetreatDetail` zobrazia nové hodnoty automaticky, pretože čítajú z `retreats` dát.