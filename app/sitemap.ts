import { MetadataRoute } from 'next';

// Our own domain is the fallback, never the vendor's: a build without
// NEXT_PUBLIC_SITE_URL must not tell Google the real site is emidost.vercel.app.
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://emidost.in').replace(/\/$/, '');

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: siteUrl, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${siteUrl}/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${siteUrl}/terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ];
}
