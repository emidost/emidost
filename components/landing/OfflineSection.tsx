'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { WifiOff, MessageSquare, Smartphone, ArrowRight, Check } from 'lucide-react';
import { Reveal, Stagger, StaggerItem } from '@/components/motion';

const POINTS = [
  'Enforcement runs on the phone itself, not a live server check.',
  'Stay offline past the limit and the phone locks on its own.',
  'Authorized lock and unlock commands can arrive by SMS with no data.',
  'Payment reminders keep playing on the phone while it is offline.',
];

const EASE = [0.22, 1, 0.36, 1] as const;

export default function OfflineSection() {
  const reduce = useReducedMotion();
  return (
    <section className="paper section" id="offline">
      <div className="container offline-inner">
        <div>
          <Reveal><span className="eyebrow eyebrow-paper">Offline-first</span></Reveal>
          <Reveal delay={0.05}>
            <h2>Built for the real world &mdash; even when the internet isn&rsquo;t.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="sub">
              Patchy data shouldn&rsquo;t be a loophole. emidost keeps working at the edge of the
              network, so a financed phone stays under the agreement whether it&rsquo;s online or not.
            </p>
          </Reveal>
          <Stagger as="ul" className="check-list">
            {POINTS.map((p) => (
              <StaggerItem as="li" className="check-item" key={p}>
                <Check size={16} /> <span>{p}</span>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal delay={0.1}>
            <p className="fine-print">
              To stay precise: syncing the dashboard and recording payments uses the retailer app
              when you&rsquo;re connected. The on-device lock does not need the internet to hold.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="sms-flow" aria-label="Retailer sends an authorized SMS command to a financed device">
          <div className="sms-node sms-retailer">
            <span className="sms-ava"><MessageSquare size={18} /></span>
            <div><b>Retailer app</b><span>Sends an authorized command</span></div>
          </div>

          <motion.div
            className="sms-bubble"
            initial={reduce ? false : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5, ease: EASE }}
          >
            <span className="sms-tag"><WifiOff size={12} /> No data &middot; delivered by SMS</span>
            <p>Lock &bull; authorized &bull; this device only</p>
          </motion.div>

          <div className="sms-arrow" aria-hidden="true">
            <motion.span
              initial={reduce ? false : { opacity: 0.2 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              <ArrowRight size={22} />
            </motion.span>
          </div>

          <div className="sms-node sms-device">
            <span className="sms-ava sms-ava-amber"><Smartphone size={18} /></span>
            <div><b>Financed phone</b><span>Locks to the payment screen</span></div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
