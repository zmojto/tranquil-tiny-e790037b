

## Plan: Replace Mexico retreat with Croatia (Chorvatsko)

### Summary

Replace the "Mexico Spirit" retreat (id: `mexico-spirit`) with a new "Croatia" retreat based on the uploaded DOCX and Villa Quince website data.

### Changes in `src/data/retreats.ts`

Replace the entire Mexico retreat object (lines 250-288) with a new Croatia retreat:

- **id**: `croatia-harmony`
- **name**: `Dalmatian Harmony` (or similar)
- **tagline**: `Dalmatínsky pokoj`
- **location**: `Murvica, Zadar`
- **country**: `Chorvátsko`
- **dates**: `12. – 19. septembra 2026`
- **price**: `1650`
- **spotsLeft**: `12`
- **highlights**: `["Bazén a jacuzzi", "Tenisový kurt a sauna", "Výlety po okolí Zadaru"]`
- **description**: 3 paragraphs about the retreat at Villa Quince -- stone villa near Zadar, daily yoga and meditation, exploring Dalmatian coast (national parks, beaches, old town Zadar)
- **dailySchedule**: From the document:
  - 6:00 Vedená meditácia a dychové cvičenia
  - 7:00 Hatha jóga
  - 9:00 Raňajky
  - 10:30 Workshop alebo voľný čas
  - 13:00 Obed
  - 15:00 Výlet v okolí (navrhnem: Národný park Kornati, Krka vodopády, staré mesto Zadar, pláž Saharun, ostrov Ugljan)
  - 17:30 Jóga a meditácia
  - 19:00 Večera
  - 20:00 Workshop

- **inclusions** (navrhnuté):
  - 7 nocí v luxusnej Villa Quince s vyhrievaným bazénom
  - Vegetariánske a ajurvédske jedlá a občerstvenie
  - Denné ranné a večerné jógové lekcie (hatha)
  - Vedené meditácie a dychové cvičenia
  - Workshopy zamerané na osobný rast a mindfulness
  - Prístup k saune, jacuzzi a fitness
  - Tenisový kurt a stolný tenis
  - Kurátorované výlety po okolí Zadaru

- **heroImage**: `heroRetreat` (fallback asset, same as other non-Cyprus retreats)
- **galleryImages**: Use existing imported gallery assets (same approach as other retreats)
- **travelInfo**: Basic info structure:
  - outbound flight: `Individuálna doprava`
  - note: `Doprava je individuálna. Na požiadanie vieme sprostredkovať.`

### Changes in `supabase/functions/sitemap/index.ts`

Replace `"mexico-spirit"` with `"croatia-harmony"` in the `RETREAT_IDS` array.

### Technical details

- The `travelInfo` interface expects `outbound` and `returnFlight` objects plus `ticketPrice` and `note`. We will repurpose slightly: set flight fields to descriptive text since there is no specific flight, or alternatively skip `travelInfo` and add a simpler note in the description. Given the user wants basic info, we will use the existing `travelInfo` structure with generic text.
- No database changes needed.
- No new images to download -- reuse existing gallery assets.

