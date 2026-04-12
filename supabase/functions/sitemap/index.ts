import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SITE_URL = "https://tranquil-tiny.lovable.app";

const RETREAT_IDS = [
  "bali-bliss",
  "costa-rica",
  "portugal-soul",
  "cyprus-awakening",
  "sri-lanka-zen",
  "croatia-harmony",
  "thailand-awakening",
];

Deno.serve(async () => {
  const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
  const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
  const supabase = createClient(supabaseUrl, supabaseKey);

  const { data: articles } = await supabase
    .from("articles")
    .select("slug, updated_at")
    .eq("published", true)
    .order("published_at", { ascending: false });

  const today = new Date().toISOString().split("T")[0];

  let urls = `
  <url>
    <loc>${SITE_URL}/</loc>
    <lastmod>${today}</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${SITE_URL}/blog</loc>
    <lastmod>${today}</lastmod>
    <priority>0.8</priority>
  </url>`;

  for (const id of RETREAT_IDS) {
    urls += `
  <url>
    <loc>${SITE_URL}/retreats/${id}</loc>
    <lastmod>${today}</lastmod>
    <priority>0.8</priority>
  </url>`;
  }

  if (articles) {
    for (const article of articles) {
      const lastmod = article.updated_at
        ? new Date(article.updated_at).toISOString().split("T")[0]
        : today;
      urls += `
  <url>
    <loc>${SITE_URL}/blog/${article.slug}</loc>
    <lastmod>${lastmod}</lastmod>
    <priority>0.6</priority>
  </url>`;
    }
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600",
    },
  });
});
