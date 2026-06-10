import {
  Project,
  Experience,
  Skill,
  Education,
  ContactInfo,
  Service,
  HeroStat,
  LanguageKey,
} from '../types';

/**
 * Locale-agnostic portfolio data. All translatable strings live in
 * /messages/{locale}.json and are accessed via next-intl's useTranslations
 * with the keys exposed below (project.key, experience.key, etc.).
 */
export class PortfolioData {
  private static instance: PortfolioData;

  private constructor() {}

  public static getInstance(): PortfolioData {
    if (!PortfolioData.instance) {
      PortfolioData.instance = new PortfolioData();
    }
    return PortfolioData.instance;
  }

  public getLanguageKeys(): LanguageKey[] {
    return ['tr', 'en'];
  }

  public getEducation(): Education[] {
    return [{ key: 'ege' }, { key: 'istanbul' }];
  }

  public getExperiences(): Experience[] {
    return [
      {
        key: 'lawantra',
        technologies: [
          'Next.js',
          'Node.js',
          'Firebase',
          'REST API',
          'Flutter',
          'AI Integration',
        ],
        link: 'https://lawantra.com',
        logoUrl: '/lawantra-logo.svg',
      },
      {
        key: 'appgamedo',
        technologies: [
          'Flutter',
          'Dart',
          'Firebase',
          'REST API',
          'Frontend',
          'Backend',
        ],
        link: 'https://coachun.com',
        logoUrl: '/appgamedo-logo.webp',
      },
      {
        key: 'freelance',
        technologies: ['Flutter', 'Dart', 'Firebase', 'REST API', 'BLoC', 'MVC'],
      },
      {
        key: 'yandex',
        technologies: ['Quality Assurance', 'Data Analysis', 'Search Algorithms'],
        logoUrl: '/yandex-logo.png',
      },
    ];
  }

  public getProjects(): Project[] {
    return [
      {
        key: 'lawantra',
        technologies: [
          'Next.js',
          'Node.js',
          'Firebase',
          'REST API',
          'Flutter',
          'AI Integration',
        ],
        category: 'web',
        liveUrl: 'https://lawantra.com',
        imageUrl: '/lawantra-logo.svg',
        featured: true,
      },
      {
        key: 'dreeys',
        technologies: [
          'Flutter',
          'AI Integration',
          'Firebase',
          'Apple Sign In',
          'In-App Purchases',
        ],
        category: 'mobile',
        liveUrl: 'https://dreeys.com/en',
        appStoreUrl: 'https://apps.apple.com/us/app/dreeys-ai/id6761930732',
        imageUrl: '/dreeys-logo.png',
        featured: true,
      },
      {
        key: 'cheemly',
        technologies: [
          'Next.js',
          'TypeScript',
          'Python',
          'AI Integration',
          'RDKit',
        ],
        category: 'web',
        liveUrl: 'https://cheemly.com',
        imageUrl: '/cheemly-logo.svg',
        featured: true,
      },
      {
        key: 'coachun',
        technologies: ['Flutter', 'Firebase', 'Frontend', 'Backend'],
        category: 'mobile',
        liveUrl: 'https://coachun.com',
        appStoreUrl:
          'https://apps.apple.com/tr/app/coachun/id6751751635?l=tr',
        imageUrl: '/coachun-logo.svg',
        imageInvertOnDark: true,
      },
      {
        key: 'ppazar',
        technologies: [
          'Flutter',
          'Dart',
          'Firebase Realtime Database',
          'AI Integration',
        ],
        category: 'mobile',
        githubUrl: 'https://github.com/kaanygit/ppazar',
        liveUrl:
          'https://play.google.com/store/apps/details?id=com.ppazar.ppazarapp',
        appStoreUrl: 'https://apps.apple.com/us/app/ppazar/id6746058155',
        huaweiUrl: 'https://appgallery.huawei.com/app/C114328649',
        imageUrl: '/ppazar-logo.png',
      },
      {
        key: 'spory',
        technologies: ['Flutter', 'Dart', 'Firebase', 'BLoC'],
        category: 'mobile',
        githubUrl: 'https://github.com/kaanygit/spory',
        imageUrl: '/spory-logo.png',
      },
      {
        key: 'harmopy',
        technologies: [
          'Next.js',
          'React',
          'TypeScript',
          'Tailwind CSS',
          'AI Integration',
        ],
        category: 'web',
        liveUrl: 'https://harmopy.com',
        imageUrl: '/harmopy-logo.avif',
      },
      {
        key: 'accessible',
        technologies: ['Flutter', 'Dart', 'Google Maps API'],
        category: 'mobile',
        githubUrl: 'https://github.com/kaanygit/accessible-route-app',
        liveUrl:
          'https://play.google.com/store/apps/details?id=com.accessible.route.app',
        imageUrl: '/accesible-route-logo.png',
      },
    ];
  }

  public getSkills(): Skill[] {
    return [
      { id: '1', name: 'Flutter', level: 'expert', category: 'mobile' },
      { id: '2', name: 'Dart', level: 'expert', category: 'mobile' },
      { id: '3', name: 'BLoC', level: 'advanced', category: 'mobile' },
      { id: '4', name: 'MVC', level: 'advanced', category: 'mobile' },
      { id: '5', name: 'Firebase', level: 'expert', category: 'mobile' },
      { id: '6', name: 'Push Notifications', level: 'advanced', category: 'mobile' },
      { id: '7', name: 'App Store Release', level: 'advanced', category: 'mobile' },

      { id: '8', name: 'React', level: 'advanced', category: 'frontend' },
      { id: '9', name: 'Next.js', level: 'advanced', category: 'frontend' },
      { id: '10', name: 'TypeScript', level: 'advanced', category: 'frontend' },
      { id: '11', name: 'JavaScript', level: 'advanced', category: 'frontend' },
      { id: '12', name: 'HTML5', level: 'advanced', category: 'frontend' },
      { id: '13', name: 'CSS3', level: 'advanced', category: 'frontend' },
      { id: '14', name: 'Tailwind CSS', level: 'advanced', category: 'frontend' },
      { id: '15', name: 'Redux', level: 'intermediate', category: 'frontend' },

      { id: '16', name: 'Node.js', level: 'advanced', category: 'backend' },
      { id: '17', name: 'Express.js', level: 'advanced', category: 'backend' },
      { id: '18', name: 'NestJS', level: 'intermediate', category: 'backend' },
      { id: '19', name: 'REST API', level: 'expert', category: 'backend' },
      { id: '20', name: 'GraphQL', level: 'intermediate', category: 'backend' },
      { id: '21', name: 'Python', level: 'intermediate', category: 'backend' },
      { id: '22', name: 'Django', level: 'intermediate', category: 'backend' },
      { id: '23', name: 'Flask', level: 'intermediate', category: 'backend' },
      { id: '24', name: 'Socket.io', level: 'intermediate', category: 'backend' },

      { id: '25', name: 'Firestore', level: 'expert', category: 'database' },
      { id: '26', name: 'Firebase RTDB', level: 'expert', category: 'database' },
      { id: '27', name: 'PostgreSQL', level: 'intermediate', category: 'database' },
      { id: '28', name: 'MongoDB', level: 'intermediate', category: 'database' },
      { id: '29', name: 'MySQL', level: 'intermediate', category: 'database' },
      { id: '30', name: 'SQLite', level: 'intermediate', category: 'database' },
      { id: '31', name: 'Redis', level: 'intermediate', category: 'database' },
      { id: '32', name: 'Supabase', level: 'intermediate', category: 'database' },
      { id: '33', name: 'AWS', level: 'intermediate', category: 'database' },
      { id: '34', name: 'Google Cloud', level: 'intermediate', category: 'database' },
      { id: '35', name: 'Docker', level: 'intermediate', category: 'database' },

      { id: '36', name: 'AI Integration', level: 'advanced', category: 'ai' },
      { id: '37', name: 'Pandas', level: 'intermediate', category: 'ai' },
      { id: '38', name: 'NumPy', level: 'intermediate', category: 'ai' },
      { id: '39', name: 'TensorFlow', level: 'intermediate', category: 'ai' },
      { id: '40', name: 'Keras', level: 'intermediate', category: 'ai' },
      { id: '41', name: 'scikit-learn', level: 'intermediate', category: 'ai' },
      { id: '42', name: 'Matplotlib', level: 'intermediate', category: 'ai' },
      { id: '43', name: 'OpenCV', level: 'intermediate', category: 'ai' },

      { id: '44', name: 'Git', level: 'expert', category: 'tools' },
      { id: '45', name: 'GitHub', level: 'expert', category: 'tools' },
      { id: '46', name: 'GitLab', level: 'intermediate', category: 'tools' },
      { id: '47', name: 'Postman', level: 'intermediate', category: 'tools' },
      { id: '48', name: 'Figma', level: 'intermediate', category: 'tools' },
      { id: '49', name: 'Canva', level: 'intermediate', category: 'tools' },
    ];
  }

  public getContactInfo(): ContactInfo {
    return {
      phone: '+90 537 501 9024',
      email: 'yasinkaan345@hotmail.com',
      github: 'github.com/kaanygit',
      linkedin: 'linkedin.com/in/yasinkaanyigit1',
    };
  }

  public getServices(): Service[] {
    return [
      {
        key: 'starter',
        level: 'beginner',
        price: '~₺20.000',
        duration: '2–3 weeks',
        technologies: ['Flutter', 'Dart', 'Firebase', 'Material Design'],
      },
      {
        key: 'pro',
        level: 'intermediate',
        price: '~₺50.000–₺70.000',
        duration: '4–6 weeks',
        technologies: [
          'Flutter',
          'Dart',
          'Firebase',
          'BLoC',
          'REST API',
          'Stripe',
        ],
        featured: true,
      },
      {
        key: 'enterprise',
        level: 'advanced',
        price: '~₺100.000+',
        duration: '8–12 weeks',
        technologies: [
          'Flutter',
          'Dart',
          'Node.js',
          'MongoDB',
          'Docker',
          'AWS',
          'TensorFlow',
        ],
      },
    ];
  }

  public getHeroName(): { firstName: string; lastName: string } {
    return { firstName: 'Yasin Kaan', lastName: 'Yiğit' };
  }

  public getHeroStats(): HeroStat[] {
    return [
      { key: 'apps', value: '10+' },
      { key: 'years', value: '2.5+' },
      { key: 'coaches', value: '100+' },
      { key: 'users', value: '200+' },
      { key: 'ai', value: 'AI' },
    ];
  }

  public getExperienceStats(): { key: string; value: string }[] {
    return [
      { key: 'apps', value: '10+' },
      { key: 'years', value: '2.5+' },
      { key: 'coaches', value: '100+' },
      { key: 'users', value: '200+' },
    ];
  }
}
