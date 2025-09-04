# 🚀 Yasin Kaan Yiğit - Portfolio Website

Modern ve responsive portfolio website'i. Flutter, React ve Next.js projelerini sergileyen, Google Form entegrasyonlu profesyonel bir kişisel website.

![Portfolio Preview](https://img.shields.io/badge/Next.js-15.5.2-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0-pink?style=for-the-badge&logo=framer)

## ✨ Özellikler

### 🎨 Modern Tasarım
- **Responsive Design**: Tüm cihazlarda mükemmel görünüm
- **Dark/Light Theme**: Otomatik tema desteği
- **Smooth Animations**: Framer Motion ile profesyonel animasyonlar
- **Glass Morphism**: Modern cam efekti tasarım

### 📱 Bölümler
- **Hero Section**: Etkileyici giriş bölümü
- **Hakkımda**: Kişisel bilgiler ve eğitim
- **Deneyimler**: İş deneyimleri ve projeler
- **Projeler**: Flutter, React, Next.js projeleri
- **Yetenekler**: Teknik beceriler ve seviyeler
- **Paketler**: App geliştirme hizmet paketleri
- **İletişim**: Google Form entegrasyonlu iletişim

### 🛠️ Teknolojiler

#### Frontend
- **Next.js 15.5.2** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animations
- **Lucide React** - Icons

#### Backend & API
- **Next.js API Routes** - Serverless functions
- **Google Forms API** - Contact form integration

#### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Turbopack** - Fast bundling

## 🚀 Kurulum

### Gereksinimler
- Node.js 18+ 
- npm veya yarn

### Adımlar

1. **Repository'yi klonlayın**
```bash
git clone https://github.com/kaanygit/kaanygit-portfolio-v2.git
cd kaanygit-portfolio-v2
```

2. **Bağımlılıkları yükleyin**
```bash
npm install
# veya
yarn install
```

3. **Development server'ı başlatın**
```bash
npm run dev
# veya
yarn dev
```

4. **Tarayıcıda açın**
```
http://localhost:3000
```

## 📦 Build & Deploy

### Production Build
```bash
npm run build
npm start
```

### Vercel Deploy
```bash
# Vercel CLI ile
vercel --prod

# Veya GitHub'a push edin, otomatik deploy olur
git push origin main
```

## 🎯 Proje Yapısı

```
kaanygit-portfolio-v2/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # Google Form API
│   ├── components/
│   │   ├── About.tsx             # Hakkımda bölümü
│   │   ├── Contact.tsx           # İletişim formu
│   │   ├── Experience.tsx        # Deneyimler
│   │   ├── Footer.tsx            # Footer
│   │   ├── Hero.tsx              # Ana sayfa hero
│   │   ├── Navbar.tsx            # Navigasyon
│   │   ├── Projects.tsx          # Projeler
│   │   ├── Services.tsx          # Hizmet paketleri
│   │   └── Skills.tsx            # Yetenekler
│   ├── models/
│   │   └── PortfolioData.ts      # Veri yönetimi
│   ├── types/
│   │   └── index.ts              # TypeScript tipleri
│   ├── utils/
│   │   ├── animations.ts         # Framer Motion animasyonları
│   │   └── cn.ts                 # Utility fonksiyonlar
│   ├── globals.css               # Global stiller
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Ana sayfa
├── public/
│   ├── spory-logo.png            # Spory proje logosu
│   ├── ppazar-logo.png           # ppazar proje logosu
│   └── accesible-route-logo.png  # Accessible Route logosu
├── tailwind.config.ts            # Tailwind konfigürasyonu
├── next.config.ts                # Next.js konfigürasyonu
└── package.json                  # Proje bağımlılıkları
```

## 🎨 Özelleştirme

### Kişisel Bilgileri Güncelleme
`app/models/PortfolioData.ts` dosyasındaki verileri düzenleyin:

```typescript
// Kişisel bilgiler
name: "Yasin Kaan Yiğit",
title: "Software Developer",
summary: "Mobil ve web uygulamaları geliştiren...",

// Projeler
projects: [
  {
    title: "Spory – Sağlık ve Aktivite Uygulaması",
    description: "Aktivite katılımı ve kişisel plan takibi...",
    // ...
  }
]
```

### Google Form Entegrasyonu
`app/api/contact/route.ts` dosyasında Google Form URL'ini güncelleyin:

```typescript
const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse';
```

### Renk Teması
`tailwind.config.ts` dosyasında renkleri özelleştirin:

```typescript
colors: {
  primary: "hsl(var(--primary))",
  secondary: "hsl(var(--secondary))",
  // ...
}
```

## 📱 Responsive Tasarım

- **Mobile First**: Mobil cihazlar için optimize edilmiş
- **Tablet Support**: iPad ve tablet uyumlu
- **Desktop**: Büyük ekranlar için genişletilmiş
- **Touch Friendly**: Dokunmatik cihazlar için optimize

## 🎭 Animasyonlar

Framer Motion ile profesyonel animasyonlar:
- **Page Transitions**: Sayfa geçişleri
- **Scroll Animations**: Kaydırma animasyonları
- **Hover Effects**: Fare üzerine gelme efektleri
- **Loading States**: Yükleme animasyonları

## 🔧 API Endpoints

### POST /api/contact
İletişim formu için Google Form entegrasyonu

**Request Body:**
```json
{
  "name": "string",
  "email": "string", 
  "subject": "string",
  "message": "string"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Mesaj başarıyla gönderildi!"
}
```

## 🚀 Performans

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals**: Optimize edilmiş
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Otomatik kod bölme
- **Static Generation**: Hızlı yükleme

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

## 👨‍💻 Geliştirici

**Yasin Kaan Yiğit**
- 📧 Email: yasinkaan345@hotmail.com
- 🐙 GitHub: [@kaanygit](https://github.com/kaanygit)
- 💼 LinkedIn: [Yasin Kaan Yiğit](https://linkedin.com/in/yasinkaanyigit1/)

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m 'Add amazing feature'`)
4. Push yapın (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📞 İletişim

Projeleriniz için benimle iletişime geçin:
- **Mobil Uygulama Geliştirme** (Flutter)
- **Web Uygulama Geliştirme** (React, Next.js)
- **Backend API Geliştirme** (Node.js)
- **UI/UX Tasarım**

---

⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!

**Made with ❤️ by Yasin Kaan Yiğit**