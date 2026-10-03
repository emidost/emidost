'use client';

import { Reveal, Stagger, StaggerItem } from '@/components/motion';
import { HOW_IT_WORKS, BRANDS } from '@/lib/content';

export default function HowItWorks() {
  return (
    <section className="paper section" id="how">
      <div className="container">
        <Reveal><span className="eyebrow eyebrow-paper">How it works</span></Reveal>
        <Reveal delay={0.05}><h2>Set up at the counter, no computer needed</h2></Reveal>
        <Reveal delay={0.1}>
          <p className="sub">
            One enrolment per phone. After that, the device protects the agreement on its own.
          </p>
        </Reveal>

        <Stagger className="how-grid">
          {HOW_IT_WORKS.map(({ step, title, body }) => (
            <StaggerItem className="how-card" key={step}>
              <span className="how-step">{step}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.1}>
          <p className="brands-label">Works on the phones you already sell</p>
        </Reveal>
        <Stagger className="brands">
          {BRANDS.map((b) => (
            <StaggerItem as="span" className="brand" key={b}>{b}</StaggerItem>
          ))}
        </Stagger>
        <Reveal delay={0.1}>
          <p className="fine-print">
            Android 11 and above. The enrolment wizard carries each brand&rsquo;s setup steps, and we
            certify a brand family on a real device before we call it supported.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
