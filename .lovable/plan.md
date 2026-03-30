

## Plan: Add new blog article from uploaded DOCX

### Content summary
The document "Disciplína ako kľúč k skutočnej slobode" is a wellness/mindfulness article about discipline as a path to freedom. Page 1 contains the polished version; pages 2-3 are drafts/notes. We will use the polished content from page 1.

### Changes

1. **Insert article into the database** using the Supabase insert tool with:
   - **slug**: `disciplina-ako-kluc-k-skutocnej-slobode`
   - **title**: `Disciplína ako kľúč k skutočnej slobode`
   - **excerpt**: A concise 1-2 sentence summary of the article (~150 chars)
   - **content**: The full article text from page 1, formatted as Markdown (headings, bullet lists, paragraphs)
   - **category**: `Wellness` (fits the existing categories)
   - **author_name**: `Serenity Team` (default)
   - **published**: `true`
   - **published_at**: current timestamp
   - **cover_image_url**: `null` (no image provided)

No code changes needed — the blog system already renders Markdown articles from the database.

