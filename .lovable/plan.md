

User wants me to NOT generate images for Cyprus, but instead download the existing images from villalucilla.eu and use them locally.

## Plán: Stiahnutie obrázkov z villalucilla.eu pre pobyt Cyprus

### Čo treba urobiť

1. **Stiahnuť 7 obrázkov** z `villalucilla.eu` (aktuálne externé URL v `src/data/retreats.ts` riadky 196–204) a uložiť ich lokálne do `src/assets/`:
   - `cyprus-hero.jpg` ← `Pool-and-villa-night-1.jpg`
   - `cyprus-pool-night.jpg` ← `Pool-and-villa-night-1.jpg` (alebo iná nočná verzia)
   - `cyprus-livingroom.jpg` ← `livingroom-1.jpg`
   - `cyprus-bedroom.jpg` ← `bedroom-1.jpg`
   - `cyprus-konnos-bay.jpg` ← `Konnos-Bay.jpg`
   - `cyprus-blue-lagoon.jpg` ← `Blue-Lagoon.jpg`
   - `cyprus-mimosa-beach.jpg` ← `Mimosa-Beach.jpg`

   (presné názvy súborov si overím pri sťahovaní – použijem `curl` na URL z `retreats.ts`)

2. **Aktualizovať `src/data/retreats.ts`**:
   - Pridať `import` statementy pre 7 nových lokálnych obrázkov na vrchu súboru
   - Nahradiť `heroImage` URL lokálnym importom
   - Nahradiť všetkých 6 položiek v `galleryImages` lokálnymi importmi

### Technické detaily

- Obrázky sa stiahnu pomocou `curl` priamo z aktuálnych URL uvedených v `retreats.ts`
- Uložia sa do `src/assets/` (rovnaká konvencia ako pri ostatných pobytoch)
- Vite ich pri buildovaní automaticky optimalizuje a vloží do bundle
- Žiadne zmeny v `RetreatDetail.tsx` ani inde – len výmena zdrojov

### Mimo rozsahu

- Pobyt **Krpáčovo Soul** (externé obrázky z `polianka.sk`) ostáva nezmenený

