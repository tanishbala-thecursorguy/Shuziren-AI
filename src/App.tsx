import image_124a4e7c759d7cb2a908f180abb96fb95f27bc1f from 'figma:asset/124a4e7c759d7cb2a908f180abb96fb95f27bc1f.png';
import image_7c1aa4e6ee6fe5eb7d5ecbca45cf67c0e4eedb14 from 'figma:asset/7c1aa4e6ee6fe5eb7d5ecbca45cf67c0e4eedb14.png';
import { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'motion/react';
import { AnimatedSection } from "./components/AnimatedSection";
import { StatCard } from "./components/StatCard";
import { Globe, Check, ChevronDown } from 'lucide-react';
import logoImage from "figma:asset/a70460ce4c7be13184ec69638ba72870ef8b0dcf.png";
import heroImage from "figma:asset/fa17b6cdbab0384e23ca12eef87b76f1ceca01e8.png";
import serviceImage1 from "figma:asset/b03a5157c80e4430a90422d613e9f8ccd71461e5.png";
import serviceImage2 from "figma:asset/e61742abb5b012a2a70c24ce53e821612189da06.png";
import serviceImage3 from "figma:asset/370ec61c4691e617f58e2abc7f7b10f37b7e3df4.png";
import serviceImage4 from "figma:asset/2b14a54c3f184f1bddbb91a9418b38513f6d0d76.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components/ui/accordion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./components/ui/dropdown-menu";
import { AutomationsPage } from "./components/AutomationsPage";
import { ConversionBoostingPage } from "./components/ConversionBoostingPage";
import { CustomSoftwarePage } from "./components/CustomSoftwarePage";
import { AIToolsScrolling } from "./components/AIToolsScrolling";
import { TypingEffect } from "./components/TypingEffect";

// Solution Boxes Component with Scroll Animations
function SolutionBoxesSection({ setCurrentPage, t }: { setCurrentPage: (page: string) => void; t: any }) {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  
  const isInView1 = useInView(ref1, { once: false, margin: "-100px" });
  const isInView2 = useInView(ref2, { once: false, margin: "-100px" });
  const isInView3 = useInView(ref3, { once: false, margin: "-100px" });

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Automations Card */}
          <motion.button
            ref={ref1}
            onClick={() => setCurrentPage('automations')}
            className="group relative bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 text-left hover:border-white/50 transition-all duration-500 cursor-pointer overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl"></div>
            <div className="absolute -inset-4 bg-white opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl mb-6 flex items-center justify-center group-hover:shadow-[0_0_40px_rgba(255,255,255,0.8)] transition-shadow duration-500">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-white text-2xl font-bold mb-3">{t.solutions.automations}</h3>
              <p className="text-gray-400 text-sm">Streamline your workflows with intelligent AI-powered automation solutions.</p>
            </div>
          </motion.button>

          {/* Conversion Boosting Card */}
          <motion.button
            ref={ref2}
            onClick={() => setCurrentPage('conversion')}
            className="group relative bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 text-left hover:border-white/50 transition-all duration-500 cursor-pointer overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl"></div>
            <div className="absolute -inset-4 bg-white opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl mb-6 flex items-center justify-center group-hover:shadow-[0_0_40px_rgba(255,255,255,0.8)] transition-shadow duration-500">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-white text-2xl font-bold mb-3">{t.solutions.conversionBoosting}</h3>
              <p className="text-gray-400 text-sm">Maximize conversions with data-driven AI insights and personalization.</p>
            </div>
          </motion.button>

          {/* Custom Software Development Card */}
          <motion.button
            ref={ref3}
            onClick={() => setCurrentPage('customSoftware')}
            className="group relative bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 text-left hover:border-white/50 transition-all duration-500 cursor-pointer overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl"></div>
            <div className="absolute -inset-4 bg-white opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl mb-6 flex items-center justify-center group-hover:shadow-[0_0_40px_rgba(255,255,255,0.8)] transition-shadow duration-500">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-white text-2xl font-bold mb-3">{t.solutions.customSoftware}</h3>
              <p className="text-gray-400 text-sm">Tailored AI software solutions built specifically for your business needs.</p>
            </div>
          </motion.button>
        </div>
      </div>
    </section>
  );
}

const translations = {
  en: {
    nav: {
      solutions: "Solutions ▼",
    },
    hero: {
      title: "Shuziren AI.",
      subtitle: "Tailor-made AI solutions for your business.",
    },
    services: [
      {
        title: "Virtual moderators for live streams",
        description: "Increase your online engagement with AI-powered digital humans. Our virtual presenters present your content live and interactively.",
      },
      {
        title: "Intelligent process automation",
        description: "Optimize your processes and increase efficiency. Our AI automation manages communication via email, SMS, WhatsApp, and phone.",
      },
      {
        title: "AI-supported conversion increase",
        description: "Improve your conversion rate with artificial intelligence. We use data analytics to personalize the user experience and increase your conversions.",
      },
      {
        title: "Customized AI software",
        description: "We develop customized AI solutions that are precisely tailored to your business goals. From conception to implementation – everything from a single source.",
      },
    ],
    stats: {
      dataPoints: "Analyzed data points daily",
      processes: "Automated processes monthly",
      accuracy: "Accuracy of our algorithms",
    },
    quote: {
      text: "The future belongs to those who recognize that every advanced technology has the power not only to accelerate processes, but to change the world.",
      author: "Dennis Jianxin Luo - Founder",
    },
    about: [
      "Shuziren AI specializes in developing customized AI software solutions and offers innovative proprietary products. We use artificial intelligence to optimize your business processes and create new growth opportunities.",
      "We don't offer standard products; instead, we develop customized AI solutions perfectly tailored to your unique challenges. Our focus is on personalized consulting and creating systems that give you a direct competitive advantage.",
      "Using AI-powered data analysis, we identify potential for increasing your conversion rate. Our solutions personalize the user experience, improve customer loyalty, and thus lead to sustainable revenue growth for your company.",
    ],
    faq: {
      title: "Frequently Asked Questions",
      questions: [
        {
          question: "What exactly does Shuziren AI do?",
          answer: "Shuziren AI specializes in developing customized AI software solutions and offers innovative proprietary products. We use artificial intelligence to optimize your business processes and create new growth opportunities."
        },
        {
          question: "What distinguishes Shuziren AI from other providers?",
          answer: "We don't offer standard products, but develop customized AI solutions that are perfectly tailored to your unique challenges. Our focus is on individual consulting and creating systems that give you a direct competitive advantage."
        },
        {
          question: "How does AI help increase my revenue?",
          answer: "Through AI-powered data analysis, we identify potential for increasing your conversion rate. Our solutions personalize the user experience, improve customer loyalty, and thus lead to sustainable revenue growth for your company."
        }
      ]
    },
    pricing: {
      heading: "Book Your Free Call",
      title: "Your individual AI strategy",
      price: "€0.00",
      cta: "Book call",
      features: [
        "Needs analysis: We understand your goals and challenges.",
        "Solution proposals: Initial ideas for your customized AI software.",
        "Potential Check: Discover how AI can transform your business.",
        "Non-binding: No obligations, just new perspectives."
      ]
    },
    solutions: {
      automations: "Automations",
      conversionBoosting: "Conversion Boosting",
      customSoftware: "Custom Software Development"
    },
    footer: {
      imprint: "Imprint",
      privacy: "Privacy Policy",
    },
  },
  de: {
    nav: {
      solutions: "Lösungen ▼",
    },
    hero: {
      title: "Shuziren AI.",
      subtitle: "Maßgeschneiderte KI-Lösungen für Ihr Business.",
    },
    services: [
      {
        title: "Virtuelle Moderatoren für Livestreams",
        description: "Steigern Sie Ihr Online-Engagement mit KI-gestützten digitalen Menschen. Unsere virtuellen Moderatoren präsentieren Ihre Inhalte live und interaktiv.",
      },
      {
        title: "Intelligente Prozess-Automatisierung",
        description: "Optimieren Sie Ihre Abläufe und steigern Sie die Effizienz. Unsere KI-Automatisierung steuert Kommunikation über E-Mail, SMS, WhatsApp und Telefon.",
      },
      {
        title: "KI-gestützte Conversion-Steigerung",
        description: "Verbessern Sie Ihre Conversion-Rate mit künstlicher Intelligenz. Wir nutzen Datenanalyse, um das Nutzererlebnis zu personalisieren und Ihre Conversions zu steigern.",
      },
      {
        title: "Maßgeschneiderte KI-Software",
        description: "Wir entwickeln maßgeschneiderte KI-Lösungen, die genau auf Ihre Unternehmensziele zugeschnitten sind. Von der Konzeption bis zur Umsetzung – alles aus einer Hand.",
      },
    ],
    stats: {
      dataPoints: "Analysierte Datenpunkte täglich",
      processes: "Automatisierte Prozesse monatlich",
      accuracy: "Genauigkeit unserer Algorithmen",
    },
    quote: {
      text: "Die Zukunft gehört jenen, die erkennen, dass jede fortschrittliche Technologie die Kraft hat, nicht nur Prozesse zu beschleunigen, sondern die Welt zu verändern.",
      author: "Dennis Jianxin Luo - Gründer",
    },
    about: [
      "Shuziren AI spezialisiert sich auf die Entwicklung maßgeschneiderter KI-Softwarelösungen und bietet innovative Eigenprodukte an. Wir nutzen künstliche Intelligenz, um Ihre Geschäftsprozesse zu optimieren und neue Wachstumschancen zu schaffen.",
      "Wir bieten keine Standardprodukte an, sondern entwickeln maßgeschneiderte KI-Lösungen, die perfekt auf Ihre individuellen Herausforderungen zugeschnitten sind. Unser Fokus liegt auf persönlicher Beratung und der Schaffung von Systemen, die Ihnen einen direkten Wettbewerbsvorteil verschaffen.",
      "Mithilfe KI-gestützter Datenanalyse identifizieren wir Potenziale zur Steigerung Ihrer Conversion-Rate. Unsere Lösungen personalisieren das Nutzererlebnis, verbessern die Kundenbindung und führen so zu nachhaltigem Umsatzwachstum für Ihr Unternehmen.",
    ],
    faq: {
      title: "Häufig gestellte Fragen",
      questions: [
        {
          question: "Was genau macht Shuziren AI?",
          answer: "Shuziren AI ist spezialisiert auf die Entwicklung maßgeschneiderter KI-Softwarelösungen und bietet innovative Eigenprodukte. Wir nutzen Künstliche Intelligenz, um Ihre Geschäftsprozesse zu optimieren und neue Wachstumschancen zu schaffen."
        },
        {
          question: "Was unterscheidet Shuziren AI von anderen Anbietern?",
          answer: "Wir bieten keine Standardprodukte, sondern entwickeln maßgeschneiderte KI-Lösungen, die perfekt auf Ihre einzigartigen Herausforderungen abgestimmt sind. Unser Fokus liegt auf individueller Beratung und der Schaffung von Systemen, die Ihnen einen direkten Wettbewerbsvorteil verschaffen."
        },
        {
          question: "Wie hilft KI dabei, meinen Umsatz zu steigern?",
          answer: "Durch KI-gestützte Datenanalyse identifizieren wir Potenziale zur Steigerung Ihrer Conversion Rate. Unsere Lösungen personalisieren das Nutzererlebnis, verbessern die Kundenbindung und führen dadurch zu einem nachhaltigen Umsatzwachstum für Ihr Unternehmen."
        }
      ]
    },
    pricing: {
      heading: "Buchen Sie Ihren kostenlosen Anruf",
      title: "Ihre individuelle KI-Strategie",
      price: "€0.00",
      cta: "Termin buchen",
      features: [
        "Bedarfsanalyse: Wir verstehen Ihre Ziele und Herausforderungen.",
        "Lösungsvorschläge: Erste Ideen für Ihre maßgeschneiderte KI-Software.",
        "Potenzial-Check: Entdecken Sie, wie KI Ihr Business transformieren kann.",
        "Unverbindlich: Keine Verpflichtungen, nur neue Perspektiven."
      ]
    },
    solutions: {
      automations: "Automatisierungen",
      conversionBoosting: "Conversion-Steigerung",
      customSoftware: "Individuelle Softwareentwicklung"
    },
    footer: {
      imprint: "Impressum",
      privacy: "Datenschutz",
    },
  },
};

type Page = 'home' | 'automations' | 'conversion' | 'customSoftware';

export default function App() {
  const [language, setLanguage] = useState<'en' | 'de'>('de');
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const t = translations[language];

  // Scroll to top whenever page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'de' : 'en');
  };

  const navigateToHome = () => {
    setCurrentPage('home');
  };

  // Render different pages based on currentPage
  if (currentPage === 'automations') {
    return (
      <div className="min-h-screen bg-black text-white">
        <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-gray-900">
          <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
            <button onClick={navigateToHome} className="flex items-center gap-4 hover:opacity-80 transition-opacity">
              <img 
                src={logoImage} 
                alt="Shuziren AI Logo" 
                className="w-12 h-12 object-contain"
              />
              <span className="text-white text-2xl tracking-tight">Shuziren AI</span>
            </button>
            <div className="flex items-center gap-6">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm outline-none">
                  {t.nav.solutions.replace(' ▼', '')}
                  <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-zinc-900 border-gray-800 min-w-[250px]">
                  <DropdownMenuItem 
                    onClick={() => setCurrentPage('automations')}
                    className="text-gray-300 hover:text-white hover:bg-zinc-800 cursor-pointer"
                  >
                    {t.solutions.automations}
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => setCurrentPage('conversion')}
                    className="text-gray-300 hover:text-white hover:bg-zinc-800 cursor-pointer"
                  >
                    {t.solutions.conversionBoosting}
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => setCurrentPage('customSoftware')}
                    className="text-gray-300 hover:text-white hover:bg-zinc-800 cursor-pointer"
                  >
                    {t.solutions.customSoftware}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
              >
                <Globe className="w-4 h-4" />
                <span>{language === 'en' ? 'DE' : 'EN'}</span>
              </button>
            </div>
          </div>
        </nav>
        <AutomationsPage language={language} />
      </div>
    );
  }

  if (currentPage === 'conversion') {
    return (
      <div className="min-h-screen bg-black text-white">
        <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-gray-900">
          <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
            <button onClick={navigateToHome} className="flex items-center gap-4 hover:opacity-80 transition-opacity">
              <img 
                src={logoImage} 
                alt="Shuziren AI Logo" 
                className="w-12 h-12 object-contain"
              />
              <span className="text-white text-2xl tracking-tight">Shuziren AI</span>
            </button>
            <div className="flex items-center gap-6">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm outline-none">
                  {t.nav.solutions.replace(' ▼', '')}
                  <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-zinc-900 border-gray-800 min-w-[250px]">
                  <DropdownMenuItem 
                    onClick={() => setCurrentPage('automations')}
                    className="text-gray-300 hover:text-white hover:bg-zinc-800 cursor-pointer"
                  >
                    {t.solutions.automations}
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => setCurrentPage('conversion')}
                    className="text-gray-300 hover:text-white hover:bg-zinc-800 cursor-pointer"
                  >
                    {t.solutions.conversionBoosting}
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => setCurrentPage('customSoftware')}
                    className="text-gray-300 hover:text-white hover:bg-zinc-800 cursor-pointer"
                  >
                    {t.solutions.customSoftware}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
              >
                <Globe className="w-4 h-4" />
                <span>{language === 'en' ? 'DE' : 'EN'}</span>
              </button>
            </div>
          </div>
        </nav>
        <ConversionBoostingPage language={language} />
      </div>
    );
  }

  if (currentPage === 'customSoftware') {
    return (
      <div className="min-h-screen bg-black text-white">
        <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-gray-900">
          <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
            <button onClick={navigateToHome} className="flex items-center gap-4 hover:opacity-80 transition-opacity">
              <img 
                src={logoImage} 
                alt="Shuziren AI Logo" 
                className="w-12 h-12 object-contain"
              />
              <span className="text-white text-2xl tracking-tight">Shuziren AI</span>
            </button>
            <div className="flex items-center gap-6">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm outline-none">
                  {t.nav.solutions.replace(' ▼', '')}
                  <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-zinc-900 border-gray-800 min-w-[250px]">
                  <DropdownMenuItem 
                    onClick={() => setCurrentPage('automations')}
                    className="text-gray-300 hover:text-white hover:bg-zinc-800 cursor-pointer"
                  >
                    {t.solutions.automations}
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => setCurrentPage('conversion')}
                    className="text-gray-300 hover:text-white hover:bg-zinc-800 cursor-pointer"
                  >
                    {t.solutions.conversionBoosting}
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => setCurrentPage('customSoftware')}
                    className="text-gray-300 hover:text-white hover:bg-zinc-800 cursor-pointer"
                  >
                    {t.solutions.customSoftware}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
              >
                <Globe className="w-4 h-4" />
                <span>{language === 'en' ? 'DE' : 'EN'}</span>
              </button>
            </div>
          </div>
        </nav>
        <CustomSoftwarePage language={language} />
      </div>
    );
  }

  // Home page
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-gray-900">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <button onClick={navigateToHome} className="flex items-center gap-4 hover:opacity-80 transition-opacity">
            <img 
              src={logoImage} 
              alt="Shuziren AI Logo" 
              className="w-12 h-12 object-contain"
            />
            <span className="text-white text-2xl tracking-tight">Shuziren AI</span>
          </button>
          <div className="flex items-center gap-6">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm outline-none">
                {t.nav.solutions.replace(' ▼', '')}
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-zinc-900 border-gray-800 min-w-[250px]">
                <DropdownMenuItem 
                  onClick={() => setCurrentPage('automations')}
                  className="text-gray-300 hover:text-white hover:bg-zinc-800 cursor-pointer"
                >
                  {t.solutions.automations}
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => setCurrentPage('conversion')}
                  className="text-gray-300 hover:text-white hover:bg-zinc-800 cursor-pointer"
                >
                  {t.solutions.conversionBoosting}
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => setCurrentPage('customSoftware')}
                  className="text-gray-300 hover:text-white hover:bg-zinc-800 cursor-pointer"
                >
                  {t.solutions.customSoftware}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
            >
              <Globe className="w-4 h-4" />
              <span>{language === 'en' ? 'GE' : 'EN'}</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-32 pb-20 relative">
        <div className="max-w-7xl mx-auto text-center mt-16">
          <motion.h1 
            className="text-white mb-8 text-7xl md:text-8xl lg:text-9xl min-h-[120px] md:min-h-[160px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <TypingEffect text={t.hero.title} speed={100} delay={500} loop={true} />
          </motion.h1>
          
          <motion.p 
            className="text-gray-400 text-xl md:text-2xl mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          >
            {t.hero.subtitle}
          </motion.p>
          
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <img 
              src={logoImage} 
              alt="Shuziren AI Logo" 
              className="w-full h-auto object-contain mx-auto"
            />
          </motion.div>
        </div>

        {/* Scroll Down Indicator - Mouse Symbol */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <motion.div
            className="w-7 h-11 border-2 border-gray-500 rounded-full flex justify-center pt-2"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div
              className="w-1 h-2.5 bg-gray-500 rounded-full"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Solutions Cards Section */}
      <SolutionBoxesSection setCurrentPage={setCurrentPage} t={t} />

      {/* Services Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto space-y-24">
          {/* Service 1 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <div>
                <h2 className="text-white mb-4">{t.services[0].title}</h2>
                <p className="text-gray-400">
                  {t.services[0].description}
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="relative max-w-xs mx-auto">
                <div className="absolute inset-0 bg-white/10 blur-3xl rounded-full"></div>
                <div className="relative z-10 rounded-2xl overflow-hidden">
                  <img 
                    src={serviceImage1} 
                    alt="Virtual Moderators" 
                    className="w-full h-auto opacity-80 mix-blend-lighten" 
                    style={{
                      maskImage: 'radial-gradient(circle, black 40%, transparent 80%)',
                      WebkitMaskImage: 'radial-gradient(circle, black 40%, transparent 80%)'
                    }}
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Service 2 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="right" className="order-2 md:order-1">
              <div className="relative max-w-xs mx-auto">
                <div className="absolute inset-0 bg-white/10 blur-3xl rounded-full"></div>
                <div className="relative z-10 rounded-2xl overflow-hidden">
                  <img 
                    src={serviceImage2} 
                    alt="Process Automation" 
                    className="w-full h-auto opacity-80 mix-blend-lighten" 
                    style={{
                      maskImage: 'radial-gradient(circle, black 40%, transparent 80%)',
                      WebkitMaskImage: 'radial-gradient(circle, black 40%, transparent 80%)'
                    }}
                  />
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="left" className="order-1 md:order-2">
              <div>
                <h2 className="text-white mb-4">{t.services[1].title}</h2>
                <p className="text-gray-400">
                  {t.services[1].description}
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* Service 3 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <div>
                <h2 className="text-white mb-4">{t.services[2].title}</h2>
                <p className="text-gray-400">
                  {t.services[2].description}
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="relative max-w-xs mx-auto">
                <div className="absolute inset-0 bg-white/10 blur-3xl rounded-full"></div>
                <div className="relative z-10 rounded-2xl overflow-hidden">
                  <img 
                    src={image_124a4e7c759d7cb2a908f180abb96fb95f27bc1f} 
                    alt="Conversion Increase" 
                    className="w-full h-auto opacity-80 mix-blend-lighten" 
                    style={{
                      maskImage: 'radial-gradient(circle, black 40%, transparent 80%)',
                      WebkitMaskImage: 'radial-gradient(circle, black 40%, transparent 80%)'
                    }}
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Service 4 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="right" className="order-2 md:order-1">
              <div className="relative max-w-xs mx-auto">
                <div className="absolute inset-0 bg-white/10 blur-3xl rounded-full"></div>
                <div className="relative z-10 rounded-2xl overflow-hidden">
                  <img 
                    src={image_7c1aa4e6ee6fe5eb7d5ecbca45cf67c0e4eedb14} 
                    alt="Custom AI Software" 
                    className="w-full h-auto opacity-80 mix-blend-lighten" 
                    style={{
                      maskImage: 'radial-gradient(circle, black 40%, transparent 80%)',
                      WebkitMaskImage: 'radial-gradient(circle, black 40%, transparent 80%)'
                    }}
                  />
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="left" className="order-1 md:order-2">
              <div>
                <h2 className="text-white mb-4">{t.services[3].title}</h2>
                <p className="text-gray-400">
                  {t.services[3].description}
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* AI Tools Section */}
      <AIToolsScrolling />

      {/* Stats Section */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <StatCard
              number="100k+"
              label={t.stats.dataPoints}
            />
            <StatCard
              number="2500"
              label={t.stats.processes}
            />
            <StatCard
              number="99%"
              label={t.stats.accuracy}
            />
          </div>
        </div>
      </section>

      {/* Founder Quote Section */}
      <AnimatedSection>
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote>
              <p className="text-2xl text-white mb-6 text-[36px] italic min-h-[200px] flex items-center justify-center">
                "<TypingEffect text={t.quote.text} speed={30} delay={300} loop={true} />"
              </p>
              <footer className="text-gray-400 text-sm">
                {t.quote.author}
              </footer>
            </blockquote>
          </div>
        </section>
      </AnimatedSection>

      {/* About Section */}
      <AnimatedSection>
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 text-gray-400">
              {t.about.map((paragraph, index) => (
                <p key={index} className="italic text-[20px]">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* FAQ Section */}
      <AnimatedSection>
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-white mb-12 text-center">{t.faq.title}</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {t.faq.questions.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-zinc-900/30 border border-gray-800 rounded-lg px-6 data-[state=open]:border-gray-700"
                >
                  <AccordionTrigger className="text-white hover:no-underline py-5">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400 pb-5 text-[16px] italic">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </AnimatedSection>

      {/* Pricing CTA Section */}
      <AnimatedSection>
        <section className="py-20 px-6">
          <div className="max-w-xl mx-auto">
            <h2 className="text-white mb-12 text-center">{t.pricing.heading}</h2>
            <div className="bg-zinc-900/50 border border-gray-800 rounded-2xl p-8 text-center">
              <h3 className="text-white mb-2">{t.pricing.title}</h3>
              <div className="text-5xl text-white mb-8 mt-6 text-left">{t.pricing.price}</div>
              
              <div className="space-y-4 mb-8 text-left">
                {t.pricing.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                    <span className="text-gray-400 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="w-full bg-white text-black py-4 rounded-lg hover:bg-gray-100 transition-colors text-[20px] text-center font-bold italic">
                {t.pricing.cta}
              </button>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Footer */}
      <footer className="border-t border-gray-900 py-8 px-6 mt-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img 
              src={logoImage} 
              alt="Shuziren AI Logo" 
              className="w-8 h-8 object-contain"
            />
            <span className="text-white">Shuziren AI</span>
          </div>
          <div className="flex gap-6 text-gray-400 text-sm">
            <a href="#" className="hover:text-white transition-colors">{t.footer.imprint}</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">{t.footer.privacy}</a>
          </div>
        </div>
      </footer>
    </div>
  );
}