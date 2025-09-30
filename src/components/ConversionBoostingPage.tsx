import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Check, Target, TrendingUp, Zap, Star, BarChart3 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

// Animation wrapper for continuous scroll animations
function ScrollAnimatedSection({ 
  children, 
  direction = 'left',
  className = ''
}: { 
  children: React.ReactNode; 
  direction?: 'left' | 'right';
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: false,
    margin: "-100px"
  });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, x: direction === 'left' ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: direction === 'left' ? -50 : 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

// Regular fade-in animation
function FadeInSection({ 
  children, 
  className = '',
  delay = 0
}: { 
  children: React.ReactNode; 
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: false,
    margin: "-100px"
  });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

const conversionTranslations = {
  en: {
    hero: {
      title: "Conversion Rate Experts",
      subtitle: "Increased sales through data-driven design. Boost conversions with behavioral psychology, A/B testing, and proven UX methods.",
      cta: "Get a Free Analysis"
    },
    psychology: {
      title: "It's about understanding how people make decisions—and why they don't buy from you.",
      subtitle: "Only when you understand this can you optimize specifically."
    },
    uxDesign: {
      title: "Experience a conversion boost through data-oriented design",
      subtitle: "Proven to increase conversion rates by 40%+"
    },
    scaling: {
      title: "Scaling doesn't start with more traffic—but with better conversion",
      content: "Before scaling, we optimize the funnel—data-driven, psychologically sound, and with a clear testing plan."
    },
    faq: {
      title: "Frequently Asked Questions",
      questions: [
        {
          question: "How long does shop optimization take?",
          answer: "Initial improvements can be seen within 2-4 weeks, while comprehensive optimization projects take 8-12 weeks for full implementation and testing."
        },
        {
          question: "How much does it cost to optimize my online shop?",
          answer: "Costs vary based on your store's complexity. We offer customized packages starting from €2,500 for basic optimization up to €15,000+ for comprehensive enterprise solutions."
        },
        {
          question: "Do you offer A/B testing exclusively for Shopify?",
          answer: "While we specialize in Shopify, our services work with most e-commerce platforms including WooCommerce, Magento, and custom solutions."
        },
        {
          question: "What distinguishes a top conversion rate agency?",
          answer: "A top agency combines data-driven insights with psychological understanding, has proven case studies, uses systematic testing, and focuses on sustainable long-term growth."
        }
      ]
    },
    cta: {
      title: "Ready to scale? Start with a consultation ⚡️",
      subtitle: "Avoid the typical beginner mistakes in e-commerce.",
      buttonText: "Book Free Consultation"
    }
  },
  de: {
    hero: {
      title: "Conversion Rate Experten",
      subtitle: "Mehr Umsatz durch datengetriebenes Design. Steigern Sie Conversions mit Verhaltenspsychologie, A/B-Tests und bewährten UX-Methoden.",
      cta: "Kostenlose Analyse erhalten"
    },
    psychology: {
      title: "Es geht darum zu verstehen, wie Menschen Entscheidungen treffen—und warum sie nicht bei Ihnen kaufen.",
      subtitle: "Nur wenn Sie das verstehen, können Sie gezielt optimieren."
    },
    uxDesign: {
      title: "Erleben Sie einen Conversion-Boost durch datenorientiertes Design",
      subtitle: "Nachweislich 40%+ höhere Conversion-Raten"
    },
    scaling: {
      title: "Skalierung beginnt nicht mit mehr Traffic—sondern mit besserer Conversion",
      content: "Vor der Skalierung optimieren wir den Funnel—datengetrieben, psychologisch fundiert und mit klarem Testplan."
    },
    faq: {
      title: "Häufig gestellte Fragen",
      questions: [
        {
          question: "Wie lange dauert die Shop-Optimierung?",
          answer: "Erste Verbesserungen sind innerhalb von 2-4 Wochen sichtbar, während umfassende Projekte 8-12 Wochen für vollständige Umsetzung benötigen."
        },
        {
          question: "Was kostet es, meinen Online-Shop zu optimieren?",
          answer: "Die Kosten variieren je nach Komplexität. Wir bieten maßgeschneiderte Pakete ab €2.500 für grundlegende Optimierung bis zu €15.000+ für Enterprise-Lösungen."
        },
        {
          question: "Bieten Sie A/B-Tests ausschließlich für Shopify an?",
          answer: "Obwohl wir uns auf Shopify spezialisiert haben, funktionieren unsere Services mit den meisten E-Commerce-Plattformen."
        },
        {
          question: "Was zeichnet eine Top-Conversion-Rate-Agentur aus?",
          answer: "Eine Top-Agentur kombiniert datengetriebene Erkenntnisse mit psychologischem Verständnis, hat bewährte Fallstudien und konzentriert sich auf nachhaltiges Wachstum."
        }
      ]
    },
    cta: {
      title: "Bereit zu skalieren? Beginnen Sie mit einer Beratung ⚡️",
      subtitle: "Vermeiden Sie die typischen Anfängerfehler im E-Commerce.",
      buttonText: "Kostenlose Beratung buchen"
    }
  }
};

export function ConversionBoostingPage({ language = 'de' }: { language?: 'en' | 'de' }) {
  const t = conversionTranslations[language];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-white mb-10 text-5xl md:text-7xl font-bold italic">
              {t.hero.title}
            </h1>
          </motion.div>
          
          <motion.p 
            className="text-gray-300 mb-8 max-w-2xl text-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          >
              {t.hero.subtitle}
          </motion.p>

          <motion.button
            className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-4 rounded-lg transition-all hover:scale-105 font-semibold"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
              {t.hero.cta}
          </motion.button>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <span className="text-gray-400 text-sm uppercase tracking-wider">Scroll Down</span>
          <motion.div
            className="w-8 h-12 border-2 border-gray-400 rounded-full flex justify-center pt-2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div
              className="w-1.5 h-3 bg-gray-400 rounded-full"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </section>


      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Behavioral Psychology Focus */}
          <ScrollAnimatedSection direction="right">
            <div className="mb-24 bg-gradient-to-br from-purple-900/30 to-pink-900/20 border border-purple-800/50 rounded-2xl p-12 hover:border-purple-600/50 transition-all">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="w-6 h-6 text-purple-400" />
                    <span className="text-purple-400 text-sm font-semibold uppercase tracking-wider">Behavioral Psychology</span>
                </div>
                  <h2 className="text-white mb-6 text-4xl font-bold">{t.psychology.title}</h2>
                  <p className="text-gray-300 text-xl mb-6">{t.psychology.subtitle}</p>
                  <p className="text-gray-400">
                    Conversion optimization is behavioral psychology. We analyze user behavior patterns, decision-making processes, and psychological triggers that influence purchasing decisions.
                  </p>
              </div>
              <div className="relative">
                  <div className="absolute inset-0 bg-purple-500/20 blur-3xl rounded-xl"></div>
                <ImageWithFallback
                    src="https://images.unsplash.com/photo-1593444286621-98245b7d4530?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwc3ljaG9sb2d5JTIwYmVoYXZpb3JhbCUyMGFuYWx5c2lzfGVufDF8fHx8MTc1OTIyNjM3OXww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Psychology Analysis"
                    className="relative w-full h-auto rounded-xl shadow-[0_0_60px_rgba(168,85,247,0.3)] max-w-xs mx-auto opacity-80 mix-blend-lighten"
                    style={{
                      WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,1) 40%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,0) 100%)',
                      maskImage: 'radial-gradient(circle, rgba(0,0,0,1) 40%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,0) 100%)'
                    }}
                />
              </div>
              </div>
            </div>
          </ScrollAnimatedSection>

          {/* UX Design Impact */}
          <FadeInSection>
            <div className="mb-24 bg-gradient-to-br from-blue-900/20 to-indigo-900/10 border border-blue-800/50 rounded-2xl p-12 hover:border-blue-600/50 transition-all">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative order-2 md:order-1">
                  <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-xl"></div>
                <ImageWithFallback
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBhbmFseXRpY3MlMjBkYXNoYm9hcmQlMjBkYXRhfGVufDF8fHx8MTc1OTIyNjM2OHww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Analytics Dashboard"
                    className="relative w-full h-auto rounded-xl shadow-[0_0_60px_rgba(59,130,246,0.3)] max-w-xs mx-auto opacity-80 mix-blend-lighten"
                    style={{
                      WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,1) 40%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,0) 100%)',
                      maskImage: 'radial-gradient(circle, rgba(0,0,0,1) 40%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,0) 100%)'
                    }}
                />
              </div>
              <div className="order-1 md:order-2">
                  <div className="flex items-center gap-3 mb-4">
                    <BarChart3 className="w-6 h-6 text-blue-400" />
                    <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">{t.uxDesign.subtitle}</span>
                </div>
                  <h2 className="text-white mb-6 text-4xl font-bold">{t.uxDesign.title}</h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                      <span className="text-gray-300">Detailed funnel analysis and user data insights</span>
              </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                      <span className="text-gray-300">Strategic A/B testing with proven methodologies</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                      <span className="text-gray-300">Data-driven decisions for continuous optimization</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>

          {/* Scaling Strategy */}
          <ScrollAnimatedSection direction="left">
            <div className="mb-24 bg-gradient-to-br from-emerald-900/20 to-teal-900/10 border border-emerald-800/50 rounded-2xl p-12 hover:border-emerald-600/50 transition-all">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                  <div className="flex items-center gap-3 mb-4">
                    <TrendingUp className="w-6 h-6 text-emerald-400" />
                    <span className="text-emerald-400 text-sm font-semibold uppercase tracking-wider">Smart Scaling</span>
                </div>
                  <h2 className="text-white mb-6 text-4xl font-bold">{t.scaling.title}</h2>
                  <p className="text-gray-300 text-lg">{t.scaling.content}</p>
              </div>
              <div className="relative">
                  <div className="absolute inset-0 bg-emerald-500/20 blur-3xl rounded-xl"></div>
                <ImageWithFallback
                    src="https://images.unsplash.com/photo-1723095816936-fcda04ba0ece?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBjb21tZXJjZSUyMGdyb3d0aHxlbnwxfHx8fDE3NTkyMjYzODJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Commerce Growth"
                    className="relative w-full h-auto rounded-xl shadow-[0_0_60px_rgba(16,185,129,0.3)] max-w-xs mx-auto opacity-80 mix-blend-lighten"
                    style={{
                      WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,1) 40%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,0) 100%)',
                      maskImage: 'radial-gradient(circle, rgba(0,0,0,1) 40%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,0) 100%)'
                    }}
                  />
                </div>
              </div>
            </div>
          </ScrollAnimatedSection>

          {/* FAQ Section */}
          <FadeInSection>
          <div className="mb-24 bg-zinc-900/30 border border-gray-800 rounded-2xl p-12">
            <div className="text-center mb-12">
                <h2 className="text-white text-4xl font-bold">{t.faq.title}</h2>
            </div>
            
            <Accordion type="single" collapsible className="max-w-4xl mx-auto space-y-4">
              {t.faq.questions.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                    className="bg-black/30 border border-gray-700 rounded-lg px-6 data-[state=open]:border-purple-600/50"
                >
                    <AccordionTrigger className="text-white hover:no-underline py-5 text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400 pb-5">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          </FadeInSection>

          {/* Final CTA */}
          <ScrollAnimatedSection direction="left">
            <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl p-12 text-center backdrop-blur-sm">
              <h2 className="text-white mb-6 text-4xl md:text-5xl font-bold">{t.cta.title}</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">{t.cta.subtitle}</p>
              <button className="bg-white text-black px-12 py-4 rounded-lg hover:bg-gray-100 transition-all hover:scale-105 font-semibold text-lg">
              {t.cta.buttonText}
            </button>
              <p className="text-gray-500 text-sm mt-4">100% kostenlos und unverbindlich.</p>
          </div>
          </ScrollAnimatedSection>
      </div>
      </section>
    </div>
  );
}