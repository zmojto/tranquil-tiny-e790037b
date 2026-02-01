import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { format } from "date-fns";
import ReactMarkdown from "react-markdown";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ArticleCard from "@/components/ArticleCard";
import { useArticle, useRelatedArticles } from "@/hooks/useArticles";

const BlogArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: article, isLoading } = useArticle(slug || "");
  const { data: relatedArticles } = useRelatedArticles(
    slug || "",
    article?.category || "",
    3
  );

  useEffect(() => {
    if (article) {
      document.title = `${article.title} | Serenity Blog`;

      // Update meta description
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement("meta");
        metaDescription.setAttribute("name", "description");
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute("content", article.excerpt);

      // Open Graph tags
      const ogTags = [
        { property: "og:title", content: article.title },
        { property: "og:description", content: article.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: window.location.href },
      ];

      if (article.cover_image_url) {
        ogTags.push({ property: "og:image", content: article.cover_image_url });
      }

      ogTags.forEach(({ property, content }) => {
        let tag = document.querySelector(`meta[property="${property}"]`);
        if (!tag) {
          tag = document.createElement("meta");
          tag.setAttribute("property", property);
          document.head.appendChild(tag);
        }
        tag.setAttribute("content", content);
      });

      // JSON-LD structured data
      const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: article.title,
        description: article.excerpt,
        author: {
          "@type": "Person",
          name: article.author_name,
        },
        datePublished: article.published_at,
        image: article.cover_image_url,
        publisher: {
          "@type": "Organization",
          name: "Serenity Retreats",
        },
      };

      let scriptTag = document.querySelector("#article-jsonld");
      if (!scriptTag) {
        scriptTag = document.createElement("script");
        scriptTag.setAttribute("id", "article-jsonld");
        scriptTag.setAttribute("type", "application/ld+json");
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(jsonLd);
    }

    // Scroll to top on article change
    window.scrollTo(0, 0);

    return () => {
      const scriptTag = document.querySelector("#article-jsonld");
      if (scriptTag) scriptTag.remove();
    };
  }, [article]);

  if (isLoading) {
    return (
      <main className="min-h-screen bg-background">
        <div className="container max-w-4xl mx-auto px-6 py-16">
          <div className="animate-pulse space-y-6">
            <div className="h-8 bg-secondary/50 rounded w-1/4" />
            <div className="h-12 bg-secondary/50 rounded w-3/4" />
            <div className="h-6 bg-secondary/50 rounded w-1/2" />
            <div className="aspect-video bg-secondary/50 rounded-lg" />
            <div className="space-y-4">
              <div className="h-4 bg-secondary/50 rounded" />
              <div className="h-4 bg-secondary/50 rounded w-5/6" />
              <div className="h-4 bg-secondary/50 rounded w-4/6" />
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (!article) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-foreground mb-4">
            Article Not Found
          </h1>
          <p className="text-muted-foreground mb-8">
            The article you're looking for doesn't exist or has been removed.
          </p>
          <Button asChild>
            <Link to="/blog">Back to Blog</Link>
          </Button>
        </div>
      </main>
    );
  }

  const formattedDate = article.published_at
    ? format(new Date(article.published_at), "MMMM d, yyyy")
    : "";

  return (
    <main className="min-h-screen bg-background">
      {/* Article Header */}
      <header className="bg-primary/5 py-12 md:py-16">
        <div className="container max-w-4xl mx-auto px-6">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <Badge variant="secondary" className="mb-4">
            {article.category}
          </Badge>

          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <User className="w-4 h-4" />
              {article.author_name}
            </span>
            {formattedDate && (
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {formattedDate}
              </span>
            )}
            <span className="flex items-center gap-2">
              <Tag className="w-4 h-4" />
              {article.category}
            </span>
          </div>
        </div>
      </header>

      {/* Cover Image */}
      {article.cover_image_url && (
        <div className="container max-w-4xl mx-auto px-6 -mt-6 mb-12">
          <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
            <img
              src={article.cover_image_url}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}

      {/* Article Content */}
      <article className="container max-w-4xl mx-auto px-6 pb-16">
        <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-blockquote:border-l-primary prose-blockquote:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground">
          <ReactMarkdown>{article.content}</ReactMarkdown>
        </div>
      </article>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-12">
        <div className="container max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-2xl md:text-3xl mb-4">
            Ready to Experience This Yourself?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Transform your practice with one of our immersive wellness retreats
            in beautiful destinations around the world.
          </p>
          <Button asChild variant="secondary" size="lg">
            <Link to="/#retreats">Explore Our Retreats</Link>
          </Button>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles && relatedArticles.length > 0 && (
        <section className="py-16 bg-secondary/30">
          <div className="container max-w-6xl mx-auto px-6">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-8 text-center">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedArticles.map((relatedArticle) => (
                <ArticleCard
                  key={relatedArticle.id}
                  article={relatedArticle}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default BlogArticle;
