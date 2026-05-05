'use client';

import { useEffect, useRef } from 'react';
import { gsap } from '../lib/gsap';

interface MagneticOptions {
  /** Maximum pull distance in px. Default 8. */
  strength?: number;
  /** Optional inner element pulled further (e.g. icon inside a button). */
  innerSelector?: string;
  /** Inner-element multiplier vs strength. Default 0.4. */
  innerStrength?: number;
}

/**
 * Magnetic cursor pull. Smooth GSAP quickTo, transform-only.
 * No-ops on coarse pointers and prefers-reduced-motion.
 */
export function useMagnetic<T extends HTMLElement = HTMLElement>({
  strength = 8,
  innerSelector,
  innerStrength = 0.4,
}: MagneticOptions = {}) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof window === 'undefined') return;

    const fine = window.matchMedia('(pointer: fine)');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!fine.matches || reduce.matches) return;

    const inner = innerSelector
      ? el.querySelector<HTMLElement>(innerSelector)
      : null;

    const xTo = gsap.quickTo(el, 'x', { duration: 0.45, ease: 'power3.out' });
    const yTo = gsap.quickTo(el, 'y', { duration: 0.45, ease: 'power3.out' });
    const ixTo = inner
      ? gsap.quickTo(inner, 'x', { duration: 0.4, ease: 'power3.out' })
      : null;
    const iyTo = inner
      ? gsap.quickTo(inner, 'y', { duration: 0.4, ease: 'power3.out' })
      : null;

    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);
      const tx = Math.max(-1, Math.min(1, dx)) * strength;
      const ty = Math.max(-1, Math.min(1, dy)) * strength;
      xTo(tx);
      yTo(ty);
      ixTo?.(tx * innerStrength + tx);
      iyTo?.(ty * innerStrength + ty);
    };

    const reset = () => {
      xTo(0);
      yTo(0);
      ixTo?.(0);
      iyTo?.(0);
    };

    el.addEventListener('pointermove', onMove);
    el.addEventListener('pointerleave', reset);
    return () => {
      el.removeEventListener('pointermove', onMove);
      el.removeEventListener('pointerleave', reset);
    };
  }, [strength, innerSelector, innerStrength]);

  return ref;
}
