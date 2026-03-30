

## Plán: Pridanie 3 nových blogových článkov s obrázkami

### Súhrn
Pridáme 3 nové články do databázy a ku každému vygenerujeme originálny titulný (hero) obrázok. Obsah bude obohatený o lepšie Markdown formátovanie (citáty, oddeľovače, zvýraznenia).

### Článok 1: Tajomstvo vnútornej sily (sádhuovia a disciplína)
- **slug**: `tajomstvo-vnutornej-sily-co-nas-mozu-naucit-indicki-asketi`
- **title**: `Tajomstvo vnútornej sily: Čo nás môžu naučiť indickí askéti o každodennej disciplíne?`
- **category**: `Wellness`
- **excerpt**: `Tapasya – vedomý proces, pri ktorom pomocou disciplíny a sebazapierania „pálime" staré vrstvy ega. Cesta k transformácii prostredníctvom dobrovoľného nekomfortu.`
- **content**: Plný text z oboch strán DOCX (vrátane sekcie Vrata vs. Tapas), formátovaný ako Markdown s `##` nadpismi, číslovanými zoznamami, `---` oddeľovačmi a `**bold**` zvýrazneniami

### Článok 2: Kašeľ – psychosomatický pohľad
- **slug**: `kasel-prirodzena-obrana-tela-aj-prejav-vnutornej-nespokojnosti`
- **title**: `Kašeľ: Prirodzená obrana tela aj prejav vnútornej nespokojnosti`
- **category**: `Zdravie`
- **excerpt**: `Kašeľ sa rodí z pocitu, že máme niečoho „plný krk". Potlačená vnútorná nespokojnosť vysušuje hrdlo a vytvára v ňom pomyselný oheň.`
- **content**: Plný text vrátane typov kašľa, otázok na sebapoznanie a sekcie Cesta k uzdraveniu; s `##` nadpismi, odrážkami a zvýrazneniami

### Článok 3: Recept na spokojný život
- **slug**: `recept-na-spokojny-zivot`
- **title**: `Recept na spokojný život: Máme svoju spokojnosť vo vlastných rukách?`
- **category**: `Wellness`
- **excerpt**: `Spokojnosť nie je výsledok, ku ktorému sa dopracujeme. Je to vnútorný postoj, ktorý si vyberáme každý deň.`
- **content**: Text zo strany 1 (polished verzia) s citátom H. Forda, sekciou Piliere naplneného života; formátovaný s `>` blockquote, `##` nadpismi, odrážkami

### Kroky implementácie

1. **Vygenerovať 3 hero obrázky** pomocou AI image generation modelu:
   - Článok 1: Meditatívna scéna – indický askét, teplé farby, spirituálna atmosféra
   - Článok 2: Abstraktná vizualizácia dýchania/hrdla, jemné tóny, wellness estetika
   - Článok 3: Pokojná scéna – západ slnka, príroda, vnútorný pokoj

2. **Nahrať obrázky** do storage bucketu `article-images`

3. **Vložiť 3 články** do tabuľky `articles` s príslušnými `cover_image_url` odkazmi, `published: true` a aktuálnym timestampom

### Bez zmien v kóde
Blog systém už renderuje Markdown články z databázy vrátane obrázkov, takže žiadne zmeny v kóde nie sú potrebné.

