import {
  contactEmail,
  defaultDescription,
  githubUrl,
  siteName,
  siteUrl,
} from "./site";

export function fullTitle(title: string, absoluteTitle = false): string {
  if (absoluteTitle) return title;
  return `${title} / ${siteName}`;
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteName,
  url: siteUrl,
  logo: `${siteUrl}/brand/logo.png`,
  email: contactEmail,
  description: defaultDescription,
  sameAs: [githubUrl],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteName,
  url: siteUrl,
  description: defaultDescription,
  publisher: {
    "@type": "Organization",
    name: siteName,
    url: siteUrl,
  },
};
