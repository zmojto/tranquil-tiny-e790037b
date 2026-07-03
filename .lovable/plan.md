# Plán: SEO základy webu Samaveša

## 1. `index.html` — statické meta tagy
- `<html lang="sk">` už je nastavené ✅ (bez zmeny).
- `<title>` → **"Jogové pobyty a wellness víkendy | Samaveša"**
- `<meta name="description">` → **"Jogové a wellness pobyty v lone prírody. Joga, meditácia, zdravá strava a oddych od každodenného zhonu. Pozrite si aktuálne termíny."**
- `og:title` a `og:description` zosynchronizovať s vyššie uvedeným.
- `og:url` → `https://samavesa.sk/`
- `og:image` a `twitter:image` → `https://samavesa.sk/og-image.jpg`
- Pridať `<meta property="og:locale" content="sk_SK" />` a `<meta property="og:site_name" content="Samaveša" />`
- Odstrániť `<meta name="twitter:site" content="@sereneretreats" />`
- Pridať `<link rel="canonical" href="https://samavesa.sk/" />`

## 2. Doplnenie Helmet blokov na routách
Bez refaktoru na zdieľaný `<SEO>` komponent — len doplniť do existujúcich `<Helmet>` blokov v `Index.tsx`, `Blog.tsx`, `BlogArticle.tsx`, `RetreatDetail.tsx`, `NotFound.tsx`:
- `<meta property="og:locale" content="sk_SK" />`
- `<meta property="og:image" content="…" />` (kde chýba — použije sa článkový cover, pobytový obrázok alebo default `https://samavesa.sk/og-image.jpg`)
- Skontrolovať, že `canonical` a `og:url` používajú doménu **`https://samavesa.sk`** (už áno vo všetkých existujúcich Helmet blokoch, `SITE_URL` konštanty sú správne ✅).

## 3. Nahradenie "jóga/jógový" → "joga/jogový"
Globálna náhrada zachovávajúca veľkosť písmen a všetky tvary (jóga, jógy, jóge, jógu, jógou, jógové, jógový, jógovú, jógových, jógami…). Rozsah:
- **UI komponenty**: `HeroSection`, `AboutSection`, `HostsSection`, `DailyProgramSection`, `ProgramSection`, `EventsSection`, `FAQSection`, `GallerySection`, `TestimonialSection`, `FooterSection`, `NavigationHeader`, `BlogPreviewSection`, `ArticleCard`, `BookingModal`, `RetreatBookingForm` a všetky pages.
- **Data**: `src/data/retreats.ts` (názvy, popisy, `heroHighlights`, `whatsIncluded`, …).
- **SEO texty**: konštanty `TITLE` / `DESCRIPTION` vo všetkých pages.
- **DB**: `public.articles` (title, subtitle, content, excerpt, category) — UPDATE cez SQL migráciu s `regexp_replace` pre všetky tvary; kategória `"Jóga"` → `"Joga"` vrátane filtra v `Blog.tsx` (`CATEGORIES`).
- **Ostatné**: `public/llms.txt`, `public/sitemap.xml` popisy, `scripts/generate-sitemap.ts`, `README.md` ak obsahuje.

Poznámka: **memory** obsahuje pravidlo "strictly Slovak" — po tejto zmene sa "joga" stane kanonickým tvarom projektu; memory dopĺňam o toto pravidlo, aby sa "jóga" v budúcnosti nevrátila.

## 4. H1 audit (práve jeden `<h1>` na stránke)
Prejdem každú route a jej sekcie:
- `/` (Index): očakávam `<h1>` v `HeroSection`. Skontrolujem, že ostatné sekcie používajú `<h2>`/`<h3>` a žiadna nemá druhý `<h1>`.
- `/blog`: `<h1>` v hlavičke Blog.tsx (už je) — over, že `ArticleCard` nepoužíva `<h1>`.
- `/blog/:slug`: `BlogArticle` — over, že názov článku je `<h1>` a markdown content nerenderuje ďalší `<h1>` (ak áno, downgradnem cez renderer alebo úpravou obsahu).
- `/retreats/:id`: `RetreatDetail` — jeden `<h1>` = názov pobytu.
- `/*` NotFound: `<h1>404</h1>` už je ✅.

Ak niekde chýba/prebýva, opravím na správnu úroveň nadpisu.

## 5. Alt text audit
Prejdem všetky `<img>` v komponentoch a stránkach (`HeroSection`, `AboutSection`, `HostsSection`, `GallerySection`, `ArticleCard`, `BlogArticle` markdown obrázky, `RetreatDetail`, `EventsSection`, `FooterSection`). Pre každý `<img>`:
- Ak `alt=""` alebo chýba → doplním slovenský popis obsahu fotky (nie názov súboru).
- Ak alt je iba názov ("Cyprus"), rozšírim na popisný ("Villa na Cypre s bazénom pri západe slnka").
- Dekoratívne pozadia ostanú `alt=""` len ak sú naozaj dekoratívne (žiadne také nepredpokladám).

Články v DB s markdown obrázkami: skontrolujem `![alt](url)` a doplním chýbajúce alt texty priamo v obsahu článkov (SQL update per článok, aby sa neprepísal celý text — použijem regex).

## 6. Poznámky
- **Zdieľaný `<SEO>` komponent** nevytváram (podľa vašej voľby "iba doplniť chýbajúce polia").
- Doména `https://samavesa.sk` je custom doména — kým nie je aktívna, `og:image` `/og-image.jpg` musí reálne existovať na tejto doméne, inak crawlery zobrazia default z Lovable hostingu. Súbor `public/og-image.jpg` v projekte overím a ak chýba, upozorním (alebo vygenerujem, ak budete chcieť).
- Zmeny v `og:image` sa v už zdieľaných linkoch prejavia až po refetchi cez debugger danej platformy (Facebook/LinkedIn/…).

## Technická sekcia
- Nová migrácia: `regexp_replace(content, '(?i)jóg', 'jog', 'g')` na `articles.title`, `subtitle`, `content`, `excerpt`, `category` — s ošetrením veľkých písmen (Jóga → Joga, JÓGA → JOGA) pomocou dvoch prechodov (`Jóg`→`Jog`, `jóg`→`jog`, `JÓG`→`JOG`).
- Frontend: sed-like nahradenie v `.tsx`/`.ts` súboroch cez cielené `code--line_replace` alebo `code--exec` (`rg -l 'jóg' | xargs sed -i`).
- Filter `CATEGORIES` v `Blog.tsx` prepnem z `"Jóga"` na `"Joga"`.

## Deliverables
1. Upravený `index.html`
2. Doplnené `og:locale` (+ `og:image` kde chýba) v 5 Helmet blokoch
3. Globálna náhrada `jóga`→`joga` v kóde, datach, DB, `llms.txt`, sitemap
4. Audit + oprava H1 a alt textov
5. Aktualizovaná memory: `joga` je kanonický tvar