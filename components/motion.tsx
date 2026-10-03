'use client';

/**
 * Reusable motion primitives built on framer-motion.
 * Everything degrades to a static, fully-visible layout when the viewer has
 * prefers-reduced-motion set (handled globally by MotionConfig reducedMotion="user",
 * plus explicit guards here so nothing animates in or hides content).
 */
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { type ReactNode, type ElementType } from 'react';

const EASE = [0.22, 1, 0.36, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export const containerStagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const VIEWPORT = { once: true, margin: '0px 0px -12% 0px' } as const;

type BaseProps = {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'li' | 'span' | 'header' | 'ul';
  [key: string]: unknown;
};

/** Fades + lifts its children into view once, on scroll. */
export function Reveal({ children, delay = 0, className, as = 'div', ...rest }: BaseProps & { delay?: number }) {
  const reduce = useReducedMotion();
  const Tag = motion[as] as ElementType;
  return (
    <Tag
      className={className}
      initial={reduce ? false : 'hidden'}
      whileInView="show"
      viewport={VIEWPORT}
      variants={{
        hidden: { opacity: 0, y: 22 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE, delay } },
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/** Parent that reveals its StaggerItem children one after another. */
export function Stagger({ children, className, as = 'div', ...rest }: BaseProps) {
  const reduce = useReducedMotion();
  const Tag = motion[as] as ElementType;
  return (
    <Tag
      className={className}
      initial={reduce ? false : 'hidden'}
      whileInView="show"
      viewport={VIEWPORT}
      variants={containerStagger}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export function StaggerItem({ children, className, as = 'div', ...rest }: BaseProps) {
  const Tag = motion[as] as ElementType;
  return (
    <Tag className={className} variants={fadeUp} {...rest}>
      {children}
    </Tag>
  );
}
