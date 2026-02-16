

# Oprava formátovania článkov na blogu

## Problém
Markdown obsah článkov sa zobrazuje bez formátovania -- chýbajú medzery medzi odsekmi, nadpisy nie sú štylizované, zoznamy nemajú odrážky. Dôvod: plugin `@tailwindcss/typography` je nainštalovaný, ale nie je pridaný do konfigurácie Tailwindu.

## Riešenie
Jedna jednoduchá zmena v jednom súbore.

## Technické detaily

### Súbor: `tailwind.config.ts`
Pridať `@tailwindcss/typography` do poľa `plugins`:

```typescript
plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
```

Toto aktivuje triedy `prose`, `prose-lg`, `prose-headings:*`, `prose-p:*` atď., ktoré sú už použité v `BlogArticle.tsx` na riadku 190. Po tejto zmene sa Markdown obsah z databázy bude správne zobrazovať s:
- Medzerami medzi odsekmi
- Štylizovanými nadpismi (##, ###)
- Odrážkovými a číselnými zoznamami
- Tučným a kurzívnym textom
- Blokovou citáciou
- Horizontálnymi oddeľovačmi (---)
