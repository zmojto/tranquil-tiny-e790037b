import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ArticleCard from "@/components/ArticleCard";
import { useArticles } from "@/hooks/useArticles";

const BlogPreviewSection = () => {
  const { data: articles, isLoading } = useArticles(3);

  if (isLoading) {
    return (
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Latest from the Journal
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Insights, tips, and stories to inspire your wellness journey
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-[400px] bg-background/50 animate-pulse rounded-lg"
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (!articles || articles.length === 0) {
    return null;
  }

  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-3 block">
            Our Blog
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            Latest from the Journal
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Insights, tips, and stories to inspire your wellness journey
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/blog" className="gap-2">
              View All Articles
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogPreviewSection;
