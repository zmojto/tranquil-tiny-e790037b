

## Plan: Funkčné odosielanie rezervačných formulárov

### Prehľad

Oba formuláre (BookingModal na homepage, RetreatBookingForm na detail stránke) budú ukladať dáta do databázy a následne volať edge funkciu na odoslanie e-mailu cez Resend. Ak e-mail zlyhá, rezervácia ostane uložená.

### Krok 1: Databázová tabuľka `bookings`

Migrácia vytvorí tabuľku s RLS politikou povoľujúcou verejný INSERT:

```sql
CREATE TABLE public.bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  special_requests text,
  retreat_name text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a booking"
  ON public.bookings FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
```

### Krok 2: Edge funkcia `send-booking-email`

Nový súbor `supabase/functions/send-booking-email/index.ts`:
- Prijme POST s údajmi o rezervácii (name, email, phone, retreat_name, special_requests)
- Použije Resend API na odoslanie e-mailu
- Predmet: "Nová rezervácia – [retreat name]"
- HTML body so všetkými poľami
- Vyžaduje secret `RESEND_API_KEY` — bude potrebné ho nastaviť
- CORS hlavičky pre volanie z frontendu
- `verify_jwt = false` v config.toml

### Krok 3: Úprava formulárov

Súbory: `BookingModal.tsx`, `RetreatBookingForm.tsx`

Logika `onSubmit`:
1. Insert do `supabase.from('bookings').insert({...})` 
2. Ak insert uspeje → toast "Vaša rezervácia bola odoslaná!"
3. Zavolať edge funkciu `send-booking-email` (fire-and-forget, chyba neblokuje)
4. Ak insert zlyhá → error toast, e-mail sa neposiela

### Krok 4: Resend API kľúč

Pred implementáciou e-mailovej časti bude potrebné nastaviť `RESEND_API_KEY` secret a určiť:
- Na akú e-mailovú adresu posielať notifikácie
- Z akej domény (napr. `no-reply@vasadomena.sk`)

### Upravené súbory
- `src/components/BookingModal.tsx` — reálny insert + volanie edge funkcie
- `src/components/RetreatBookingForm.tsx` — rovnaká zmena
- `supabase/functions/send-booking-email/index.ts` — nový súbor
- `supabase/config.toml` — pridať `[functions.send-booking-email]`

