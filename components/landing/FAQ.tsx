'use client';

import { Reveal, Stagger, StaggerItem } from '@/components/motion';
import { FAQS } from '@/lib/content';

export default function FAQ() {
  return (
    <section className="paper section" id="faq">
      <div className="container">
        <Reveal><span className="eyebrow eyebrow-paper">FAQ</span></Reveal>
        <Reveal delay={0.05}><h2>Questions retailers ask</h2></Reveal>

        <Stagger className="faq">
          {FAQS.map(({ q, a }) => (
            <StaggerItem key={q}>
              <details>
                <summary>{q}</summary>
                <div className="faq-answer"><p>{a}</p></div>
              </details>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
