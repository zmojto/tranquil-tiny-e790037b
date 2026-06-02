## Problém

Rezervácie sa stále ukladajú do databázy, ale e-mailové notifikácie sa neposielajú. Edge funkcia `send-booking-email` vracia **401 Unauthorized** ešte pred odoslaním e-mailu, preto v logoch nie sú žiadne záznamy o invokáciách.

Príčina: vo funkcii sa volá `supabase.auth.getClaims(token)` s anon kľúčom, čo zlyháva (getClaims očakáva user-session JWT, nie API kľúč). Kontrola potom odmietne aj legitímne anonymné požiadavky z verejného formulára.

## Riešenie

Zjednodušiť autorizáciu v `supabase/functions/send-booking-email/index.ts`:

- Odstrániť volanie `supabase.auth.getClaims(...)` a s tým súvisiace vetvenie `isAnon` / `isAuthenticated`.
- Ponechať len overenie, že request obsahuje hlavičku `Authorization: Bearer ...` (chráni pred priamym zneužitím bez anon kľúča).
- Zachovať existujúcu validáciu vstupu (Zod-like kontroly dĺžok), CORS, escaping a volanie Resend API — bez zmeny.

Po úprave funkciu nasadiť (`deploy_edge_functions`) a otestovať priamym volaním, či vráti 200 a do nakonfigurovaného `BOOKING_NOTIFICATION_EMAIL` príde testovací e-mail.

## Bez zmeny

- Frontend (`BookingModal.tsx`, `RetreatBookingForm.tsx`) — invokácia funkcie ostáva rovnaká.
- Tajné kľúče (`RESEND_API_KEY`, `BOOKING_NOTIFICATION_EMAIL`, `BOOKING_FROM_EMAIL`) sú už nastavené, netreba meniť.
- Tabuľka `bookings` a jej RLS — funguje korektne.