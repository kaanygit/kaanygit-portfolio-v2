'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../../lib/gsap';

/**
 * Animated mesh gradient that breathes and slowly rotates.
 * Three layered conic/radial gradients with independent timelines.
 * Uses transform + opacity only — GPU friendly.
 * Falls back to a static mesh under prefers-reduced-motion.
 */
export default function AuroraMesh() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = root.current;
      if (!el) return;

      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const layers = el.querySelectorAll<HTMLElement>('[data-aurora]');
        layers.forEach((layer, i) => {
          const dir = i % 2 === 0 ? 1 : -1;
          gsap.to(layer, {
            rotate: 360 * dir,
            duration: 60 + i * 18,
            repeat: -1,
            ease: 'none',
          });
          gsap.to(layer, {
            scale: i === 1 ? 1.18 : 1.08,
            duration: 9 + i * 2,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
          });
        });
      });
      return () => mm.revert();
    },
    { scope: root as React.RefObject<HTMLElement> }
  );

  return (
    <div
      ref={root}
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* base wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

      {/* layer 1 — top right ambient */}
      <div
        data-aurora
        className="absolute -right-1/4 -top-1/3 h-[120vh] w-[120vh] rounded-full opacity-50 blur-[90px] dark:opacity-40"
        style={{
          background:
            'conic-gradient(from 220deg at 50% 50%, color-mix(in srgb, var(--foreground) 12%, transparent), transparent 45%, color-mix(in srgb, var(--foreground) 6%, transparent) 70%, transparent 100%)',
          willChange: 'transform',
        }}
      />

      {/* layer 2 — center soft glow */}
      <div
        data-aurora
        className="absolute left-1/2 top-1/3 h-[90vh] w-[90vh] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-[110px] dark:opacity-30"
        style={{
          background:
            'radial-gradient(closest-side, color-mix(in srgb, var(--foreground) 10%, transparent) 0%, transparent 70%)',
          willChange: 'transform',
        }}
      />

      {/* layer 3 — bottom left depth */}
      <div
        data-aurora
        className="absolute -bottom-1/3 -left-1/4 h-[110vh] w-[110vh] rounded-full opacity-40 blur-[120px] dark:opacity-35"
        style={{
          background:
            'conic-gradient(from 60deg at 50% 50%, color-mix(in srgb, var(--foreground) 8%, transparent), transparent 50%, color-mix(in srgb, var(--foreground) 12%, transparent) 80%, transparent 100%)',
          willChange: 'transform',
        }}
      />

      {/* fine grain noise (helps avoid banding on big gradients) */}
      <div
        className="absolute inset-0 opacity-[var(--noise-opacity)]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.7'/></svg>\")",
        }}
      />
    </div>
  );
}
