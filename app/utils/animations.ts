import type { Transition } from 'framer-motion';

const ease: [number, number, number, number] = [0.25, 0.1, 0.25, 1];
const baseTransition: Transition = { duration: 0.8, ease };

export const reveal = {
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: baseTransition,
};

export const revealFromLeft = {
  initial: { opacity: 0, x: -32 },
  animate: { opacity: 1, x: 0 },
  transition: baseTransition,
};

export const revealFromRight = {
  initial: { opacity: 0, x: 32 },
  animate: { opacity: 1, x: 0 },
  transition: baseTransition,
};

export const staggerContainer = {
  animate: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

export const textReveal = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease },
};

export const lineGrow = {
  initial: { scaleX: 0 },
  animate: { scaleX: 1 },
  transition: { duration: 0.9, ease },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.96 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.55, ease },
};
