'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { cn } from '../utils/cn';
import { PortfolioData } from '../models/PortfolioData';
import { Code, Database, Globe, Smartphone, Wrench } from 'lucide-react';

export default function Skills() {
  const portfolioData = PortfolioData.getInstance();
  const skills = portfolioData.getSkills();

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'mobile':
        return <Smartphone className="w-6 h-6" />;
      case 'frontend':
        return <Globe className="w-6 h-6" />;
      case 'backend':
        return <Code className="w-6 h-6" />;
      case 'database':
        return <Database className="w-6 h-6" />;
      case 'tools':
        return <Wrench className="w-6 h-6" />;
      default:
        return <Code className="w-6 h-6" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'mobile':
        return 'text-primary bg-primary/10 border-primary/20';
      case 'frontend':
        return 'text-secondary bg-secondary/10 border-secondary/20';
      case 'backend':
        return 'text-accent bg-accent/10 border-accent/20';
      case 'database':
        return 'text-green-400 bg-green-400/10 border-green-400/20';
      case 'tools':
        return 'text-orange-400 bg-orange-400/10 border-orange-400/20';
      default:
        return 'text-muted-foreground bg-muted border-border';
    }
  };


  const getCategoryName = (category: string) => {
    switch (category) {
      case 'mobile':
        return 'Mobil Geliştirme';
      case 'frontend':
        return 'Frontend';
      case 'backend':
        return 'Backend';
      case 'database':
        return 'Veritabanı';
      case 'tools':
        return 'Araçlar';
      default:
        return 'Diğer';
    }
  };

  const getSkillIcon = (skillName: string) => {
    const name = skillName.toLowerCase();
    
    // Programming Languages
    if (name.includes('c#')) return <i className="bx bxl-c-sharp text-2xl text-purple-500"></i>;
    if (name.includes('c ')) return <i className="bx bx-code-alt text-2xl text-blue-500"></i>;
    if (name.includes('dart')) return <i className="bx bxl-dart text-2xl text-blue-500"></i>;
    if (name.includes('css3')) return <i className="bx bxl-css3 text-2xl text-blue-400"></i>;
    if (name.includes('graphql')) return <i className="bx bxl-graphql text-2xl text-pink-500"></i>;
    if (name.includes('html5')) return <i className="bx bxl-html5 text-2xl text-orange-500"></i>;
    if (name.includes('javascript')) return <i className="bx bxl-javascript text-2xl text-yellow-400"></i>;
    if (name.includes('php')) return <i className="bx bxl-php text-2xl text-purple-600"></i>;
    if (name.includes('python')) return <i className="bx bxl-python text-2xl text-yellow-500"></i>;
    if (name.includes('typescript')) return <i className="bx bxl-typescript text-2xl text-blue-500"></i>;
    
    // Cloud & Backend Services
    if (name.includes('google cloud')) return <i className="bx bxl-google-cloud text-2xl text-blue-400"></i>;
    if (name.includes('firebase')) return <i className="bx bxl-firebase text-2xl text-orange-400"></i>;
    if (name.includes('netlify')) return <i className="bx bxl-netlify text-2xl text-green-400"></i>;
    if (name.includes('aws')) return <i className="bx bxl-aws text-2xl text-orange-500"></i>;
    if (name.includes('.net')) return <i className="bx bxl-dot-net text-2xl text-purple-500"></i>;
    
    // Frameworks & Libraries
    if (name.includes('django')) return <i className="bx bxl-django text-2xl text-green-600"></i>;
    if (name.includes('express')) return <i className="bx bxl-nodejs text-2xl text-green-500"></i>;
    if (name.includes('flutter')) return <i className="bx bxl-flutter text-2xl text-blue-400"></i>;
    if (name.includes('flask')) return <i className="bx bxl-python text-2xl text-yellow-500"></i>;
    if (name.includes('next')) return <i className="bx bxl-nextjs text-2xl text-gray-300"></i>;
    if (name.includes('node')) return <i className="bx bxl-nodejs text-2xl text-green-500"></i>;
    if (name.includes('opencv')) return <i className="bx bx-camera text-2xl text-blue-500"></i>;
    if (name.includes('react')) return <i className="bx bxl-react text-2xl text-blue-400"></i>;
    if (name.includes('redux')) return <i className="bx bxl-redux text-2xl text-purple-500"></i>;
    if (name.includes('socket')) return <i className="bx bx-wifi text-2xl text-green-400"></i>;
    if (name.includes('tailwind')) return <i className="bx bxl-tailwind-css text-2xl text-cyan-400"></i>;
    if (name.includes('vite')) return <i className="bx bxl-vitejs text-2xl text-purple-500"></i>;
    
    // Databases
    if (name.includes('apache')) return <i className="bx bxl-apache text-2xl text-red-500"></i>;
    if (name.includes('microsoft sql')) return <i className="bx bxl-microsoft text-2xl text-blue-500"></i>;
    if (name.includes('mongodb')) return <i className="bx bxl-mongodb text-2xl text-green-500"></i>;
    if (name.includes('mysql')) return <i className="bx bxl-mysql text-2xl text-blue-600"></i>;
    if (name.includes('postgres')) return <i className="bx bxl-postgresql text-2xl text-blue-600"></i>;
    if (name.includes('redis')) return <i className="bx bxl-redis text-2xl text-red-500"></i>;
    if (name.includes('sqlite')) return <i className="bx bxl-sqlite text-2xl text-blue-500"></i>;
    if (name.includes('supabase')) return <i className="bx bxl-supabase text-2xl text-green-500"></i>;
    
    // Design & AI/ML
    if (name.includes('canva')) return <i className="bx bxl-canva text-2xl text-blue-500"></i>;
    if (name.includes('figma')) return <i className="bx bxl-figma text-2xl text-purple-500"></i>;
    if (name.includes('pandas')) return <i className="bx bxl-python text-2xl text-yellow-500"></i>;
    if (name.includes('tensorflow')) return <i className="bx bxl-tensorflow text-2xl text-orange-500"></i>;
    if (name.includes('matplotlib')) return <i className="bx bxl-python text-2xl text-yellow-500"></i>;
    if (name.includes('scikit')) return <i className="bx bxl-python text-2xl text-yellow-500"></i>;
    if (name.includes('keras')) return <i className="bx bxl-tensorflow text-2xl text-orange-500"></i>;
    if (name.includes('numpy')) return <i className="bx bxl-python text-2xl text-yellow-500"></i>;
    
    // Development Tools
    if (name.includes('github')) return <i className="bx bxl-github text-2xl text-gray-300"></i>;
    if (name.includes('git')) return <i className="bx bxl-git text-2xl text-orange-500"></i>;
    if (name.includes('gitlab')) return <i className="bx bxl-gitlab text-2xl text-orange-500"></i>;
    if (name.includes('docker')) return <i className="bx bxl-docker text-2xl text-blue-500"></i>;
    if (name.includes('postman')) return <i className="bx bxl-postman text-2xl text-orange-500"></i>;
    
    return <i className="bx bx-code-alt text-2xl text-gray-400"></i>;
  };

  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <section id="skills" className="py-20">
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
              <span className="gradient-text">Yetenekler</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Yazılım geliştirme süreçlerinde kullandığım teknolojiler ve 
              seviyelerim. Sürekli öğrenmeye ve gelişmeye odaklanıyorum.
            </p>
          </motion.div>

          {/* Skills by Category */}
          <div className="space-y-12">
            {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
              <motion.div
                key={category}
                variants={fadeInUp}
                className="glass rounded-2xl p-8"
              >
                {/* Category Header */}
                <div className="flex items-center mb-8">
                  <div className={cn(
                    "p-3 rounded-lg mr-4 border",
                    getCategoryColor(category)
                  )}>
                    {getCategoryIcon(category)}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{getCategoryName(category)}</h3>
                    <p className="text-muted-foreground">
                      {categorySkills.length} teknoloji
                    </p>
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categorySkills.map((skill) => (
                    <motion.div
                      key={skill.id}
                      whileHover={{ scale: 1.02, y: -2 }}
                      className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
                    >
                      {/* Skill Name and Icon */}
                      <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center">
                          {getSkillIcon(skill.name)}
                        </div>
                        <h4 className="font-semibold text-lg">{skill.name}</h4>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}
