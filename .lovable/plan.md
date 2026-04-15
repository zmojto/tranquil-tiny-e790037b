

## Plán: Pridať nový pobyt Nečpaly (Chalet Alexandra)

### Čo sa pridá

Nový pobyt **"Nečpaly"** v Chalet Alexandra, Národný park Veľká Fatra, podľa zadania z prílohy.

### Zmeny v súboroch

#### 1. `src/data/retreats.ts` — pridať nový retreat objekt

Nový záznam s ID `necpaly-retreat`:
- **name**: "Spokojnosť je voľba"
- **tagline**: "Veľká Fatra"
- **location**: "Nečpaly, Veľká Fatra"
- **country**: "Slovensko"
- **dates**: "15. – 18. októbra 2026"
- **price**: 390
- **spotsLeft**: 10
- **highlights**: Etikoterapia, Sauna a vírivka pod hviezdami, Túry vo Veľkej Fatre
- **description**: Text podľa zadania — jóga (lektorka Ali, diplom FTVŠ UK), meditácie (Sabinka), etikoterapia "Spokojnosť je voľba" (sabinakalmarova.sk), voľný čas s wellness a túrami
- **dailySchedule**: Podľa rozvrhu zo zadania (6:00 meditácia, 7:00 hatha jóga, 9:00 raňajky, 10:30 workshop, 13:00 obed, 15:00 výlety, 17:30 jóga+meditácia, 19:00 večera, 20:00 wellness)
- **inclusions**: 3 noci v Chalet Alexandra (2-4 lôžkové izby), vegetariánske a ajurvédske jedlá, denná jóga a meditácia, etikoterapia workshopy, sauna a vírivka, prístup k wellness
- **heroImage**: `http://chataalexandra.sk/main.jpg`
- **galleryImages**: Výber z fotiek na chataalexandra.sk (exteriér, interiér, okolie)
- **travelInfo**: Individuálna doprava, na požiadanie sprostredkovanie

#### 2. `src/components/EventsSection.tsx` — pridať do aktívnych

Pridať `"necpaly-retreat"` do `activeIds` a `activeOrder` (v retreats.ts), aby sa zobrazoval ako aktívny pobyt.

#### 3. `src/data/retreats.ts` — pridať do `activeOrder`

Pridať `"necpaly-retreat"` do poľa `activeOrder` na riadku 358, aby sa zobrazoval medzi prvými.

