'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Github, Linkedin, MapPin, Clock, Send } from 'lucide-react';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '../utils/animations';
import { cn } from '../utils/cn';
import { PortfolioData } from '../models/PortfolioData';

export default function Contact() {
  const portfolioData = PortfolioData.getInstance();
  const contactInfo = portfolioData.getContactInfo();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Send to Next.js API route
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log('API response:', result);

      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setErrorMessage('');
      } else {
        setSubmitStatus('error');
        setErrorMessage(result.message || 'Bilinmeyen hata oluştu');
        console.error('Form submission failed:', result.message);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setErrorMessage('Bağlantı hatası oluştu. Lütfen tekrar deneyin.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Telefon",
      value: contactInfo.phone,
      href: `tel:${contactInfo.phone}`,
      color: "text-green-400 bg-green-400/10 border-green-400/20"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "E-posta",
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
      color: "text-blue-400 bg-blue-400/10 border-blue-400/20"
    },
    {
      icon: <Github className="w-6 h-6" />,
      title: "GitHub",
      value: contactInfo.github,
      href: `https://${contactInfo.github}`,
      color: "text-gray-400 bg-gray-400/10 border-gray-400/20"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: "LinkedIn",
      value: contactInfo.linkedin,
      href: `https://${contactInfo.linkedin}`,
      color: "text-blue-500 bg-blue-500/10 border-blue-500/20"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/20">
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
              <span className="gradient-text">İletişim</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Projeleriniz için benimle iletişime geçin. Birlikte harika şeyler yaratabiliriz!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              variants={fadeInLeft}
              className="space-y-8"
            >
              {/* Contact Methods */}
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={method.title}
                    whileHover={{ scale: 1.02, x: 10 }}
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center p-6 glass rounded-2xl hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className={cn(
                      "p-4 rounded-xl border mr-6 group-hover:scale-110 transition-transform duration-300",
                      method.color
                    )}>
                      {method.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{method.title}</h3>
                      <p className="text-muted-foreground">{method.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Location & Availability */}
              <div className="glass rounded-2xl p-8">
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="p-3 bg-primary/10 rounded-lg mr-4">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Konum</h3>
                      <p className="text-muted-foreground">İzmir, Türkiye</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="p-3 bg-green-400/10 rounded-lg mr-4">
                      <Clock className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Müsaitlik</h3>
                      <p className="text-muted-foreground">Yeni projeler için açığım</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              variants={fadeInRight}
              className="glass rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6">Mesaj Gönder</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Ad Soyad
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      placeholder="Adınız ve soyadınız"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      E-posta
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      placeholder="ornek@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Konu
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="Mesajınızın konusu"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Mesaj
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Mesajınızı buraya yazın..."
                  />
                </div>
                
                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                    ✅ Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağım.
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                    ❌ {errorMessage || 'Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin veya doğrudan e-posta gönderin.'}
                  </div>
                )}

                <motion.button
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "w-full flex items-center justify-center gap-2 px-6 py-4 rounded-lg transition-colors duration-300 font-semibold",
                    isSubmitting 
                      ? "bg-gray-400 text-gray-200 cursor-not-allowed" 
                      : "bg-primary text-white hover:bg-primary-dark"
                  )}
                >
                  <Send className="w-5 h-5" />
                  <span>{isSubmitting ? 'Gönderiliyor...' : 'Mesaj Gönder'}</span>
                </motion.button>
              </form>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            variants={fadeInUp}
            className="text-center mt-16"
          >
            <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Birlikte Çalışalım!</h3>
              <p className="text-muted-foreground mb-6">
                Mobil uygulama geliştirme, Flutter projeleri veya yazılım danışmanlığı 
                konularında benimle iletişime geçebilirsiniz. Projelerinizi hayata 
                geçirmek için buradayım.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={`mailto:${contactInfo.email}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors duration-300"
                >
                  <Mail className="w-5 h-5" />
                  <span>E-posta Gönder</span>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={`tel:${contactInfo.phone}`}
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  <span>Telefon Et</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
