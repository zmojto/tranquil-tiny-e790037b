## Oprava: Spätný link z detailu pobytu neskroluje na sekciu pobyty

### Problém
V `RetreatDetail.tsx` je link `<Link to="/#retreats">` aj `<Button onClick={() => navigate("/#retreats")}>`. Pri kliknutí sa používateľ dostane na hlavnú stránku `/`, ale neskroluje sa na sekciu `#retreats`. Dôvodom je, že React Router pri client-side navigácii nevykonáva natívny hash scroll prehliadača.

### Riešenie
Pridať do `src/pages/Index.tsx` jednoduchý `useEffect`, ktorý po načítaní stránky skontroluje `window.location.hash` a programovo skroluje na príslušný element pomocou `scrollIntoView({ behavior: "smooth" })`.

```text
Index.tsx
  + useEffect(() => {
  +   const hash = window.location.hash;
  +   if (hash) {
  +     const el = document.querySelector(hash);
  +     if (el) el.scrollIntoView({ behavior: "smooth" });
  +   }
  + }, []);
```

Súbory na úpravu:
- `src/pages/Index.tsx` — pridať hash scroll handler

Výsledok: Klik na "Späť na všetky pobyty" z detailu pobytu plynule naskroluje na sekciu pobyty.