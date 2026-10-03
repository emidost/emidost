import Navbar from '@/components/landing/Navbar';
import Hero from '@/components/landing/Hero';
import CapabilityStrip from '@/components/landing/CapabilityStrip';
import ProblemSection from '@/components/landing/ProblemSection';
import ProductDemo from '@/components/landing/ProductDemo';
import OfflineSection from '@/components/landing/OfflineSection';
import DeviceLockDemo from '@/components/landing/DeviceLockDemo';
import RetailerDashboard from '@/components/landing/RetailerDashboard';
import SecuritySection from '@/components/landing/SecuritySection';
import HowItWorks from '@/components/landing/HowItWorks';
import UseCases from '@/components/landing/UseCases';
import FAQ from '@/components/landing/FAQ';
import FinalCTA from '@/components/landing/FinalCTA';
import Footer from '@/components/landing/Footer';
import { FAQS } from '@/lib/content';

const SITE = 'https://emidost.vercel.app';

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE}/#org`,
      name: 'emidost',
      url: SITE,
      logo: `${SITE}/mark.svg`,
      description:
        'EMI phone lock software for mobile retailers in India. Secure financed smartphones, track EMIs and payments, and lock or unlock devices online or offline.',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91-70036-17074',
        contactType: 'sales',
        areaServed: 'IN',
        availableLanguage: ['en', 'hi', 'bn'],
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE}/#website`,
      url: SITE,
      name: 'emidost',
      publisher: { '@id': `${SITE}/#org` },
      inLanguage: 'en-IN',
    },
    {
      '@type': 'SoftwareApplication',
      name: 'emidost',
      operatingSystem: 'Android 11+',
      applicationCategory: 'BusinessApplication',
      description:
        'EMI phone lock and device management software for mobile retailers. Register financed phones, track EMI payments, and apply an offline-capable device lock until instalments are paid.',
      featureList: [
        'Device Owner lock', 'Offline EMI lock', 'SMS lock and unlock', 'Reboot persistence',
        'SIM-removal protection', 'EMI payment tracking', 'Automatic unlock on payment',
      ],
      publisher: { '@id': `${SITE}/#org` },
    },
    {
      '@type': 'FAQPage',
      '@id': `${SITE}/#faq`,
      mainEntity: FAQS.map(({ q, a }) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <CapabilityStrip />
        <ProblemSection />
        <ProductDemo />
        <OfflineSection />
        <DeviceLockDemo />
        <RetailerDashboard />
        <SecuritySection />
        <HowItWorks />
        <UseCases />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
