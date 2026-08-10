# Nový článok na blogu: „Kto vo vás práve premýšľa?“

Pridanie článku z priloženého dokumentu do blogu ako publikovaný príspevok v kategórii Meditácia.

## Obsah článku

- **Titulok:** Kto vo vás práve premýšľa? Objavte časť seba, ktorá všetko pozoruje.
- **Slug:** `kto-vo-vas-prave-premysla`
- **Kategória:** Meditácia
- **Autor:** Sabína Kalmárová (rovnako ako ostatné články)
- **Perex:** krátke zhrnutie o pozorovaní vlastných myšlienok a o tom, že nie sme svojimi myšlienkami
- **Text:** kompletný obsah z dokumentu prevedený do markdownu — podnadpisy (Nie sme svojimi myšlienkami, Myseľ je skvelý sluha ale zlý pán, Predstavte si oblohu, Sloboda medzi podnetom a reakciou, Dá sa to trénovať, Pozornosť je miesto, kde vzniká náš život), odrážky so štyrmi otázkami a zvýraznenia zachované
- **Stav:** publikovaný, dátum publikovania = dnes

## Titulná fotka

Vygenerujem novú fotku v štýle webu (pokojná obloha s jemnými oblakmi, tlmené šalviovo-krémové tóny, bez textu), nahrám ju do úložiska medzi ostatné obrázky článkov a použijem jej verejnú URL ako `cover_image_url`.

## Technické detaily

- Vloženie jedného riadku do tabuľky `articles` cez insert nástroj (bez zmeny schémy).
- Obrázok nahraný do existujúceho bucketu `article-images`.
- Doplnenie novej URL `/blog/kto-vo-vas-prave-premysla` do `public/sitemap.xml` a `scripts/generate-sitemap.ts` s aktuálnym `lastmod`.
- Žiadne zmeny v komponentoch — článok sa automaticky zobrazí na `/blog` aj v náhľade na domovskej stránke.
