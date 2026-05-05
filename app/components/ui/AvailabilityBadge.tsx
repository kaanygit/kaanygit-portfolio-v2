'use client';

import { useEffect, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';

const TZ = 'Europe/Istanbul';

function format(locale: string) {
  try {
    const time = new Intl.DateTimeFormat(locale, {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
      timeZone: TZ,
    }).format(new Date());
    return `${time}`;
  } catch {
    return '';
  }
}

export default function AvailabilityBadge() {
  const t = useTranslations('hero');
  const locale = useLocale();
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    setTime(format(locale));
    const id = setInterval(() => setTime(format(locale)), 30_000);
    return () => clearInterval(id);
  }, [locale]);

  return (
    <div className="inline-flex items-center gap-2 text-[12px] text-foreground-muted">
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
      </span>
      <span className="font-medium text-foreground-muted">{t('availability')}</span>
      <span aria-hidden className="text-foreground-subtle">·</span>
      <span className="text-foreground-subtle">{t('location')}</span>
      {time && (
        <>
          <span aria-hidden className="text-foreground-subtle">·</span>
          <span
            className="font-mono tabular-nums text-foreground-subtle"
            suppressHydrationWarning
          >
            {time} GMT+3
          </span>
        </>
      )}
    </div>
  );
}
