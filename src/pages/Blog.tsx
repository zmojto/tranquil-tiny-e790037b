import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ArticleCard from "@/components/ArticleCard";
import { useArticles } from "@/hooks/useArticles";

const CATEGORIES = ["All", "Yoga", "Meditation", "Wellness", "Nutrition", "Travel"];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { data: articles, isLoading } = useArticles();

  useEffect(() => {
    document.title = "Blog | Serenity Retreats";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Explore wellness articles, yoga tips, meditation guides, and retreat stories from Serenity Retreats."
      );
    }
  }, []);

  const filteredArticles = articles?.filter(
    (article) =>
      selectedCategory === "All" || article.category === selectedCategory
  );

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary/5 py-16 md:py-24">
        <div className="container max-w-6xl mx-auto px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
            The Serenity Journal
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Discover articles on yoga, meditation, wellness, and mindful living.
            Our journal is your guide to a more balanced life.
          </p>
        </div>
      </header>

      {/* Category Filter */}
      <section className="border-b border-primary/10 sticky top-0 bg-background/95 backdrop-blur-md z-10">
        <div className="container max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
            <Filter className="w-4 h-4 text-muted-foreground flex-shrink-0" />
            {CATEGORIES.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className="cursor-pointer whitespace-nowrap transition-all hover:bg-primary/10"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 md:py-16">
        <div className="container max-w-6xl mx-auto px-6">
          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="h-[400px] bg-secondary/50 animate-pulse rounded-lg"
                />
              ))}
            </div>
          ) : filteredArticles && filteredArticles.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg mb-4">
                No articles found in this category yet.
              </p>
              <Button
                variant="outline"
                onClick={() => setSelectedCategory("All")}
              >
                View All Articles
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
            Ready to Experience It Yourself?
          </h2>
          <p className="text-muted-foreground mb-8">
            Join one of our transformative wellness retreats and turn reading
            into practice.
          </p>
          <Button asChild size="lg">
            <Link to="/#retreats">Explore Retreats</Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Blog;
