export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  cover_image_url: string | null;
  category: string;
  author_name: string;
  published: boolean;
  published_at: string | null;
  created_at: string;
  updated_at: string;
}
