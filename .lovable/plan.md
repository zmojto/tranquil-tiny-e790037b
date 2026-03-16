

## Plan: Add unique meta descriptions to all key pages

### Current state
- **Homepage** (`index.html`): Has a meta description but it's generic and long
- **Blog** (`Blog.tsx`): Sets meta description via JS in useEffect — already has a decent one (but can be refined to 140-160 chars)
- **BlogArticle** (`BlogArticle.tsx`): Uses `article.excerpt` as meta description — dynamic, already handled
- **RetreatDetail** (`RetreatDetail.tsx`): Slices `retreat.description` to 155 chars — functional but not crafted

### Changes

1. **Homepage (`index.html`)** — Update the static meta description to a clear, 140-160 character Slovak description focused on the brand value proposition.

2. **Blog page (`src/pages/Blog.tsx`)** — Refine the existing meta description string to exactly 140-160 characters, making it more compelling.

3. **RetreatDetail (`src/pages/RetreatDetail.tsx`)** — Instead of blindly slicing the retreat description, craft a template-based meta description using retreat name, location, and key details, kept within 140-160 characters.

4. **BlogArticle (`src/pages/BlogArticle.tsx`)** — Already uses `article.excerpt`. Add a safeguard to trim it to 160 characters if it exceeds that length.

5. **NotFound (`src/pages/NotFound.tsx`)** — Add a meta description for the 404 page.

All descriptions will be in Slovak, descriptive, and within 140-160 characters.

