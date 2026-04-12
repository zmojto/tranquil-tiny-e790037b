## Plán: Aktualizácia Cyprus pobytu podľa zadania

### Súhrn

Aktualizujeme údaje o cypruskom pobyte "Slnečný pokoj" v `src/data/retreats.ts` podľa informácií z dokumentu. Zahŕňa to zmenu ceny, dátumov, rozvrhu, zahrnutých služieb, popisu a pridanie sekcie s informáciami o lete. Tiež pridáme novú sekciu na stránku detailu pobytu pre letové informácie.

### Zmeny v dátach (`src/data/retreats.ts`)

**Rozšírenie Retreat interface** – pridanie voliteľného poľa `travelInfo` pre informácie o letoch.

**Aktualizácia Cyprus pobytu:**

- **Cena**: 2700 → 1100 (bez letenky), s poznámkou že letenka cca 200 €
- **Dátumy**: "12. – 19. októbra 2026" → "29. mája – 5. júna 2026" (piatok–piatok)
- **Popis** ("Vaša cesta čaká"): Napísať nový inšpiratívny text o pobyte vo Villa Lucilla – ranné meditácie na pláži, jóga, workshopy, pokojné prostredie Protarasu
- **Denný rozvrh** – podľa zadania:
  - 6:00 – Vedená meditácia a dychové cvičenia na pláži
  - 7:00 – Hatha jóga
  - 9:00 – Raňajky
  - 10:30 – Workshop alebo voľný čas
  - 13:00 – Obed
  - 15:00 – Výlety v okolí (Cape Greco, Ayia Napa Sea Caves, Konnos Bay, Fig Tree Bay)
  - 17:30 – Jóga a meditácia
  - 19:00 – Večera
  - 20:00 – Workshop
- **Zahrnuté služby** – aktualizovať podľa zadania:
  - Všetky organické jedlá a občerstvenie
  - Bazén
  - Dvojlôžkové izby vo Villa Lucilla
  - Vedené meditácie
  - Workshopy
  - Hodiny jógy
  - Transfer z letiska Larnaka na miesto pobytu
- **Travel info** – nové pole:
  - Odlet: Piatok 29. mája, 15:00 Bratislava → 19:05 Larnaka (Wizz Air, 3h 5min)
  - Prílet späť: Piatok 5. júna, 12:00 Larnaka → 14:25 Bratislava (Wizz Air, 3h 25min)
  - Cena letenky: cca 70 € (sprostredkujeme kúpu)

### Zmeny v RetreatDetail.tsx

- Pridať novú sekciu **"Cestovné informácie"** (medzi hero a popis alebo za popis), ktorá zobrazí letové detaily ak `retreat.travelInfo` existuje
- Zobrazí odletové/príletové časy, leteckú spoločnosť, poznámku o sprostredkovaní letenky

### Technické detaily

- Rozšíriť `Retreat` interface o `travelInfo?: { outbound: {...}, returnFlight: {...}, ticketPrice: string, note: string }`
- Pridať sekciu s ikonou `Plane` z lucide-react
- Mena: zobraziť cenu v € namiesto $ pre Cyprus pobyt (pridať pole `currency` do interface)