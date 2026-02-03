import { Link } from "react-router-dom";
import { format } from "date-fns";
import { sk } from "date-fns/locale";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Article } from "@/types/article";

interface ArticleCardProps {
  article: Article;
  variant?: "default" | "compact";
}

const ArticleCard = ({ article, variant = "default" }: ArticleCardProps) => {
  const formattedDate = article.published_at
    ? format(new Date(article.published_at), "d. MMMM yyyy", { locale: sk })
    : "";

  if (variant === "compact") {
    return (
      <Link to={`/blog/${article.slug}`} className="group block">
        <Card className="overflow-hidden border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
          <div className="flex gap-4 p-4">
            {article.cover_image_url && (
              <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                <img
                  src={article.cover_image_url}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            )}
            <div className="flex flex-col justify-center min-w-0">
              <Badge variant="secondary" className="w-fit mb-2 text-xs">
                {article.category}
              </Badge>
              <h4 className="font-serif text-base font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2">
                {article.title}
              </h4>
            </div>
          </div>
        </Card>
      </Link>
    );
  }

  return (
    <Link to={`/blog/${article.slug}`} className="group block h-full">
      <Card className="overflow-hidden border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-xl h-full flex flex-col">
        {article.cover_image_url && (
          <div className="aspect-[16/10] overflow-hidden">
            <img
              src={article.cover_image_url}
              alt={article.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}
        <CardContent className="p-6 flex flex-col flex-grow">
          <div className="flex items-center gap-3 mb-3">
            <Badge variant="secondary" className="text-xs">
              {article.category}
            </Badge>
            {formattedDate && (
              <span className="text-xs text-muted-foreground">{formattedDate}</span>
            )}
          </div>
          <h3 className="font-serif text-xl font-medium text-foreground group-hover:text-primary transition-colors mb-3 line-clamp-2">
            {article.title}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-3 mb-4 flex-grow">
            {article.excerpt}
          </p>
          <div className="flex items-center justify-between mt-auto pt-4 border-t border-primary/10">
            <span className="text-xs text-muted-foreground">
              Od {article.author_name}
            </span>
            <span className="text-sm font-medium text-primary group-hover:underline">
              Čítať viac →
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ArticleCard;
