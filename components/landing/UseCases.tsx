'use client';

import { Reveal, Stagger, StaggerItem } from '@/components/motion';
import { USE_CASES } from '@/lib/content';

export default function UseCases() {
  return (
    <section className="ink section" id="use-cases">
      <div className="container">
        <Reveal><span className="eyebrow">Who it&rsquo;s for</span></Reveal>
        <Reveal delay={0.05}><h2>Made for businesses that finance phones</h2></Reveal>

        <Stagger className="usecase-grid">
          {USE_CASES.map(({ title, body, icon: Icon }) => (
            <StaggerItem className="usecase-card" key={title}>
              <span className="usecase-ico"><Icon size={22} /></span>
              <h3>{title}</h3>
              <p>{body}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
