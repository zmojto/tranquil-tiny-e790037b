## Cieľ
Zmeniť len meta tagy (title, description, og:*) tak, aby namiesto "wellness" bolo "mindfulness". Viditeľný text stránky sa nemení.

## 1. index.html
- `<title>` → `Samaveša – Jogové a mindfulness pobyty v lone prírody`
- `og:title` → rovnaký text
- `meta description` a `og:description` → `Jogové a mindfulness pobyty v lone prírody. Joga, meditácia, zdravá strava a oddych od každodenného zhonu. Pozrite si aktuálne termíny.`
- Ostatné tagy (canonical, og:url, og:image, twitter) ostávajú nezmenené.

## 2. src/pages/Index.tsx (Helmet – tento prebíja index.html pre prehliadač/Googlebot)
Aktuálne generuje vlastný title/description:
- `TITLE` → `Samaveša – Jogové a mindfulness pobyty v lone prírody`
- `DESCRIPTION` → `Transformačné 3 až 7-dňové jogové a mindfulness pobyty na inšpiratívnych miestach sveta. Maximálne 12 hostí, joga, meditácia a vegetariánska kuchyňa.`
- Tieto konštanty sa používajú aj v og:title/og:description a v JSON-LD Organization popise, takže sa prepíšu konzistentne jednou zmenou.

## 3. Kontrola
Po zmene vypíšem finálne znenie a dĺžky:

```text
index.html title          – "Samaveša – Jogové a mindfulness pobyty v lone prírody" (54 znakov)
index.html description    – 143 znakov
Index.tsx TITLE           – rovnaký ako index.html title
Index.tsx DESCRIPTION     – ~152 znakov
```
Skontrolujem, či title < 60 a description < 160 znakov, a či v týchto meta tagoch nezostalo slovo "wellness".

## Poznámka
Inde na webe (nadpisy, sekcie, články, ostatné podstránky) nič nemením.
