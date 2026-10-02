import type { Metadata } from 'next';
import './globals.css';

const siteUrl = 'https://emidost-landing.pages.dev';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'emidost: phone financing for retailers in India with EMI lock',
  description:
    'emidost is financed phone security for phone retailers in India. Sell phones on EMI and keep each device under an EMI lock until the instalments are paid, with offline SMS lock, payment reminders, and one tap unlock. Download the apps or message us on WhatsApp.',
  keywords: [
    'phone financing for retailers India',
    'EMI lock',
    'financed phone security',
    'sell phones on EMI',
    'emi phone lock',
    'device owner lock android',
    'phone retailers india',
    'emi mobile management',
    'emidost',
  ],
  alternates: { canonical: siteUrl },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'emidost',
    locale: 'en_IN',
    title: 'Phone financing for retailers in India, secured by an EMI lock',
    description:
      'Sell phones on EMI and keep them locked until the instalments are paid. Offline SMS lock, payment reminders, and retailer control. Financed phone security built for shops in India.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Phone financing for retailers in India, secured by an EMI lock',
    description:
      'Sell phones on EMI and keep them locked until the instalments are paid. Offline SMS lock, reminders, and retailer control.',
  },
  robots: { index: true, follow: true },
  category: 'business',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
