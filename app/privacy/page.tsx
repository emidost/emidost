import type { Metadata } from 'next';
import LegalShell from '@/components/LegalShell';
import { CONTACT } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How emidost handles information for retailers and financed devices.',
  alternates: { canonical: `${(process.env.NEXT_PUBLIC_SITE_URL || 'https://emidost.in').replace(/\/$/, '')}/privacy` },
};

export default function Privacy() {
  return (
    <LegalShell title="Privacy Policy" updated="3 October 2026">
      <p>
        emidost is used by mobile retailers to manage smartphones they finance on EMI. This page
        explains, in plain terms, what information the system handles and why. It is a summary of our
        practice, not a substitute for the agreement you sign with us.
      </p>

      <h2>Information the retailer records</h2>
      <p>
        When a retailer enrols a financed phone, they record details needed to administer the EMI,
        such as the customer&rsquo;s name and contact number, the device IMEI, and the payment
        schedule. The retailer is responsible for collecting this with the customer&rsquo;s consent.
      </p>

      <h2>Information the device app handles</h2>
      <p>
        The app on a financed phone enforces the agreed EMI lock. It manages the device&rsquo;s lock
        state, the payment status shown on screen, and reminders. It does not read personal messages,
        photos, or browsing activity for marketing, and we do not sell personal data.
      </p>

      <h2>How controls are used</h2>
      <p>
        Lock and unlock actions apply only to devices a retailer has registered under their customer
        agreement. Emergency calling (112) stays available on a locked screen, and a settled loan is
        released.
      </p>

      <h2>Data requests</h2>
      <p>
        Customers should contact the retailer who sold their phone for questions about their own
        device and payments. Retailers can reach us for account-level requests at{' '}
        <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.
      </p>
    </LegalShell>
  );
}
