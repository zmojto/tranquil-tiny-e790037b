## Aktuálny stav (overené v kóde)


| Stránka         | Súbor                         | og:title / og:description                      |
| --------------- | ----------------------------- | ---------------------------------------------- |
| `/` (Index)     | `src/pages/Index.tsx`         | **NEMÁ** – dedí z `index.html`                 |
| `/blog`         | `src/pages/Blog.tsx`          | **MÁ** (nastavené cez `useEffect` + `setMeta`) |
| `/blog/:slug`   | `src/pages/BlogArticle.tsx`   | **MÁ** (z DB článku)                           |
| `/retreats/:id` | `src/pages/RetreatDetail.tsx` | **MÁ** (z dát pobytu)                          |
| `*` (404)       | `src/pages/NotFound.tsx`      | **NEMÁ**                                       |


## Prečo to vyzerá, že Blog „nemá" vlastné tagy

Dôležitá pravda, ktorú treba povedať otvorene: **Lovable projekt je Vite SPA bez SSR**. To znamená:

- V `index.html` (to čo vidíš cez „View Source" alebo čo načíta Facebook/LinkedIn/Slack crawler) sú **iba statické tagy z homepage**.
- Tagy nastavené cez `useEffect` v `Blog.tsx`, `BlogArticle.tsx`, `RetreatDetail.tsx` sa do `document.head` vkladajú **až po vykonaní JavaScriptu v prehliadači**. Googlebot ich vidí, ale **social-preview crawlery (Facebook, LinkedIn, Slack, WhatsApp, Twitter) NIE** – tie JS nespúšťajú.
- Preto sa zdá, že `/blog` „nemá" vlastné og tagy – v zdrojovom HTML naozaj nie sú. Sú tam až po runtime.

Bez SSR / prerendera sa to úplne vyriešiť nedá. Čo vieme spraviť: zjednotiť mechanizmus (`react-helmet-async`), doplniť chýbajúce stránky a otvorene priznať limit pre sociálne náhľady.

## Navrhované unikátne metadáta

### `/` – Úvod

- **og:title:** `Samaveša – Jógové a wellness pobyty v lone prírody`
- **og:description:** Transformačné 3 až 7 dňové jogové pobyty na inšpiratívnych miestach sveta`Maximálne 12 hostí, jóga, meditácia, vegetariánska kuchyňa.`

### `/blog` – Blog

- **og:title:** `Medzi riadkami Sabíny Kalmárovej – Blog o jóge a nastavení mysle`
- **og:description:** `Články o jóge, meditácii, zákonitostiach života a nastavení mysle. Sprievodca k vyváženejšiemu a vedomejšiemu životu.`

### `/blog/:slug` – Detail článku

- **og:title:** `{article.title} | Samaveša`
- **og:description:** `{article.excerpt}` (skrátené na 160 znakov)
- **og:image:** `{article.cover_image_url}` (už funguje)

### `/retreats/:id` – Detail pobytu

- **og:title:** `{retreat.name} – Jógový pobyt v destinácii {retreat.location} | Samaveša`
- **og:description:** `{retreat.tagline}. Termín {retreat.dates}, max. 12 hostí, cena od {retreat.price} €. Jóga, meditácia a wellness v destinácii {retreat.location}.`
- **og:image:** `{retreat.heroImage}` (nové – aktuálne sa nenastavuje)

### `*` – 404 Nenájdené

- **og:title:** `Stránka nenájdená | Samaveša`
- **og:description:** `Táto stránka neexistuje alebo bola presunutá. Vráťte sa na úvod a objavte jógové pobyty a blog Samaveša.`

## Technické zmeny (čo by sa upravilo v build móde)

1. **Inštalácia** `react-helmet-async` + `<HelmetProvider>` v `src/main.tsx`.
2. `**index.html**` – nastaviť homepage og:title/og:description podľa návrhu vyššie (slúži ako fallback pre social crawlery, ktoré nespúšťajú JS, a zároveň pre route `/`).
3. `**Blog.tsx`, `BlogArticle.tsx`, `RetreatDetail.tsx`, `NotFound.tsx**` – nahradiť `useEffect` + manuálne `document.querySelector` blokom `<Helmet>` s vyššie uvedenými hodnotami. Pridať `og:image` aj na `RetreatDetail`.
4. `**Index.tsx**` – pridať `<Helmet>` so znením pre homepage (zhodné s `index.html`, aby SPA navigácie tiež obnovili tagy keď používateľ príde z inej routy).
5. Aktualizovať `og:url` na `https://samavesa.sk/...` (resp. `window.location.href`).

## Limit, ktorý treba poznať

Aj po týchto zmenách bude **Facebook/LinkedIn/Slack/WhatsApp náhľad pre `/blog`, `/blog/:slug` a `/retreats/:id` ukazovať homepage og:title/og:description**, lebo tieto crawlery nespúšťajú JS a `index.html` je jediná verzia HTML, ktorú dostanú. Plné riešenie vyžaduje SSR alebo prerender (mimo aktuálneho Vite setupu).

Googlebot per-route tagy uvidí korektne.

---

Schváľ plán a v build móde to nasadím; ak chceš iné znenia titulkov/popisov, napíš zmeny pred schválením.