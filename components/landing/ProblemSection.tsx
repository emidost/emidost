'use client';

import { AlertCircle } from 'lucide-react';
import { Reveal, Stagger, StaggerItem } from '@/components/motion';
import { PROBLEM_POINTS } from '@/lib/content';

export default function ProblemSection() {
  return (
    <section className="paper section" id="problem">
      <div className="container">
        <Reveal><span className="eyebrow eyebrow-paper">The problem</span></Reveal>
        <Reveal delay={0.05}>
          <h2>Selling on EMI shouldn&rsquo;t mean losing the phone.</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="sub">
            Once a financed phone leaves the counter, most shops are left hoping. emidost turns
            that hope into a system &mdash; every device tracked, every due date clear, and a safe,
            built-in way to pause an overdue phone until it&rsquo;s paid.
          </p>
        </Reveal>
        <Stagger className="problem-grid">
          {PROBLEM_POINTS.map((p) => (
            <StaggerItem className="problem-card" key={p}>
              <AlertCircle size={18} />
              <p>{p}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
