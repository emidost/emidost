'use client';

import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import {
  Lock, CheckCircle2, BellRing, Phone, Siren, Wifi, BatteryFull, Signal,
} from 'lucide-react';
import { type DeviceState } from '@/lib/content';

const EASE = [0.22, 1, 0.36, 1] as const;

function StatusBar({ tone }: { tone: 'ink' | 'amber' | 'teal' }) {
  return (
    <div className={`pm-status pm-status-${tone}`}>
      <span className="pm-time">9:41</span>
      <span className="pm-status-icons">
        <Signal size={13} /> <Wifi size={13} /> <BatteryFull size={15} />
      </span>
    </div>
  );
}

function Progress({ pct, label }: { pct: number; label: string }) {
  const reduce = useReducedMotion();
  return (
    <div className="pm-progress">
      <div className="pm-bar">
        <motion.span
          initial={reduce ? false : { width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.9, ease: EASE }}
        />
      </div>
      <div className="pm-bar-labels">
        <span>{label}</span>
        <span>{pct}%</span>
      </div>
    </div>
  );
}

function Screen({ state }: { state: DeviceState }) {
  if (state === 'active') {
    return (
      <div className="pm-screen pm-active">
        <StatusBar tone="ink" />
        <div className="pm-body">
          <span className="pm-badge pm-badge-teal"><CheckCircle2 size={14} /> EMI active</span>
          <p className="pm-head">Your phone is all yours</p>
          <Progress pct={42} label="5 of 12 instalments paid" />
          <div className="pm-next">
            <span>Next instalment</span>
            <b>&#8377;2,400 &middot; 5 Jul</b>
          </div>
          <div className="pm-apps" aria-hidden="true">
            {Array.from({ length: 8 }).map((_, i) => <span key={i} />)}
          </div>
        </div>
      </div>
    );
  }
  if (state === 'due') {
    return (
      <div className="pm-screen pm-due">
        <StatusBar tone="amber" />
        <div className="pm-body">
          <span className="pm-icon-wrap pm-amber"><BellRing size={24} /></span>
          <p className="pm-head">Payment due</p>
          <p className="pm-sub">Instalment 6 is due in 2 days.</p>
          <div className="pm-amount">&#8377;2,400<span>due 5 Jul</span></div>
          <p className="pm-note">Pay at your shop to stay on track.</p>
        </div>
      </div>
    );
  }
  if (state === 'locked') {
    return (
      <div className="pm-screen pm-locked">
        <StatusBar tone="amber" />
        <div className="pm-body pm-center">
          <span className="pm-icon-wrap pm-amber pm-lock"><Lock size={26} strokeWidth={2.2} /></span>
          <p className="pm-head">Phone locked</p>
          <Progress pct={42} label="5 of 12 paid" />
          <div className="pm-amount pm-amount-sm">&#8377;2,400<span>overdue since 5 Jun</span></div>
          <p className="pm-note">Pay at your shop to unlock.</p>
          <div className="pm-actions">
            <span className="pm-act"><Phone size={13} /> Call your shop</span>
            <span className="pm-act pm-sos"><Siren size={13} /> Emergency 112</span>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="pm-screen pm-paid">
      <StatusBar tone="teal" />
      <div className="pm-body pm-center">
        <span className="pm-icon-wrap pm-teal pm-pop"><CheckCircle2 size={28} strokeWidth={2.2} /></span>
        <p className="pm-head">Payment received</p>
        <p className="pm-sub">Instalment 6 recorded.</p>
        <span className="pm-badge pm-badge-teal pm-unlocked">Phone unlocked</span>
        <div className="pm-next">
          <span>Next instalment</span>
          <b>&#8377;2,400 &middot; 5 Aug</b>
        </div>
      </div>
    </div>
  );
}

export default function PhoneMock({
  state,
  floating = false,
}: {
  state: DeviceState;
  floating?: boolean;
}) {
  const reduce = useReducedMotion();
  return (
    <div className="pm-wrap">
      <div className="pm-phone">
        <span className="pm-notch" aria-hidden="true" />
        <div className="pm-viewport">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={state}
              className="pm-slide"
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: EASE }}
            >
              <Screen state={state} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {floating && (
        <>
          <motion.span
            className="pm-chip pm-chip-one"
            initial={reduce ? false : { opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5, ease: EASE }}
          >
            <Lock size={13} /> SIM removed &rarr; locked
          </motion.span>
          <motion.span
            className="pm-chip pm-chip-two"
            initial={reduce ? false : { opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5, ease: EASE }}
          >
            <CheckCircle2 size={13} /> Paid &rarr; unlocked
          </motion.span>
        </>
      )}
    </div>
  );
}
