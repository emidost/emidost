import { MetadataRoute } from 'next';

// Our own domain is the fallback, never the vendor's: a build without
// NEXT_PUBLIC_SITE_URL must not tell Google the real site is emidost.vercel.app.
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://emidost.in').replace(/\/$/, '');

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
