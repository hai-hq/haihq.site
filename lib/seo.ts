import type { Metadata } from "next";
import {
  contactEmail,
  defaultDescription,
  githubUrl,
  siteName,
  siteTagline,
  siteUrl,
} from "@/lib/site";

export const defaultSocialImage = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: `${siteName} — ${siteTagline}`,
  type: "image/png",
};

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: boolean;
};

export function pageTitle(
  title: string,
  absoluteTitle?: boolean,
): Metadata["title"] {
  if (absoluteTitle) {
    return { absolute: title };
  }
  return title;
}

export function fullTitle(title: string, absoluteTitle?: boolean): string {
  if (absoluteTitle) {
    return title;
  }
  return `${title} / ${siteName}`;
}

export function createPageMetadata({
  title,
  description,
  path,
  absoluteTitle,
}: PageMetadataOptions): Metadata {
  const canonical = `${siteUrl}${path}`;
  const resolvedTitle = fullTitle(title, absoluteTitle);

  return {
    title: pageTitle(title, absoluteTitle),
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: resolvedTitle,
      description,
      url: canonical,
      siteName,
      locale: "en_US",
      type: "website",
      images: [defaultSocialImage],
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description,
      images: [defaultSocialImage.url],
    },
  };
}

export const rootMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s / ${siteName}`,
  },
  description: defaultDescription,
  applicationName: siteName,
  creator: siteName,
  publisher: siteName,
  category: "science",
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName,
    title: `${siteName} / ${siteTagline}`,
    description: defaultDescription,
    images: [defaultSocialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} / ${siteTagline}`,
    description: defaultDescription,
    images: [defaultSocialImage.url],
  },
  icons: {
    icon: [{ url: "/icon.png", type: "image/png", sizes: "48x48" }],
    apple: [{ url: "/icon.png", type: "image/png", sizes: "48x48" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

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
