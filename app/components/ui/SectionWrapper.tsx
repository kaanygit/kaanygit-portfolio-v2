'use client';

import { forwardRef, type ReactNode } from 'react';
import clsx from 'clsx';

interface SectionWrapperProps {
  id?: string;
  children: ReactNode;
  className?: string;
  bare?: boolean;
  /** Full-width hairline opening the section. */
  rule?: boolean;
}

const SectionWrapper = forwardRef<HTMLElement, SectionWrapperProps>(
  function SectionWrapper(
    { id, children, className, bare = false, rule = true },
    ref
  ) {
    return (
      <section
        id={id}
        ref={ref}
        className={clsx(
          'relative w-full',
          rule && 'hairline-t',
          !bare && 'py-20 md:py-28 lg:py-36',
          className
        )}
      >
        <div className="mx-auto w-full max-w-[1440px] px-5 md:px-10">
          {children}
        </div>
      </section>
    );
  }
);

export default SectionWrapper;
