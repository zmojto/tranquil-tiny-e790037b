

## Plán: Zoradiť pobyty a vizuálne "zneaktívniť" pripravované

### Čo sa zmení

1. **Zoradenie pobytov** v `src/data/retreats.ts` — Cyprus, Krpáčovo a Chorvátsko budú prvé tri. Zvyšné (Bali, Costa Rica, Portugal, Thailand) pôjdu za nimi.

2. **Vizuálne rozlíšenie v `src/components/EventsSection.tsx`**:
   - Aktívne pobyty (cyprus-awakening, krpacovo-soul, croatia-harmony) — zostanú ako doteraz
   - Pripravované pobyty (ostatné 4) — dostanú:
     - Znížená priehľadnosť (`opacity-60`)
     - Badge/štítok "Pripravujeme" namiesto počtu miest
     - Tlačidlo "Preskúmať pobyt" nahradené textom "Čoskoro" (disabled)
     - Jemnejší štýl karty

### Technické detaily

**`src/data/retreats.ts`**: Zmena poradia prvkov v poli `retreats[]` — Cyprus (index 3→0), Krpáčovo (4→1), Chorvátsko (5→2), potom Bali, Costa Rica, Portugal, Thailand.

**`src/components/EventsSection.tsx`**: Definovať zoznam aktívnych ID a podľa neho podmienene meniť štýly kariet:
```tsx
const activeIds = ["cyprus-awakening", "krpacovo-soul", "croatia-harmony"];
const isActive = activeIds.includes(retreat.id);
```
- Karta: `opacity-60` pre neaktívne
- Badge "Pripravujeme" namiesto `spotsLeft`
- Disabled button s textom "Čoskoro"

