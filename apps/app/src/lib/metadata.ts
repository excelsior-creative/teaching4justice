import type { Metadata } from "next";

export const SITE_URL = process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000";
export const SITE_NAME = "Teaching for Justice";
export const SITE_TAGLINE = "Communities of Care";
export const DEFAULT_DESCRIPTION =
  "A grassroots, educator-led conference organization focused on AAPI-centered K-12 education. Join us for Communities of Care 2026.";

export const DEFAULT_OG_IMAGE = "/og-image.svg";

/**
 * Default metadata for the entire site
 */
export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | ${SITE_TAGLINE}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  keywords: [
    "AAPI education",
    "K-12 teaching",
    "social justice education",
    "educator conference",
    "Communities of Care",
    "Teaching for Justice",
    "anti-racist teaching",
    "culturally responsive teaching",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | ${SITE_TAGLINE}`,
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} - Project Template`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | ${SITE_TAGLINE}`,
    description: DEFAULT_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

/**
 * Generate page-specific metadata
 */
export function generatePageMetadata({
  title,
  description,
  path,
  ogImage,
  keywords,
  noIndex = false,
}: {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  keywords?: string[];
  noIndex?: boolean;
}): Metadata {
  const url = `${SITE_URL}${path}`;
  const image = ogImage || DEFAULT_OG_IMAGE;

  return {
    title,
    description,
    keywords: keywords || (defaultMetadata.keywords as string[]),
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    alternates: {
      canonical: url,
    },
    robots: noIndex
      ? { index: false, follow: true }
      : { index: true, follow: true },
  };
}

/**
 * Generate article-specific metadata
 */
export function generateArticleMetadata({
  title,
  description,
  slug,
  ogImage,
  publishedTime,
  modifiedTime,
  author,
  keywords,
  noIndex = false,
}: {
  title: string;
  description: string;
  slug: string;
  ogImage?: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  keywords?: string;
  noIndex?: boolean;
}): Metadata {
  const url = `${SITE_URL}/blog/${slug}`;
  const image = ogImage || DEFAULT_OG_IMAGE;

  return {
    title,
    description,
    keywords: keywords || undefined,
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type: "article",
      publishedTime,
      modifiedTime,
      authors: author ? [author] : [SITE_NAME],
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    alternates: {
      canonical: url,
    },
    robots: noIndex
      ? { index: false, follow: true }
      : { index: true, follow: true },
  };
}

