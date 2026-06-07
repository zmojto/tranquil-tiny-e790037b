## Problém

Článok `podpolanie-kraj-kde-slovensko-stale-dycha` má v stĺpci `cover_image_url` Lovable CDN cestu:

```
/__l5e/assets-v1/3bdae98a-9daa-4e89-8aa7-44a0629e889f/podpolanie-hero.jpg
```

Tá funguje len v Lovable preview. Ostatné články používajú konzistentne Supabase Storage bucket `article-images` (napr. `necpaly-zabudnuty-klenot-turca.jpg`), preto na produkcii (`samavesa.sk`) tento jeden obrázok vracia 404.

## Riešenie

1. Stiahnuť `podpolanie-hero.jpg` z Lovable CDN (dostupný v preview prostredí).
2. Nahrať ho do Supabase Storage bucketu `article-images` pod menom `podpolanie-hero.jpg`.
3. Update DB záznamu v tabuľke `articles`:
   - `WHERE slug = 'podpolanie-kraj-kde-slovensko-stale-dycha'`
   - `SET cover_image_url = 'https://cmufbtkjjbqqrnkbgddi.supabase.co/storage/v1/object/public/article-images/podpolanie-hero.jpg'`
4. Overiť, že obrázok sa načíta na `/blog/podpolanie-kraj-kde-slovensko-stale-dycha`.

## Poznámka

Žiadne zmeny v kóde komponentov — `ArticleCard` aj `BlogArticle` čítajú `cover_image_url` priamo z DB, takže stačí update DB + upload obrázka. Po publishi a rebuild-e na Hetzneri už bude obrázok dostupný z verejného Supabase Storage URL rovnako ako u ostatných článkov.
