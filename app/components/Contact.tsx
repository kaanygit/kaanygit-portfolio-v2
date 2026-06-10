'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Phone, Mail, Github, Linkedin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper from './ui/SectionWrapper';
import Reveal from './ui/Reveal';
import SplitLines from './ui/SplitLines';
import { PortfolioData } from '../models/PortfolioData';
import { useMagnetic } from '../hooks/useMagnetic';

const data = PortfolioData.getInstance();

export default function Contact() {
  const t = useTranslations('contact');
  const contact = data.getContactInfo();
  const submitRef = useMagnetic<HTMLButtonElement>({ strength: 8 });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus('idle');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    } finally {
      setSubmitting(false);
    }
  };

  const methods = [
    {
      icon: <Mail size={15} strokeWidth={1.75} />,
      label: t('methods.email'),
      value: contact.email,
      href: `mailto:${contact.email}`,
    },
    {
      icon: <Phone size={15} strokeWidth={1.75} />,
      label: t('methods.phone'),
      value: contact.phone,
      href: `tel:${contact.phone.replace(/\s/g, '')}`,
    },
    {
      icon: <Github size={15} strokeWidth={1.75} />,
      label: t('methods.github'),
      value: '@kaanygit',
      href: `https://${contact.github}`,
    },
    {
      icon: <Linkedin size={15} strokeWidth={1.75} />,
      label: t('methods.linkedin'),
      value: 'yasinkaanyigit1',
      href: `https://${contact.linkedin}`,
    },
  ];

  return (
    <SectionWrapper id="contact">
      <div className="mb-14 md:mb-20">
        <Reveal y={12}>
          <div className="mono-label flex items-baseline gap-3 text-gray-1">
            <span className="text-foreground">06</span>
            <span aria-hidden>/</span>
            <span>{t('eyebrow')}</span>
          </div>
        </Reveal>
        <SplitLines
          as="h2"
          className="display-huge mt-5 break-words text-[clamp(40px,7vw,104px)] text-foreground"
        >
          {t('title')}
        </SplitLines>
        <Reveal delay={0.15} className="mt-6">
          <p className="max-w-2xl text-pretty text-base font-medium leading-relaxed text-gray-1 md:text-lg">
            {t('subtitle')}
          </p>
        </Reveal>
        <Reveal delay={0.2} className="mt-10">
          <a
            href={`mailto:${contact.email}`}
            className="link-draw focus-ring inline-block break-all font-display text-[clamp(22px,4vw,56px)] font-bold lowercase tracking-tight text-foreground"
          >
            {contact.email}
          </a>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10">
        {/* Methods table */}
        <Reveal className="lg:col-span-5">
          <div className="hairline-b">
            {methods.map((m) => (
              <a
                key={m.label}
                href={m.href}
                target={m.href.startsWith('http') ? '_blank' : undefined}
                rel={m.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group hairline-t flex items-center justify-between gap-4 py-4 transition-colors duration-300 hover:bg-foreground hover:text-background md:px-3"
              >
                <span className="mono-label flex items-center gap-3 text-gray-1 transition-colors group-hover:text-background/60">
                  {m.icon}
                  {m.label}
                </span>
                <span className="flex items-center gap-3 truncate text-sm font-medium">
                  {m.value}
                  <span
                    aria-hidden
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  >
                    ↗
                  </span>
                </span>
              </a>
            ))}
          </div>
        </Reveal>

        {/* Form */}
        <Reveal className="lg:col-span-7" delay={0.1}>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <Field
                id="name"
                label={t('form.name')}
                placeholder={t('form.namePlaceholder')}
                value={formData.name}
                onChange={(v) => setFormData({ ...formData, name: v })}
              />
              <Field
                id="email"
                type="email"
                label={t('form.email')}
                placeholder={t('form.emailPlaceholder')}
                value={formData.email}
                onChange={(v) => setFormData({ ...formData, email: v })}
              />
            </div>

            <div className="mt-8">
              <Field
                id="subject"
                label={t('form.subject')}
                placeholder={t('form.subjectPlaceholder')}
                value={formData.subject}
                onChange={(v) => setFormData({ ...formData, subject: v })}
              />
            </div>

            <div className="mt-8">
              <Field
                id="message"
                multiline
                rows={5}
                label={t('form.message')}
                placeholder={t('form.messagePlaceholder')}
                value={formData.message}
                onChange={(v) => setFormData({ ...formData, message: v })}
              />
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
              <button
                ref={submitRef}
                type="submit"
                disabled={submitting}
                className="invert-block focus-ring group inline-flex items-center gap-3 px-8 py-4 text-sm font-medium disabled:cursor-not-allowed disabled:opacity-60"
                style={{ willChange: 'transform' }}
              >
                {submitting ? t('form.submitting') : t('form.submit')}
                <span
                  aria-hidden
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                >
                  ↗
                </span>
              </button>

              <AnimatePresence mode="wait">
                {status === 'success' && (
                  <motion.div
                    key="ok"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mono-label text-foreground"
                  >
                    ■ {t('status.success')}
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div
                    key="err"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mono-label text-foreground"
                  >
                    ⚠ {t('status.error')}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </form>
        </Reveal>
      </div>
    </SectionWrapper>
  );
}

interface FieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  multiline?: boolean;
  rows?: number;
}

function Field({
  id,
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
  multiline,
  rows,
}: FieldProps) {
  const baseCls =
    'mt-3 w-full border-0 border-b border-hairline bg-transparent px-0 py-2 text-base text-foreground placeholder:text-gray-2 outline-none transition-colors duration-200 focus:border-foreground';
  return (
    <div>
      <label htmlFor={id} className="mono-label text-gray-1">
        {label}
      </label>
      {multiline ? (
        <textarea
          id={id}
          required
          rows={rows}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`${baseCls} resize-none`}
        />
      ) : (
        <input
          id={id}
          type={type}
          required
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={baseCls}
        />
      )}
    </div>
  );
}
