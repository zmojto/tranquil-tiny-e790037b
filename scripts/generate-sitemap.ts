// Generates public/sitemap.xml at predev/prebuild.
import { writeFileSync } from "fs";
import { resolve } from "path";

const BASE_URL = "https://samavesa.sk";
const SUPABASE_URL = "https://cmufbtkjjbqqrnkbgddi.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNtdWZidGtqamJxcXJua2JnZGRpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc3OTAyOTQsImV4cCI6MjA4MzM2NjI5NH0.XdRbdDBXXGnuHgM6wes5NfTB8hNxdF2k5_rN8J5Act4";

const RETREAT_IDS = [
  "bali-bliss",
  "costa-rica",
  "portugal-soul",
  "cyprus-awakening",
  "krpacovo-soul",
  "croatia-harmony",
  "thailand-awakening",
  "necpaly-retreat",
  "blatinka-retreat",
];

interface Entry {
  path: string;
  lastmod?: string;
  changefreq?: "weekly" | "monthly" | "yearly";
  priority?: string;
}

async function fetchArticles(): Promise<Entry[]> {
  try {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/articles?select=slug,updated_at&published=eq.true`,
      {
        headers: {
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        },
      },
    );
    if (!res.ok) {
      console.warn(`sitemap: articles fetch failed (${res.status})`);
      return [];
    }
    const rows = (await res.json()) as { slug: string; updated_at: string | null }[];
    return rows.map((r) => ({
      path: `/blog/${r.slug}`,
      lastmod: r.updated_at ? r.updated_at.split("T")[0] : undefined,
      changefreq: "monthly",
      priority: "0.6",
    }));
  } catch (e) {
    console.warn("sitemap: articles fetch error", e);
    return [];
  }
}

function render(entries: Entry[]) {
  const urls = entries.map((e) =>
    [
      "  <url>",
      `    <loc>${BASE_URL}${e.path}</loc>`,
      e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
      e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
      e.priority ? `    <priority>${e.priority}</priority>` : null,
      "  </url>",
    ]
      .filter(Boolean)
      .join("\n"),
  );
  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
    ...urls,
    `</urlset>`,
    "",
  ].join("\n");
}

async function main() {
  const today = new Date().toISOString().split("T")[0];
  const entries: Entry[] = [
    { path: "/", lastmod: today, changefreq: "weekly", priority: "1.0" },
    { path: "/blog", lastmod: today, changefreq: "weekly", priority: "0.8" },
    ...RETREAT_IDS.map<Entry>((id) => ({
      path: `/retreats/${id}`,
      lastmod: today,
      changefreq: "monthly",
      priority: "0.8",
    })),
    ...(await fetchArticles()),
  ];
  writeFileSync(resolve("public/sitemap.xml"), render(entries));
  console.log(`sitemap.xml written (${entries.length} entries)`);
}

main();
