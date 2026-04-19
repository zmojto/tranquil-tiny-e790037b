

## Plán: Nastaviť hero obrázok ako Open Graph náhľad pri zdieľaní

### Problém
Pri zdieľaní stránky (napr. v správach) sa zobrazuje štandardný Lovable obrázok namiesto hero obrázku z homepage. Príčina: v `index.html` je `og:image` a `twitter:image` nastavené na `https://lovable.dev/opengraph-image-p98pqg.png`.

### Riešenie

1. **Skopírovať `src/assets/hero-retreat.jpg` do `public/`** ako `og-image.jpg`
   - OG obrázky musia byť dostupné cez absolútnu URL, takže musia byť v `public/` adresári (nie v `src/assets/`, ktorý prechádza Vite bundlingom s hashom v názve)

2. **Aktualizovať `index.html`**:
   - `og:image` → `https://tranquil-tiny.lovable.app/og-image.jpg`
   - `twitter:image` → `https://tranquil-tiny.lovable.app/og-image.jpg`
   - Pridať `og:image:width` (1200) a `og:image:height` (630) pre lepšiu kompatibilitu so sociálnymi sieťami
   - Pridať `og:url` s adresou stránky

### Technické detaily
- Hero obrázok má rozmery vhodné na použitie (krajinný formát). Ak by bol príliš veľký, môžem ho zmenšiť/orezať na odporúčaný OG pomer 1200×630 px pre optimálne zobrazenie na Facebooku, LinkedIn, iMessage, WhatsApp a Twitteri.
- Sociálne siete cachujú OG obrázky – po deployi môže byť potrebné použiť napr. Facebook Sharing Debugger na vyčistenie cache.

