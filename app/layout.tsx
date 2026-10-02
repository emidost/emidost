import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'emidost — financed phone protection for phone retailers',
  description:
    'emidost helps phone retailers sell phones on EMI and keep them locked until every instalment is paid. Download the apps, see how it works, and contact us.',
  keywords: [
    'emi phone lock', 'financed phone protection', 'phone retailers india',
    'emi mobile management', 'device owner lock android', 'emidost',
  ],
  openGraph: {
    title: 'emidost — financed phone protection for phone retailers',
    description:
      'Sell phones on EMI. Lock them until the EMI is paid. Reminders, offline lock, retailer control.',
    url: 'https://emidost-download.vercel.app',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
