'use client';

import Script from 'next/script';
import { useEffect } from 'react';
import {
  Store, Users, ShieldCheck, Smartphone, WifiOff, MessageSquare, BellRing,
  Lock, Unlock, CheckCircle2, Phone, Siren, Download, LayoutDashboard,
  Building2, KeyRound, CreditCard, ClipboardList, MessageCircle, RotateCcw,
} from 'lucide-react';

const BRANDS = [
  'Samsung', 'Xiaomi', 'Redmi', 'POCO', 'vivo', 'iQOO', 'OPPO', 'OnePlus',
  'realme', 'HONOR', 'Google Pixel', 'Motorola', 'Nothing', 'CMF', 'Lava',
  'HMD', 'TECNO', 'Infinix', 'itel',
];

const FEATURES: [string, string, typeof Lock][] = [
  ['Missed payment', 'The phone locks to the payment screen the day an instalment is overdue.', Lock],
  ['SIM removed', 'Pull the SIM and the phone locks within 30 seconds. Swapping it does the same.', Smartphone],
  ['Restart or airplane mode', 'The lock returns after every reboot and works with the internet off.', RotateCcw],
  ['Offline SMS control', 'Lock and unlock commands reach the phone by SMS when there is no network.', WifiOff],
  ['Voice reminders', 'The phone speaks the payment reminder before and after the due date.', BellRing],
  ['Unlock on payment', 'Record the instalment and the phone unlocks on its own.', Unlock],
];

const STEPS: [string, string, string][] = [
  ['1', 'Install on the new phone', 'Scan the QR on a fresh phone. The app installs and becomes the device manager.'],
  ['2', 'Link the sale', 'Add the customer, IMEI, EMI months, amount, and due day in the retailer app.'],
  ['3', 'Hand over the phone', 'The app hides itself. The customer gets a normal phone.'],
  ['4', 'Manage from your app', 'Lock, unlock, record payments, and watch every device from one list.'],
];

const FAQS: [string, string][] = [
  ['Can the customer bypass the lock with a factory reset?', 'From settings, no. Device Owner mode blocks it and the lock returns after a reboot. One limit, stated plainly: a recovery-mode wipe with a computer can reset the phone, and factory reset protection then asks for the account. No phone system can block that, and we do not claim otherwise.'],
  ['Does it work without internet?', 'Yes. The lock runs on the phone itself. Commands also arrive by SMS, and payment reminders keep working offline.'],
  ['What happens the moment they pay?', 'You record the payment in your app. The phone unlocks on its own within seconds.'],
  ['Which brands are supported?', 'Every major brand sold in India, listed above. The enrolment wizard knows each brand\u2019s settings. We certify each family on a real device before we call it working.'],
  ['What does the customer see?', 'A normal phone while payments are on time. If an instalment is late, one clear screen with the amount due, your shop number, and an emergency 112 button.'],
  ['How do I get set up?', 'Message us on WhatsApp. We create your account, hand you the retailer app, and walk your first enrolment together.'],
];

export default function Page() {
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const reveals = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    if (prefersReduced || typeof IntersectionObserver === 'undefined') {
      reveals.forEach((el) => el.classList.add('visible'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const delay = Number(el.dataset.delay ?? '0');
          window.setTimeout(() => el.classList.add('visible'), delay);
          io.unobserve(el);
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -6% 0px' },
    );
    reveals.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'emidost',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Android',
    description:
      'Financed phone protection for phone retailers. Lock phones until the EMI is paid, with offline lock, reminders, and retailer control.',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
  };

  return (
    <>
      <Script id="app-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main>
        <nav className="nav" aria-label="Main">
          <div className="container nav-inner">
            <a className="wordmark" href="#">
              <span className="mark" aria-hidden="true"><Lock size={17} strokeWidth={2.4} /></span>
              emidost
            </a>
            <div className="nav-links">
              <a href="#how">How it works</a>
              <a href="#features">The lock</a>
              <a href="#faq">FAQ</a>
              <a className="btn primary" href="#download"><Download size={16} /> Download</a>
            </div>
          </div>
        </nav>

        <header className="hero">
          <div className="container hero-inner">
            <div>
              <span className="kicker">Phone financing for retailers in India</span>
              <h1>
                Sell phones on EMI.<br />
                <span className="accent">Lock them until the loan is paid.</span>
              </h1>
              <p className="lede">
                emidost holds every financed phone to the agreement. Miss an instalment and the phone
                locks to the payment screen. Record the payment and it unlocks on its own. The lock
                runs on the phone, so it holds with the SIM out, the internet off, and after a reboot.
              </p>
              <div className="cta-row">
                <a className="btn primary" href="#download"><Download size={17} /> Download the apps</a>
                <a className="btn whatsapp" href="https://wa.me/917003617074"><MessageCircle size={17} /> WhatsApp us</a>
              </div>
              <div className="hero-meta">
                <span className="fact"><ShieldCheck size={17} /> Device Owner kiosk</span>
                <span className="fact"><WifiOff size={17} /> Works offline</span>
                <span className="fact"><KeyRound size={17} /> No computer needed</span>
              </div>
            </div>
            <div className="phonewrap" aria-label="The locked phone screen">
              <div className="phone">
                <span className="notch" aria-hidden="true" />
                <div className="screen">
                  <div className="lock-stage">
                    <span className="lockicon" aria-hidden="true">
                      <Lock size={26} strokeWidth={2.2} />
                    </span>
                  </div>
                  <span className="l1">Phone locked</span>
                  <div className="emi-row">
                    <div className="bar"><span /></div>
                    <div className="labels"><span>8 of 12 instalments paid</span><span>67%</span></div>
                  </div>
                  <span className="l2">Rs 2,400 due on 5 June</span>
                  <span className="l3">Pay at your shop to unlock</span>
                  <div className="row-btns">
                    <span className="call"><Phone size={14} /> Call your shop</span>
                    <span className="sos"><Siren size={14} /> Emergency 112</span>
                  </div>
                </div>
                <span className="chip-float one"><Lock size={14} /> SIM removed, locked</span>
                <span className="chip-float two"><CheckCircle2 size={14} /> Paid, unlocked</span>
              </div>
            </div>
          </div>
        </header>

        <section className="ink" id="facts" aria-label="How the lock holds">
          <div className="container">
            <h2 data-reveal>Enforcement that stays on the phone</h2>
            <p className="sub" data-reveal data-delay="80">Three things make the lock hold where a sticker, an app, or a phone call cannot.</p>
            <div className="facts">
              <div className="fact-card" data-reveal>
                <ShieldCheck size={22} />
                <h3>Device Owner kiosk</h3>
                <p>The phone installs emidost as its device manager. No home screen, no settings, no factory reset from the menu. The lock is the operating system's own mode, not an overlay.</p>
              </div>
              <div className="fact-card" data-reveal data-delay="90">
                <WifiOff size={22} />
                <h3>Offline by design</h3>
                <p>No internet for five days and the phone locks itself. Commands reach it by SMS. The customer cannot dodge the agreement by turning things off.</p>
              </div>
              <div className="fact-card" data-reveal data-delay="180">
                <KeyRound size={22} />
                <h3>Fair exit, always</h3>
                <p>112 stays dialable on the locked screen. Pay the instalment and the phone unlocks on its own. Settled loans never lock again, ever.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="paper" id="roles">
          <div className="container">
            <h2 data-reveal>Three roles, one system</h2>
            <p className="sub" data-reveal data-delay="80">The owner runs the business, the retailer runs the counter, the phone runs the lock.</p>
            <div className="cards">
              <div className="card" data-reveal>
                <span className="icon owner"><Building2 size={22} /></span>
                <h3>Owner</h3>
                <p>The web portal and the owner app. Retailers, credits, lock allowances, device board, and the full audit trail.</p>
                <ul className="card-points">
                  <li><CheckCircle2 size={15} /> Suspend a retailer in one tap</li>
                  <li><CheckCircle2 size={15} /> Every action lands in the audit feed</li>
                </ul>
              </div>
              <div className="card" data-reveal data-delay="100">
                <span className="icon retailer"><Store size={22} /></span>
                <h3>Retailer</h3>
                <p>The counter app. Register the customer, record cash, enrol the phone, lock and unlock.</p>
                <ul className="card-points">
                  <li><CheckCircle2 size={15} /> Lock and unlock within your allowance</li>
                  <li><CheckCircle2 size={15} /> Offline unlock code from your phone</li>
                </ul>
              </div>
              <div className="card" data-reveal data-delay="200">
                <span className="icon customer"><Users size={22} /></span>
                <h3>Customer</h3>
                <p>A normal phone while payments are on time. One clear screen when they are not.</p>
                <ul className="card-points">
                  <li><CheckCircle2 size={15} /> No login, no app to learn</li>
                  <li><CheckCircle2 size={15} /> Due date and amount always visible</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="ink" id="features">
          <div className="container">
            <h2 data-reveal>What the EMI lock actually does</h2>
            <p className="sub" data-reveal data-delay="80">Each of these runs on the phone itself, with or without internet.</p>
            <div className="steps">
              {FEATURES.map(([t, d, Icon], i) => (
                <div className="step" key={t} data-reveal data-delay={String(i * 70)}>
                  <span className="step-icon"><Icon size={19} /></span>
                  <div>
                    <h3>{t}</h3>
                    <p>{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="paper" id="how">
          <div className="container">
            <h2 data-reveal>Set up at the counter, no computer</h2>
            <p className="sub" data-reveal data-delay="80">One enrolment per phone. After that the phone protects the agreement on its own.</p>
            <div className="steps">
              {STEPS.map(([n, t, d], i) => (
                <div className="step" key={n} data-reveal data-delay={String(i * 70)}>
                  <span className="num">{n}</span>
                  <div>
                    <h3>{t}</h3>
                    <p>{d}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="portal-mock" data-reveal aria-label="The owner portal">
              <div className="bar">
                <span className="dot" /><span className="dot" /><span className="dot" />
                <span className="url">portal.emidost.in/dashboard</span>
              </div>
              <div className="body">
                <div className="side">
                  <span className="active"><LayoutDashboard size={14} /> Dashboard</span>
                  <span><Store size={14} /> Retailers</span>
                  <span><Smartphone size={14} /> Devices</span>
                  <span><ClipboardList size={14} /> Audit</span>
                </div>
                <div className="main">
                  <div className="stat"><b>12</b><span>Retailers</span></div>
                  <div className="stat"><b>148</b><span>Financed phones</span></div>
                  <div className="stat"><b>9</b><span>Locked now</span></div>
                  <div className="table">
                    <div className="tr head"><span>Device</span><span>State</span><span>Due</span></div>
                    <div className="tr"><span>Galaxy A15</span><span><span className="chip">Locked</span></span><span>Rs 2,400</span></div>
                    <div className="tr"><span>Redmi 13C</span><span>Paying</span><span>Rs 1,900</span></div>
                    <div className="tr"><span>vivo Y28</span><span>Paid</span><span>Complete</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="paper" id="brands">
          <div className="container">
            <h2 data-reveal>Works on the phones you sell</h2>
            <p className="sub" data-reveal data-delay="80">The enrolment wizard knows each brand's settings, so counter staff never guess.</p>
            <div className="brands">
              {BRANDS.map((b, i) => (
                <span className="brand" key={b} data-reveal data-delay={String(i * 30)}>{b}</span>
              ))}
            </div>
            <p className="muted-line" data-reveal>
              Android 11 and above. The wizard ships per-brand steps today. We certify each family on a
              real device before we call it working, and we publish which families have passed.
            </p>
          </div>
        </section>

        <section className="ink" id="pricing">
          <div className="container">
            <h2 data-reveal>Pricing per financed phone</h2>
            <p className="sub" data-reveal data-delay="80">
              You pay per device under management, with bulk credits for shops that sell more. Tell us
              your monthly volume on WhatsApp and we send a quote the same day.
            </p>
            <div className="cta-row" data-reveal data-delay="140">
              <a className="btn whatsapp" href="https://wa.me/917003617074"><MessageCircle size={17} /> Get a quote on WhatsApp</a>
            </div>
          </div>
        </section>

        <section className="paper" id="faq">
          <div className="container">
            <h2 data-reveal>Questions retailers ask</h2>
            <div className="faq">
              {FAQS.map(([q, a], i) => (
                <details key={q} data-reveal data-delay={String(i * 60)}>
                  <summary>{q}</summary>
                  <div className="faq-answer"><p>{a}</p></div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="ink" id="download">
          <div className="container">
            <h2 data-reveal>Download</h2>
            <p className="sub" data-reveal data-delay="80">
              Three apps. The owner app and the retailer app are yours. The customer app goes on financed phones.
            </p>
            <div className="download-grid">
              <div className="dl owner" data-reveal>
                <span className="tag">For the business owner</span>
                <h3>Owner app</h3>
                <p>Retailers, credits, allowances, suspensions, and the audit trail in your pocket.</p>
                <a className="btn primary" href="https://github.com/emidost/emidost/releases/latest/download/emidost-owner.apk"><Download size={16} /> Download APK</a>
              </div>
              <div className="dl retailer" data-reveal data-delay="100">
                <span className="tag">For your shop</span>
                <h3>Retailer app</h3>
                <p>Customer registration, payments, step by step enrolment, lock and unlock.</p>
                <a className="btn primary" href="https://github.com/emidost/emidost/releases/latest/download/emidost-retailer.apk"><Download size={16} /> Download APK</a>
              </div>
              <div className="dl customer" data-reveal data-delay="200">
                <span className="tag">For financed phones</span>
                <h3>Customer app</h3>
                <p>Installed during enrolment. Named wifi and hidden after setup.</p>
                <a className="btn primary" href="https://github.com/emidost/emidost/releases/latest/download/emidost-customer.apk"><Download size={16} /> Download APK</a>
              </div>
            </div>
            <p className="sub" style={{ marginTop: 18, fontSize: '0.9rem' }}>
              Links go live with the first release. Until then, message us and we send the APKs directly.
            </p>
          </div>
        </section>

        <section className="ink" id="contact">
          <div className="container">
            <h2 data-reveal>Start phone financing with an EMI lock</h2>
            <p className="sub" data-reveal data-delay="80">
              Message us on WhatsApp and we set up your account, your retailer logins, and your first
              enrolment the same day.
            </p>
            <div className="links">
              <a
                className="btn whatsapp"
                href="https://wa.me/917003617074?text=Hi%20emidost%2C%20I%20run%20a%20phone%20shop%20and%20want%20to%20start%20phone%20financing%20with%20an%20EMI%20lock.%20Please%20set%20up%20my%20account."
                data-reveal
              >
                <MessageCircle size={17} /> WhatsApp +91 70036 17074
              </a>
              <a className="btn ghost" href="mailto:financebuddy144@gmail.com" data-reveal data-delay="80">financebuddy144@gmail.com</a>
              <a className="btn ghost" href="tel:+917003617074" data-reveal data-delay="160"><Phone size={16} /> Call +91 70036 17074</a>
            </div>
          </div>
        </section>

        <footer>
          <div className="container">
            <span>emidost · financed phone protection for retailers</span>
            <span>WhatsApp +91 70036 17074 · financebuddy144@gmail.com</span>
          </div>
        </footer>
      </main>
    </>
  );
}
