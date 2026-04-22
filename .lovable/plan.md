

## Plán: Odstrániť informácie o zálohách z aktívnych pobytov

### Čo sa zmení

V kóde sa nachádzajú tri zmienky o zálohe – jedna v karte ceny na homepage, druhá v rezervačnom formulári detailu pobytu (Cyprus, Krpáčovo, Chorvátsko) a jedna v starom (nepoužívanom) modálnom okne.

1. **`src/components/ProgramSection.tsx`** (homepage, sekcia "Investícia")
   - Aktuálne: „Maximálne 12 hostí na pobyt • Záloha 100 € na potvrdenie"
   - Nové: „Maximálne 12 hostí na pobyt"

2. **`src/components/RetreatBookingForm.tsx`** (formulár na detaile každého aktívneho pobytu)
   - Odstrániť celý odstavec: „Na potvrdenie miesta sa vyžaduje záloha 500 €. Platobné údaje budú zaslané po prijatí vašej žiadosti."

3. **`src/components/BookingModal.tsx`** (mŕtvy kód, ale pre čistotu tiež)
   - Odstrániť odstavec: „A $500 deposit is required to confirm your spot..."

### Mimo rozsahu

- Logika rezervácie a ukladania do databázy ostáva nezmenená – meníme iba textové oznámenia.
- Pobyty „Pripravujeme" (Bali, Costa Rica, Portugal, Thailand) majú tlačidlo „Čoskoro" bez formulára, takže sa ich to netýka.

