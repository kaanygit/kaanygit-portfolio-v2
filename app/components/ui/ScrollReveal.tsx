'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

const ease: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const directions = {
  up: { initial: { opacity: 0, y: 28 }, animate: { opacity: 1, y: 0 } },
  left: { initial: { opacity: 0, x: -32 }, animate: { opacity: 1, x: 0 } },
  right: { initial: { opacity: 0, x: 32 }, animate: { opacity: 1, x: 0 } },
  none: { initial: { opacity: 0 }, animate: { opacity: 1 } },
};

interface ScrollRevealProps {
  children: ReactNode;
  direction?: 'up' | 'left' | 'right' | 'none';
  delay?: number;
  className?: string;
}

export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  className = '',
}: ScrollRevealProps) {
  const reduce = useReducedMotion();
  const { initial, animate } = directions[direction];

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, ease, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
