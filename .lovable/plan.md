

## Plán: Všetky ceny v € bez podmienky

Odstrániť podmienkovú logiku `retreat.currency === "€"` a všade zobraziť cenu v formáte `X €`.

### Zmeny v súboroch

1. **`src/components/EventsSection.tsx`** – zmeniť `${retreat.price.toLocaleString()}` na `{retreat.price.toLocaleString()} €` (odstrániť dolár)

2. **`src/pages/RetreatDetail.tsx`** – nahradiť podmienku `retreat.currency === "€" ? ... : ...` za pevné `{retreat.price.toLocaleString()} €`

3. **`src/components/RetreatBookingForm.tsx`** – rovnako nahradiť podmienku za pevné `{retreat.price.toLocaleString()} €`

4. **`src/data/retreats.ts`** – voliteľne odstrániť pole `currency` z interface a dát, keďže už nebude potrebné

