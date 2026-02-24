

## Plan: Restore Bali Bliss, Replace Greece Harmony with Cyprus

### What changes

**File: `src/data/retreats.ts`**

1. **Replace the Cyprus retreat (lines 32–77)** with the original Bali Bliss retreat data:
   - id: `"bali-bliss"`
   - name: `"Bali Bliss"`
   - tagline: `"Ostrovná harmónia"`
   - location: `"Ubud"`, country: `"Bali"`
   - dates: `"15. – 22. marca 2026"`, price: `2800`, spotsLeft: `12`
   - highlights: `["Chrámové ceremónie", "Ryžové terasy", "Tradičný tanec"]`
   - Original Bali description, daily schedule, inclusions
   - heroImage: `heroRetreat`, galleryImages: original local asset imports

2. **Replace the Greece Harmony retreat (lines 156–194)** with the Cyprus Awakening retreat (the current data from lines 32–77, including Villa Lucilla description and external image URLs)

No other files need changes — both EventsSection and RetreatDetail read from this array.

