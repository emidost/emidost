'use client';

import Script from 'next/script';
import { useEffect, useRef } from 'react';

const BRANDS = [
  'Samsung', 'Xiaomi', 'Redmi', 'POCO', 'vivo', 'iQOO', 'OPPO', 'OnePlus',
  'realme', 'HONOR', 'Google Pixel', 'Motorola', 'Nothing', 'CMF', 'Lava',
  'HMD', 'TECNO', 'Infinix', 'itel',
];

const FEATURES: [string, string][] = [
  ['Missed payment', 'The phone locks to a payment screen the day an instalment is overdue.'],
  ['SIM removed', 'Pull the SIM to dodge the system and the phone locks within 30 seconds.'],
  ['Restart or airplane mode', 'The lock survives reboots and offline tricks. Restarting never clears it.'],
  ['Offline SMS control', 'Lock and unlock commands reach the phone by SMS when there is no internet.'],
  ['Voice reminders', 'The phone speaks the payment reminder to the customer before and after the due date.'],
  ['Unlock on payment', 'The moment the EMI is recorded as paid, the phone unlocks on its own.'],
];

const STEPS: [string, string, string][] = [
  ['1', 'Install on the new phone', 'Scan a QR on a fresh phone. The app installs itself and becomes the device manager.'],
  ['2', 'Link the sale', 'Add the customer, IMEI, EMI months, amount, and due day in the retailer app.'],
  ['3', 'Hand over the phone', 'The app hides itself. The customer sees a normal phone.'],
  ['4', 'Manage from your app', 'Lock, unlock, record payments, and watch every device from one list.'],
];

const FAQS: [string, string][] = [
  ['Can the customer bypass the lock with a factory reset?', 'No. Device Owner mode blocks a factory reset from settings, and the lock returns after any reboot. We are honest about the one limit: a recovery-mode wipe with a computer can reset the phone, and factory reset protection then requires the account. No phone system can block that, and we do not claim otherwise.'],
  ['Does it work without internet?', 'Yes. Lock and unlock commands also arrive by SMS, and the lock itself runs entirely on the phone.'],
  ['What happens the moment they pay?', 'You record the payment in your app. The phone unlocks on its own within seconds.'],
  ['Which brands are supported?', 'Every major brand sold in India, listed above. Each brand is tested on a real device before we ship it.'],
  ['What does the customer see?', 'A normal phone while payments are on time. If an instalment is late, a clear screen with the amount due, your shop number, and an emergency 112 button.'],
  ['How do I get set up?', 'Message us on WhatsApp. We create your account, hand you the retailer app, and walk your first enrolment together.'],
];

export default function Page() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const reveals = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));

    // Reduced motion (or no IntersectionObserver): show everything, no animation.
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
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );
    reveals.forEach((el) => io.observe(el));

    // Mouse parallax: translate hero blobs/chips a few pixels. Transform-category
    // properties only, batched into a single rAF so there is no layout thrash.
    const hero = heroRef.current;
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    let raf = 0;
    let nx = 0;
    let ny = 0;

    const apply = () => {
      raf = 0;
      if (!hero) return;
      hero.style.setProperty('--mx', `${(nx * 14).toFixed(2)}px`);
      hero.style.setProperty('--my', `${(ny * 14).toFixed(2)}px`);
    };
    const schedule = () => {
      if (!raf) raf = window.requestAnimationFrame(apply);
    };
    const onMove = (e: PointerEvent) => {
      if (!hero) return;
      const r = hero.getBoundingClientRect();
      nx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
      ny = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
      schedule();
    };
    const onLeave = () => {
      nx = 0;
      ny = 0;
      schedule();
    };

    if (hero && finePointer) {
      hero.addEventListener('pointermove', onMove);
      hero.addEventListener('pointerleave', onLeave);
    }

    return () => {
      io.disconnect();
      if (hero) {
        hero.removeEventListener('pointermove', onMove);
        hero.removeEventListener('pointerleave', onLeave);
      }
      if (raf) window.cancelAnimationFrame(raf);
    };
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
        <header className="hero" ref={heroRef}>
          <div className="blobs" aria-hidden="true">
            <span className="blob a" />
            <span className="blob b" />
            <span className="blob c" />
          </div>
          <div className="container hero-inner">
            <div>
              <span className="kicker">Phone financing for retailers in India</span>
              <h1>
                Sell phones on EMI.<br />Lock them until the loan is paid.
              </h1>
              <p className="lede">
                emidost is financed phone security for your shop. Sell on EMI, and let the EMI lock
                hold every device until the last instalment clears. Miss a payment, the phone locks.
                Pay it, the phone unlocks on its own.
              </p>
              <div className="cta-row">
                <a className="btn primary" href="#download">Download the apps</a>
                <a className="btn whatsapp" href="https://wa.me/917003617074">WhatsApp us</a>
              </div>
            </div>
            <div className="phonewrap">
              <div className="phone">
                <div className="screen locked">
                  <div className="lock-stage">
                    <span className="ring-burst" aria-hidden="true" />
                    <span className="lockicon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" width="26" height="26" fill="none">
                        <path d="M7 10V7a5 5 0 0 1 10 0v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <rect x="4.5" y="10" width="15" height="10.5" rx="2.5" fill="currentColor" />
                      </svg>
                    </span>
                  </div>
                  <span className="l1">Phone locked</span>
                  <div className="emi-ring" data-reveal aria-hidden="true">
                    <span className="emi-ring-label"><strong>67%</strong><small>paid</small></span>
                  </div>
                  <span className="l2">Rs 2,400 due on 15 June</span>
                  <span className="l3">Pay to unlock</span>
                </div>
                <div className="screen paid" aria-hidden="true">
                  <span className="lockicon open">
                    <svg viewBox="0 0 24 24" width="26" height="26" fill="none">
                      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="l1">Payment received</span>
                  <span className="l2">Phone unlocked</span>
                </div>
                <span className="chip-float one">SIM removed → locked</span>
                <span className="chip-float two">Paid → unlocked</span>
              </div>
            </div>
          </div>
        </header>

        <section id="problem">
          <div className="container">
            <h2 data-reveal>Chasing EMI payments is costing you</h2>
            <p className="sub" data-reveal data-delay="80">
              Customers stop paying after they take the phone. You have no leverage, and home visits waste days.
              emidost puts the leverage back on the phone itself.
            </p>
          </div>
        </section>

        <section id="roles" style={{ background: '#fff' }}>
          <div className="container">
            <h2 data-reveal>Who it is for</h2>
            <p className="sub" data-reveal data-delay="80">Two apps. One backend. Nothing for the customer to learn.</p>
            <div className="cards">
              <div className="card" data-reveal>
                <span className="icon" style={{ background: 'linear-gradient(135deg,#2dd4bf,#0d9488)' }}>R</span>
                <h3>Retailers</h3>
                <p>Register the customer, record the EMI plan, enrol the phone at the counter, and lock or unlock it in one tap.</p>
              </div>
              <div className="card" data-reveal data-delay="120">
                <span className="icon" style={{ background: 'linear-gradient(135deg,#fbbf24,#d97706)' }}>C</span>
                <h3>Customers</h3>
                <p>The phone works normally while payments are on time. Dues and reminders are always visible on screen.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="features">
          <div className="container">
            <h2 data-reveal>What the EMI lock actually does</h2>
            <p className="sub" data-reveal data-delay="80">Every feature below runs on the phone itself, with or without internet.</p>
            <div className="steps">
              {FEATURES.map(([t, d], i) => (
                <div className="step" key={t} data-reveal data-delay={String(i * 80)}>
                  <span className="badge">✓</span>
                  <div>
                    <h3>{t}</h3>
                    <p>{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="brands" style={{ background: '#fff' }}>
          <div className="container">
            <h2 data-reveal>Works on the phones you sell</h2>
            <p className="sub" data-reveal data-delay="80">
              The enrolment wizard knows each brand's settings, so your counter staff never guess.
            </p>
            <div className="brands">
              {BRANDS.map((b, i) => (
                <span className="brand reveal-pop" key={b} data-reveal data-delay={String(i * 35)}>{b}</span>
              ))}
            </div>
            <p className="muted-line" data-reveal>Android 11 and above. Every brand is certified on a real device before we say it works.</p>
          </div>
        </section>

        <section id="how">
          <div className="container">
            <h2 data-reveal>Set up in minutes at the counter</h2>
            <p className="sub" data-reveal data-delay="80">One enrolment per phone. After that, the phone protects the agreement on its own.</p>
            <div className="steps">
              {STEPS.map(([n, t, d], i) => (
                <div className="step" key={n} data-reveal data-delay={String(i * 80)}>
                  <span className="badge">{n}</span>
                  <div>
                    <h3>{t}</h3>
                    <p>{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" style={{ background: '#fff' }}>
          <div className="container">
            <h2 data-reveal>Simple pricing per device</h2>
            <p className="sub" data-reveal data-delay="80">
              You pay per financed phone, with bulk credits for shops that sell more. Tell us your monthly volume
              on WhatsApp and we will send a quote the same day.
            </p>
            <div className="cta-row" data-reveal data-delay="160">
              <a className="btn whatsapp" href="https://wa.me/917003617074">Get a quote on WhatsApp</a>
            </div>
          </div>
        </section>

        <section id="trust">
          <div className="container">
            <h2 data-reveal>Financed phone security that stays fair to your customer</h2>
            <p className="sub" data-reveal data-delay="80">
              The phone stays fully usable while payments are on time. The EMI lock only appears when an instalment is
              overdue. We do not sell customer data. Built with phone retailers who were tired of chasing payments.
            </p>
            <p className="strip" data-reveal data-delay="160">
              “A customer missed two instalments. The phone locked the same day. He paid by evening.” · Rahul K., RK Mobiles, Kolkata
            </p>
          </div>
        </section>

        <section id="faq" style={{ background: '#fff' }}>
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

        <section id="download">
          <div className="container">
            <h2 data-reveal>Download</h2>
            <p className="sub" data-reveal data-delay="80">Two apps. The retailer app is yours. The customer app goes on financed phones.</p>
            <div className="download-grid">
              <div className="dl retailer" data-reveal>
                <span className="tag">For your shop</span>
                <h3>Retailer app</h3>
                <p>Customer registration, payments, step by step enrolment, lock and unlock.</p>
                <a className="btn" href="https://github.com/emidost/emidost/releases/latest/download/emidost-retailer.apk">Download APK</a>
              </div>
              <div className="dl customer" data-reveal data-delay="120">
                <span className="tag">For financed phones</span>
                <h3>Customer app</h3>
                <p>Installed during enrolment. Named wifi and hidden after setup.</p>
                <a className="btn" href="https://github.com/emidost/emidost/releases/latest/download/emidost-customer.apk">Download APK</a>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="container">
            <h2 data-reveal>Start phone financing with EMI lock today</h2>
            <p className="sub" data-reveal data-delay="80">
              Message us on WhatsApp and we set up your account, your retailer logins, and your first enrolment the same day.
              Keep selling on EMI, let the lock protect every loan.
            </p>
            <div className="links">
              <a
                className="btn whatsapp"
                href="https://wa.me/917003617074?text=Hi%20emidost%2C%20I%20run%20a%20phone%20shop%20and%20want%20to%20start%20phone%20financing%20with%20an%20EMI%20lock.%20Please%20set%20up%20my%20account."
                data-reveal
              >
                WhatsApp +91 70036 17074
              </a>
              <a className="btn ghost" href="mailto:financebuddy144@gmail.com" data-reveal data-delay="80">financebuddy144@gmail.com</a>
              <a className="btn ghost" href="tel:+917003617074" data-reveal data-delay="160">Call +91 70036 17074</a>
            </div>
          </div>
        </section>

        <footer>
          <div className="container">
            emidost · financed phone protection for retailers · WhatsApp +91 70036 17074 · financebuddy144@gmail.com
          </div>
        </footer>
      </main>
    </>
  );
}
