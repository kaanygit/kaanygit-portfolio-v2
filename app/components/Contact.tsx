'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Phone, Mail, Github, Linkedin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper from './ui/SectionWrapper';
import SectionHeader from './ui/SectionHeader';
import Reveal from './ui/Reveal';
import { PortfolioData } from '../models/PortfolioData';

const data = PortfolioData.getInstance();

export default function Contact() {
  const t = useTranslations('contact');
  const contact = data.getContactInfo();

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
      <SectionHeader
        eyebrow={t('eyebrow')}
        title={t('title')}
        subtitle={t('subtitle')}
      />

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">
        <Reveal className="lg:col-span-5">
          <div className="space-y-3">
            {methods.map((m) => (
              <a
                key={m.label}
                href={m.href}
                target={m.href.startsWith('http') ? '_blank' : undefined}
                rel={m.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group flex items-center gap-4 rounded-2xl border border-border bg-card/50 p-4 backdrop-blur transition-all duration-300 hover:border-border-strong hover:bg-card"
              >
                <span className="grid h-10 w-10 place-items-center rounded-full bg-accent-soft text-accent transition-transform duration-300 group-hover:scale-105">
                  {m.icon}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground-subtle">
                    {m.label}
                  </div>
                  <div className="mt-0.5 truncate text-sm font-medium text-foreground">
                    {m.value}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal className="lg:col-span-7" delay={0.1}>
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-border bg-card/60 p-6 backdrop-blur md:p-8"
          >
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
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

            <div className="mt-5">
              <Field
                id="subject"
                label={t('form.subject')}
                placeholder={t('form.subjectPlaceholder')}
                value={formData.subject}
                onChange={(v) => setFormData({ ...formData, subject: v })}
              />
            </div>

            <div className="mt-5">
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

            <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
              <button
                type="submit"
                disabled={submitting}
                className="focus-ring group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-all duration-300 hover:bg-foreground/90 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitting ? t('form.submitting') : t('form.submit')}
                <Send
                  size={13}
                  strokeWidth={2}
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </button>

              <AnimatePresence mode="wait">
                {status === 'success' && (
                  <motion.div
                    key="ok"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="inline-flex items-center gap-2 text-sm text-accent"
                  >
                    <CheckCircle2 size={15} strokeWidth={1.75} />
                    {t('status.success')}
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div
                    key="err"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="inline-flex items-center gap-2 text-sm text-red-500"
                  >
                    <AlertCircle size={15} strokeWidth={1.75} />
                    {t('status.error')}
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
    'mt-2 w-full rounded-2xl border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-foreground-subtle outline-none transition-all duration-200 focus:border-accent focus:bg-card focus:shadow-soft-glow';
  return (
    <div>
      <label
        htmlFor={id}
        className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground-muted"
      >
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
