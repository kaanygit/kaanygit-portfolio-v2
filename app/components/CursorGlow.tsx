'use client';

import { useEffect, useRef } from 'react';
import { gsap } from '../lib/gsap';

/**
 * Subtle cursor-follow glow shown on devices with a fine pointer.
 * Disabled when prefers-reduced-motion is reduce or on touch devices.
 */
export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof window === 'undefined') return;

    const finePointer = window.matchMedia('(pointer: fine)');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!finePointer.matches || reducedMotion.matches) {
      el.style.display = 'none';
      return;
    }

    const xTo = gsap.quickTo(el, 'x', { duration: 0.6, ease: 'power3.out' });
    const yTo = gsap.quickTo(el, 'y', { duration: 0.6, ease: 'power3.out' });

    let visible = false;
    const onMove = (e: PointerEvent) => {
      if (!visible) {
        visible = true;
        gsap.to(el, { autoAlpha: 1, duration: 0.4, ease: 'power2.out' });
      }
      xTo(e.clientX);
      yTo(e.clientY);
    };
    const onLeave = () => {
      visible = false;
      gsap.to(el, { autoAlpha: 0, duration: 0.3 });
    };

    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerleave', onLeave);
    document.addEventListener('mouseleave', onLeave);

    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerleave', onLeave);
      document.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[60] h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 opacity-0 mix-blend-plus-lighter"
      style={{
        background:
          'radial-gradient(circle at center, color-mix(in srgb, var(--accent) 18%, transparent) 0%, transparent 65%)',
        willChange: 'transform, opacity',
      }}
    />
  );
}
