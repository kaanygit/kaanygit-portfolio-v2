'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Code2 } from 'lucide-react';
import { fadeInUp, fadeInLeft, staggerContainer } from '../utils/animations';
import { cn } from '../utils/cn';
import { PortfolioData } from '../models/PortfolioData';

export default function Experience() {
  const portfolioData = PortfolioData.getInstance();
  const experiences = portfolioData.getExperiences();

  return (
    <section id="experience" className="py-20">
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
              <span className="gradient-text">Deneyimler</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Yazılım geliştirme alanındaki profesyonel deneyimlerim ve 
              katkıda bulunduğum projeler.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent transform md:-translate-x-0.5 z-0" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  variants={fadeInLeft}
                  className={cn(
                    "relative flex items-center",
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  )}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background transform -translate-x-2 md:-translate-x-2 z-10" />

                  {/* Content Card */}
                  <div className={cn(
                    "ml-16 md:ml-0 w-full md:w-5/12",
                    index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                  )}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="glass rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
                    >
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center">
                          <div className="p-2 bg-primary/10 rounded-lg mr-3">
                            <Briefcase className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold">{exp.title}</h3>
                            <p className="text-primary font-semibold">{exp.company}</p>
                          </div>
                        </div>
                      </div>

                      {/* Period */}
                      <div className="flex items-center text-muted-foreground mb-4">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="text-sm">{exp.period}</span>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Technologies */}
                      <div>
                        <div className="flex items-center mb-3">
                          <Code2 className="w-4 h-4 mr-2 text-accent" />
                          <span className="text-sm font-semibold text-accent">Kullanılan Teknolojiler</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <motion.span
                              key={tech}
                              whileHover={{ scale: 1.05 }}
                              className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium border border-accent/20"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <motion.div
            variants={fadeInUp}
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="text-center glass rounded-2xl p-8">
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <div className="text-muted-foreground">Geliştirilen Uygulama</div>
            </div>
            <div className="text-center glass rounded-2xl p-8">
              <div className="text-4xl font-bold text-secondary mb-2">2.5</div>
              <div className="text-muted-foreground">Yıl Deneyim</div>
            </div>
            <div className="text-center glass rounded-2xl p-8">
              <div className="text-4xl font-bold text-accent mb-2">100%</div>
              <div className="text-muted-foreground">Müşteri Memnuniyeti</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
