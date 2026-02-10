'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { PortfolioData } from '../models/PortfolioData';
import { staggerContainer, textReveal } from '../utils/animations';

export default function Hero() {
  const data = PortfolioData.getInstance();
  const personalInfo = data.getPersonalInfo();
  const contactInfo = data.getContactInfo();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Left - Main Content (3/5) */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="lg:col-span-3 space-y-8"
          >
            <motion.span
              variants={textReveal}
              className="inline-block font-mono text-sm uppercase tracking-[0.2em] text-accent"
            >
              {personalInfo.title}
            </motion.span>

            <motion.h1
              variants={textReveal}
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[0.95] text-foreground"
            >
              {personalInfo.name.split(' ').map((word, i) => (
                <span key={i} className="block">
                  {word}
                </span>
              ))}
            </motion.h1>

            <motion.p
              variants={textReveal}
              className="text-muted-foreground text-lg md:text-xl max-w-lg leading-relaxed"
            >
              {personalInfo.summary}
            </motion.p>

            <motion.div variants={textReveal} className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => scrollTo('projects')}
                className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-lg font-body font-medium text-sm hover:bg-accent-hover transition-colors"
              >
                Projelerimi Gör
                <ArrowRight size={16} />
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center gap-2 text-foreground font-body font-medium text-sm hover:text-accent transition-colors"
              >
                İletişime Geç
                <ArrowRight size={16} />
              </button>
            </motion.div>

            <motion.div variants={textReveal} className="flex items-center gap-5 pt-4">
              <a
                href={`https://${contactInfo.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href={`https://${contactInfo.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="E-posta"
              >
                <Mail size={20} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right - Decorative Stats (2/5) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:col-span-2 hidden lg:flex flex-col gap-8"
          >
            <div className="border-l-2 border-accent pl-6">
              <span className="font-display text-5xl font-bold text-foreground">10+</span>
              <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground mt-1">
                Mobil Uygulama
              </p>
            </div>
            <div className="border-l-2 border-border pl-6">
              <span className="font-display text-5xl font-bold text-foreground">2.5+</span>
              <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground mt-1">
                Yıl Deneyim
              </p>
            </div>
            <div className="border-l-2 border-border pl-6">
              <span className="font-display text-5xl font-bold text-foreground">48</span>
              <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground mt-1">
                Teknoloji
              </p>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {['Flutter', 'Dart', 'Firebase', 'React', 'Node.js', 'TypeScript'].map(
                (tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground border border-border px-3 py-1 rounded"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
