import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { format } from "date-fns";
import { sk } from "date-fns/locale";
import ReactMarkdown from "react-markdown";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ArticleCard from "@/components/ArticleCard";
import { useArticle, useRelatedArticles } from "@/hooks/useArticles";

const SITE_URL = "https://samavesa.sk";

const BlogArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: article, isLoading } = useArticle(slug || "");
  const { data: relatedArticles } = useRelatedArticles(
    slug || "",
    article?.category || "",
    3
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

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
            Článok nenájdený
          </h1>
          <p className="text-muted-foreground mb-8">
            Článok, ktorý hľadáte, neexistuje alebo bol odstránený.
          </p>
          <Button asChild>
            <Link to="/blog">Späť na blog</Link>
          </Button>
        </div>
      </main>
    );
  }

  const formattedDate = article.published_at
    ? format(new Date(article.published_at), "d. MMMM yyyy", { locale: sk })
    : "";

  const pageTitle = `${article.title} | Samaveša`;
  const pageDescription = article.excerpt.length > 160
    ? article.excerpt.slice(0, 157) + "..."
    : article.excerpt;
  const pageUrl = `${SITE_URL}/blog/${article.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    author: { "@type": "Person", name: article.author_name },
    datePublished: article.published_at,
    image: article.cover_image_url,
    publisher: { "@type": "Organization", name: "Samaveša" },
  };

  return (
    <main className="min-h-screen bg-background">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={pageUrl} />
        {article.cover_image_url && (
          <meta property="og:image" content={article.cover_image_url} />
        )}
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        {article.cover_image_url && (
          <meta name="twitter:image" content={article.cover_image_url} />
        )}
        <link rel="canonical" href={pageUrl} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      {/* Article Header */}
      <header className="bg-primary/5 py-12 md:py-16">
        <div className="container max-w-4xl mx-auto px-6">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Späť na blog
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
      <article className="container max-w-4xl mx-auto px-6 pb-16 text-left">
        <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-blockquote:border-l-primary prose-blockquote:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground">
          <ReactMarkdown
            skipHtml={true}
            disallowedElements={['script', 'iframe', 'object', 'embed']}
          >
            {article.content}
          </ReactMarkdown>
        </div>
      </article>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-12">
        <div className="container max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-2xl md:text-3xl mb-4">
            Ste pripravení to zažiť na vlastnej koži?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Premeňte svoju prax s jedným z našich pútavých wellness pobytov
            na krásnych miestach po celom svete.
          </p>
          <Button asChild variant="secondary" size="lg">
            <Link to="/#retreats">Preskúmať naše pobyty</Link>
          </Button>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles && relatedArticles.length > 0 && (
        <section className="py-16 bg-secondary/30">
          <div className="container max-w-6xl mx-auto px-6">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-8 text-center">
              Súvisiace články
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
