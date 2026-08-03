# Plán úpravy poradia a statusu pobytov

## Cieľ
Upraviť zobrazenie pobytov na homepage a v prehľade:
- **Krpáčovo Soul** presunúť na **druhú pozíciu** v aktívnych pobytoch.
- **Pura Vida Energia** (Chorvátsko) presunúť do sekcie **Pripravujeme** s termínom **jún 2027** a nastaviť 10 zostávajúcich miest.

## Potvrdené detaily
- Nové poradie aktívnych pobytov: Blatinka Roots → Krpáčovo Soul → Cyprus Awakening → Necpaly Retreat.
- Pura Vida Energia pôjde medzi "Pripravujeme" spolu s Bali Bliss, Costa Rica Escape a Provence Beauty.
- Termín Pura Vida Energia sa zmení na "Jún 2027".
- Cena Pura Vida Energia zostáva aktuálna.
- Počet miest Pura Vida Energia sa nastaví na 10.

## Technické. kroky
1. Upraviť `src/components/EventsSection.tsx`:
   - Zmeniť `activeIds` na: `["blatinka-retreat", "krpacovo-soul", "cyprus-awakening", "necpaly-retreat"]`.
   - Pridať `"croatia-harmony"` do `upcomingIds`.

2. Upraviť `src/data/retreats.ts`:
   - Nájsť objekt `id: "croatia-harmony"`.
   - Zmeniť pole `dates` na `"Jún 2027"`.
   - Zmeniť pole `spotsLeft` na `10`.

3. Overiť renderovanie v `src/pages/RetreatDetail.tsx`:
   - Skontrolovať, že sa pre upcoming pobyty správne zobrazuje štítok "Pripravujeme" a tlačidlo "Čoskoro".
   - Ubezpečiť sa, že Event JSON-LD sa negeneruje, keď `parseRetreatDates` vráti `null` (čo sa stane pri "Jún 2027").

4. Overiť `public/sitemap.xml` a `scripts/generate-sitemap.ts`:
   - URL `/pobyty/croatia-harmony` už existuje, takže nie je potrebná zmena.
   - Skontrolovať, že sa nezmenili ID pobytov a sitemap zostáva platný.

5. Spustiť build a overiť, že sa stránka načíta bez chýb a poradie/sekcie sú správne.
