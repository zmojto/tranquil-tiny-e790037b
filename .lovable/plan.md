## Cieľ

Vo všetkých pobytoch posunúť celý vzorový denný rozvrh o **+1 hodinu**, aby program nezačínal o 6:00, ale až o 7:00. Posunú sa všetky položky `dailySchedule`, nielen prvá – aby zostali pôvodné rozostupy medzi jednotlivými aktivitami zachované.

## Dotknutý súbor

`src/data/retreats.ts` – pole `dailySchedule` v každom pobyte.

## Mapovanie časov (+1 h)

| Pôvodné | Nové |
|---------|------|
| 6:00 | 7:00 |
| 7:00 | 8:00 |
| 7:30 | 8:30 |
| 8:30 | 9:30 |
| 9:00 | 10:00 |
| 10:00 | 11:00 |
| 10:30 | 11:30 |
| 13:00 | 14:00 |
| 15:00 | 16:00 |
| 17:00 | 18:00 |
| 17:30 | 18:30 |
| 18:30 | 19:30 |
| 19:00 | 20:00 |
| 19:30 | 20:30 |
| 20:00 | 21:00 |

## Dotknuté pobyty

Bali Bliss, Costa Rica, Portugal Soul, Cyprus Awakening, Krpáčovo Soul, Croatia Harmony, Thailand Awakening, Necpaly Stillness, Blatinka Roots.

## Mimo rozsahu

Polia `outbound.time` / `returnFlight.time` (časy príletov/odchodov) sa **nemenia** – ide o reálne časy dopravy, nie o denný program.

## Upozornenie

Po posune sa raňajky budú podávať o 10:00, obed o 14:00 a večera typicky o 20:00 – ak je toto zámer, pokračujeme. Ak by ste chceli posunúť iba ranný štart (napr. zlúčiť 6:00 + 7:00 do 7:00) bez posunu obeda/večere, daj vedieť a plán upravím.
