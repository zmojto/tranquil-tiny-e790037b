
DROP POLICY "Anyone can submit a booking" ON public.bookings;

CREATE POLICY "Anyone can submit a booking"
  ON public.bookings FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
