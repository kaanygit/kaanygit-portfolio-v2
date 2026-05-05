'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.config({ ignoreMobileResize: true });
}

export const ease = {
  smooth: 'power3.out',
  premium: 'power4.out',
  spring: 'back.out(1.4)',
} as const;

export { gsap, ScrollTrigger };
