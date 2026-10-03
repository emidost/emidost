import { CONTACT, waLink } from '@/lib/content';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <a className="wordmark" href="#top" aria-label="emidost home">
            <img className="mark" src="/mark.svg" alt="" width={32} height={32} />
            emidost
          </a>
          <p>
            EMI phone lock software for mobile retailers in India. Secure financed smartphones,
            track payments, and lock or unlock devices &mdash; online or off.
          </p>
        </div>

        <nav className="footer-col" aria-label="Product">
          <h4>Product</h4>
          <a href="#features">Features</a>
          <a href="#how">How it works</a>
          <a href="#security">Security</a>
          <a href="#faq">FAQ</a>
        </nav>

        <nav className="footer-col" aria-label="Company">
          <h4>Company</h4>
          <a href={waLink(CONTACT.whatsappCtaText)}>WhatsApp</a>
          <a href={`mailto:${CONTACT.email}`}>Email</a>
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
        </nav>

        <div className="footer-col">
          <h4>Contact</h4>
          <a href={`tel:${CONTACT.tel}`}>{CONTACT.whatsappPretty}</a>
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
        </div>
      </div>
      <div className="container footer-base">
        <span>&copy; {new Date().getFullYear()} emidost &middot; Financed phone protection for retailers.</span>
        <span>Authorized management of devices financed under your customer agreement.</span>
      </div>
    </footer>
  );
}
