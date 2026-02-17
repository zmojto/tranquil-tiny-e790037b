

# Oprava formátovania dvoch článkov v databáze

## Problém
Dva články majú v databáze obsah bez znakov nového riadku, takže sa zobrazujú ako jeden súvislý blok textu bez nadpisov, zoznamov a medzier:

- `morning-yoga-routine-beginners` - jógové pozície
- `mindfulness-meditation-guide` - meditácia vsimavosti

Tretí článok (`benefits-of-digital-detox`) je v poriadku.

## Riešenie
Aktualizácia stĺpca `content` v databáze pre oba články - pridanie správnych znakov nového riadku, aby sa Markdown správne parsoval.

## Technické detaily

### 1. UPDATE pre `morning-yoga-routine-beginners`
SQL UPDATE príkaz, ktorý nahradí obsah správne formátovaným Markdown textom s `\n` znakmi medzi:
- Úvodným odsekom a zoznamom prínosov
- Každou jógovou pozíciou (## nadpisy)
- Popismi pozícií a inštrukciami
- Záverečnou výzvou

### 2. UPDATE pre `mindfulness-meditation-guide`
SQL UPDATE príkaz s formátovaným obsahom vrátane:
- Úvodnej citácie (blockquote)
- Sekcie "Naučíme sa" so zoznamom
- Info o lektorke s odkazom
- Sekcie "Čo je všímavosť?" (## nadpis)
- Zoznamu výhod
- Sekcie "Ako začať?" s pokynmi
- Záverečnej citácie

### Žiadne zmeny kódu
Nie sú potrebné žiadne zmeny v súboroch projektu - iba dátové opravy v databáze.

