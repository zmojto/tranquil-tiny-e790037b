# Plán úpravy textu chorvátskeho pobytu

## Cieľ
Upraviť popisný text v objekte `croatia-harmony` v súbore `src/data/retreats.ts` podľa nového znenia poskytnutého používateľom.

## Zmeny v texte

### Aktuálny text (riadky 282-286)
```
Zažite harmóniu tela a mysle v nádhernej kamennej Villa Quince neďaleko Zadaru na dalmatínskom pobreží. Táto luxusná vila s vyhrievaným bazénom, jacuzzi, saunou a tenisovým kurtom poskytuje ideálne prostredie pre 7-dňový transformačný pobyt uprostred stredomorskej prírody.

Každý deň začína vedenou meditáciou a dychovými cvičeniami, po ktorých nasleduje hatha jóga. Popoludnia sú venované objavovaniu krás dalmatínskeho pobrežia – Národný park Kornati, vodopády Krka, staré mesto Zadar so slávnym morským orgánom, pláž Saharun či ostrov Ugljan. Večery sú venované workshopom na tému Mentálny detox.

Villa Quince sa nachádza v pokojnej dedine Murvica, len niekoľko minút autom od mora. Ubytovanie je v elegantných izbách s výhľadom na záhradu. Všetky jedlá sú vegetariánske a ajurvédske, pripravované s láskou z čerstvých miestnych surovín. Večery patria workshopom zameraným na osobný rast.
```

### Nový text
```
Zažite harmóniu tela a mysle v nádhernej kamennej Villa Quince neďaleko Zadaru na dalmatínskom pobreží. Táto luxusná vila s vyhrievaným bazénom, jacuzzi, saunou a tenisovým kurtom poskytuje ideálne prostredie pre 7-dňový transformačný pobyt uprostred stredomorskej prírody. Nachádza v pokojnej dedine Murvica, len niekoľko minút autom od mora. Ubytovanie je v elegantných izbách s výhľadom na záhradu.

Každý deň začína vedenou meditáciou a dychovými cvičeniami, po ktorých nasleduje hatha jóga. Popoludnia sú venované objavovaniu krás dalmatínskeho pobrežia – Národný park Kornati, vodopády Krka, staré mesto Zadar so slávnym morským orgánom, pláž Saharun či ostrov Ugljan a tiež kúpaniu v mori, v bazéne, saunovaniu, prípadne hraniu tenisu. Večery sú venované praktikovaniu jógy a workshopom na tému Mentálny detox.

Všetky jedlá sú vegetariánske alebo ajurvédske, pripravované s láskou z čerstvých miestnych surovín.
```

## Súbor na úpravu
- `src/data/retreats.ts` – zmena hodnoty vlastnosti `description` v objekte s `id: "croatia-harmony"`

## Technické detaily
- Použiť `code--line_replace` na nahradenie riadkov 282-286.
- Nový text má 3 odstavce: prvý spojený s info o lokalite, druhý rozšírený o aktivity (kúpanie, sauna, tenis) a večerná jóga, tretí skrátený (bez poslednej vety o večerných workshopoch).