'use client';

import { Reveal, Stagger, StaggerItem } from '@/components/motion';
import { SECURITY } from '@/lib/content';

export default function SecuritySection() {
  return (
    <section className="ink section" id="security">
      <div className="container">
        <Reveal><span className="eyebrow">Security</span></Reveal>
        <Reveal delay={0.05}><h2>Enforcement that stays on the phone</h2></Reveal>
        <Reveal delay={0.1}>
          <p className="sub">
            emidost holds a financed device the way the operating system intends &mdash; at the
            device-owner level, not as an app a customer can swipe away.
          </p>
        </Reveal>

        <Stagger className="sec-grid">
          {SECURITY.map(({ title, body, icon: Icon }) => (
            <StaggerItem className="sec-card" key={title}>
              <span className="sec-ico"><Icon size={20} /></span>
              <h3>{title}</h3>
              <p>{body}</p>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.1}>
          <p className="fine-print fine-print-ink">
            We describe what the product does, never how to defeat it. Command formats and account
            secrets are kept out of public materials by design.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
