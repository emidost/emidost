'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Reveal } from '@/components/motion';
import { JOURNEY } from '@/lib/content';

const EASE = [0.22, 1, 0.36, 1] as const;

export default function ProductDemo() {
  const reduce = useReducedMotion();
  return (
    <section className="ink section" id="demo">
      <div className="container">
        <Reveal><span className="eyebrow">How the product works</span></Reveal>
        <Reveal delay={0.05}><h2>From EMI sale to paid-off device</h2></Reveal>
        <Reveal delay={0.1}>
          <p className="sub">
            One continuous flow at the counter. Each financed phone moves through the same
            lifecycle, and emidost keeps hold of it the whole way.
          </p>
        </Reveal>

        <div className="pipeline">
          <div className="pipeline-rail" aria-hidden="true">
            <motion.span
              className="pipeline-fill"
              initial={reduce ? false : { scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: '0px 0px -20% 0px' }}
              transition={{ duration: 1.1, ease: EASE }}
            />
          </div>
          <ol className="pipeline-steps">
            {JOURNEY.map(({ title, body, icon: Icon }, idx) => (
              <motion.li
                className="pipeline-step"
                key={title}
                initial={reduce ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '0px 0px -15% 0px' }}
                transition={{ duration: 0.5, ease: EASE, delay: Math.min(idx * 0.08, 0.3) }}
              >
                <span className="pipeline-node"><Icon size={19} /></span>
                <div className="pipeline-body">
                  <span className="pipeline-num">Step {idx + 1}</span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
