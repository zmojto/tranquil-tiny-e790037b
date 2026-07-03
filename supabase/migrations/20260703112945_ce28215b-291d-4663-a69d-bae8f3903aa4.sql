UPDATE public.articles SET
  title = regexp_replace(regexp_replace(regexp_replace(title, 'JÓG', 'JOG', 'g'), 'Jóg', 'Jog', 'g'), 'jóg', 'jog', 'g'),
  excerpt = regexp_replace(regexp_replace(regexp_replace(coalesce(excerpt,''), 'JÓG', 'JOG', 'g'), 'Jóg', 'Jog', 'g'), 'jóg', 'jog', 'g'),
  content = regexp_replace(regexp_replace(regexp_replace(content, 'JÓG', 'JOG', 'g'), 'Jóg', 'Jog', 'g'), 'jóg', 'jog', 'g'),
  category = regexp_replace(regexp_replace(regexp_replace(category, 'JÓG', 'JOG', 'g'), 'Jóg', 'Jog', 'g'), 'jóg', 'jog', 'g')
WHERE title ~ 'jóg|Jóg|JÓG' OR coalesce(excerpt,'') ~ 'jóg|Jóg|JÓG' OR content ~ 'jóg|Jóg|JÓG' OR category ~ 'jóg|Jóg|JÓG';