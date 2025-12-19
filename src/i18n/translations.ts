export type Language = 'en' | 'es';

export const translations = {
  en: {
    // Navigation
    nav: {
      features: 'Features',
      howItWorks: 'How It Works',
      testimonials: 'Testimonials',
      pricing: 'Pricing',
      getStarted: 'Get Started',
    },

    // Hero Section
    hero: {
      badge: 'Trusted by 10,000+ applicants worldwide',
      title: 'Your Immigration Journey,',
      titleHighlight: 'Simplified',
      subtitle: 'ResidencyOS is the comprehensive platform that organizes your visa applications, tracks deadlines, and guides you through every step of the immigration process with confidence.',
      cta: 'Start Your Journey',
      secondaryCta: 'Watch Demo',
      trustedBy: 'Trusted by applicants from',
    },

    // Features Section
    features: {
      label: 'Capabilities',
      title: 'Everything You Need to',
      titleHighlight: 'Navigate Immigration',
      subtitle: 'From initial application to final approval, ResidencyOS provides the tools and guidance to make your immigration journey seamless.',
      items: [
        {
          title: 'Smart Visa Tracking',
          description: 'Monitor every application status in real-time. Get instant updates when your case moves forward and never miss a critical milestone.',
        },
        {
          title: 'Document Management',
          description: 'Securely store, organize, and access all your immigration documents. Auto-categorization ensures everything is exactly where you need it.',
        },
        {
          title: 'Deadline Reminders',
          description: 'Never miss a deadline again. Intelligent alerts notify you of upcoming renewals, appointments, and document expirations.',
        },
        {
          title: 'Application Timeline',
          description: 'Visualize your entire immigration journey with interactive timelines. Understand where you are and what comes next.',
        },
        {
          title: 'Secure Data Vault',
          description: 'Bank-level encryption protects your sensitive information. Your data is encrypted at rest and in transit.',
        },
        {
          title: 'Multi-Language Support',
          description: 'Access the platform in your preferred language. We support English, Spanish, and more languages coming soon.',
        },
      ],
    },

    // Product Screenshots Section
    product: {
      label: 'Product Preview',
      title: 'A Clearer View of',
      titleHighlight: 'Your Progress',
      subtitle: 'See how ResidencyOS transforms complex immigration processes into an intuitive, visual experience.',
      dashboardAlt: 'ResidencyOS Dashboard',
      caption: 'The ResidencyOS dashboard provides a comprehensive overview of all your active applications',
    },

    // How It Works Section
    howItWorks: {
      label: 'Process',
      title: 'Three Steps to',
      titleHighlight: 'Peace of Mind',
      subtitle: 'Getting started with ResidencyOS takes just minutes. Here\'s how it works.',
      steps: [
        {
          number: '01',
          title: 'Create Your Profile',
          description: 'Sign up and tell us about your immigration goals. Our system will customize your experience based on your visa type and country.',
        },
        {
          number: '02',
          title: 'Upload Documents',
          description: 'Securely upload your documents. Our AI-powered system automatically organizes and validates everything you need.',
        },
        {
          number: '03',
          title: 'Track & Succeed',
          description: 'Monitor your applications in real-time, receive smart reminders, and confidently navigate every step of your journey.',
        },
      ],
    },

    // Testimonials Section
    testimonials: {
      label: 'Testimonials',
      title: 'Trusted by Applicants',
      titleHighlight: 'Worldwide',
      subtitle: 'Join thousands of successful applicants who have streamlined their immigration journey with ResidencyOS.',
      items: [
        {
          quote: 'ResidencyOS transformed what felt like an overwhelming process into something manageable. The deadline reminders alone saved me from missing a critical document submission for my Paraguay permanent residency.',
          author: 'Michael Torres',
          role: 'Permanent Residency Holder',
          location: 'USA to Paraguay',
        },
        {
          quote: 'As an immigration consultant specializing in Paraguay, I recommend ResidencyOS to all my clients. It keeps them organized and reduces the back-and-forth significantly.',
          author: 'Carolina Méndez',
          role: 'Immigration Consultant',
          location: 'Asunción, Paraguay',
        },
        {
          quote: 'The document management feature is incredible. Tracking both my temporary and permanent residency applications in one place made the whole process so much easier.',
          author: 'David Schmidt',
          role: 'Temporary Residency Applicant',
          location: 'Germany to Paraguay',
        },
      ],
    },

    // Pricing Section
    pricing: {
      label: 'Pricing',
      title: 'Simple, Transparent',
      titleHighlight: 'Pricing',
      subtitle: 'Choose the plan that fits your immigration journey. All plans include our core features.',
      monthly: 'Monthly',
      yearly: 'Yearly',
      yearlyDiscount: 'Save 20%',
      perMonth: '/month',
      popular: 'Most Popular',
      cta: 'Get Started',
      plans: [
        {
          name: 'Starter',
          price: '9',
          yearlyPrice: '7',
          description: 'Perfect for single visa applications',
          features: [
            'Track 1 application',
            '5 GB document storage',
            'Email reminders',
            'Basic timeline view',
            'Email support',
          ],
        },
        {
          name: 'Professional',
          price: '29',
          yearlyPrice: '23',
          description: 'Ideal for families or multiple applications',
          features: [
            'Track unlimited applications',
            '50 GB document storage',
            'SMS & email reminders',
            'Advanced analytics',
            'Priority support',
            'Family member access',
          ],
          popular: true,
        },
        {
          name: 'Enterprise',
          price: '99',
          yearlyPrice: '79',
          description: 'For immigration firms and consultants',
          features: [
            'Unlimited everything',
            '500 GB document storage',
            'Client management',
            'Custom branding',
            'API access',
            'Dedicated account manager',
          ],
        },
      ],
    },

    // CTA Section
    cta: {
      title: 'Ready to Simplify Your',
      titleHighlight: 'Immigration Journey?',
      subtitle: 'Join thousands of applicants who trust ResidencyOS to guide them through the immigration process.',
      button: 'Start Free Trial',
      note: 'No credit card required. 14-day free trial.',
    },

    // Footer
    footer: {
      description: 'The modern platform for managing your immigration journey with confidence.',
      product: 'Product',
      company: 'Company',
      legal: 'Legal',
      links: {
        features: 'Features',
        pricing: 'Pricing',
        security: 'Security',
        updates: 'Updates',
        about: 'About Us',
        careers: 'Careers',
        contact: 'Contact',
        blog: 'Blog',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
        cookies: 'Cookie Policy',
        gdpr: 'GDPR',
      },
      copyright: '© 2025 ResidencyOS. All rights reserved.',
      madeWith: 'Made with care for immigrants worldwide',
    },

    // Accessibility
    accessibility: {
      languageToggle: 'Change language',
      menuOpen: 'Open menu',
      menuClose: 'Close menu',
    },
  },

  es: {
    // Navigation
    nav: {
      features: 'Funciones',
      howItWorks: 'Cómo Funciona',
      testimonials: 'Testimonios',
      pricing: 'Precios',
      getStarted: 'Comenzar',
    },

    // Hero Section
    hero: {
      badge: 'Más de 10,000 solicitantes confían en nosotros',
      title: 'Tu Proceso Migratorio,',
      titleHighlight: 'Simplificado',
      subtitle: 'ResidencyOS es la plataforma integral que organiza tus solicitudes de visa, rastrea fechas límite y te guía en cada paso del proceso migratorio con confianza.',
      cta: 'Comienza Tu Viaje',
      secondaryCta: 'Ver Demo',
      trustedBy: 'Confían en nosotros solicitantes de',
    },

    // Features Section
    features: {
      label: 'Capacidades',
      title: 'Todo lo que Necesitas para',
      titleHighlight: 'Navegar Inmigración',
      subtitle: 'Desde la solicitud inicial hasta la aprobación final, ResidencyOS proporciona las herramientas y la guía para hacer tu proceso migratorio fluido.',
      items: [
        {
          title: 'Seguimiento Inteligente',
          description: 'Monitorea el estado de cada solicitud en tiempo real. Recibe actualizaciones instantáneas cuando tu caso avance.',
        },
        {
          title: 'Gestión de Documentos',
          description: 'Almacena, organiza y accede de forma segura a todos tus documentos migratorios. La auto-categorización asegura que todo esté donde lo necesitas.',
        },
        {
          title: 'Recordatorios de Fechas',
          description: 'Nunca más pierdas una fecha límite. Alertas inteligentes te notifican sobre renovaciones, citas y vencimientos de documentos.',
        },
        {
          title: 'Línea de Tiempo',
          description: 'Visualiza todo tu proceso migratorio con líneas de tiempo interactivas. Entiende dónde estás y qué sigue.',
        },
        {
          title: 'Bóveda de Datos Segura',
          description: 'Encriptación de nivel bancario protege tu información sensible. Tus datos están encriptados en reposo y en tránsito.',
        },
        {
          title: 'Soporte Multilingüe',
          description: 'Accede a la plataforma en tu idioma preferido. Soportamos inglés, español y más idiomas próximamente.',
        },
      ],
    },

    // Product Screenshots Section
    product: {
      label: 'Vista del Producto',
      title: 'Una Vista Más Clara de',
      titleHighlight: 'Tu Progreso',
      subtitle: 'Descubre cómo ResidencyOS transforma procesos migratorios complejos en una experiencia intuitiva y visual.',
      dashboardAlt: 'Panel de ResidencyOS',
      caption: 'El panel de ResidencyOS proporciona una vista completa de todas tus solicitudes activas',
    },

    // How It Works Section
    howItWorks: {
      label: 'Proceso',
      title: 'Tres Pasos hacia la',
      titleHighlight: 'Tranquilidad',
      subtitle: 'Comenzar con ResidencyOS toma solo minutos. Así es cómo funciona.',
      steps: [
        {
          number: '01',
          title: 'Crea Tu Perfil',
          description: 'Regístrate y cuéntanos sobre tus objetivos migratorios. Nuestro sistema personalizará tu experiencia según tu tipo de visa y país.',
        },
        {
          number: '02',
          title: 'Sube Documentos',
          description: 'Sube tus documentos de forma segura. Nuestro sistema con IA organiza y valida automáticamente todo lo que necesitas.',
        },
        {
          number: '03',
          title: 'Rastrea y Triunfa',
          description: 'Monitorea tus solicitudes en tiempo real, recibe recordatorios inteligentes y navega con confianza cada paso de tu viaje.',
        },
      ],
    },

    // Testimonials Section
    testimonials: {
      label: 'Testimonios',
      title: 'Solicitantes Confían en',
      titleHighlight: 'Todo el Mundo',
      subtitle: 'Únete a miles de solicitantes exitosos que han simplificado su proceso migratorio con ResidencyOS.',
      items: [
        {
          quote: 'ResidencyOS transformó lo que parecía un proceso abrumador en algo manejable. Solo los recordatorios de fechas me salvaron de perder una entrega crítica de documentos para mi residencia permanente en Paraguay.',
          author: 'Michael Torres',
          role: 'Titular de Residencia Permanente',
          location: 'EE.UU. a Paraguay',
        },
        {
          quote: 'Como consultora de inmigración especializada en Paraguay, recomiendo ResidencyOS a todos mis clientes. Los mantiene organizados y reduce significativamente la comunicación innecesaria.',
          author: 'Carolina Méndez',
          role: 'Consultora de Inmigración',
          location: 'Asunción, Paraguay',
        },
        {
          quote: 'La función de gestión de documentos es increíble. Rastrear mis solicitudes de residencia temporal y permanente en un solo lugar hizo todo el proceso mucho más fácil.',
          author: 'David Schmidt',
          role: 'Solicitante de Residencia Temporal',
          location: 'Alemania a Paraguay',
        },
      ],
    },

    // Pricing Section
    pricing: {
      label: 'Precios',
      title: 'Precios Simples y',
      titleHighlight: 'Transparentes',
      subtitle: 'Elige el plan que se adapte a tu proceso migratorio. Todos los planes incluyen nuestras funciones principales.',
      monthly: 'Mensual',
      yearly: 'Anual',
      yearlyDiscount: 'Ahorra 20%',
      perMonth: '/mes',
      popular: 'Más Popular',
      cta: 'Comenzar',
      plans: [
        {
          name: 'Inicial',
          price: '9',
          yearlyPrice: '7',
          description: 'Perfecto para solicitudes de visa individuales',
          features: [
            'Rastrea 1 solicitud',
            '5 GB de almacenamiento',
            'Recordatorios por email',
            'Vista básica de línea de tiempo',
            'Soporte por email',
          ],
        },
        {
          name: 'Profesional',
          price: '29',
          yearlyPrice: '23',
          description: 'Ideal para familias o múltiples solicitudes',
          features: [
            'Solicitudes ilimitadas',
            '50 GB de almacenamiento',
            'Recordatorios SMS y email',
            'Análisis avanzados',
            'Soporte prioritario',
            'Acceso familiar',
          ],
          popular: true,
        },
        {
          name: 'Empresarial',
          price: '99',
          yearlyPrice: '79',
          description: 'Para firmas y consultores de inmigración',
          features: [
            'Todo ilimitado',
            '500 GB de almacenamiento',
            'Gestión de clientes',
            'Marca personalizada',
            'Acceso API',
            'Gerente de cuenta dedicado',
          ],
        },
      ],
    },

    // CTA Section
    cta: {
      title: '¿Listo para Simplificar Tu',
      titleHighlight: 'Proceso Migratorio?',
      subtitle: 'Únete a miles de solicitantes que confían en ResidencyOS para guiarlos en el proceso de inmigración.',
      button: 'Prueba Gratis',
      note: 'Sin tarjeta de crédito. Prueba gratuita de 14 días.',
    },

    // Footer
    footer: {
      description: 'La plataforma moderna para gestionar tu proceso migratorio con confianza.',
      product: 'Producto',
      company: 'Empresa',
      legal: 'Legal',
      links: {
        features: 'Funciones',
        pricing: 'Precios',
        security: 'Seguridad',
        updates: 'Actualizaciones',
        about: 'Sobre Nosotros',
        careers: 'Carreras',
        contact: 'Contacto',
        blog: 'Blog',
        privacy: 'Política de Privacidad',
        terms: 'Términos de Servicio',
        cookies: 'Política de Cookies',
        gdpr: 'RGPD',
      },
      copyright: '© 2025 ResidencyOS. Todos los derechos reservados.',
      madeWith: 'Hecho con cariño para inmigrantes en todo el mundo',
    },

    // Accessibility
    accessibility: {
      languageToggle: 'Cambiar idioma',
      menuOpen: 'Abrir menú',
      menuClose: 'Cerrar menú',
    },
  },
};

interface PricingPlan {
  name: string;
  price: string;
  yearlyPrice: string;
  description: string;
  features: string[];
  popular?: boolean;
}

interface TranslationSchema {
  nav: {
    features: string;
    howItWorks: string;
    testimonials: string;
    pricing: string;
    getStarted: string;
  };
  hero: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    cta: string;
    secondaryCta: string;
    trustedBy: string;
  };
  features: {
    label: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    items: { title: string; description: string }[];
  };
  product: {
    label: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    dashboardAlt: string;
    caption: string;
  };
  howItWorks: {
    label: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    steps: { number: string; title: string; description: string }[];
  };
  testimonials: {
    label: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    items: { quote: string; author: string; role: string; location: string }[];
  };
  pricing: {
    label: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    monthly: string;
    yearly: string;
    yearlyDiscount: string;
    perMonth: string;
    popular: string;
    cta: string;
    plans: PricingPlan[];
  };
  cta: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    button: string;
    note: string;
  };
  footer: {
    description: string;
    product: string;
    company: string;
    legal: string;
    links: {
      features: string;
      pricing: string;
      security: string;
      updates: string;
      about: string;
      careers: string;
      contact: string;
      blog: string;
      privacy: string;
      terms: string;
      cookies: string;
      gdpr: string;
    };
    copyright: string;
    madeWith: string;
  };
  accessibility: {
    languageToggle: string;
    menuOpen: string;
    menuClose: string;
  };
}

export type Translations = TranslationSchema;
