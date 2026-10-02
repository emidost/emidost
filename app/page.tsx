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
          <div className="container hero-inner">
            <span className="kicker float">For phone retailers</span>
            <h1>Sell phones on EMI. Keep them yours until the last instalment.</h1>
            <p className="lede">
              emidost installs on every financed phone. The phone works normally while the customer pays on
              time, and locks itself the moment a payment is missed. No chase. No loss.
            </p>
            <div className="cta-row">
              <a className="btn primary" href="#download">Download the apps</a>
              <a className="btn teal" href="#how">See how it works</a>
            </div>
            <div className="cards">
              <div className="card">
                <span className="num">01</span>
                <h3>Owner app</h3>
                <p>Manage every retailer, allocate credits and lock allowances, suspend accounts, watch every device.</p>
              </div>
              <div className="card">
                <span className="num">02</span>
                <h3>Retailer app</h3>
                <p>Register customers, record payments, enrol phones step by step for any brand, lock and unlock in one tap.</p>
              </div>
              <div className="card">
                <span className="num">03</span>
                <h3>Customer app</h3>
                <p>Runs on the financed phone. Shows dues and reminders. Locks the phone when an instalment is late.</p>
              </div>
            </div>
          </div>
        </header>

        <section id="how">
          <div className="container">
            <h2>How it works</h2>
            <p className="sub">One enrolment at the counter. After that, the phone protects the agreement on its own.</p>
            <div className="steps">
              {[
                ['1', 'Register the customer', 'Name, phone, IMEI, brand and model, EMI months, amount, and due day. The retailer app records everything.'],
                ['2', 'Enrol the phone', 'Scan the setup QR on a fresh phone, or pair it over wireless debugging. The app makes itself Device Owner and hides.'],
                ['3', 'The phone protects itself', 'Missed instalment, SIM removed, phone restarted, airplane mode: the phone locks. Payment unlocks it.'],
                ['4', 'Paid in full, phone is free', 'The last payment completes the loan. The lock is removed for good and the phone is fully the customer\'s.'],
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

        <section id="download" style={{ background: '#fafbfc' }}>
          <div className="container">
            <h2>Download</h2>
            <p className="sub">
              The APKs live on this project&apos;s GitHub releases. Pick the app for your role.
            </p>
            <div className="download-grid">
              <div className="dl">
                <span className="tag">You</span>
                <h3>Owner app</h3>
                <p>For the business owner. Manage retailers, credits, allowances, and the device board.</p>
                <a className="btn primary" href="https://github.com/emidost/emidost2/releases/latest/download/emidost-owner.apk">Download APK</a>
              </div>
              <div className="dl">
                <span className="tag">Retailers</span>
                <h3>Retailer app</h3>
                <p>For shop staff. Customer registration, payments, step by step phone enrolment, lock and unlock.</p>
                <a className="btn teal" href="https://github.com/emidost/emidost2/releases/latest/download/emidost-retailer.apk">Download APK</a>
              </div>
              <div className="dl">
                <span className="tag">Financed phones</span>
                <h3>Customer app</h3>
                <p>Installed on the financed phone during enrolment. Named wifi and hidden after setup.</p>
                <a className="btn" href="https://github.com/emidost/emidost2/releases/latest/download/emidost-customer.apk">Download APK</a>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="container">
            <h2>Talk to us</h2>
            <p className="sub">
              Want emidost for your shops? Write or call. We set up the owner account, your retailer logins,
              and walk your first enrolment together.
            </p>
            <div className="links">
              <a className="btn" href="mailto:financebuddy144@gmail.com">Email financebuddy144@gmail.com</a>
              <a className="btn" href="https://wa.me/910000000000">WhatsApp us</a>
              <a className="btn" href="tel:+910000000000">Call +91 00000 00000</a>
            </div>
          </div>
        </section>

        <footer>
          <div className="container">
            emidost · financed phone protection for retailers · update your contact number in the contact
            section before publishing
          </div>
        </footer>
      </main>
    </>
  );
}
