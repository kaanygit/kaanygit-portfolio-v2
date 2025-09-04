'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Globe, Code, Target } from 'lucide-react';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '../utils/animations';
import { cn } from '../utils/cn';
import { PortfolioData } from '../models/PortfolioData';

export default function About() {
  const portfolioData = PortfolioData.getInstance();
  const personalInfo = portfolioData.getPersonalInfo();
  const education = portfolioData.getEducation();

  return (
    <section id="about" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {/* Section Header */}
          <motion.div
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Hakkımda</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Mobil ve web teknolojilerinde uzmanlaşmış, modern yazılım geliştirme 
              süreçlerinde deneyimli bir geliştiriciyim.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Personal Info */}
            <motion.div
              variants={fadeInLeft}
              className="space-y-8"
            >
              {/* Summary Card */}
              <div className="glass rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-primary/10 rounded-full mr-4">
                    <Code className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Software Developer</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {personalInfo.summary}
                </p>
              </div>

              {/* Languages Card */}
              <div className="glass rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-secondary/10 rounded-full mr-4">
                    <Globe className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold">Diller</h3>
                </div>
                <div className="space-y-4">
                  {personalInfo.languages.map((lang, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="font-medium">{lang.name}</span>
                      <span className="text-muted-foreground">{lang.level}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column - Education */}
            <motion.div
              variants={fadeInRight}
              className="space-y-6"
            >
              <div className="flex items-center mb-8">
                <div className="p-3 bg-accent/10 rounded-full mr-4">
                  <GraduationCap className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold">Eğitim</h3>
              </div>

              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  variants={fadeInUp}
                  className="glass rounded-2xl p-6 relative"
                >
                  <div className="absolute left-6 top-6 w-4 h-4 bg-primary rounded-full" />
                  <div className="absolute left-7 top-10 w-0.5 h-full bg-border" />
                  
                  <div className="ml-8">
                    <h4 className="text-xl font-bold mb-2">{edu.degree}</h4>
                    <p className="text-primary font-semibold mb-2">{edu.institution}</p>
                    <p className="text-muted-foreground mb-3">{edu.period}</p>
                    {edu.description && (
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {edu.description}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Skills Preview */}
          <motion.div
            variants={fadeInUp}
            className="mt-16 text-center"
          >
            <div className="glass rounded-2xl p-8">
              <div className="flex items-center justify-center mb-6">
                <div className="p-3 bg-primary/10 rounded-full mr-4">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Uzmanlık Alanlarım</h3>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                {['Flutter', 'Dart', 'Node.js', 'React', 'Firebase', 'REST API', 'MongoDB', 'PostgreSQL'].map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium border border-primary/20"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
