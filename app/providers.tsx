'use client';

import { MotionConfig } from 'framer-motion';
import { type ReactNode } from 'react';

/** Honors the OS "reduce motion" setting across every framer-motion component. */
export default function Providers({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
