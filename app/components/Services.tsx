'use client';

import { motion } from 'framer-motion';
import { Check, Star, Zap, Crown } from 'lucide-react';
import { fadeInUp, staggerContainer, scaleIn } from '../utils/animations';
import { cn } from '../utils/cn';
import { PortfolioData } from '../models/PortfolioData';

export default function Services() {
  const portfolioData = PortfolioData.getInstance();
  const services = portfolioData.getServices();

  const getPackageIcon = (level: string) => {
    switch (level) {
      case 'beginner':
        return <Zap className="w-8 h-8" />;
      case 'intermediate':
        return <Star className="w-8 h-8" />;
      case 'advanced':
        return <Crown className="w-8 h-8" />;
      default:
        return <Zap className="w-8 h-8" />;
    }
  };

  const getPackageColor = (level: string) => {
    switch (level) {
      case 'beginner':
        return 'border-primary bg-primary/5';
      case 'intermediate':
        return 'border-secondary bg-secondary/5';
      case 'advanced':
        return 'border-accent bg-accent/5';
      default:
        return 'border-primary bg-primary/5';
    }
  };

  const getPackageTextColor = (level: string) => {
    switch (level) {
      case 'beginner':
        return 'text-primary';
      case 'intermediate':
        return 'text-secondary';
      case 'advanced':
        return 'text-accent';
      default:
        return 'text-primary';
    }
  };

  return (
    <section id="services" className="py-20 bg-muted/20">
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
              <span className="gradient-text">App Geliştirme Paketleri</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Mobil uygulama veya platform geliştirmek mi istiyorsunuz? 
              İhtiyacınıza uygun paketi seçin ve hayalinizdeki projeyi hayata geçirelim.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                variants={scaleIn}
                whileHover={{ y: -10 }}
                className="group flex"
              >
                <div className={cn(
                  "glass rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 flex flex-col w-full border-2",
                  getPackageColor(service.level)
                )}>
                  {/* Package Header */}
                  <div className="text-center mb-8">
                    <div className={cn(
                      "inline-flex items-center justify-center w-16 h-16 rounded-full mb-4",
                      getPackageColor(service.level)
                    )}>
                      <div className={getPackageTextColor(service.level)}>
                        {getPackageIcon(service.level)}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-2">{service.name}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    
                    <div className="text-3xl font-bold mb-2">
                      <span className={getPackageTextColor(service.level)}>
                        {service.price}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{service.duration}</p>
                  </div>

                  {/* Features */}
                  <div className="flex-grow mb-8">
                    <h4 className="font-semibold mb-4">Paket İçeriği:</h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h4 className="font-semibold mb-3">Kullanılan Teknolojiler:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={cn(
                      "w-full py-3 rounded-lg font-semibold transition-all duration-300",
                      "hover:shadow-lg",
                      service.level === 'beginner' && "bg-primary text-white hover:bg-primary-dark",
                      service.level === 'intermediate' && "bg-secondary text-white hover:bg-secondary-dark",
                      service.level === 'advanced' && "bg-accent text-white hover:bg-accent-dark"
                    )}
                    onClick={() => {
                      const element = document.getElementById('contact');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    Paketi Seç
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            variants={fadeInUp}
            className="text-center mt-16"
          >
            <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Tam Fiyat ve Özel Projeler</h3>
              <p className="text-muted-foreground mb-6">
                Yukarıdaki fiyatlar ortalama fiyatlardır. Projenizin detaylarına göre tam fiyat 
                belirlenir. Özel projeler için bana ulaşın, size özel bir çözüm geliştirelim.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors duration-300"
                >
                  <span>Tam Fiyat İçin İletişime Geç</span>
                </motion.button>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="tel:+905375019024"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300"
                >
                  <span>Hemen Ara: 0537 501 90 24</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
