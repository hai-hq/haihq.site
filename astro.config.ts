import { defineConfig } from "astro/config";

const site =
  process.env.PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://haihq.org";

export default defineConfig({
  site,
  output: "static",
  trailingSlash: "never",
  redirects: {
    "/haifhir": "/refhir",
    "/fhirstate": "/refhir",
  },
});
