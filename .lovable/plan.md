## Cieľ

Zoradiť pobyty na webe chronologicky podľa dátumu konania (od najbližšieho po najvzdialenejší).

## Aktuálny stav

Pobyty sú v `src/data/retreats.ts` zoradené v ľubovoľnom poradí. Aktívne poradie je definované ručne v poli `activeOrder` (riadok 470) a v `EventsSection.tsx` v poli `activeIds`.

## Navrhované poradie (podľa dátumu)

**Aktívne pobyty 2026:**

1. Cyprus Awakening – 29. mája
2. Krpáčovo Soul – 1. júla
3. Blatinka Roots – 14. augusta
4. Croatia Harmony – 12. septembra
5. Necpaly Stillness – 15. októbra

**Pripravované pobyty (tiež chronologicky):**

1. Bali Bliss – 15. februar 2027
2. Costa Rica – 10. mája 2027
3. Portugal Soul – 5. septembra 2027
4. Thailand Awakening – 14. novembra 2027

## Zmeny v kóde

`**src/data/retreats.ts**` (riadok 470)

- Upraviť `activeOrder` na nové chronologické poradie:
  ```
  ["cyprus-awakening", "krpacovo-soul", "blatinka-retreat", "croatia-harmony", "necpaly-retreat"]
  ```
- Pripravované pobyty zoradiť tiež chronologicky cez druhú lookup tabuľku (`upcomingOrder`), aby sa zobrazovali podľa dátumu.

`**src/components/EventsSection.tsx**` (riadky 9-10)

- Aktualizovať `activeIds` a `upcomingIds` na rovnaké chronologické poradie, aby filter rešpektoval poradie z dátového súboru.

## Výsledok

Karty pobytov na hlavnej stránke (sekcia „Vyberte si svoju cestu") sa budú zobrazovať podľa dátumu konania – najprv najbližšie aktívne, potom pripravované.