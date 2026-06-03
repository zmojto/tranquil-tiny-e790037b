## Cieľ
Odstrániť kategóriu **Wellness** z filtra na stránke `/blog`, pretože v nej momentálne nie sú žiadne články.

## Zmena
- `src/pages/Blog.tsx` — z konštanty `CATEGORIES` odstrániť `"Wellness"`.

Výsledok: `["Všetko", "Jóga", "Meditácia", "Rovnováha", "Zdravie", "Výživa", "Cestovanie"]`.

## Poznámky
- V databáze (`articles.category`) sa nič nemení — default hodnota stĺpca ostáva `'Wellness'`, ale keďže žiadny publikovaný článok ju nepoužíva, na UI to nemá vplyv. Ak v budúcnosti pribudne článok s kategóriou Wellness, nebude filtrovateľný, kým ju nepridáme späť.
- Päta (`FooterSection.tsx`) Wellness neobsahuje — bez zmeny.
