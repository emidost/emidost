import Script from 'next/script';

const BRANDS = [
  'Samsung', 'Xiaomi', 'Redmi', 'POCO', 'vivo', 'iQOO', 'OPPO', 'OnePlus',
  'realme', 'HONOR', 'Google Pixel', 'Motorola', 'Nothing', 'CMF', 'Lava',
  'HMD', 'TECNO', 'Infinix', 'itel',
];

export default function Page() {
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
        <header className="hero">
          <div className="blobs">
            <span className="blob a" />
            <span className="blob b" />
            <span className="blob c" />
          </div>
          <div className="container hero-inner">
            <div>
              <span className="kicker">For phone retailers</span>
              <h1>
                Sell phones on EMI.<br />Get paid on time.
              </h1>
              <p className="lede">
                Lock the phone when a payment is missed, unlock it the moment it clears.
                You keep selling. The phone protects the loan.
              </p>
              <div className="cta-row">
                <a className="btn primary" href="#download">Download the apps</a>
                <a className="btn whatsapp" href="https://wa.me/917003617074">WhatsApp us</a>
              </div>
            </div>
            <div className="phonewrap">
              <div className="phone">
                <div className="screen locked">
                  <span className="lockicon">LOCK</span>
                  <span className="l1">Phone locked</span>
                  <span className="l2">Rs 2,400 due on 15 June</span>
                  <span className="l3">Pay to unlock</span>
                </div>
                <span className="chip-float one">SIM removed → locked</span>
                <span className="chip-float two">Paid → unlocked</span>
              </div>
            </div>
          </div>
        </header>

        <section id="problem">
          <div className="container">
            <h2>Chasing EMI payments is costing you</h2>
            <p className="sub">
              Customers stop paying after they take the phone. You have no leverage, and home visits waste days.
              emidost puts the leverage back on the phone itself.
            </p>
          </div>
        </section>

        <section id="roles" style={{ background: '#fff' }}>
          <div className="container">
            <h2>Who it is for</h2>
            <p className="sub">Two apps. One backend. Nothing for the customer to learn.</p>
            <div className="cards">
              <div className="card">
                <span className="icon" style={{ background: 'linear-gradient(135deg,#2dd4bf,#0d9488)' }}>R</span>
                <h3>Retailers</h3>
                <p>Register the customer, record the EMI plan, enrol the phone at the counter, and lock or unlock it in one tap.</p>
              </div>
              <div className="card">
                <span className="icon" style={{ background: 'linear-gradient(135deg,#fbbf24,#d97706)' }}>C</span>
                <h3>Customers</h3>
                <p>The phone works normally while payments are on time. Dues and reminders are always visible on screen.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="features">
          <div className="container">
            <h2>What the lock actually does</h2>
            <p className="sub">Every feature below runs on the phone itself, with or without internet.</p>
            <div className="steps">
              {[
                ['Missed payment', 'The phone locks to a payment screen the day an instalment is overdue.'],
                ['SIM removed', 'Pull the SIM to dodge the system and the phone locks within 30 seconds.'],
                ['Restart or airplane mode', 'The lock survives reboots and offline tricks. Restarting never clears it.'],
                ['Offline SMS control', 'Lock and unlock commands reach the phone by SMS when there is no internet.'],
                ['Voice reminders', 'The phone speaks the payment reminder to the customer before and after the due date.'],
                ['Unlock on payment', 'The moment the EMI is recorded as paid, the phone unlocks on its own.'],
              ].map(([t, d]) => (
                <div className="step" key={t}>
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
            <h2>Works on the phones you sell</h2>
            <p className="sub">
              The enrolment wizard knows each brand's settings, so your counter staff never guess.
            </p>
            <div className="brands">
              {BRANDS.map((b) => <span className="brand" key={b}>{b}</span>)}
            </div>
            <p className="muted-line">Android 11 and above. Every brand is certified on a real device before we say it works.</p>
          </div>
        </section>

        <section id="how">
          <div className="container">
            <h2>Set up in minutes at the counter</h2>
            <p className="sub">One enrolment per phone. After that, the phone protects the agreement on its own.</p>
            <div className="steps">
              {[
                ['1', 'Install on the new phone', 'Scan a QR on a fresh phone. The app installs itself and becomes the device manager.'],
                ['2', 'Link the sale', 'Add the customer, IMEI, EMI months, amount, and due day in the retailer app.'],
                ['3', 'Hand over the phone', 'The app hides itself. The customer sees a normal phone.'],
                ['4', 'Manage from your app', 'Lock, unlock, record payments, and watch every device from one list.'],
              ].map(([n, t, d]) => (
                <div className="step" key={n}>
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
            <h2>Simple pricing per device</h2>
            <p className="sub">
              You pay per financed phone, with bulk credits for shops that sell more. Tell us your monthly volume
              on WhatsApp and we will send a quote the same day.
            </p>
            <div className="cta-row">
              <a className="btn whatsapp" href="https://wa.me/917003617074">Get a quote on WhatsApp</a>
            </div>
          </div>
        </section>

        <section id="trust">
          <div className="container">
            <h2>Fair to your customer, safe for your loan</h2>
            <p className="sub">
              The phone stays fully usable while payments are on time. The lock only appears when an instalment is
              overdue. We do not sell customer data. Built with phone retailers who were tired of chasing payments.
            </p>
          </div>
        </section>

        <section id="faq" style={{ background: '#fff' }}>
          <div className="container">
            <h2>Questions retailers ask</h2>
            <div className="faq">
              <details>
                <summary>Can the customer bypass the lock with a factory reset?</summary>
                <p>No. Device Owner mode blocks a factory reset from settings, and the lock returns after any reboot. We are honest about the one limit: a recovery-mode wipe with a computer can reset the phone, and factory reset protection then requires the account. No phone system can block that, and we do not claim otherwise.</p>
              </details>
              <details>
                <summary>Does it work without internet?</summary>
                <p>Yes. Lock and unlock commands also arrive by SMS, and the lock itself runs entirely on the phone.</p>
              </details>
              <details>
                <summary>What happens the moment they pay?</summary>
                <p>You record the payment in your app. The phone unlocks on its own within seconds.</p>
              </details>
              <details>
                <summary>Which brands are supported?</summary>
                <p>Every major brand sold in India, listed above. Each brand is tested on a real device before we ship it.</p>
              </details>
              <details>
                <summary>What does the customer see?</summary>
                <p>A normal phone while payments are on time. If an instalment is late, a clear screen with the amount due, your shop number, and an emergency 112 button.</p>
              </details>
              <details>
                <summary>How do I get set up?</summary>
                <p>Message us on WhatsApp. We create your account, hand you the retailer app, and walk your first enrolment together.</p>
              </details>
            </div>
          </div>
        </section>

        <section id="download">
          <div className="container">
            <h2>Download</h2>
            <p className="sub">Two apps. The retailer app is yours. The customer app goes on financed phones.</p>
            <div className="download-grid">
              <div className="dl retailer">
                <span className="tag">For your shop</span>
                <h3>Retailer app</h3>
                <p>Customer registration, payments, step by step enrolment, lock and unlock.</p>
                <a className="btn" href="https://github.com/emidost/emidost/releases/latest/download/emidost-retailer.apk">Download APK</a>
              </div>
              <div className="dl customer">
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
            <h2>Start selling phones you can trust</h2>
            <p className="sub">
              Message us on WhatsApp. We set up your account, your retailer logins, and your first enrolment the same day.
            </p>
            <div className="links">
              <a className="btn whatsapp" href="https://wa.me/917003617074">WhatsApp +91 70036 17074</a>
              <a className="btn ghost" href="mailto:financebuddy144@gmail.com">financebuddy144@gmail.com</a>
              <a className="btn ghost" href="tel:+917003617074">Call +91 70036 17074</a>
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
