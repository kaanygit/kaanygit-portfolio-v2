'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from '../../lib/gsap';

interface CountUpProps {
  /** Numeric value to count to. Suffix preserved literally (e.g. 10 + '+'). */
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  decimals?: number;
  className?: string;
}

export default function CountUp({
  value,
  suffix = '',
  prefix = '',
  duration = 1.2,
  decimals = 0,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setReduced(reduce);

    const el = ref.current;
    if (!el) return;

    if (reduce) {
      el.textContent = `${prefix}${value.toFixed(decimals)}${suffix}`;
      return;
    }

    const target = { v: 0 };
    const tween = gsap.to(target, {
      v: value,
      duration,
      ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 90%', once: true },
      onUpdate: () => {
        el.textContent = `${prefix}${target.v.toFixed(decimals)}${suffix}`;
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [value, suffix, prefix, duration, decimals]);

  return (
    <span ref={ref} className={className}>
      {`${prefix}${reduced ? value.toFixed(decimals) : '0'}${suffix}`}
    </span>
  );
}
