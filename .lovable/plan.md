

## Plán: Pridať sekciu „Program dňa" na one-pager

Doplníme krátku samostatnú sekciu, ktorá vizuálne zhrnie typický deň na pobyte – ranná prax, popoludnie a večerné lekcie. Sekcia bude umiestnená medzi „Naša filozofia" (`AboutSection`) a ďalšiu existujúcu sekciu na hlavnej stránke.

### Obsah sekcie

Trojstĺpcová časová os (timeline) s ikonami a krátkymi popismi:

1. **Ráno – Hathajóga flow**
   „Začnite deň so svitaním. Vedená meditácia, dychové cvičenia a Hathajóga flow pre prebudenie tela aj mysle."

2. **Popoludnie – Vedomý odpočinok**
   „Čas pre seba: prechádzky v prírode, ajurvédske jedlá, sauna, čítanie alebo workshopy osobného rastu."

3. **Večer – Regeneračná prax**
   „Jemné večerné lekcie jógy, dychu a relaxácie pre hlboký a regeneračný spánok."

### Vizuálny štýl

- Konzistentný s existujúcim `AboutSection` – rovnaké typo (Cormorant serif nadpis, sage green akcenty), `section-gradient` pozadie alebo neutrálne pozadie pre striedanie.
- Ikony z `lucide-react`: `Sunrise`, `Sun`, `Moon`.
- Layout: `grid md:grid-cols-3` s vertikálnou linkou medzi kartami na desktope (jemná timeline), na mobile sa karty radia pod seba.
- Krátky úvodný odstavec nad gridom: „Typický deň v retreate" + jedna veta.

### Technické zmeny

1. **Nový súbor `src/components/DailyProgramSection.tsx`**
   - Štruktúra podľa vzoru `AboutSection.tsx` (sekcia + container + header + grid + interná `TimelineCard` komponenta).
   - `id="daily-program"` aby sa dalo prípadne prelinkovať z navigácie.
   - `scroll-mt-20` pre korektné scrollovanie pod fixed nav.

2. **Úprava `src/pages/Index.tsx`**
   - Pridať import a vložiť `<DailyProgramSection />` hneď za `<AboutSection />`.

### Mimo rozsahu

- Bez úpravy navigácie (žiadny nový odkaz v menu) – ak budete chcieť, doplníme dodatočne.
- Bez zmien v detailoch jednotlivých pobytov – tam zostávajú existujúce konkrétne programy.
- Bez zásahu do databázy či bookingu.

