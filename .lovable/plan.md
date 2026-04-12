

## Plan: Make travel info section generic (not flight-specific)

### Problem
The travel info section in `RetreatDetail.tsx` uses flight-specific language: heading "Informácie o lete", labels "Odlet"/"Návrat", Plane icons, and "Cena letenky". This doesn't work for Croatia where transport is by car.

### Solution
Add an optional `transportType` field to the `TravelInfo` interface. When set to `"car"` (or similar), the UI adapts labels and icons. When it's `"flight"` or undefined, it keeps the current flight-specific text.

### Changes

**1. `src/data/retreats.ts`** — Add `transportType` to `TravelInfo` interface:
- Add field: `transportType?: "flight" | "car" | "individual"`
- Rename `flight` property in sub-objects to `detail` (or keep as-is and just change UI labels)
- Set Croatia's `transportType` to `"individual"`
- Set `ticketPrice` to `"individuálne"` and update labels accordingly

**2. `src/pages/RetreatDetail.tsx`** — Make the section adaptive:
- Heading: `"Informácie o lete"` → conditionally show `"Informácie o doprave"` when not a flight
- Labels: `"Odlet"` → `"Príchod"`, `"Návrat"` → `"Odchod"` for non-flight
- Icons: Use `Car` or `MapPin` icon from lucide instead of `Plane` for non-flight retreats
- Price label: `"Cena letenky"` → `"Cena dopravy"` for non-flight

### Technical details
- The `transportType` field is optional — defaults to `"flight"` behavior for backward compatibility (Cyprus retreat unchanged)
- Only Croatia gets `transportType: "individual"`
- Import `Car` from lucide-react

