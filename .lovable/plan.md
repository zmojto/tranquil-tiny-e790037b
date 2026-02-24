

## Plan: Replace Bali Bliss with Cyprus Awakening "Slnečný pokoj"

### What changes

**File: `src/data/retreats.ts`** — Replace the first retreat entry (Bali Bliss, lines 32–70) with:

- **id:** `"cyprus-awakening"`
- **name:** `"Slnečný pokoj"`
- **tagline:** `"Cyprus Awakening"`
- **location:** `"Protaras"`
- **country:** `"Cyprus"`
- **dates:** `"12. – 19. októbra 2026"`
- **price:** `2700`
- **spotsLeft:** `8`
- **highlights:** `["Meditácie pri mori", "Staroveké svätyne a energetické miesta", "Plavba pri západe slnka"]`
- **description:** Villa Lucilla text provided by user (3 paragraphs about Protaras location, proximity to Mimosa Beach / Fig Tree Bay, and the resort character)
- **dailySchedule:** Adapted for a coastal Cyprus retreat (morning sea meditation, hatha yoga, cultural/beach excursions, sunset sailing)
- **inclusions:** Updated to reflect Cyprus context (Villa Lucilla accommodation, Mediterranean meals, boat trip, ancient sanctuary visits, etc.)
- **heroImage & galleryImages:** Keep existing placeholder images (same assets)

### Detail

The retreat card on the homepage and the `/retreats/cyprus-awakening` detail page will both automatically reflect the new data since they read from the same `retreats` array. No changes needed in `EventsSection.tsx` or `RetreatDetail.tsx` — only the data file.

