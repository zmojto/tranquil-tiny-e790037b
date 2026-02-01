
# Multi-Event Yoga Retreat Website

## Overview
Transform the current single-event yoga retreat website into a multi-event platform showcasing 3 different retreat experiences. Each event will have its own dates, location, and pricing while maintaining the serene, cohesive design.

## The 3 Retreat Events

| Event | Location | Dates | Price |
|-------|----------|-------|-------|
| Bali Bliss | Ubud, Bali, Indonesia | March 15-22, 2026 | $2,800 |
| Costa Rica Escape | Nosara, Costa Rica | May 10-17, 2026 | $3,200 |
| Portugal Soul | Sintra, Portugal | September 5-12, 2026 | $2,600 |

## Changes Required

### 1. Hero Section
- Update the tagline to be brand-focused rather than event-specific
- Change the single date/location to "3 Transformative Retreats • 2026"
- Update "Reserve Your Spot" button to link to the new events section

### 2. New Events Section (New Component)
Create a dedicated section displaying all 3 retreats as beautiful cards featuring:
- Event name and tagline
- Location with icon
- Date range
- Starting price
- "Learn More" and "Reserve" buttons
- Visual distinction between events (accent colors or subtle imagery)

### 3. Program Section Updates
- Make the inclusions list apply to all retreats (shared amenities)
- Replace the single pricing card with a comparison view or note that pricing varies by retreat
- Add a link back to the events section for booking

### 4. Navigation Header
- Add "Retreats" link pointing to the new events section
- Reorder navigation to: About, Retreats, Program, Gallery, Testimonials, FAQ, Contact

### 5. Footer Section
- Update to reflect the brand serves multiple locations
- Keep general contact information

### 6. FAQ Section
- Add/update questions to address multi-event specifics (e.g., "What's different between each retreat?")

## File Changes Summary

| File | Action |
|------|--------|
| `src/components/EventsSection.tsx` | Create new component with 3 event cards |
| `src/components/HeroSection.tsx` | Update copy for multi-event brand |
| `src/components/ProgramSection.tsx` | Generalize content, update pricing display |
| `src/components/NavigationHeader.tsx` | Add "Retreats" nav link |
| `src/components/FAQSection.tsx` | Update FAQs for multi-event context |
| `src/components/FooterSection.tsx` | Update location reference |
| `src/pages/Index.tsx` | Add EventsSection after AboutSection |

## Technical Details

### EventsSection Component Structure
```text
+--------------------------------------------------+
|              UPCOMING RETREATS (Header)          |
+--------------------------------------------------+
|  +------------+  +------------+  +------------+  |
|  | BALI BLISS |  | COSTA RICA |  | PORTUGAL   |  |
|  |            |  | ESCAPE     |  | SOUL       |  |
|  | Mar 15-22  |  | May 10-17  |  | Sep 5-12   |  |
|  | $2,800     |  | $3,200     |  | $2,600     |  |
|  | [Reserve]  |  | [Reserve]  |  | [Reserve]  |  |
|  +------------+  +------------+  +------------+  |
+--------------------------------------------------+
```

### Data Structure for Events
```typescript
interface RetreatEvent {
  id: string;
  name: string;
  tagline: string;
  location: string;
  country: string;
  dates: string;
  price: number;
  spotsLeft: number;
  highlights: string[];
}
```

### Updated Navigation Flow
```text
Hero -> "View Retreats" button -> Events Section
Navigation "Retreats" link -> Events Section  
Program "Reserve" button -> Events Section
```
