## Stav v databáze

- "Ajurvédske jedlá" už má kategóriu `Nutrition` (zobrazuje sa ako **Výživa**) — netreba meniť.
- 4 články majú aktuálne kategóriu `Wellness`:
  - Prečo je digitálny detox nevyhnutný pre naše zdravie
  - Disciplína ako kľúč k skutočnej slobode
  - Recept na spokojný život
  - Tajomstvo vnútornej sily

## Plán

1. **Pridať novú kategóriu `Balance` s labelom „Rovnováha"** v `src/pages/Blog.tsx`:
   - Doplniť do `CATEGORIES`: `["Všetko", "Yoga", "Meditation", "Wellness", "Balance", "Nutrition", "Travel"]`
   - Doplniť do `CATEGORY_LABELS`: `"Balance": "Rovnováha"`
   - (Wellness ostáva ako samostatná kategória pre prípadné budúce články.)

2. **Aktualizovať 4 články v databáze** (migrácia) — nastaviť `category = 'Balance'` pre slugy:
   - `preco-je-digitalny-detox-nevyhnutny-pre-nase-zdravie`
   - `disciplina-ako-kluc-k-skutocnej-slobode`
   - `recept-na-spokojny-zivot`
   - `tajomstvo-vnutornej-sily-co-nas-mozu-naucit-indicki-asketi`

3. **Footer** (`FooterSection.tsx`): ponechať odkaz na Wellness alebo prepnúť na Rovnováhu? Predvolene ho **prepnem na Rovnováhu** (`/blog?category=Balance`), keďže tam smerujú nové články. Ak chceš nechať Wellness, daj vedieť.

## Poznámka

Kategória „Ajurvédske jedlá" už je Výživa, takže pre ňu nerobím žiadnu zmenu.