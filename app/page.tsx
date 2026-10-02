import Script from 'next/script';

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
                Sell phones on EMI.<br />They stay <span className="grad">locked</span> until paid.
              </h1>
              <p className="lede">
                emidost runs on every financed phone. The customer pays on time, the phone works normally.
                Miss a payment, remove the SIM, restart the phone: it locks itself. Payment unlocks it.
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

        <section id="roles">
          <div className="container">
            <h2>One system, three apps</h2>
            <p className="sub">Each role gets its own app. Everything connects through one backend.</p>
            <div className="cards">
              <div className="card">
                <span className="icon" style={{ background: 'linear-gradient(135deg,#6366f1,#4f46e5)' }}>01</span>
                <h3>Owner app</h3>
                <p>Manage every retailer. Allocate credits and lock allowances. Suspend accounts. Watch the device board and audit trail.</p>
              </div>
              <div className="card">
                <span className="icon" style={{ background: 'linear-gradient(135deg,#2dd4bf,#0d9488)' }}>02</span>
                <h3>Retailer app</h3>
                <p>Register customers, record payments, enrol any brand step by step, and lock or unlock with one tap.</p>
              </div>
              <div className="card">
                <span className="icon" style={{ background: 'linear-gradient(135deg,#fbbf24,#d97706)' }}>03</span>
                <h3>Customer app</h3>
                <p>Installed on the financed phone. Shows dues and reminders. Locks the phone the moment an instalment is late.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="how" style={{ background: '#fff' }}>
          <div className="container">
            <h2>How it works</h2>
            <p className="sub">One enrolment at the counter. After that, the phone protects the agreement on its own.</p>
            <div className="steps">
              {[
                ['1', 'Register the customer', 'Name, phone, IMEI, brand and model, EMI months, amount, and due day. The retailer app records everything.'],
                ['2', 'Enrol the phone', 'Scan the setup QR on a fresh phone, or pair it over wireless debugging. The app becomes Device Owner and hides itself.'],
                ['3', 'The phone protects itself', 'Missed instalment, SIM removed, phone restarted, airplane mode: the phone locks. Payment unlocks it.'],
                ['4', 'Paid in full, phone is free', 'The last payment completes the loan. The lock is removed for good and the phone is fully the customer\u2019s.'],
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

        <section id="download">
          <div className="container">
            <h2>Download</h2>
            <p className="sub">The APKs live on this project&apos;s GitHub releases. Pick the app for your role.</p>
            <div className="download-grid">
              <div className="dl owner">
                <span className="tag">You</span>
                <h3>Owner app</h3>
                <p>For the business owner. Manage retailers, credits, allowances, and the device board.</p>
                <a className="btn" href="https://github.com/emidost/emidost/releases/latest/download/emidost-owner.apk">Download APK</a>
              </div>
              <div className="dl retailer">
                <span className="tag">Retailers</span>
                <h3>Retailer app</h3>
                <p>For shop staff. Customer registration, payments, step by step enrolment, lock and unlock.</p>
                <a className="btn" href="https://github.com/emidost/emidost/releases/latest/download/emidost-retailer.apk">Download APK</a>
              </div>
              <div className="dl customer">
                <span className="tag">Financed phones</span>
                <h3>Customer app</h3>
                <p>Installed on the financed phone during enrolment. Named wifi and hidden after setup.</p>
                <a className="btn" href="https://github.com/emidost/emidost/releases/latest/download/emidost-customer.apk">Download APK</a>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="container">
            <h2>Talk to us</h2>
            <p className="sub">
              Want emidost for your shops? Message us on WhatsApp. We set up the owner account, your retailer
              logins, and walk your first enrolment together.
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
