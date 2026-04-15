

## Plan: Add new retreat "Blatinka" (Podpoľanie)

### New retreat details (from document)

- **ID**: `blatinka-retreat`
- **Name**: "Vaša cesta čaká"
- **Tagline**: "Podpoľanie"
- **Location**: "Blatinka, Podpoľanie"
- **Country**: "Slovensko"
- **Dates**: "14. – 16. augusta 2026"
- **Price**: 220
- **Spots**: 14
- **Highlights**: Etikoterapia, Bazén, Krása Podpoľania

### Changes

#### 1. Copy uploaded images to `public/images/blatinka/`

Copy the 5 unique photos from the document (group photo, house exterior, meditation room, yoga outdoors, garden) as local assets.

#### 2. `src/data/retreats.ts` — add new retreat object

New entry before the closing `];` with:
- **description**: Text from the document about the weekend stay at Blatinka — etikoterapia workshop, yoga, meditation, beautiful Podpoľanie surroundings, home-cooked vegetarian meals from their garden, pool available in summer.
- **dailySchedule**: 6:00 meditation, 7:00 hatha yoga, 9:00 breakfast, 10:30 workshop, 13:00 lunch, 15:00 pool/free time, 17:00 workshop, 19:00 dinner
- **inclusions**: 2 nights accommodation (shared rooms), vegetarian meals from local garden, daily yoga and meditation, etikoterapia workshops, pool access
- **heroImage**: `/images/blatinka/main.jpg` (the house exterior photo)
- **galleryImages**: 6 images from the uploaded photos
- **travelInfo**: Individual transport (car)

#### 3. `src/data/retreats.ts` — add to `activeOrder`

Add `"blatinka-retreat"` to the `activeOrder` array.

#### 4. `src/components/EventsSection.tsx` — add to `activeIds`

Add `"blatinka-retreat"` to `activeIds` array.

