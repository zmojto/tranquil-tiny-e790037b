

## Plan: Replace article content at /blog/benefits-of-digital-detox

### Summary
Update the existing article (id: `ce5d107d-b8ad-4434-bd4a-6c0dc8e980b3`) with the Slovak text from the uploaded DOCX. The article slug stays the same so existing URLs continue to work.

### Changes

1. **Update the article record** using the Supabase insert tool (UPDATE query) with:
   - **title**: `Prečo je digitálny detox nevyhnutný pre naše zdravie`
   - **excerpt**: `Digitálny detox nie je o odmietnutí technológií. Je o vedomom nastavení hraníc a návrate k sebe samému.` (~100 chars)
   - **content**: Full text from both pages formatted as Markdown (headings `##`, bullet lists, paragraphs), including the closing section from page 2
   - **category**, **author_name**, **published**, **slug**, **cover_image_url**: unchanged

No code changes needed — the blog already renders Markdown from the database.

