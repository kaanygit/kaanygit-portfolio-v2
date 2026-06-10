'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, SplitText);
  ScrollTrigger.config({ ignoreMobileResize: true });
}

export const ease = {
  smooth: 'power3.out',
  premium: 'power4.out',
  spring: 'back.out(1.4)',
} as const;

export const PREFERS_MOTION = '(prefers-reduced-motion: no-preference)';

export { gsap, ScrollTrigger, SplitText };
