const configuredSiteUrl = import.meta.env.SITE ?? "https://haihq.org";

export const siteUrl = configuredSiteUrl.replace(/\/$/, "");
export const siteName = "HAIHQ";
export const siteTagline = "Open research and infrastructure for Health AI.";
export const defaultDescription =
  "HAIHQ is a nonprofit, open-source research organization building models, datasets, benchmarks, and tooling for Health AI.";

export const githubUrl = "https://github.com/hai-hq";
export const contactEmail = "contact@haihq.org";
export const contactUrl = `mailto:${contactEmail}`;

export const refhirUrl = "https://refhir.haihq.org";
export const refhirDocsUrl = `${refhirUrl}/docs/introduction/`;
export const refhirGettingStartedUrl = `${refhirUrl}/docs/getting-started/`;
export const refhirGithubUrl = `${githubUrl}/refhir`;

type NavItem = { href: string; label: string; external?: boolean };

export const nav: readonly NavItem[] = [
  { href: "/about", label: "About" },
  { href: refhirUrl, label: "ReFHIR", external: true },
  { href: "/get-involved", label: "Get Involved" },
];

export const publicRoutes = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/get-involved", changeFrequency: "monthly", priority: 0.7 },
] as const;
