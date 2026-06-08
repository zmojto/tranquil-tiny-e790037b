## Cieľ
**Pridať** priloženú fotku do **obsahu** článku `/blog/morning-yoga-routine-beginners` (nie nahradiť cover).

## Kroky

1. **Upload fotky** do existujúceho public bucketu `article-images`
   - SEO názov súboru: `ranne-jogove-pozicie-pozdrav-slnku-pre-zaciatocnikov.jpg`
   - Cez `supabase--storage_upload` (skopírujem z `/mnt/user-uploads/` do `/tmp/`)

2. **Vloženie do markdown obsahu článku**
   - V tabuľke `articles` aktualizujem `content` — pridám obrázok pod úvodný odsek (pred prvú `## Strečing mačka-krava` sekciu), aby ilustroval celú zostavu pozícií spomenutých v článku.
   - Markdown:
     ```
     ![Ranné jógové pozície pre začiatočníkov – pozdrav slnku, bojovník a vysoký výpad na lúke](URL)
     ```
   - Alt text je popisný, slovenský, obsahuje hlavné SEO kľúčové slová článku (ranné jógové pozície, začiatočníci, pozdrav slnku).

3. **Renderovanie**
   - `BlogArticle.tsx` už používa `ReactMarkdown` s pluginom, ktorý renderuje `![alt](url)` ako `<img>` so zachovaným `alt` atribútom — žiadne zmeny kódu nie sú potrebné.
   - Cover fotka (`cover_image_url`) zostáva **nezmenená**.

## Súhrn zmien
- 1 upload do storage
- 1 SQL UPDATE poľa `content` v `articles`
- Žiadne zmeny v kóde ani schéme
