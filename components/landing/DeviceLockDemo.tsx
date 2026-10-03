'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';
import { Reveal } from '@/components/motion';
import PhoneMock from '@/components/landing/PhoneMock';
import { DEVICE_STATES } from '@/lib/content';

export default function DeviceLockDemo() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.3 });
  const [i, setI] = useState(0);
  const [touched, setTouched] = useState(false);

  useEffect(() => {
    if (reduce || touched || !inView) return;
    const id = window.setInterval(() => setI((v) => (v + 1) % DEVICE_STATES.length), 2800);
    return () => window.clearInterval(id);
  }, [reduce, touched, inView]);

  return (
    <section className="ink section" id="features">
      <div className="container">
        <Reveal><span className="eyebrow">The device lock</span></Reveal>
        <Reveal delay={0.05}><h2>Watch a financed phone move through its states</h2></Reveal>
        <Reveal delay={0.1}>
          <p className="sub">
            Normal while payments are on time. One clear screen when they&rsquo;re not. Back to normal
            the moment the instalment is recorded. Tap a stage to see it.
          </p>
        </Reveal>

        <div className="lockdemo" ref={ref}>
          <div className="lockdemo-phone">
            <PhoneMock state={DEVICE_STATES[i].key} />
          </div>
          <div className="lockdemo-tabs" role="tablist" aria-label="Device states">
            {DEVICE_STATES.map((s, idx) => {
              const active = idx === i;
              return (
                <button
                  key={s.key}
                  role="tab"
                  aria-selected={active}
                  className={`lockdemo-tab ${active ? 'active' : ''}`}
                  onClick={() => { setI(idx); setTouched(true); }}
                >
                  <span className="lockdemo-dot" data-state={s.key} />
                  <span className="lockdemo-tab-text">
                    <b>{s.tab}</b>
                    <span>{active ? s.caption : s.title}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
