

# Individual Retreat Pages with Booking Form

## Overview
Create dedicated subpages for each retreat (e.g., `/retreats/bali-bliss`) with comprehensive details and an embedded booking form. The "Reserve Your Spot" buttons on the homepage will link to these pages instead of opening a modal.

## What You'll Get

### Individual Retreat Pages
- **Rich detail pages** at `/retreats/[retreat-id]` for each destination
- **Hero section** with retreat name, tagline, and location
- **Full description** of the experience specific to each destination
- **Daily schedule** sample showing what guests can expect
- **Photo gallery** section for each retreat
- **Pricing breakdown** with what's included
- **Embedded booking form** (same form, now inline on page)
- **SEO optimization** with meta tags and structured data

### Homepage Changes
- "Reserve Your Spot" buttons become "View Details" or "Explore Retreat"
- Buttons link to `/retreats/[retreat-id]` instead of opening modal
- Cards remain as preview with key info

## New Route Structure

| Route | Page |
|-------|------|
| `/retreats/bali-bliss` | Bali Bliss retreat details |
| `/retreats/costa-rica` | Costa Rica Escape details |
| `/retreats/portugal-soul` | Portugal Soul details |

## Data Structure Enhancement

Each retreat will have expanded information:

| Field | Description |
|-------|-------------|
| id | URL slug (bali-bliss, etc.) |
| name | Retreat name |
| tagline | Short tagline |
| location / country | Location details |
| dates | Date range |
| price | Price per person |
| spotsLeft | Remaining spots |
| highlights | Quick feature list |
| **description** | Full retreat description (new) |
| **dailySchedule** | Sample day activities (new) |
| **inclusions** | What's included list (new) |
| **heroImage** | Hero background image (new) |
| **galleryImages** | Photo gallery (new) |

## Page Layout

```text
+------------------------------------------+
|  Navigation Header                        |
+------------------------------------------+
|                                          |
|  HERO SECTION                            |
|  - Retreat Name & Tagline                |
|  - Location & Dates                      |
|  - Price & Spots Left                    |
|                                          |
+------------------------------------------+
|                                          |
|  ABOUT THIS RETREAT                      |
|  - Full description                      |
|  - What makes it unique                  |
|                                          |
+------------------------------------------+
|                                          |
|  SAMPLE DAILY SCHEDULE                   |
|  - Morning, afternoon, evening           |
|                                          |
+------------------------------------------+
|                                          |
|  WHAT'S INCLUDED                         |
|  - Accommodation                         |
|  - Meals, yoga, etc.                     |
|                                          |
+------------------------------------------+
|                                          |
|  PHOTO GALLERY                           |
|  - Grid of retreat images                |
|                                          |
+------------------------------------------+
|                                          |
|  RESERVE YOUR SPOT                       |
|  +------------------------------------+  |
|  |  Booking Form (inline)             |  |
|  |  Name, Email, Phone, Message       |  |
|  |  [Request Reservation]             |  |
|  +------------------------------------+  |
|                                          |
+------------------------------------------+
|  Footer                                  |
+------------------------------------------+
```

## Files to Create/Modify

| File | Action | Description |
|------|--------|-------------|
| `src/data/retreats.ts` | Create | Centralized retreat data with full details |
| `src/pages/RetreatDetail.tsx` | Create | Individual retreat page component |
| `src/components/RetreatBookingForm.tsx` | Create | Inline booking form component |
| `src/App.tsx` | Modify | Add `/retreats/:id` route |
| `src/components/EventsSection.tsx` | Modify | Change button to Link to subpage |
| `src/components/NavigationHeader.tsx` | Modify | Recognize retreat pages for nav highlighting |

## Implementation Details

### Retreat Data File
Create `src/data/retreats.ts` with expanded retreat information including descriptions, schedules, and images. This keeps all retreat data in one place.

### Retreat Detail Page
- Uses URL parameter (`:id`) to find the correct retreat
- 404 page if retreat not found
- Scroll to top on load
- SEO meta tags (title, description, Open Graph)
- Back button to return to retreats section

### Inline Booking Form
- Same validation as current modal form
- Styled to match page aesthetics
- Shows retreat info summary above form
- Same submission logic (ready for backend integration)

### Navigation Updates
- Retreat pages will highlight "Retreats" in nav
- "Serenity" logo links back to homepage

### SEO for Each Page
- Dynamic title: "Bali Bliss Yoga Retreat | Serenity"
- Meta description from retreat description
- Open Graph tags for social sharing
- Structured data for events

## User Flow

```text
Homepage (/retreats section)
    │
    ├── Click "Explore Retreat" on Bali card
    │           │
    │           ▼
    │   /retreats/bali-bliss
    │   - Read full details
    │   - View photos
    │   - Scroll to booking form
    │   - Submit reservation request
    │
    └── "Back to All Retreats" returns to /#retreats
```

