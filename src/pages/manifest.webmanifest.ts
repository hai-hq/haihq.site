import type { APIRoute } from "astro";
import { defaultDescription, siteName, siteTagline } from "../lib/site";

export const GET: APIRoute = () => {
  const manifest = {
    name: `${siteName} / ${siteTagline}`,
    short_name: siteName,
    description: defaultDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#FAF8F3",
    theme_color: "#FAF8F3",
    lang: "en",
    icons: [
      {
        src: "/icon.png",
        sizes: "48x48",
        type: "image/png",
      },
    ],
  };

  return new Response(JSON.stringify(manifest), {
    headers: {
      "Content-Type": "application/manifest+json; charset=utf-8",
    },
  });
};
