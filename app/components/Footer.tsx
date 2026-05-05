'use client';

import { useTranslations } from 'next-intl';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { PortfolioData } from '../models/PortfolioData';

const data = PortfolioData.getInstance();

export default function Footer() {
  const t = useTranslations('footer');
  const contact = data.getContactInfo();
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-10 md:px-8 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-foreground font-display text-[11px] font-semibold tracking-tight text-background">
                YK
              </span>
              <span className="font-display text-sm font-medium tracking-tight text-foreground">
                Yasin Kaan Yiğit
              </span>
            </div>
            <p className="mt-2 max-w-md text-pretty text-xs text-foreground-muted">
              {t('tagline')}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`https://${contact.github}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-foreground-subtle transition-colors hover:text-foreground"
            >
              <Github size={16} strokeWidth={1.5} />
            </a>
            <a
              href={`https://${contact.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-foreground-subtle transition-colors hover:text-foreground"
            >
              <Linkedin size={16} strokeWidth={1.5} />
            </a>
            <a
              href={`mailto:${contact.email}`}
              aria-label="Email"
              className="text-foreground-subtle transition-colors hover:text-foreground"
            >
              <Mail size={16} strokeWidth={1.5} />
            </a>
            <button
              onClick={scrollToTop}
              aria-label={t('scrollTop')}
              className="focus-ring ml-3 inline-flex h-8 w-8 items-center justify-center rounded-full border border-border bg-card/40 text-foreground-muted transition-colors hover:border-border-strong hover:text-foreground"
            >
              <ArrowUp size={13} strokeWidth={1.75} />
            </button>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-6 text-[11px] text-foreground-subtle">
          <span className="font-mono uppercase tracking-wider">
            © {year} Yasin Kaan Yiğit · {t('rights')}
          </span>
        </div>
      </div>
    </footer>
  );
}
