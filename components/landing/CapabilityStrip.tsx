'use client';

import { CAPABILITIES } from '@/lib/content';

export default function CapabilityStrip() {
  return (
    <section className="strip" aria-label="Product capabilities">
      <div className="marquee" aria-hidden="false">
        {/* Two identical tracks make a seamless, infinite scroll. */}
        {[0, 1].map((copy) => (
          <div className="marquee-track" key={copy} aria-hidden={copy === 1}>
            {CAPABILITIES.map(({ label, icon: Icon }) => (
              <span className="strip-chip" key={`${copy}-${label}`}>
                <Icon size={16} /> {label}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
