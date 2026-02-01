

# Blog & Articles Section for SEO

## Overview
Add a fully-featured blog system to publish wellness articles, yoga tips, and retreat stories. This will significantly boost SEO by creating keyword-rich, shareable content that drives organic traffic to your retreat bookings.

## What You'll Get

### Blog Features
- **Blog listing page** at `/blog` showing all published articles
- **Individual article pages** at `/blog/[slug]` with SEO-optimized URLs
- **Rich text content** with headings, images, and formatted text
- **Article categories** (Yoga, Wellness, Travel, Meditation, Nutrition)
- **Author attribution** and publish dates
- **Featured articles** section on homepage
- **Related articles** suggestions

### SEO Benefits
- Keyword-targeted URLs (e.g., `/blog/best-yoga-poses-for-beginners`)
- Meta descriptions and Open Graph tags per article
- Structured data for search engines
- Internal linking to retreat pages
- Fresh content signals for Google

## Database Structure

| Column | Type | Description |
|--------|------|-------------|
| id | UUID | Primary key |
| slug | TEXT | URL-friendly identifier |
| title | TEXT | Article headline |
| excerpt | TEXT | Short preview (for listings & SEO) |
| content | TEXT | Full article body (Markdown) |
| cover_image_url | TEXT | Featured image |
| category | TEXT | Article category |
| author_name | TEXT | Writer's name |
| published | BOOLEAN | Draft vs. published |
| published_at | TIMESTAMP | Publish date |
| created_at | TIMESTAMP | Creation date |

## New Pages & Components

### Pages
| Route | Purpose |
|-------|---------|
| `/blog` | Blog listing with all articles |
| `/blog/:slug` | Individual article page |

### Components
| Component | Description |
|-----------|-------------|
| `BlogPreviewSection.tsx` | Homepage section showing 3 latest articles |
| `ArticleCard.tsx` | Reusable card for article previews |
| `ArticlePage.tsx` | Full article layout with content |
| `BlogListPage.tsx` | Grid of all articles with category filter |

## Site Integration

### Navigation Updates
Add "Blog" link to navigation between "FAQ" and "Contact"

### Homepage Addition
Add a "Latest from the Journal" section before the FAQ showing 3 featured articles

### Footer Update
Add quick links to popular article categories

## User Flow

```text
Homepage
    │
    ├── "Latest from the Journal" section
    │       │
    │       └── Click article → /blog/article-slug
    │
    └── Nav: "Blog" → /blog
                        │
                        ├── Filter by category
                        │
                        └── Click article → /blog/article-slug
                                              │
                                              └── Related articles
                                              └── CTA: Book a retreat
```

## Content Management
For now, articles will be stored in the database and you can add them directly. In the future, we could add an admin panel for easier content management.

## Files to Create/Modify

| File | Action |
|------|--------|
| Database migration | Create `articles` table |
| `src/pages/Blog.tsx` | New blog listing page |
| `src/pages/BlogArticle.tsx` | New article detail page |
| `src/components/BlogPreviewSection.tsx` | Homepage articles preview |
| `src/components/ArticleCard.tsx` | Reusable article card |
| `src/App.tsx` | Add new routes |
| `src/components/NavigationHeader.tsx` | Add Blog link |
| `src/pages/Index.tsx` | Add BlogPreviewSection |

## Sample Article Categories
- **Yoga** - Poses, sequences, practice tips
- **Wellness** - Holistic health, self-care
- **Travel** - Destination guides, retreat previews
- **Meditation** - Mindfulness techniques
- **Nutrition** - Plant-based recipes, healthy eating

## Technical Details

### Markdown Rendering
Articles will support Markdown formatting for rich content:
- Headings (H1-H6)
- Bold, italic text
- Bullet and numbered lists
- Block quotes
- Images with captions
- Links

### SEO Implementation
Each article page will include:
- Dynamic page title: `{Article Title} | Serenity Blog`
- Meta description from article excerpt
- Open Graph tags for social sharing
- Canonical URLs
- JSON-LD structured data for articles

### Image Handling
Cover images can be:
- External URLs (Unsplash, etc.)
- Uploaded to Supabase Storage (future enhancement)

