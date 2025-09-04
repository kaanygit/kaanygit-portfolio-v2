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
      title: "Software Developer",
      summary: "Mobil ve web uygulamaları geliştiren deneyimli bir yazılım geliştiricisiyim. Flutter ile mobil uygulamalar, Node.js ile backend servisleri ve React ve Next.js ile modern web arayüzleri oluşturuyorum. Firebase, MongoDB ve PostgreSQL gibi modern teknolojilerle ölçeklenebilir çözümler geliştiriyorum.",
      languages: [
        { name: "Türkçe", level: "Ana dil" },
        { name: "İngilizce", level: "B1" }
      ]
    };
  }

  public getEducation(): Education[] {
    return [
      {
        id: "1",
        degree: "Bilgisayar Programcılığı (Önlisans)",
        institution: "İstanbul Üniversitesi",
        period: "2022–2025",
        description: "Programlama temelleri, veri yapıları, algoritmalar ve yazılım geliştirme süreçleri"
      },
      {
        id: "2",
        degree: "Matematik (Lisans)",
        institution: "Ege Üniversitesi",
        period: "2020–2025",
        description: "Analitik düşünme, problem çözme ve matematiksel modelleme"
      }
    ];
  }

  public getExperiences(): Experience[] {
    return [
      {
        id: "1",
        title: "Freelance Software Developer",
        company: "Serbest",
        period: "2024–Günümüz",
        description: "3+ mobil uygulama geliştirdim. Firebase, REST API, BLoC ve MVC mimarileri kullanarak modern ve ölçeklenebilir uygulamalar oluşturdum.",
        technologies: ["Flutter", "Dart", "Firebase", "REST API", "BLoC", "MVC"]
      },
      {
        id: "2",
        title: "Search Engine Quality Development Specialist",
        company: "Yandex",
        period: "2025",
        description: "Arama motoru sonuç kalitesini değerlendirme ve geliştirme süreçlerinde yer aldım.",
        technologies: ["Quality Assurance", "Data Analysis", "Search Algorithms"]
      }
    ];
  }

  public getProjects(): Project[] {
    return [
      {
        id: "1",
        title: "Spory – Sağlık ve Aktivite Uygulaması",
        description: "Aktivite katılımı ve kişisel plan takibi için geliştirilmiş kapsamlı sağlık uygulaması. Kullanıcıların fitness hedeflerini takip etmelerini ve sosyal aktivitelere katılmalarını sağlar.",
        technologies: ["Flutter", "Dart", "Firebase", "BLoC"],
        category: "mobile",
        githubUrl: "https://github.com/kaanygit/spory"
      },
      {
        id: "2",
        title: "ppazar – İlan ve Ticaret Platformu",
        description: "İlan paylaşma ve gerçek zamanlı mesajlaşma özellikli ticaret platformu. Yapay zeka destekli araç öneri sistemi, EİDS onaylı ilanlar ve kapsamlı hizmet kategorileri ile kullanıcılar ürünlerini satabilir ve alıcılarla anında iletişim kurabilir.",
        technologies: ["Flutter", "Firebase Realtime DB", "Dart", "AI Integration"],
        category: "mobile",
        githubUrl: "https://github.com/kaanygit/ppazar",
        liveUrl: "https://play.google.com/store/apps/details?id=com.ppazar.ppazarapp",
        appStoreUrl: "https://apps.apple.com/us/app/ppazar/id6746058155",
        huaweiUrl: "https://appgallery.huawei.com/app/C114328649"
      },
      {
        id: "3",
        title: "Accessible Route App",
        description: "Engelliler için erişilebilir rota ve tesis bulma uygulaması. Google Maps API entegrasyonu ile engelli dostu mekanları ve rotaları gösterir.",
        technologies: ["Flutter", "Google Maps API", "Dart"],
        category: "mobile",
        githubUrl: "https://github.com/kaanygit/accessible-route-app",
        liveUrl: "https://play.google.com/store/apps/details?id=com.accessible.route.app"
      }
    ];
  }

  public getSkills(): Skill[] {
    return [
      // Programming Languages
      { id: "1", name: "C#", level: "intermediate", category: "backend" },
      { id: "2", name: "C", level: "intermediate", category: "backend" },
      { id: "3", name: "Dart", level: "expert", category: "mobile" },
      { id: "4", name: "CSS3", level: "advanced", category: "frontend" },
      { id: "5", name: "GraphQL", level: "intermediate", category: "backend" },
      { id: "6", name: "HTML5", level: "advanced", category: "frontend" },
      { id: "7", name: "JavaScript", level: "advanced", category: "frontend" },
      { id: "8", name: "PHP", level: "intermediate", category: "backend" },
      { id: "9", name: "Python", level: "intermediate", category: "backend" },
      { id: "10", name: "TypeScript", level: "advanced", category: "frontend" },
      
      // Cloud & Backend Services
      { id: "11", name: "Google Cloud", level: "intermediate", category: "backend" },
      { id: "12", name: "Firebase", level: "expert", category: "backend" },
      { id: "13", name: "Netlify", level: "intermediate", category: "backend" },
      { id: "14", name: "AWS", level: "intermediate", category: "backend" },
      { id: "15", name: ".Net", level: "intermediate", category: "backend" },
      
      // Frameworks & Libraries
      { id: "16", name: "Django", level: "intermediate", category: "backend" },
      { id: "17", name: "Express.js", level: "advanced", category: "backend" },
      { id: "18", name: "Flutter", level: "expert", category: "mobile" },
      { id: "19", name: "Flask", level: "intermediate", category: "backend" },
      { id: "20", name: "Next.js", level: "advanced", category: "frontend" },
      { id: "21", name: "Node.js", level: "advanced", category: "backend" },
      { id: "22", name: "OpenCV", level: "intermediate", category: "backend" },
      { id: "23", name: "React", level: "advanced", category: "frontend" },
      { id: "24", name: "Redux", level: "intermediate", category: "frontend" },
      { id: "25", name: "Socket.io", level: "intermediate", category: "backend" },
      { id: "26", name: "TailwindCSS", level: "advanced", category: "frontend" },
      { id: "27", name: "Vite", level: "intermediate", category: "frontend" },
      
      // Databases
      { id: "28", name: "Apache", level: "intermediate", category: "database" },
      { id: "29", name: "Microsoft SQL Server", level: "intermediate", category: "database" },
      { id: "30", name: "MongoDB", level: "intermediate", category: "database" },
      { id: "31", name: "MySQL", level: "intermediate", category: "database" },
      { id: "32", name: "Postgres", level: "intermediate", category: "database" },
      { id: "33", name: "Redis", level: "intermediate", category: "database" },
      { id: "34", name: "SQLite", level: "intermediate", category: "database" },
      { id: "35", name: "Supabase", level: "intermediate", category: "database" },
      
      // Design & AI/ML
      { id: "36", name: "Canva", level: "intermediate", category: "tools" },
      { id: "37", name: "Figma", level: "intermediate", category: "tools" },
      { id: "38", name: "Pandas", level: "intermediate", category: "backend" },
      { id: "39", name: "TensorFlow", level: "intermediate", category: "backend" },
      { id: "40", name: "Matplotlib", level: "intermediate", category: "backend" },
      { id: "41", name: "scikit-learn", level: "intermediate", category: "backend" },
      { id: "42", name: "Keras", level: "intermediate", category: "backend" },
      { id: "43", name: "NumPy", level: "intermediate", category: "backend" },
      
      // Development Tools
      { id: "44", name: "GitHub", level: "expert", category: "tools" },
      { id: "45", name: "Git", level: "expert", category: "tools" },
      { id: "46", name: "GitLab", level: "intermediate", category: "tools" },
      { id: "47", name: "Docker", level: "intermediate", category: "tools" },
      { id: "48", name: "Postman", level: "intermediate", category: "tools" }
    ];
  }

  public getContactInfo(): ContactInfo {
    return {
      phone: "+90 537 501 9024",
      email: "yasinkaan345@hotmail.com",
      github: "github.com/kaanygit",
      linkedin: "linkedin.com/in/yasinkaanyigit1/"
    };
  }

  public getServices(): Service[] {
    return [
      {
        id: "1",
        name: "Giriş Paketi",
        description: "Basit mobil uygulamalar için ideal başlangıç paketi",
        price: "Ortalama ₺15.000",
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
        price: "Ortalama ₺40.000",
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
        price: "Ortalama ₺80.000",
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
