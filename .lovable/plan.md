## Nový článok do blogu

**Titulok:** Samāveśa – vnorenie sa do vlastnej podstaty
**Slug:** `samavesa-vnorenie-sa-do-vlastnej-podstaty`
**Kategória:** Rovnováha
**Autor:** Alena Hodáková
**Stav:** publikovaný (`published = true`, `published_at = now()`)

### Titulný obrázok
Priložený obrázok `samavesa_obrazok.png` nahrám do existujúceho public bucketu `article-images` ako `samavesa-vnorenie.png` a jeho verejnú URL uložím do `cover_image_url`.

### Obsah (markdown)
Text z dokumentu prepíšem do markdownu so zachovaním formátovania (tučné, kurzíva, zoznam, blockquote, H2 zlom). Štruktúra:

1. Úvodný tučný odstavec – kľúčová myšlienka.
2. Sekcia o samāveśa v kašmírskom šivaizme (4 odstavce + bulletpoint zoznam s 4 položkami).
3. Sekcia o kultivovaní mysle (úvod + odsek o automatických reakciách + tučne zvýraznené benefity + citát).
4. Záverečný citát ako blockquote: *„Kto neovláda svoju myseľ, žije podľa svojich návykov. Kto ju pozná a kultivuje, žije v súlade so svojou najhlbšou podstatou.“*

### Excerpt (krátky úvod do listu článkov)
„V tantrickej tradícii samāveśa neznamená len meditáciu, ale hlbokú premenu vedomia – vnorenie sa do vlastnej podstaty a kultivovanie mysle ako cesta k vnútornej slobode."

### Technické kroky
1. Nahranie obrázka cez `supabase--storage_upload` do bucketu `article-images`.
2. `INSERT` do `public.articles` cez insert tool s vyššie uvedenými poľami.
3. Žiadne zmeny v kóde – Blog stránka číta z databázy a kategória „Rovnováha" je už v zozname filtrov.

### SEO
- Slug podľa konvencií (lowercase, bez diakritiky, pomlčky).
- Titulok < 60 znakov, excerpt < 160 znakov.
- Cover image s alt textom sa rieši v existujúcej komponente článku.
