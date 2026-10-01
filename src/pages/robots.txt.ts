import type { APIRoute } from "astro";
import { siteUrl } from "../lib/site";

export const GET: APIRoute = () => {
  const body = `User-agent: *
Allow: /

Host: ${siteUrl}
Sitemap: ${siteUrl}/sitemap.xml
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
