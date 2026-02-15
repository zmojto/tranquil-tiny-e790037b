
# Pridanie 4 nových pobytov

## Prehľad
Pridám 4 nové pobyty do `src/data/retreats.ts` s rovnakou štruktúrou ako existujúce 3 pobyty (Bali Bliss, Costa Rica Escape, Portugal Soul). Každý nový pobyt bude mať kompletné údaje vrátane popisu, denného rozvrhu, zahrnutých služieb a galérie obrázkov.

## Nové pobyty

| ID | Názov | Lokalita | Krajina | Termín | Cena |
|----|-------|----------|---------|--------|------|
| `greece-harmony` | Greece Harmony | Santorini | Grécko | 20. – 27. júna 2026 | $2 900 |
| `sri-lanka-zen` | Sri Lanka Zen | Ella | Srí Lanka | 8. – 15. augusta 2026 | $2 500 |
| `mexico-spirit` | Mexico Spirit | Tulum | Mexiko | 18. – 25. októbra 2026 | $2 700 |
| `thailand-awakening` | Thailand Awakening | Koh Samui | Thajsko | 14. – 21. novembra 2026 | $3 000 |

## Detaily každého pobytu

### 1. Greece Harmony (Santorini, Grécko)
- **Slogan:** Stredomorská harmónia
- **Zvýraznenia:** Výhľady na kalderou, Prax pri západe slnka, Grécka kuchyňa
- **Denný rozvrh:** Ranná meditácia s výhľadom na more, jóga, kultúrne výlety, ochutnávka vín
- **Zahrnuté:** 7 nocí v butikových suites, grécke jedlá, plavba po ostrovoch, kúpeľné ošetrenie

### 2. Sri Lanka Zen (Ella, Srí Lanka)
- **Slogan:** Tropický pokoj
- **Zvýraznenia:** Čajové plantáže, Ayurvédske ošetrenia, Výlety k vodopádom
- **Denný rozvrh:** Ranná prax v horách, ayurvédske workshopy, túry, meditácia
- **Zahrnuté:** 7 nocí v horskom rezorte, ayurvédske jedlá, safari, vlak cez hory

### 3. Mexico Spirit (Tulum, Mexiko)
- **Slogan:** Mayská energia
- **Zvýraznenia:** Cenote kúpanie, Mayské ruiny, Kakao ceremónie
- **Denný rozvrh:** Plážová jóga, návšteva cenote, kakao ceremónia, hviezdna meditácia
- **Zahrnuté:** 7 nocí v eko-rezorte, mexická kuchyňa, výlet k ruinám, temazcal ceremónia

### 4. Thailand Awakening (Koh Samui, Thajsko)
- **Slogan:** Ostrovné prebudenie
- **Zvýraznenia:** Thajská masáž, Budhistické chrámy, Ostrovný kajaking
- **Denný rozvrh:** Meditácia pri východe slnka, Muay Thai alebo jóga, návšteva chrámov, thajská masáž
- **Zahrnuté:** 7 nocí v plážovom rezorte, thajské jedlá, návšteva chrámu, kajak výlet

## Technické detaily

### Upravené súbory

| Súbor | Zmena |
|-------|-------|
| `src/data/retreats.ts` | Pridanie 4 nových objektov do poľa `retreats` |

### Štruktúra každého pobytu
Každý nový pobyt bude obsahovať rovnaké polia ako existujúce:
- `id`, `name`, `tagline`, `location`, `country`, `dates`, `price`, `spotsLeft`
- `highlights` (3 položky)
- `description` (3 odstavce v slovenčine)
- `dailySchedule` (8 časových blokov)
- `inclusions` (9 položiek)
- `heroImage` (použije sa existujúci `heroRetreat`)
- `galleryImages` (6 obrázkov z existujúcich assets, v rôznom poradí)

### Obrázky
Nové pobyty budú používať existujúce obrázky z `src/assets/` (rovnako ako aktuálne pobyty), len v rôznom poradí pre rozmanitosť. Ak by ste neskôr chceli unikátne fotky pre každý pobyt, stačí ich nahrať a aktualizovať cesty.

### Vplyv na ostatné komponenty
Žiadne zmeny v iných súboroch nie sú potrebné. Komponenty `EventsSection.tsx` a routovanie v `App.tsx` už dynamicky iterujú cez pole `retreats`, takže nové pobyty sa automaticky zobrazia na hlavnej stránke aj budú mať vlastné podstránky na `/retreats/[id]`.
