# emidost — marketing + download landing page

Premium, animated, SEO-focused landing page for **emidost**, EMI phone lock
software for mobile retailers in India. Retailers find it, learn how the lock
works, and download the apps for their shop.

The public site is intentionally scoped to the retailer → emidost → financed
customer device story. Internal operator tooling is **not** part of this
website and is managed separately.

## Stack

- Next.js 14 (App Router) with `output: 'export'` — static site, no server.
- React 18 + TypeScript (strict).
- framer-motion for the scroll + lifecycle animation (reduced-motion aware).
- lucide-react icons, Sora + Inter via `next/font`.

## Structure

```
app/
  layout.tsx        metadata, fonts, reduced-motion provider
  page.tsx          homepage composition + JSON-LD (Org / WebSite / SoftwareApplication / FAQPage)
  providers.tsx     <MotionConfig reducedMotion="user">
  privacy/, terms/  legal pages
  not-found.tsx     404
  sitemap.ts, robots.ts, globals.css
components/
  motion.tsx        Reveal / Stagger / StaggerItem primitives
  LegalShell.tsx
  landing/          Navbar, Hero, PhoneMock, CapabilityStrip, ProblemSection,
                    ProductDemo, OfflineSection, DeviceLockDemo, RetailerDashboard,
                    SecuritySection, HowItWorks, UseCases, FAQ, FinalCTA, Footer
lib/
  content.ts        all copy + contact/download links (single source of truth)
```

## Develop

```
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to ./out
```

## Deploying

Static export works on Vercel (current: `emidost.vercel.app`) or Cloudflare
Pages. Security + cache headers are set at the edge (`vercel.json` /
`public/_headers`) because `output: export` ignores `next.config` headers.

## Public downloads

The download buttons point at GitHub release assets for the **retailer** and
**customer** apps only:

```
gh release create v1 emidost-retailer.apk emidost-customer.apk
```

They then serve `https://github.com/emidost/emidost/releases/latest/download/<file>`.

## Editing content

Copy, contact details (WhatsApp / email / phone) and download URLs all live in
`lib/content.ts`. The homepage metadata/SEO lives in `app/layout.tsx`; update
the canonical domain there, in `app/sitemap.ts`, and `app/robots.ts` if it moves.
