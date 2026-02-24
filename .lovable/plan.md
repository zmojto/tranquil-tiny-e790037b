

## Plan: Add Villa Lucilla website images to Cyprus Awakening retreat

### Overview

Replace the generic placeholder images used for the Cyprus retreat's hero and gallery with real photos from villalucilla.eu. The images will be referenced as external URLs directly in the data file, removing the need for local asset imports for this retreat.

### Available images from villalucilla.eu

**Hero candidate:**
- `https://villalucilla.eu/images/hero-pool.jpg` — Villa entrance/exterior with pool area

**Gallery candidates (selecting 6 for the grid):**
1. `https://villalucilla.eu/images/night-pool.jpg` — Pool by Night
2. `https://villalucilla.eu/images/livingroom1.jpeg` — Living Room
3. `https://villalucilla.eu/images/bedroom-master.jpg` — Master Suite
4. `https://villalucilla.eu/images/konnos-bay.jpg` — Konnos Bay Vista
5. `https://villalucilla.eu/images/blue-lagoon.jpg` — Crystal Blue Lagoon
6. `https://villalucilla.eu/images/mimosa-beach-real.jpg` — Steps to Mimosa Beach

### Changes

**File: `src/data/retreats.ts`** (lines 68-69 of the Cyprus retreat entry):

- Change `heroImage` from the imported `heroRetreat` asset to the external URL string `"https://villalucilla.eu/images/hero-pool.jpg"`
- Change `galleryImages` from the array of imported local assets to an array of 6 external URL strings from the villa website

The `Retreat` type already uses `string` for both `heroImage` and `galleryImages`, so external URLs work without any type changes. The `RetreatDetail.tsx` page and `EventsSection.tsx` already use these strings in `<img src>` and CSS `backgroundImage`, so external URLs will render correctly.

No other files need modification.

