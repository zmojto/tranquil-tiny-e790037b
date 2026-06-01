## Cieľ

Pridať nový blogový článok do kategórie **Cestovanie** s obsahom z priloženého dokumentu o obci Necpaly a s priloženou fotografiou ako titulnou.

## Postup

1. **Nahranie titulnej fotografie**
   - Použiť priložený obrázok `necpaly.JPG` (pohľad na kaštieľ v Necpaloch)
   - Nahrať do Lovable Cloud storage (bucket `article-images`) ako titulný obrázok článku

2. **Vloženie článku do databázy (`public.articles`)**
   - `title`: „Necpaly – zabudnutý klenot Turca"
   - `slug`: `necpaly-zabudnuty-klenot-turca`
   - `category`: `Cestovanie`
   - `author_name`: Sabína Kalmárová
   - `excerpt`: krátka anotácia (do ~160 znakov) – napr. „Objavte obec na úpätí Veľkej Fatry, ktorá v sebe spája bohatú históriu, šľachtické kaštiele a nedotknutú prírodu Turca."
   - `content`: markdown verzia textu z dokumentu so zachovanými nadpismi (Dedina, kde sa písali dejiny; Papier, ktorý putoval k cisárskemu dvoru; Pivo, ktoré malo príliš veľký úspech; Necpalská dolina – brána do Veľkej Fatry; Miesto, ktoré má dušu)
   - `cover_image_url`: URL nahranej fotografie
   - `published`: `true`
   - `published_at`: aktuálny dátum

3. **Overenie**
   - Skontrolovať, že článok sa zobrazuje na `/blog` pod filtrom **Cestovanie**
   - Skontrolovať detail článku na `/blog/necpaly-zabudnuty-klenot-turca`

## Bez zmien v kóde

Žiadne zmeny v komponentoch nie sú potrebné – existujúce `Blog.tsx`, `BlogArticle.tsx` a `ArticleCard.tsx` článok automaticky zobrazia.
