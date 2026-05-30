## Rebranding na Samaveša

Nahradím všetky výskyty brandových názvov "Serenity" a "Serene Retreats" textom **Samaveša** v celom projekte.

### Súbory na úpravu

- `index.html` — `<title>`, og:title, meta author
- `src/components/NavigationHeader.tsx` — logo v navigácii
- `src/components/FooterSection.tsx` — copyright v pätičke
- `src/pages/BlogArticle.tsx` — title článku, JSON-LD publisher name
- `src/pages/NotFound.tsx` — title a meta description 404 stránky
- `src/pages/RetreatDetail.tsx` — title a og:title detailu pobytu

### Pravidlo nahradenia

- "Serenity" → "Samaveša"
- "Serene Retreats" → "Samaveša"
- "Serene" (samostatne v title suffixoch) → "Samaveša"

### Mimo rozsahu

- Doménové URL (`tranquil-tiny.lovable.app`, `hello@sereneretreats.com`, `@sereneretreats`) zostávajú — ich zmena vyžaduje samostatné rozhodnutie (nová doména/email).
- Nemenia sa žiadne komponenty, štýly ani funkcionalita.
