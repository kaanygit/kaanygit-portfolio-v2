'use client';

import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { PortfolioData } from '../models/PortfolioData';

export default function Footer() {
  const data = PortfolioData.getInstance();
  const contactInfo = data.getContactInfo();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <p className="font-mono text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Yasin Kaan Yiğit
        </p>

        <div className="flex items-center gap-5">
          <a
            href={`https://${contactInfo.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
          <a
            href={`https://${contactInfo.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
          <a
            href={`mailto:${contactInfo.email}`}
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="E-posta"
          >
            <Mail size={16} />
          </a>

          <button
            onClick={scrollToTop}
            className="ml-4 w-8 h-8 flex items-center justify-center rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
            aria-label="Yukarı çık"
          >
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
