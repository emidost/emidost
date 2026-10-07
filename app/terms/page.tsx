import type { Metadata } from 'next';
import LegalShell from '@/components/LegalShell';
import { CONTACT } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Terms for retailers using emidost EMI phone lock software.',
  alternates: { canonical: `${(process.env.NEXT_PUBLIC_SITE_URL || 'https://emidost.in').replace(/\/$/, '')}/terms` },
};

export default function Terms() {
  return (
    <LegalShell title="Terms of Use" updated="3 October 2026">
      <p>
        These terms summarise how emidost may be used. Full terms form part of the account agreement
        a retailer signs with us.
      </p>

      <h2>Authorized use only</h2>
      <p>
        emidost is for managing devices that a retailer has sold on EMI, under a financing agreement
        with the customer. The lock and unlock features may only be used on devices you have
        financed and enrolled, and only in line with that agreement and applicable law. The software
        must not be used to control any device you are not authorized to manage.
      </p>

      <h2>Responsible operation</h2>
      <p>
        Retailers are responsible for dealing fairly with customers, for the accuracy of the EMI
        schedule they record, and for releasing a device once its loan is settled. Emergency calling
        remains available on a locked device.
      </p>

      <h2>What we provide</h2>
      <p>
        We provide the software and reasonable support to keep it working on supported Android
        devices (Android 11 and above). We describe capabilities honestly and do not promise that any
        security measure is impossible to defeat.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms: <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> or
        WhatsApp {CONTACT.whatsappPretty}.
      </p>
    </LegalShell>
  );
}
