import type { APIRoute } from "astro";
import { publicRoutes, siteUrl } from "../lib/site";

export const GET: APIRoute = () => {
  const lastmod = new Date().toISOString();
  const urls = publicRoutes
    .map((route) => {
      const loc =
        route.path === "/" ? `${siteUrl}/` : `${siteUrl}${route.path}`;
      return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.changeFrequency}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
    })
    .join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
