'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink, Smartphone, Globe, Code } from 'lucide-react';
import { FaGooglePlay, FaAppStore, FaStore } from 'react-icons/fa';
import { fadeInUp, staggerContainer, scaleIn } from '../utils/animations';
import { cn } from '../utils/cn';
import { PortfolioData } from '../models/PortfolioData';
import Image from 'next/image';

export default function Projects() {
  const portfolioData = PortfolioData.getInstance();
  const projects = portfolioData.getProjects();

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'mobile':
        return <Smartphone className="w-5 h-5" />;
      case 'web':
        return <Globe className="w-5 h-5" />;
      default:
        return <Code className="w-5 h-5" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'mobile':
        return 'text-primary bg-primary/10 border-primary/20';
      case 'web':
        return 'text-secondary bg-secondary/10 border-secondary/20';
      default:
        return 'text-accent bg-accent/10 border-accent/20';
    }
  };

  const getProjectImage = (projectId: string) => {
    switch (projectId) {
      case '1': // Spory
        return '/spory-logo.png';
      case '2': // ppazar
        return '/ppazar-logo.png';
      case '3': // Accessible Route
        return '/accesible-route-logo.png';
      default:
        return null;
    }
  };

  return (
    <section id="projects" className="py-20 bg-muted/20">
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
              <span className="gradient-text">Projeler</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Geliştirdiğim mobil uygulamalar ve yazılım projeleri. 
              Her proje, farklı teknolojiler ve mimariler kullanılarak oluşturulmuştur.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={scaleIn}
                whileHover={{ y: -10 }}
                className="group flex"
              >
                <div className="glass rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col w-full">
                  {/* Project Image */}
                  <div className="h-48 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center relative overflow-hidden">
                    {getProjectImage(project.id) ? (
                      <Image
                        src={getProjectImage(project.id)!}
                        alt={project.title}
                        width={120}
                        height={120}
                        className="object-contain rounded-lg"
                      />
                    ) : (
                      <div className="text-6xl opacity-50">
                        {getCategoryIcon(project.category)}
                      </div>
                    )}
                  </div>

                  {/* Project Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    {/* Category Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className={cn(
                        "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border",
                        getCategoryColor(project.category)
                      )}>
                        {getCategoryIcon(project.category)}
                        <span className="ml-2 capitalize">{project.category}</span>
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col gap-2">
                      {project.githubUrl && (
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 px-4 py-2 bg-muted hover:bg-primary hover:text-white rounded-lg transition-colors duration-300"
                        >
                          <Github className="w-4 h-4" />
                          <span className="text-sm font-medium">GitHub</span>
                        </motion.a>
                      )}
                      
                      {project.liveUrl && (
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-300"
                        >
                          <FaGooglePlay className="w-4 h-4" />
                          <span className="text-sm font-medium">Google Play</span>
                        </motion.a>
                      )}

                      {project.appStoreUrl && (
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.appStoreUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-lg transition-colors duration-300"
                        >
                          <FaAppStore className="w-4 h-4" />
                          <span className="text-sm font-medium">App Store</span>
                        </motion.a>
                      )}

                      {project.huaweiUrl && (
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.huaweiUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors duration-300"
                        >
                          <FaStore className="w-4 h-4" />
                          <span className="text-sm font-medium">AppGallery</span>
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            variants={fadeInUp}
            className="text-center mt-16"
          >
            <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Daha Fazla Proje</h3>
              <p className="text-muted-foreground mb-6">
                Tüm projelerimi ve kaynak kodlarını GitHub&apos;da inceleyebilirsiniz.
              </p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/kaanygit"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors duration-300"
              >
                <Github className="w-5 h-5" />
                <span>Git Hub&apos;da Görüntüle</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
