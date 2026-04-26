## Zmena ceny pobytu

V súbore `src/data/retreats.ts` upravím cenu pobytu **Vaša cesta čaká** (Blatinka, Podpoľanie):

- riadok 427: `price: 220` → `price: 250`

Nová cena 250 € sa automaticky zobrazí na:
- karte pobytu v sekcii „Vyberte si svoju cestu" na hlavnej stránke
- detailovej stránke pobytu `/retreats/blatinka-retreat`
- v rezervačnom formulári a potvrdzovacích e-mailoch (cena sa číta z toho istého zdroja)

Žiadne ďalšie súbory nie je potrebné meniť.