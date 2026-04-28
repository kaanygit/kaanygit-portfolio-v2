import { Project, Experience, Skill, Education, ContactInfo, Service } from '../types';

export class PortfolioData {
  private static instance: PortfolioData;
  
  private constructor() {}
  
  public static getInstance(): PortfolioData {
    if (!PortfolioData.instance) {
      PortfolioData.instance = new PortfolioData();
    }
    return PortfolioData.instance;
  }

  public getPersonalInfo() {
    return {
      name: "Yasin Kaan Yiğit",
      title: "Full-Stack & Mobile Developer",
      summary: "Flutter ile mobil uygulamalar, Next.js ve React ile modern web arayüzleri, Node.js ve Firebase ile backend servisleri geliştiriyorum. AI destekli ürünler, legaltech platformları, marketplace uygulamaları ve coaching ürünleri üzerinde uçtan uca ürün geliştirme deneyimine sahibim.",
      languages: [
        { name: "Türkçe", level: "Ana dil" },
        { name: "İngilizce", level: "Orta seviye (B1)" }
      ]
    };
  }

  public getEducation(): Education[] {
    return [
      {
        id: "1",
        degree: "Matematik Lisans",
        institution: "Ege Üniversitesi, İzmir",
        period: "Eyl 2020 – Tem 2025",
        description: "Analitik düşünme, problem çözme ve matematiksel modelleme"
      },
      {
        id: "2",
        degree: "Bilgisayar Programcılıığı (Önlisans)",
        institution: "İstanbul Üniversitesi, İstanbul",
        period: "Eyl 2022 – Haz 2025",
        description: "Programlama temelleri, veri yapıları, algoritmalar ve yazılım geliştirme süreçleri"
      }
    ];
  }

  public getExperiences(): Experience[] {
    return [
      {
        id: "1",
        title: "Software Developer",
        company: "Lawantra",
        period: "Ağu 2025 – Devam",
        type: "Tam zamanlı",
        location: "Uzaktan, İzmir",
        description: "Next.js, Node.js, Firebase, REST API ve Flutter kullanarak web, backend ve mobil katmanları kapsayan legaltech platform özellikleri geliştiriyorum.\nAI destekli hukuki iş akışları, güvenli belge süreçleri, KVKK odaklı veri gizliliği ve avukatlara yönelik otomasyon araçları için ürün akışları geliştiriyorum.\nMobil uygulama geliştirme, ön uç geliştirme, backend entegrasyonları ve canlı web platformu iyileştirmelerine katkı sağlıyorum.",
        technologies: ["Next.js", "Node.js", "Firebase", "REST API", "Flutter", "AI Integration"],
        link: "https://lawantra.com"
      },
      {
        id: "2",
        title: "Software Developer",
        company: "Appgamedo",
        period: "Ağu 2025 – Devam",
        type: "Tam zamanlı",
        location: "Uzaktan",
        description: "Coachun platformunda koç keşfi, güvenli mesajlaşma, randevu alma, görüntülü görüşme, kişiselleştirilmiş öneriler ve çok dilli ürün akışları üzerinde çalışıyorum.\n100+ koç ve 200+ kullanıcıya hizmet veren, kullanıcı sayısı büyüyen Coachun ürününe katkı sağlıyorum.\nMobil geliştirme, frontend arayüzleri, backend web teknolojileri ve veritabanı destekli ürün akışlarına katkı sağlıyorum.",
        technologies: ["Flutter", "Dart", "Firebase", "REST API", "Frontend", "Backend"],
        link: "https://coachun.com"
      },
      {
        id: "3",
        title: "Freelance Software Developer",
        company: "Serbest",
        period: "Haz 2024 – Devam",
        type: "Freelance",
        location: "Uzaktan",
        description: "Flutter, Dart, Firebase, REST API, BLoC ve MVC kullanarak 10+ mobil uygulama geliştirdim.\nMarketplace, health, accessibility, coaching, AI productivity ve legaltech alanlarında 10+ ürün teslim ettim.\nAuthentication, Firestore veri modelleri, gerçek zamanlı mesajlaşma, push notification, REST API entegrasyonları ve yayın hazırlığı teslim ettim.",
        technologies: ["Flutter", "Dart", "Firebase", "REST API", "BLoC", "MVC"]
      },
      {
        id: "4",
        title: "Search Engine Quality Development Specialist",
        company: "Yandex",
        period: "Oca 2025 – May 2025",
        type: "Tam zamanlı",
        location: "Uzaktan",
        description: "Arama sonuçlarının kalite, alaka düzeyi, query intent ve kılavuz uyumluluğunu sistematik QA süreçleriyle analiz ettim.\nArama deneyimi, sonuç kalitesi ve ürün kararlarını iyileştirmeye yönelik veri odaklı geri bildirim sağladım.",
        technologies: ["Quality Assurance", "Data Analysis", "Search Algorithms"]
      }
    ];
  }

  public getProjects(): Project[] {
    return [
      {
        id: "1",
        title: "Lawantra.com – AI Legaltech Platformu",
        description: "Hukuki belge otomasyonu, güvenli iş akışları, AI destekli hukuk operasyonları ve mobil bağlantılı ürün akışları için aktif AI legaltech web platformu özellikleri geliştirdim.",
        technologies: ["Next.js", "Node.js", "Firebase", "REST API", "Flutter", "AI Integration"],
        category: "web",
        liveUrl: "https://lawantra.com"
      },
      {
        id: "2",
        title: "Dreeys AI – AI Goal Tracker ve Aksiyon Koçu",
        description: "Görev, alışkanlık, hatırlatma, odak seansı, ilerleme takibi, ödül sistemi, Apple Sign In, uygulama içi satın alma ve 7 dil desteği içeren AI goal tracker yayınladım. Kişiselleştirilmiş hatırlatmalar ve chat-powered AI coach deneyimi içerir.",
        technologies: ["Flutter", "AI Integration", "Firebase", "Apple Sign In", "In-App Purchases"],
        category: "mobile",
        liveUrl: "https://dreeys.com/en",
        appStoreUrl: "https://apps.apple.com/us/app/dreeys-ai/id6761930732"
      },
      {
        id: "3",
        title: "Coachun – Koçluk Platformu",
        description: "100+ koç ve 200+ kullanıcıya hizmet veren koçluk platformunda keşif, mesajlaşma, randevu, görüntülü görüşme ve öneri akışlarına katkı sağladım.",
        technologies: ["Flutter", "Firebase", "Frontend", "Backend"],
        category: "mobile",
        liveUrl: "https://coachun.com",
        appStoreUrl: "https://apps.apple.com/tr/app/coachun/id6751751635?l=tr"
      },
      {
        id: "4",
        title: "ppazar – İlan ve Ticaret Platformu",
        description: "İlan, hizmet, ticaret ve gerçek zamanlı alıcı-satıcı iletişimi için cross-platform mobil marketplace uygulaması geliştirdim. Firebase Realtime Database mesajlaşma, AI destekli araç öneri sistemi, EIDS onaylı ilan akışı ve çoklu mağaza yayın hazırlığı.",
        technologies: ["Flutter", "Dart", "Firebase Realtime Database", "AI Integration"],
        category: "mobile",
        githubUrl: "https://github.com/kaanygit/ppazar",
        liveUrl: "https://play.google.com/store/apps/details?id=com.ppazar.ppazarapp",
        appStoreUrl: "https://apps.apple.com/us/app/ppazar/id6746058155",
        huaweiUrl: "https://appgallery.huawei.com/app/C114328649"
      },
      {
        id: "5",
        title: "Spory – Sağlık ve Aktivite Uygulaması",
        description: "Kişisel plan akışları ve BLoC tabanlı state management içeren sağlık/aktivite takip uygulaması geliştirdim.",
        technologies: ["Flutter", "Dart", "Firebase", "BLoC"],
        category: "mobile",
        githubUrl: "https://github.com/kaanygit/spory"
      },
      {
        id: "6",
        title: "Harmopy.com – AI Destekli Kişisel Gelişim Platformu",
        description: "Yapay zeka destekli kişisel gelişim ve mental sağlık platformu. Kişiselleştirilmiş koçluk, günlük hedefler, ilham veren içerikler, duygusal durum takibi ve ilerleme analizi özellikleri geliştirdim. 50+ AI koç ile kullanıcıların içsel potansiyelini keşfetmesini sağlayan web platformu.",
        technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "AI Integration"],
        category: "web",
        liveUrl: "https://harmopy.com"
      },
      {
        id: "7",
        title: "Accessible Route",
        description: "Flutter, Dart ve Google Maps API kullanarak erişilebilir rota ve tesis keşfi uygulaması oluşturdum.",
        technologies: ["Flutter", "Dart", "Google Maps API"],
        category: "mobile",
        githubUrl: "https://github.com/kaanygit/accessible-route-app",
        liveUrl: "https://play.google.com/store/apps/details?id=com.accessible.route.app"
      }
    ];
  }

  public getSkills(): Skill[] {
    return [
      { id: "1", name: "Flutter", level: "expert", category: "mobile" },
      { id: "2", name: "Dart", level: "expert", category: "mobile" },
      { id: "3", name: "BLoC", level: "advanced", category: "mobile" },
      { id: "4", name: "MVC", level: "advanced", category: "mobile" },
      { id: "5", name: "Firebase", level: "expert", category: "mobile" },
      { id: "6", name: "Push Notification", level: "advanced", category: "mobile" },
      { id: "7", name: "App Store Yayınlama", level: "advanced", category: "mobile" },

      { id: "8", name: "React", level: "advanced", category: "frontend" },
      { id: "9", name: "Next.js", level: "advanced", category: "frontend" },
      { id: "10", name: "TypeScript", level: "advanced", category: "frontend" },
      { id: "11", name: "JavaScript", level: "advanced", category: "frontend" },
      { id: "12", name: "HTML5", level: "advanced", category: "frontend" },
      { id: "13", name: "CSS3", level: "advanced", category: "frontend" },
      { id: "14", name: "TailwindCSS", level: "advanced", category: "frontend" },
      { id: "15", name: "Redux", level: "intermediate", category: "frontend" },

      { id: "16", name: "Node.js", level: "advanced", category: "backend" },
      { id: "17", name: "Express.js", level: "advanced", category: "backend" },
      { id: "18", name: "NestJS", level: "intermediate", category: "backend" },
      { id: "19", name: "REST API", level: "expert", category: "backend" },
      { id: "20", name: "GraphQL", level: "intermediate", category: "backend" },
      { id: "21", name: "Python", level: "intermediate", category: "backend" },
      { id: "22", name: "Django", level: "intermediate", category: "backend" },
      { id: "23", name: "Flask", level: "intermediate", category: "backend" },
      { id: "24", name: "Socket.io", level: "intermediate", category: "backend" },

      { id: "25", name: "Firestore", level: "expert", category: "database" },
      { id: "26", name: "Firebase Realtime Database", level: "expert", category: "database" },
      { id: "27", name: "PostgreSQL", level: "intermediate", category: "database" },
      { id: "28", name: "MongoDB", level: "intermediate", category: "database" },
      { id: "29", name: "MySQL", level: "intermediate", category: "database" },
      { id: "30", name: "SQLite", level: "intermediate", category: "database" },
      { id: "31", name: "Redis", level: "intermediate", category: "database" },
      { id: "32", name: "Supabase", level: "intermediate", category: "database" },
      { id: "33", name: "AWS", level: "intermediate", category: "database" },
      { id: "34", name: "Google Cloud", level: "intermediate", category: "database" },
      { id: "35", name: "Docker", level: "intermediate", category: "database" },

      { id: "36", name: "AI Integration", level: "advanced", category: "ai" },
      { id: "37", name: "Pandas", level: "intermediate", category: "ai" },
      { id: "38", name: "NumPy", level: "intermediate", category: "ai" },
      { id: "39", name: "TensorFlow", level: "intermediate", category: "ai" },
      { id: "40", name: "Keras", level: "intermediate", category: "ai" },
      { id: "41", name: "scikit-learn", level: "intermediate", category: "ai" },
      { id: "42", name: "Matplotlib", level: "intermediate", category: "ai" },
      { id: "43", name: "OpenCV", level: "intermediate", category: "ai" },

      { id: "44", name: "Git", level: "expert", category: "tools" },
      { id: "45", name: "GitHub", level: "expert", category: "tools" },
      { id: "46", name: "GitLab", level: "intermediate", category: "tools" },
      { id: "47", name: "Postman", level: "intermediate", category: "tools" },
      { id: "48", name: "Figma", level: "intermediate", category: "tools" },
      { id: "49", name: "Canva", level: "intermediate", category: "tools" }
    ];
  }

  public getContactInfo(): ContactInfo {
    return {
      phone: "+90 537 501 9024",
      email: "yasinkaan345@hotmail.com",
      github: "github.com/kaanygit",
      linkedin: "linkedin.com/in/yasinkaanyigit1"
    };
  }

  public getServices(): Service[] {
    return [
      {
        id: "1",
        name: "Giriş Paketi",
        description: "Basit mobil uygulamalar için ideal başlangıç paketi",
        price: "~₺20.000",
        duration: "2-3 hafta",
        level: "beginner",
        features: [
          "5-8 ekran arası uygulama",
          "Basit kullanıcı arayüzü tasarımı",
          "Temel CRUD işlemleri",
          "Firebase Authentication",
          "Firebase Firestore veritabanı",
          "Google Play Store yayınlama",
          "Kaynak kod teslimi"
        ],
        technologies: ["Flutter", "Dart", "Firebase", "Material Design"]
      },
      {
        id: "2",
        name: "Orta Paket",
        description: "Orta ölçekli uygulamalar için kapsamlı çözüm",
        price: "~₺50.000-₺70.000",
        duration: "4-6 hafta",
        level: "intermediate",
        features: [
          "8-15 ekran arası uygulama",
          "Gelişmiş kullanıcı arayüzü tasarımı",
          "Karmaşık CRUD işlemleri",
          "Gerçek zamanlı mesajlaşma",
          "Push notification sistemi",
          "Sosyal medya entegrasyonu",
          "Ödeme sistemi entegrasyonu",
          "Admin paneli",
          "Google Play & App Store yayınlama",
          "Kaynak kod teslimi"
        ],
        technologies: ["Flutter", "Dart", "Firebase", "BLoC", "REST API", "Stripe"]
      },
      {
        id: "3",
        name: "İleri Paket",
        description: "Kurumsal düzeyde platformlar için premium çözüm",
        price: "~₺100.000+",
        duration: "8-12 hafta",
        level: "advanced",
        features: [
          "15+ ekran arası uygulama",
          "Özel tasarım ve animasyonlar",
          "Mikroservis mimarisi",
          "Gerçek zamanlı veri senkronizasyonu",
          "AI/ML entegrasyonu",
          "Çoklu platform desteği (iOS, Android, Web)",
          "Gelişmiş güvenlik önlemleri",
          "Analytics ve raporlama sistemi",
          "Özel backend API geliştirme",
          "Tüm app store'larda yayınlama",
          "1 ay ücretsiz destek",
          "Kaynak kod teslimi",
          "Teknik dokümantasyon"
        ],
        technologies: ["Flutter", "Dart", "Node.js", "MongoDB", "Docker", "AWS", "TensorFlow"]
      }
    ];
  }
}
