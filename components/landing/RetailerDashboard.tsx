'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import {
  LayoutDashboard, Smartphone, Users, CreditCard, Lock, CheckCircle2, Clock,
} from 'lucide-react';
import { Reveal } from '@/components/motion';

const EASE = [0.22, 1, 0.36, 1] as const;

function CountUp({ to, suffix = '' }: { to: number; suffix?: string }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [n, setN] = useState(reduce ? to : 0);

  useEffect(() => {
    if (reduce || !inView) return;
    let raf = 0;
    const start = performance.now();
    const dur = 1000;
    const tick = (t: number) => {
      const p = Math.min((t - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduce, to]);

  return <span ref={ref}>{n}{suffix}</span>;
}

const STATS = [
  { icon: Smartphone, label: 'Financed devices', value: 148 },
  { icon: CreditCard, label: 'Active EMIs', value: 112 },
  { icon: Clock, label: 'Due this week', value: 23 },
  { icon: Lock, label: 'Locked now', value: 9 },
];

const ROWS: { device: string; customer: string; state: 'Locked' | 'Paying' | 'Paid'; due: string }[] = [
  { device: 'Galaxy A15', customer: 'R. Mondal', state: 'Locked', due: '₹2,400' },
  { device: 'Redmi 13C', customer: 'S. Khatun', state: 'Paying', due: '₹1,900' },
  { device: 'vivo Y28', customer: 'A. Das', state: 'Paid', due: 'Complete' },
  { device: 'realme C65', customer: 'M. Haque', state: 'Paying', due: '₹2,100' },
];

export default function RetailerDashboard() {
  const reduce = useReducedMotion();
  return (
    <section className="paper section" id="dashboard">
      <div className="container">
        <Reveal><span className="eyebrow eyebrow-paper">Retailer dashboard</span></Reveal>
        <Reveal delay={0.05}><h2>Every financed phone, on one screen</h2></Reveal>
        <Reveal delay={0.1}>
          <p className="sub">
            The retailer app gives your shop a live view of every device you&rsquo;ve financed &mdash;
            customer, EMI progress, due date and lock status &mdash; so overdue accounts never slip past you.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="dash">
          <div className="dash-bar">
            <span className="dash-dot" /><span className="dash-dot" /><span className="dash-dot" />
            <span className="dash-url">app.emidost.in</span>
          </div>
          <div className="dash-body">
            <aside className="dash-side">
              <span className="active"><LayoutDashboard size={15} /> Dashboard</span>
              <span><Smartphone size={15} /> Devices</span>
              <span><Users size={15} /> Customers</span>
              <span><CreditCard size={15} /> Payments</span>
            </aside>
            <div className="dash-main">
              <div className="dash-stats">
                {STATS.map(({ icon: Icon, label, value }) => (
                  <div className="dash-stat" key={label}>
                    <span className="dash-stat-ico"><Icon size={16} /></span>
                    <b><CountUp to={value} /></b>
                    <span className="dash-stat-label">{label}</span>
                  </div>
                ))}
              </div>
              <div className="dash-table">
                <div className="dash-tr dash-head">
                  <span>Device</span><span>Customer</span><span>Status</span><span>Due</span>
                </div>
                {ROWS.map((r, idx) => (
                  <motion.div
                    className="dash-tr"
                    key={r.device}
                    initial={reduce ? false : { opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + idx * 0.1, duration: 0.4, ease: EASE }}
                  >
                    <span className="dash-device">{r.device}</span>
                    <span className="dash-muted">{r.customer}</span>
                    <span>
                      <span className={`dash-chip dash-chip-${r.state.toLowerCase()}`}>
                        {r.state === 'Locked' && <Lock size={11} />}
                        {r.state === 'Paid' && <CheckCircle2 size={11} />}
                        {r.state}
                      </span>
                    </span>
                    <span className="dash-due">{r.due}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
