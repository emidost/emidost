'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { ArrowRight, MessageCircle, ShieldCheck, WifiOff, KeyRound } from 'lucide-react';
import PhoneMock from '@/components/landing/PhoneMock';
import { type DeviceState, waLink, CONTACT } from '@/lib/content';

const CYCLE: DeviceState[] = ['active', 'due', 'locked', 'paid'];
const EASE = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const reduce = useReducedMotion();
  const stageRef = useRef<HTMLDivElement>(null);
  const inView = useInView(stageRef, { amount: 0.4 });
  const [i, setI] = useState(reduce ? 2 : 0); // reduced-motion rests on "locked"

  useEffect(() => {
    if (reduce || !inView) return;
    const id = window.setInterval(() => setI((v) => (v + 1) % CYCLE.length), 2600);
    return () => window.clearInterval(id);
  }, [reduce, inView]);

  const parent = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
  };
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
  };

  return (
    <header className="hero" id="top">
      <div className="hero-glow" aria-hidden="true" />
      <div className="container hero-inner">
        <motion.div initial={reduce ? false : 'hidden'} animate="show" variants={parent}>
          <motion.span className="kicker" variants={item}>
            EMI phone lock software for mobile retailers
          </motion.span>
          <motion.h1 variants={item}>
            Sell more phones on EMI.<br />
            <span className="accent">Stay in control until they&rsquo;re paid.</span>
          </motion.h1>
          <motion.p className="lede" variants={item}>
            emidost secures every financed smartphone you sell. Track EMIs and payments, and
            lock or unlock a device on time &mdash; even with the SIM out, the internet off,
            or after a reboot.
          </motion.p>
          <motion.div className="cta-row" variants={item}>
            <a className="btn primary" href="#start">Get started <ArrowRight size={17} /></a>
            <a className="btn ghost" href="#how">See how it works</a>
          </motion.div>
          <motion.div className="hero-meta" variants={item}>
            <span className="fact"><ShieldCheck size={17} /> Device Owner mode</span>
            <span className="fact"><WifiOff size={17} /> Works offline</span>
            <span className="fact"><KeyRound size={17} /> No computer needed</span>
          </motion.div>
          <motion.a
            className="hero-wa"
            href={waLink(CONTACT.whatsappCtaText)}
            variants={item}
          >
            <MessageCircle size={15} /> Or message us on WhatsApp &rarr;
          </motion.a>
        </motion.div>

        <div className="hero-phone" ref={stageRef}>
          <PhoneMock state={CYCLE[i]} floating />
        </div>
      </div>
    </header>
  );
}
