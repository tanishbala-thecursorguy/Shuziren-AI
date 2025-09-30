import image_fa17b6cdbab0384e23ca12eef87b76f1ceca01e8 from 'figma:asset/fa17b6cdbab0384e23ca12eef87b76f1ceca01e8.png';
import image_b8e4328c8043f4b74743e3cc7daec30c293e023e from 'figma:asset/b8e4328c8043f4b74743e3cc7daec30c293e023e.png';
import heroImage from 'figma:asset/5c87ebfd2e406af7baf242598884625c8f318a8b.png';
import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight, Sparkles, Zap, TrendingUp } from 'lucide-react';
import { AIToolsScrolling } from './AIToolsScrolling';
import { TypingEffect } from './TypingEffect';

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

const automationsTranslations = {
  en: {
    hero: {
      title: "Revolutionize your work with AI and Shuziren AI",
      subtitle: "Turn smarts into power. Shuziren AI's drag-and-drop automation tools allow you to gather info to prompt AI and seamlessly direct outputs to the right places. Build smart automations that adapt to changing conditions in real time.",
      cta: "START AUTOMATING NOW"
    }
  },
  de: {
    hero: {
      title: "Revolutionieren Sie Ihre Arbeit mit KI und Shuziren AI",
      subtitle: "Verwandeln Sie Intelligenz in Kraft. Die Drag-and-Drop-Automatisierungstools von Shuziren AI ermöglichen es Ihnen, Informationen zu sammeln, um KI zu steuern und Ausgaben nahtlos an die richtigen Stellen zu leiten. Erstellen Sie intelligente Automatisierungen, die sich in Echtzeit anpassen.",
      cta: "JETZT AUTOMATISIEREN"
    }
  }
};

export function AutomationsPage({ language = 'en' }: { language?: 'en' | 'de' }) {
  const t = automationsTranslations[language];
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with Typing Effect */}
      <section className="min-h-screen flex items-center justify-center px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-white mb-6 text-5xl md:text-7xl font-bold min-h-[200px] flex items-center justify-center">
              <TypingEffect text={t.hero.title} speed={50} delay={500} loop={true} />
            </h1>
            
            <p className="text-gray-400 mb-8 text-lg md:text-xl max-w-3xl mx-auto">
              {t.hero.subtitle}
            </p>

            <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-lg transition-all hover:scale-105">
              {t.hero.cta}
            </button>
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

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* AI Agents - Key Feature */}
          <ScrollAnimatedSection direction="right">
            <div className="mb-24 bg-gradient-to-br from-cyan-900/30 to-blue-900/20 border border-cyan-800/50 rounded-2xl p-12 hover:border-cyan-600/50 transition-all">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Sparkles className="w-6 h-6 text-cyan-400" />
                    <span className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">Next Generation</span>
                  </div>
                  <h2 className="text-white mb-6 text-4xl font-bold">
                    Shuziren AI Agents: Automation that thinks
                  </h2>
                  <p className="text-gray-300 mb-6 text-lg">
                    Build, customize, and manage intelligent AI agents that automate your business processes and adapt in real-time to changing conditions.
                  </p>
                  <button className="text-cyan-400 inline-flex items-center gap-2 hover:gap-3 transition-all font-semibold">
                    Discover AI Agents
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-xl"></div>
                  <ImageWithFallback
                    src={image_fa17b6cdbab0384e23ca12eef87b76f1ceca01e8}
                    alt="AI Agents Network"
                    className="relative w-full h-auto rounded-xl shadow-[0_0_60px_rgba(6,182,212,0.3)] max-w-xs mx-auto opacity-90 mix-blend-lighten"
                    style={{
                      WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,1) 40%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,0) 100%)',
                      maskImage: 'radial-gradient(circle, rgba(0,0,0,1) 40%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,0) 100%)'
                    }}
                  />
                </div>
              </div>
            </div>
          </ScrollAnimatedSection>

          {/* AI Detects Patterns */}
          <FadeInSection>
            <div className="mb-24 bg-gradient-to-br from-purple-900/20 to-pink-900/10 border border-purple-800/50 rounded-2xl p-12 hover:border-purple-600/50 transition-all">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative order-2 md:order-1">
                  <div className="absolute inset-0 bg-purple-500/20 blur-3xl rounded-xl"></div>
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1737505599159-5ffc1dcbc08f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwbmV1cmFsJTIwbmV0d29yayUyMGJyYWlufGVufDF8fHx8MTc1OTE5NTYwNnww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="AI Neural Network"
                    className="relative w-full h-auto rounded-xl shadow-[0_0_60px_rgba(168,85,247,0.3)] max-w-xs mx-auto opacity-90 mix-blend-lighten"
                    style={{
                      WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,1) 40%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,0) 100%)',
                      maskImage: 'radial-gradient(circle, rgba(0,0,0,1) 40%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,0) 100%)'
                    }}
                  />
                </div>
                <div className="order-1 md:order-2">
                  <div className="flex items-center gap-3 mb-4">
                    <Zap className="w-6 h-6 text-purple-400" />
                    <span className="text-purple-400 text-sm font-semibold uppercase tracking-wider">Smart Detection</span>
                  </div>
                  <h2 className="text-white mb-6 text-4xl font-bold">
                    AI detects patterns. Shuziren delivers results.
                  </h2>
                  <p className="text-gray-300 mb-6 text-lg">
                    Let AI analyze data, detect patterns, and generate insights. Shuziren AI automatically sends the final data exactly where you need it—every single time.
                  </p>
                </div>
              </div>
            </div>
          </FadeInSection>

          {/* AI Generates Content */}
          <ScrollAnimatedSection direction="left">
            <div className="mb-24 bg-gradient-to-br from-emerald-900/20 to-teal-900/10 border border-emerald-800/50 rounded-2xl p-12 hover:border-emerald-600/50 transition-all">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <TrendingUp className="w-6 h-6 text-emerald-400" />
                    <span className="text-emerald-400 text-sm font-semibold uppercase tracking-wider">Content Automation</span>
                  </div>
                  <h2 className="text-white mb-6 text-4xl font-bold">
                    AI creates. Shuziren publishes. Automatically.
                  </h2>
                  <p className="text-gray-300 mb-6 text-lg">
                    Generate and publish content automatically. Shuziren AI's workflows refine your social posts and deliver them whenever a new record is created.
                  </p>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-emerald-500/20 blur-3xl rounded-xl"></div>
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1594746017047-d581d46a624f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGNvbnRlbnQlMjBjcmVhdGlvbiUyMHdyaXRpbmclMjBhdXRvbWF0aW9ufGVufDF8fHx8MTc1OTIyNTQ4NHww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="AI Content Creation"
                    className="relative w-full h-auto rounded-xl shadow-[0_0_60px_rgba(16,185,129,0.3)] max-w-xs mx-auto opacity-90 mix-blend-lighten"
                    style={{
                      WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,1) 40%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,0) 100%)',
                      maskImage: 'radial-gradient(circle, rgba(0,0,0,1) 40%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,0) 100%)'
                    }}
                  />
                </div>
              </div>
            </div>
          </ScrollAnimatedSection>

          {/* AI Assistant */}
          <FadeInSection>
            <div className="mb-24 bg-gradient-to-br from-blue-900/20 to-indigo-900/10 border border-blue-800/50 rounded-2xl p-12 hover:border-blue-600/50 transition-all">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative order-2 md:order-1">
                  <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-xl"></div>
                  <ImageWithFallback
                    src={image_b8e4328c8043f4b74743e3cc7daec30c293e023e}
                    alt="AI Assistant"
                    className="relative w-full h-auto rounded-xl shadow-[0_0_60px_rgba(59,130,246,0.3)] max-w-xs mx-auto opacity-90 mix-blend-lighten"
                    style={{
                      WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,1) 40%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,0) 100%)',
                      maskImage: 'radial-gradient(circle, rgba(0,0,0,1) 40%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,0) 100%)'
                    }}
                  />
                </div>
                <div className="order-1 md:order-2">
                  <div className="flex items-center gap-3 mb-4">
                    <Sparkles className="w-6 h-6 text-blue-400" />
                    <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">Intelligent Assistant</span>
                  </div>
                  <h2 className="text-white mb-6 text-4xl font-bold">
                    AI Assistant that understands you
                  </h2>
                  <p className="text-gray-300 mb-6 text-lg">
                    Build and adjust scenarios with natural language. Map variables, automate workflows, and boost productivity—all with Shuziren AI's intelligent assistant.
                  </p>
                </div>
              </div>
            </div>
          </FadeInSection>

          {/* Smart Request Routing */}
          <ScrollAnimatedSection direction="right">
            <div className="mb-24 bg-gradient-to-br from-orange-900/20 to-red-900/10 border border-orange-800/50 rounded-2xl p-12 hover:border-orange-600/50 transition-all">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Zap className="w-6 h-6 text-orange-400" />
                    <span className="text-orange-400 text-sm font-semibold uppercase tracking-wider">Smart Routing</span>
                  </div>
                  <h2 className="text-white mb-6 text-4xl font-bold">
                    AI sorts requests. We route them perfectly.
                  </h2>
                  <p className="text-gray-300 mb-6 text-lg">
                    Streamline customer requests with AI classification. Automatically format emails, create tickets, and route to the right team—instantly.
                  </p>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-orange-500/20 blur-3xl rounded-xl"></div>
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1570155308259-f4480a5c3696?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMHRlY2hub2xvZ3klMjByb2JvdHxlbnwxfHx8fDE3NTkyMTg3MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Smart Request Routing"
                    className="relative w-full h-auto rounded-xl shadow-[0_0_60px_rgba(251,146,60,0.3)] max-w-xs mx-auto opacity-90 mix-blend-lighten"
                    style={{
                      WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,1) 40%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,0) 100%)',
                      maskImage: 'radial-gradient(circle, rgba(0,0,0,1) 40%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,0) 100%)'
                    }}
                  />
                </div>
              </div>
            </div>
          </ScrollAnimatedSection>

          {/* Data Enrichment */}
          <FadeInSection>
            <div className="mb-24 bg-gradient-to-br from-pink-900/20 to-rose-900/10 border border-pink-800/50 rounded-2xl p-12 hover:border-pink-600/50 transition-all">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative order-2 md:order-1">
                  <div className="absolute inset-0 bg-pink-500/20 blur-3xl rounded-xl"></div>
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1758556548980-1e56e501c72f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHNlcnZpY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc1OTIxODcwMXww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Data Enrichment"
                    className="relative w-full h-auto rounded-xl shadow-[0_0_60px_rgba(236,72,153,0.3)] max-w-xs mx-auto opacity-90 mix-blend-lighten"
                    style={{
                      WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,1) 40%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,0) 100%)',
                      maskImage: 'radial-gradient(circle, rgba(0,0,0,1) 40%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,0) 100%)'
                    }}
                  />
                </div>
                <div className="order-1 md:order-2">
                  <div className="flex items-center gap-3 mb-4">
                    <TrendingUp className="w-6 h-6 text-pink-400" />
                    <span className="text-pink-400 text-sm font-semibold uppercase tracking-wider">Data Intelligence</span>
                  </div>
                  <h2 className="text-white mb-6 text-4xl font-bold">
                    AI enriches data. We deliver insights.
                  </h2>
                  <p className="text-gray-300 mb-6 text-lg">
                    Augment your data with AI-powered insights. Maintain consistency across systems and get comprehensive customer intelligence for better decisions.
                  </p>
                </div>
              </div>
            </div>
          </FadeInSection>

          {/* AI Insights Dashboard */}
          <ScrollAnimatedSection direction="left">
            <div className="mb-24 bg-gradient-to-br from-violet-900/20 to-purple-900/10 border border-violet-800/50 rounded-2xl p-12 hover:border-violet-600/50 transition-all">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Sparkles className="w-6 h-6 text-violet-400" />
                    <span className="text-violet-400 text-sm font-semibold uppercase tracking-wider">Smart Analytics</span>
                  </div>
                  <h2 className="text-white mb-6 text-4xl font-bold">
                    AI summarizes. We deliver actionable insights.
                  </h2>
                  <p className="text-gray-300 mb-6 text-lg">
                    Get streamlined customer insights that inform your decisions. AI analyzes feedback and generates systematic reports highlighting trends—automatically.
                  </p>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-violet-500/20 blur-3xl rounded-xl"></div>
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1758876202980-0a28b744fb24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGludGVsbGlnZW5jZSUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NTkxNDk2MDN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="AI Insights Dashboard"
                    className="relative w-full h-auto rounded-xl shadow-[0_0_60px_rgba(139,92,246,0.3)] max-w-xs mx-auto opacity-90 mix-blend-lighten"
                    style={{
                      WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,1) 40%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,0) 100%)',
                      maskImage: 'radial-gradient(circle, rgba(0,0,0,1) 40%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,0) 100%)'
                    }}
                  />
                </div>
              </div>
            </div>
          </ScrollAnimatedSection>

          {/* AI Tools Integration */}
          <FadeInSection>
            <div className="mb-24">
              <div className="text-center mb-12">
                <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">
                  Works with your favorite AI tools
                </h2>
                <p className="text-gray-400 text-lg">
                  Seamlessly integrate with the best AI platforms
                </p>
              </div>
              <AIToolsScrolling />
            </div>
          </FadeInSection>

          {/* Final CTA */}
          <ScrollAnimatedSection direction="left">
            <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl p-12 text-center backdrop-blur-sm">
              <h2 className="text-white mb-6 text-4xl md:text-5xl font-bold">
                Ready to automate with AI?
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
                Transform your business with intelligent automation. Book a free consultation to discover how Shuziren AI can revolutionize your workflows.
              </p>
              <button className="bg-white text-black px-12 py-4 rounded-lg hover:bg-gray-100 transition-all hover:scale-105 font-semibold text-lg">
                Book a Free Call
              </button>
            </div>
          </ScrollAnimatedSection>
        </div>
      </section>
    </div>
  );
}