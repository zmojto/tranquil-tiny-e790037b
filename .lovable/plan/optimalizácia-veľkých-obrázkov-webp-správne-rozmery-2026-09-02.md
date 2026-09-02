# Optimalizácia veľkých obrázkov (WebP + správne rozmery)

Cieľ: znížiť veľkosť uvedených obrázkov aspoň o 60 % bez viditeľnej straty kvality.

## Kde sa obrázky používajú

- `public/images/necpaly/main.jpg` (1,64 MB) — náhľad v karte pobytu na homepage, hero pozadie na `/pobyty/necpaly-...` a dlaždica v galérii na homepage.
- `src/assets/cyprus-konnos-bay.jpg` (836 KB) — galéria pobytu + dlaždica v `GallerySection`.
- `public/images/blatinka/group.jpg` (627 KB) — galéria pobytu + `GallerySection`.
- `src/assets/cyprus-pool-night.jpg` (535 KB) — galéria pobytu + `GallerySection`.
- `src/assets/hero-retreat.jpg` (341 KB) — hero na homepage (`HeroSection`).
- `public/images/blatinka/interior.jpg` (290 KB) — galéria pobytu + `GallerySection`.
- `public/images/sabina-ali-sprievodkyne.jpeg` (179 KB) — sekcia „Vaše sprievodkyne", zobrazené max ~640×800.

## Čo sa spraví

1. **Konverzia na WebP** (kvalita 78) pre všetkých 7 obrázkov.
2. **Rozmery podľa skutočného zobrazenia (2× pre retinu):**
   - `necpaly/main` — dve varianty: `main-card.webp` (800 px šírka, pre kartu a galériu) a `main.webp` (1920 px, pre hero pozadie detailu pobytu).
   - galerijné fotky (`cyprus-konnos-bay`, `cyprus-pool-night`, `blatinka/group`, `blatinka/interior`) — max 1200 px šírka.
   - `hero-retreat` — 1920 px šírka, zachovám `width={1920} height={1080}`, `fetchPriority="high"`, `decoding="async"`.
   - `sabina-ali-sprievodkyne` — 1280 px šírka (2× zobrazených 640 px).
3. **Aktualizácia referencií** v `src/data/retreats.ts`, `src/components/GallerySection.tsx`, `src/components/HeroSection.tsx`, `src/components/HostsSection.tsx` na nové `.webp` súbory; v karte pobytu na homepage sa použije zmenšená varianta náhľadu.
4. **Zmazanie pôvodných JPG/JPEG súborov**, ktoré už nikde nie sú referencované.
5. **Kontrola v prehliadači** (homepage + detail pobytov Necpaly, Blatinka, Cyprus) — či sa všetky obrázky načítajú, plus výpis novej celkovej veľkosti oproti pôvodnej (~4,25 MB).

## Technické poznámky

- Konverzia cez `ffmpeg`/`cwebp` v sandboxe, výstup priamo do `public/images/...` a `src/assets/...`.
- `src/assets` obrázky ostávajú ES importy (Vite ich hashuje), `public/images` ostávajú absolútne cesty.
- Lazy loading pri galériách a kartách zostane/pridá sa `loading="lazy"`; hero ostáva eager s `fetchPriority="high"`.
