import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ArticleCard from "@/components/ArticleCard";
import { useArticles } from "@/hooks/useArticles";

const CATEGORIES = ["Všetko", "Jóga", "Meditácia", "Rovnováha", "Zdravie", "Výživa", "Cestovanie"];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("Všetko");
  const { data: articles, isLoading } = useArticles();

  useEffect(() => {
    document.title = "Medzi riadkami Sabíny Kalmárovej – Články o jóge a nastavení mysle";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Objavte články o jóge, meditácii, zákonitostiach života a práci o nastavení mysle. Budú vašim sprievodcom k vyváženejšiemu a vedomejšiemu životu."
      );
    }
  }, []);

  const filteredArticles = articles?.filter(
    (article) =>
      selectedCategory === "Všetko" || article.category === selectedCategory
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
            Späť domov
          </Link>
          <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
            Medzi riadkami Sabíny Kalmárovej
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Objavte články o jóge, meditácii, zákonitostiach života a práci o nastavení mysle. 
            Budú vašim sprievodcom k vyváženejšiemu a vedomejšiemu životu.
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
                V tejto kategórii zatiaľ nie sú žiadne články.
              </p>
              <Button
                variant="outline"
                onClick={() => setSelectedCategory("Všetko")}
              >
                Zobraziť všetky články
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
            Ste pripravení to zažiť?
          </h2>
          <p className="text-muted-foreground mb-8">
            Pripojte sa k jednému z našich transformačných wellness pobytov a premeňte čítanie
            na prax.
          </p>
          <Button asChild size="lg">
            <Link to="/#retreats">Preskúmať pobyty</Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Blog;
