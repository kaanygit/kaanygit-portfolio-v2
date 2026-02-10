'use client';

import { useState } from 'react';
import { Phone, Mail, Github, Linkedin, Send } from 'lucide-react';
import { PortfolioData } from '../models/PortfolioData';
import SectionHeader from './ui/SectionHeader';
import ScrollReveal from './ui/ScrollReveal';

export default function Contact() {
  const data = PortfolioData.getInstance();
  const contactInfo = data.getContactInfo();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
        setErrorMessage('Mesaj gönderilemedi. Lütfen tekrar deneyin.');
      }
    } catch {
      setSubmitStatus('error');
      setErrorMessage('Bir hata oluştu. Lütfen tekrar deneyin.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: <Phone size={18} />,
      label: 'Telefon',
      value: contactInfo.phone,
      href: `tel:${contactInfo.phone.replace(/\s/g, '')}`,
    },
    {
      icon: <Mail size={18} />,
      label: 'E-posta',
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
    },
    {
      icon: <Github size={18} />,
      label: 'GitHub',
      value: contactInfo.github,
      href: `https://${contactInfo.github}`,
    },
    {
      icon: <Linkedin size={18} />,
      label: 'LinkedIn',
      value: 'LinkedIn',
      href: `https://${contactInfo.linkedin}`,
    },
  ];

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          title="İletişim"
          subtitle="Bir projeniz mi var? Birlikte çalışalım."
        />

        {/* Contact Methods */}
        <ScrollReveal>
          <div className="flex flex-wrap gap-6 mb-16">
            {contactMethods.map((method) => (
              <a
                key={method.label}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <span className="text-accent group-hover:text-accent">
                  {method.icon}
                </span>
                <span className="font-mono text-sm">{method.value}</span>
              </a>
            ))}
          </div>
        </ScrollReveal>

        {/* Form */}
        <ScrollReveal delay={0.1}>
          <form onSubmit={handleSubmit} className="max-w-2xl space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2"
                >
                  İsim
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-border focus:border-accent outline-none py-3 text-foreground placeholder:text-muted-foreground/50 transition-colors"
                  placeholder="Adınız"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2"
                >
                  E-posta
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-border focus:border-accent outline-none py-3 text-foreground placeholder:text-muted-foreground/50 transition-colors"
                  placeholder="E-posta adresiniz"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2"
              >
                Konu
              </label>
              <input
                id="subject"
                type="text"
                required
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                className="w-full bg-transparent border-b border-border focus:border-accent outline-none py-3 text-foreground placeholder:text-muted-foreground/50 transition-colors"
                placeholder="Proje konusu"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2"
              >
                Mesaj
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full bg-transparent border-b border-border focus:border-accent outline-none py-3 text-foreground placeholder:text-muted-foreground/50 transition-colors resize-none"
                placeholder="Mesajınız..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 bg-accent text-white px-8 py-3 rounded-lg font-body font-medium text-sm hover:bg-accent-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Gönderiliyor...' : 'Mesaj Gönder'}
              <Send size={14} />
            </button>

            {submitStatus === 'success' && (
              <p className="text-accent font-body text-sm">
                Mesajınız başarıyla gönderildi!
              </p>
            )}
            {submitStatus === 'error' && (
              <p className="text-red-500 font-body text-sm">{errorMessage}</p>
            )}
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}
