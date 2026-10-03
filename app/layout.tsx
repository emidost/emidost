import type { Metadata, Viewport } from 'next';
import { Inter, Sora } from 'next/font/google';
import './globals.css';
import Providers from './providers';

const sora = Sora({ subsets: ['latin'], variable: '--font-display', display: 'swap' });
const inter = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });

const siteUrl = 'https://emidost.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'EMI Phone Lock Software for Mobile Retailers | emidost',
    template: '%s | emidost',
  },
  description:
    'emidost is EMI phone lock software for mobile retailers in India. Track EMIs, secure financed smartphones, and lock or unlock devices with an offline-first, SMS-capable device lock. Download the apps or message us on WhatsApp.',
  applicationName: 'emidost',
  keywords: [
    'EMI phone lock software', 'EMI mobile locker', 'EMI device lock', 'mobile EMI lock',
    'phone financing software', 'EMI management software for retailers', 'financed device security',
    'remote phone lock', 'offline EMI lock', 'SMS-based device lock', 'EMI payment tracking',
    'device lock and unlock', 'financed phone protection', 'Android EMI locker',
    'phone lock software for retailers', 'EMI software for mobile shops',
    'smartphone financing software India', 'emidost',
  ],
  authors: [{ name: 'emidost' }],
  alternates: { canonical: siteUrl },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'emidost',
    locale: 'en_IN',
    title: 'EMI Phone Lock Software for Mobile Retailers | emidost',
    description:
      'Sell more phones on EMI and keep every financed device secured until it is paid. Offline-first device lock, SMS control, EMI tracking, and one-tap unlock. Built for mobile retailers in India.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EMI Phone Lock Software for Mobile Retailers | emidost',
    description:
      'Secure financed smartphones with an offline-first EMI device lock. Track payments, lock overdue phones, and unlock on payment. For mobile retailers in India.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  category: 'business',
};

export const viewport: Viewport = {
  themeColor: '#0f141c',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <head>
        <noscript>
          {/* Reveal any element framer-motion left hidden, when scripting is off. */}
          <style>{`[style*="opacity:0"],[style*="opacity: 0"]{opacity:1!important;transform:none!important;}`}</style>
        </noscript>
      </head>
      <body>
        <a className="skip-link" href="#top">Skip to content</a>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
