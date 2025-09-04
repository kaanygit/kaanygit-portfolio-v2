'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Github, Mail } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { cn } from '../utils/cn';

export default function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-start justify-center relative overflow-hidden pt-32">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />
      
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>
      
      {/* Floating Code Blocks */}
      <div className="absolute inset-0 overflow-hidden z-0 hidden lg:block">
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/6 text-primary/30 text-sm font-mono"
        >
          <div className="bg-card/80 backdrop-blur-sm rounded-lg p-3 border border-primary/50 shadow-lg">
            <div className="text-green-400">const</div>
            <div className="text-blue-400">developer</div>
            <div className="text-yellow-400">=</div>
            <div className="text-purple-400">&apos;Yasin&apos;</div>
          </div>
        </motion.div>
        
        <motion.div
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -3, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/3 right-1/6 text-primary/30 text-sm font-mono"
        >
          <div className="bg-card/80 backdrop-blur-sm rounded-lg p-3 border border-secondary/50 shadow-lg">
            <div className="text-green-400">flutter</div>
            <div className="text-blue-400">.build()</div>
          </div>
        </motion.div>
        
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 2, 0]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 left-1/5 text-primary/30 text-sm font-mono"
        >
          <div className="bg-card/80 backdrop-blur-sm rounded-lg p-3 border border-accent/50 shadow-lg">
            <div className="text-green-400">flutter </div>
            <div className="text-blue-400">run</div>
            <div className="text-yellow-400"></div>
          </div>
        </motion.div>
        
        <motion.div
          animate={{ 
            y: [0, 12, 0],
            rotate: [0, -2, 0]
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-1/3 right-1/5 text-primary/30 text-sm font-mono"
        >
          <div className="bg-card/80 backdrop-blur-sm rounded-lg p-3 border border-primary/50 shadow-lg">
            <div className="text-green-400">git</div>
            <div className="text-blue-400">commit</div>
            <div className="text-yellow-400">-m</div>
          </div>
        </motion.div>
      </div>
      
      {/* Animated Gradient Orbs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl" 
      />
      <motion.div 
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.2, 0.4]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-full blur-3xl" 
      />
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[
          { left: 10, top: 20, delay: 0, duration: 3 },
          { left: 20, top: 80, delay: 0.5, duration: 4 },
          { left: 30, top: 40, delay: 1, duration: 3.5 },
          { left: 40, top: 90, delay: 1.5, duration: 4.5 },
          { left: 50, top: 10, delay: 2, duration: 3.2 },
          { left: 60, top: 70, delay: 0.3, duration: 4.2 },
          { left: 70, top: 30, delay: 1.2, duration: 3.8 },
          { left: 80, top: 60, delay: 0.8, duration: 4.8 },
          { left: 90, top: 15, delay: 1.8, duration: 3.3 },
          { left: 15, top: 50, delay: 0.2, duration: 4.1 },
          { left: 25, top: 85, delay: 1.3, duration: 3.7 },
          { left: 35, top: 25, delay: 0.7, duration: 4.3 },
          { left: 45, top: 75, delay: 1.6, duration: 3.9 },
          { left: 55, top: 35, delay: 0.4, duration: 4.6 },
          { left: 65, top: 95, delay: 1.1, duration: 3.4 },
          { left: 75, top: 45, delay: 0.9, duration: 4.4 },
          { left: 85, top: 65, delay: 1.7, duration: 3.6 },
          { left: 95, top: 5, delay: 0.6, duration: 4.7 },
          { left: 5, top: 55, delay: 1.4, duration: 3.1 },
          { left: 12, top: 12, delay: 0.1, duration: 4.9 }
        ].map((particle, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut"
            }}
            className="absolute w-1 h-1 bg-primary/40 rounded-full"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="text-center"
        >
          {/* Greeting */}
          <motion.div
            variants={fadeInUp}
            className="mb-6"
          >
            <span className="text-lg text-muted-foreground font-medium">
              Merhaba, ben
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="gradient-text">Yasin Kaan Yiğit</span>
          </motion.h1>

          {/* Title */}
          <motion.h2
            variants={fadeInUp}
            className="text-2xl md:text-3xl text-muted-foreground font-medium mb-8"
          >
            Software Developer
          </motion.h2>

          {/* Summary */}
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed"
          >
            Mobil ve web uygulamaları geliştiren deneyimli bir yazılım geliştiricisiyim. Flutter ile mobil uygulamalar, 
            Node.js ile backend servisleri ve React ve Next.js ile modern web arayüzleri oluşturuyorum. Firebase, MongoDB ve 
            PostgreSQL gibi modern teknolojilerle ölçeklenebilir çözümler geliştiriyorum.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToProjects}
              className={cn(
                "px-8 py-4 bg-primary text-white rounded-full font-semibold",
                "hover:bg-primary-dark transition-colors duration-300",
                "neon-glow shadow-lg"
              )}
            >
              Projelerimi Gör
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className={cn(
                "px-8 py-4 border-2 border-primary text-primary rounded-full font-semibold",
                "hover:bg-primary hover:text-white transition-all duration-300",
                "backdrop-blur-sm"
              )}
            >
              İletişime Geç
            </motion.button>
          </motion.div>

          {/* Contact Icons */}
          <motion.div
            variants={fadeInUp}
            className="flex justify-center space-x-6 mb-16"
          >
            <motion.a
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:yasinkaan345@hotmail.com"
              className="p-3 rounded-full bg-card border border-border hover:border-primary transition-colors duration-300"
            >
              <Mail className="w-6 h-6 text-primary" />
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/kaanygit"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border hover:border-primary transition-colors duration-300"
            >
              <Github className="w-6 h-6 text-primary" />
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={fadeInUp}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.button
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              onClick={() => {
                const element = document.getElementById('about');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <ChevronDown className="w-8 h-8" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
