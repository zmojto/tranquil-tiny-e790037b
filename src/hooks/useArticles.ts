import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { Article } from "@/types/article";

export const useArticles = (limit?: number) => {
  return useQuery({
    queryKey: ["articles", limit],
    queryFn: async () => {
      let query = supabase
        .from("articles")
        .select("*")
        .eq("published", true)
        .order("published_at", { ascending: false });

      if (limit) {
        query = query.limit(limit);
      }

      const { data, error } = await query;

      if (error) throw error;
      return data as Article[];
    },
  });
};

export const useArticle = (slug: string) => {
  return useQuery({
    queryKey: ["article", slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("articles")
        .select("*")
        .eq("slug", slug)
        .eq("published", true)
        .maybeSingle();

      if (error) throw error;
      return data as Article | null;
    },
    enabled: !!slug,
  });
};

export const useArticlesByCategory = (category: string) => {
  return useQuery({
    queryKey: ["articles", "category", category],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("articles")
        .select("*")
        .eq("published", true)
        .eq("category", category)
        .order("published_at", { ascending: false });

      if (error) throw error;
      return data as Article[];
    },
    enabled: !!category,
  });
};

export const useRelatedArticles = (currentSlug: string, category: string, limit: number = 3) => {
  return useQuery({
    queryKey: ["articles", "related", currentSlug, category],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("articles")
        .select("*")
        .eq("published", true)
        .eq("category", category)
        .neq("slug", currentSlug)
        .order("published_at", { ascending: false })
        .limit(limit);

      if (error) throw error;
      return data as Article[];
    },
    enabled: !!currentSlug && !!category,
  });
};
