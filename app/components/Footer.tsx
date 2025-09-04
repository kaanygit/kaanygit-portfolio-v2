'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { fadeInUp } from '../utils/animations';
import { PortfolioData } from '../models/PortfolioData';

export default function Footer() {
  const portfolioData = PortfolioData.getInstance();
  const contactInfo = portfolioData.getContactInfo();

  const socialLinks = [
    {
      icon: <Github className="w-4 h-4" />,
      href: `https://${contactInfo.github}`,
      label: "GitHub"
    },
    {
      icon: <Linkedin className="w-4 h-4" />,
      href: `https://${contactInfo.linkedin}`,
      label: "LinkedIn"
    },
    {
      icon: <Mail className="w-4 h-4" />,
      href: `mailto:${contactInfo.email}`,
      label: "E-posta"
    }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/20 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Social Links */}
          <div className="flex justify-center space-x-4 mb-6">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-card/50 hover:bg-primary/10 hover:text-primary transition-all duration-300 border border-border/30"
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            <p>© {currentYear} Yasin Kaan Yiğit. Tüm hakları saklıdır.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
