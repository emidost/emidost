# emidost2 — public download + landing page

SEO-friendly landing page for emidost. Retailers find it, learn how the system
works, and download the APK for their role.

## Hosting

Deploy from this repo on Vercel (free tier works; if it asks for a card, use
Netlify with the same build settings):

- Framework: Next.js
- Build command: `npm run build`
- Output: `.next`

## Uploading the APKs

The download buttons point at GitHub release assets. After each build:

1. Get the three APKs from EAS (owner, retailer, customer).
2. Upload as a release:

```
gh release create v1 emidost-owner.apk emidost-retailer.apk emidost-customer.apk
```

3. The buttons on the page then serve
   `https://github.com/emidost/emidost2/releases/latest/download/<file>`.

## Updating the contact details

Edit `app/page.tsx` contact section: email, WhatsApp (`wa.me/<number>`), and
phone (`tel:+91...`). The footer has a reminder.

## SEO

- Metadata + Open Graph in `app/layout.tsx`
- `app/sitemap.ts` and `app/robots.ts`
- JSON-LD SoftwareApplication schema in `app/page.tsx`
- Update `emidost-download.vercel.app` in `layout.tsx`, `robots.ts`, and
  `sitemap.ts` to the final domain before publishing.
