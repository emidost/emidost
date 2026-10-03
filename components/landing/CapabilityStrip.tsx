'use client';

import { Stagger, StaggerItem } from '@/components/motion';
import { CAPABILITIES } from '@/lib/content';

export default function CapabilityStrip() {
  return (
    <section className="strip" aria-label="Product capabilities">
      <Stagger className="container strip-row">
        {CAPABILITIES.map(({ label, icon: Icon }) => (
          <StaggerItem className="strip-chip" key={label}>
            <Icon size={16} /> {label}
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
