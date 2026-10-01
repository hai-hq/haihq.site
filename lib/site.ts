const configuredSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://haihq.org";

export const siteUrl = configuredSiteUrl;
export const siteHost = new URL(siteUrl).host;
export const siteName = "HAIHQ";
export const siteTagline = "Open research and infrastructure for Health AI.";
export const defaultDescription =
  "HAIHQ is a nonprofit, open-source research organization building models, datasets, benchmarks, and tooling for Health AI.";

export const githubUrl = "https://github.com/hai-hq";
export const contactEmail = "contact@haihq.org";
export const contactUrl = `mailto:${contactEmail}`;

export const nav = [
  { href: "/about", label: "About" },
  { href: "/refhir", label: "ReFHIR" },
  { href: "/get-involved", label: "Get Involved" },
] as const;

export const publicRoutes = [
  { path: "/", changeFrequency: "weekly" as const, priority: 1 },
  { path: "/about", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/refhir", changeFrequency: "monthly" as const, priority: 0.9 },
  { path: "/get-involved", changeFrequency: "monthly" as const, priority: 0.7 },
];
