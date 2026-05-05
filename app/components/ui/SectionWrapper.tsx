'use client';

import { forwardRef, type ReactNode } from 'react';
import clsx from 'clsx';

interface SectionWrapperProps {
  id?: string;
  children: ReactNode;
  className?: string;
  bare?: boolean;
}

const SectionWrapper = forwardRef<HTMLElement, SectionWrapperProps>(
  function SectionWrapper({ id, children, className, bare = false }, ref) {
    return (
      <section
        id={id}
        ref={ref}
        className={clsx(
          'relative w-full',
          !bare && 'py-24 md:py-32 lg:py-40',
          className
        )}
      >
        <div className="mx-auto w-full max-w-6xl px-6 md:px-8 lg:px-10">
          {children}
        </div>
      </section>
    );
  }
);

export default SectionWrapper;
