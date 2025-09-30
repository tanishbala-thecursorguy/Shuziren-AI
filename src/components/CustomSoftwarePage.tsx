import { useEffect } from 'react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Check } from 'lucide-react';

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

// Animated checkmark list item
function AnimatedListItem({ 
  children, 
  delay = 0 
}: { 
  children: React.ReactNode; 
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: false,
    margin: "-100px"
  });

  return (
    <motion.li
      ref={ref}
      className="flex items-start gap-3 text-gray-400"
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      <motion.span
        className="text-emerald-400 mt-1 flex-shrink-0"
        initial={{ scale: 0, rotate: -180 }}
        animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
        transition={{ 
          duration: 0.5, 
          delay: delay + 0.2,
          type: "spring",
          stiffness: 200,
          damping: 15
        }}
      >
        <Check className="w-5 h-5" />
      </motion.span>
      <span>{children}</span>
    </motion.li>
  );
}

// Translation structure
const customSoftwareTranslations = {
  en: {
    hero: {
      title: "Have individual software developed",
      subtitle: "We are digital problem solvers and develop customized software on your behalf.",
      cta: "ARRANGE A CONSULTATION APPOINTMENT NOW"
    },
    intro: {
      heading: "Software development that perfectly fits your project",
      subheading: "CUSTOM SOFTWARE FROM SHUZIREN AI",
      description: "We design, develop, and optimize customized software for your company. Affordably, with the highest quality, and always on time. Rely on more than 25 years of experience in developing tailor-made, customized software for hundreds of companies across a wide range of industries.",
      requirements: {
        title: "Our software is tailored precisely to your requirements:",
        list: [
          "Digitize your business processes and products exactly as you need them",
          "Save yourself the costly updates and expensive licensing costs associated with standard software",
          "Pay only for the program features that are really important to you",
          "Benefit from unlimited number of licenses and usage period"
        ],
        cta: "GET ADVICE NOW"
      }
    },
    benefits: {
      label: "BENEFITS",
      title: "The advantages of individual software from Shuziren AI",
      features: [
        {
          title: "MORE THAN 25 YEARS OF EXPERIENCE",
          subtitle: "IN CUSTOM SOFTWARE DEVELOPMENT"
        },
        {
          title: "INDIVIDUALLY SCALABLE AND",
          subtitle: "FLEXIBLY ADAPTED"
        },
        {
          title: "DEVELOPED EXACTLY TO YOUR",
          subtitle: "SPECIFIC REQUIREMENTS"
        }
      ]
    },
    advantages: {
      items: [
        {
          title: "Low development costs",
          description: "We offer software development at very affordable rates, competing with freelancers' hourly rates. We develop software as a team and can bring in an expert for each subtask."
        },
        {
          title: "Fast and efficient",
          description: "Our standardized processes guarantee maximum efficiency in software development. This allows you to complete many projects within just a few months. Because the software is optimally tailored to your needs, you avoid time-consuming customization."
        },
        {
          title: "Guaranteed unique",
          description: "We develop custom software precisely according to your requirements. You become the owner of the software and receive an unlimited number of licenses and an unlimited usage period."
        }
      ]
    },
    workflow: {
      label: "WORKFLOW",
      title: "This is how we work",
      subtitle: "Our guaranteed targeted and efficient process",
      steps: [
        {
          number: "01",
          title: "You brief us",
          description: "Tell us about your project, your goals, and your specific requirements."
        },
        {
          number: "02",
          title: "We advise you",
          description: "Our experts analyze your needs and develop a customized solution concept."
        },
        {
          number: "03",
          title: "We develop",
          description: "Our experienced team implements your project with the highest quality standards."
        }
      ]
    },
    about: {
      label: "ABOUT SHUZIREN AI",
      title: "Your strong software partner",
      paragraphs: [
        "We've been developing custom software for our customers for over 25 years, and we're confident we'll bring your software project to a successful conclusion. That's our promise, and our customers confirm it.",
        "As an owner-managed medium-sized company, Shuziren AI has grown continuously since its founding. Our team now consists of more than 45 highly qualified software developers. Our natural growth is based on sound structures and sustainable business strategies. Guided by values such as reliability, transparency, and integrity, we are committed to fair cooperation and a truly collaborative partnership.",
        "You'll always have a competent contact person with expert advice. Every project at Shuziren AI is managed by one of our managing directors."
      ],
      cta: "FIND YOUR PERSONAL CONTACT NOW"
    },
    testimonials: {
      title: "This is what our customers say!",
      items: [
        {
          quote: "The collaboration with Shuziren AI was outstanding. They understood our complex requirements immediately and delivered a solution that exceeded our expectations.",
          author: "Michael Schmidt",
          company: "Tech Solutions GmbH"
        },
        {
          quote: "Thanks to the custom software from Shuziren AI, we were able to optimize our processes and save significant costs. The team was professional and reliable throughout.",
          author: "Sarah Weber",
          company: "Innovation Corp"
        },
        {
          quote: "What impressed us most was the flexibility and expertise of the team. They developed exactly the solution we needed, on time and within budget.",
          author: "Thomas Müller",
          company: "Digital Ventures"
        }
      ]
    }
  },
  de: {
    hero: {
      title: "Individuelle Software entwickeln lassen",
      subtitle: "Wir sind digitale Problemlöser und entwickeln für Sie maßgeschneiderte Software.",
      cta: "JETZT BERATUNGSTERMIN VEREINBAREN"
    },
    intro: {
      heading: "Softwareentwicklung, die perfekt zu Ihrem Projekt passt",
      subheading: "INDIVIDUELLE SOFTWARE VON SHUZIREN AI",
      description: "Wir designen, entwickeln und optimieren maßgeschneiderte Software für Ihr Unternehmen. Kostengünstig, mit höchster Qualität und immer pünktlich. Vertrauen Sie auf mehr als 25 Jahre Erfahrung in der Entwicklung maßgeschneiderter, individueller Software für hunderte Unternehmen aus den verschiedensten Branchen.",
      requirements: {
        title: "Unsere Software ist exakt auf Ihre Anforderungen zugeschnitten:",
        list: [
          "Digitalisieren Sie Ihre Geschäftsprozesse und Produkte genau so, wie Sie es benötigen",
          "Sparen Sie sich die kostspieligen Updates und teuren Lizenzkosten von Standardsoftware",
          "Zahlen Sie nur für die Programmfunktionen, die Ihnen wirklich wichtig sind",
          "Profitieren Sie von unbegrenzter Anzahl an Lizenzen und Nutzungsdauer"
        ],
        cta: "JETZT BERATEN LASSEN"
      }
    },
    benefits: {
      label: "VORTEILE",
      title: "Die Vorteile von individueller Software von Shuziren AI",
      features: [
        {
          title: "MEHR ALS 25 JAHRE ERFAHRUNG",
          subtitle: "IN DER INDIVIDUELLEN SOFTWAREENTWICKLUNG"
        },
        {
          title: "INDIVIDUELL SKALIERBAR UND",
          subtitle: "FLEXIBEL ANGEPASST"
        },
        {
          title: "GENAU NACH IHREN SPEZIFISCHEN",
          subtitle: "ANFORDERUNGEN ENTWICKELT"
        }
      ]
    },
    advantages: {
      items: [
        {
          title: "Geringe Entwicklungskosten",
          description: "Wir bieten Softwareentwicklung zu sehr günstigen Konditionen, die mit Freelancer-Stundensätzen konkurrieren. Wir entwickeln Software als Team und können für jede Teilaufgabe einen Experten einbringen."
        },
        {
          title: "Schnell und effizient",
          description: "Unsere standardisierten Prozesse garantieren maximale Effizienz in der Softwareentwicklung. So können Sie viele Projekte bereits innerhalb weniger Monate abschließen. Da die Software optimal auf Ihre Bedürfnisse zugeschnitten ist, vermeiden Sie zeitraubende Anpassungen."
        },
        {
          title: "Garantiert einzigartig",
          description: "Wir entwickeln maßgeschneiderte Software genau nach Ihren Anforderungen. Sie werden Eigentümer der Software und erhalten eine unbegrenzte Anzahl an Lizenzen und eine unbegrenzte Nutzungsdauer."
        }
      ]
    },
    workflow: {
      label: "ARBEITSABLAUF",
      title: "So arbeiten wir",
      subtitle: "Unser garantiert zielgerichteter und effizienter Prozess",
      steps: [
        {
          number: "01",
          title: "Sie briefen uns",
          description: "Erzählen Sie uns von Ihrem Projekt, Ihren Zielen und Ihren spezifischen Anforderungen."
        },
        {
          number: "02",
          title: "Wir beraten Sie",
          description: "Unsere Experten analysieren Ihre Bedürfnisse und entwickeln ein maßgeschneidertes Lösungskonzept."
        },
        {
          number: "03",
          title: "Wir entwickeln",
          description: "Unser erfahrenes Team setzt Ihr Projekt mit höchsten Qualitätsstandards um."
        }
      ]
    },
    about: {
      label: "ÜBER SHUZIREN AI",
      title: "Ihr starker Software-Partner",
      paragraphs: [
        "Wir entwickeln seit über 25 Jahren individuelle Software für unsere Kunden und sind zuversichtlich, dass wir auch Ihr Software-Projekt zum Erfolg führen werden. Das ist unser Versprechen, und unsere Kunden bestätigen es.",
        "Als inhabergeführtes mittelständisches Unternehmen ist Shuziren AI seit seiner Gründung kontinuierlich gewachsen. Unser Team besteht mittlerweile aus mehr als 45 hochqualifizierten Software-Entwicklern. Unser natürliches Wachstum basiert auf soliden Strukturen und nachhaltigen Geschäftsstrategien. Geleitet von Werten wie Zuverlässigkeit, Transparenz und Integrität setzen wir auf faire Zusammenarbeit und eine echte partnerschaftliche Zusammenarbeit.",
        "Sie haben immer einen kompetenten Ansprechpartner mit fachkundiger Beratung. Jedes Projekt bei Shuziren AI wird von einem unserer Geschäftsführer betreut."
      ],
      cta: "FINDEN SIE JETZT IHREN PERSÖNLICHEN ANSPRECHPARTNER"
    },
    testimonials: {
      title: "Das sagen unsere Kunden!",
      items: [
        {
          quote: "Die Zusammenarbeit mit Shuziren AI war hervorragend. Sie haben unsere komplexen Anforderungen sofort verstanden und eine Lösung geliefert, die unsere Erwartungen übertroffen hat.",
          author: "Michael Schmidt",
          company: "Tech Solutions GmbH"
        },
        {
          quote: "Dank der maßgeschneiderten Software von Shuziren AI konnten wir unsere Prozesse optimieren und erhebliche Kosten einsparen. Das Team war durchweg professionell und zuverlässig.",
          author: "Sarah Weber",
          company: "Innovation Corp"
        },
        {
          quote: "Was uns am meisten beeindruckt hat, war die Flexibilität und Expertise des Teams. Sie haben genau die Lösung entwickelt, die wir brauchten – pünktlich und im Budget.",
          author: "Thomas Müller",
          company: "Digital Ventures"
        }
      ]
    }
  }
};

export function CustomSoftwarePage({ language = 'en' }: { language?: 'en' | 'de' }) {
  const t = customSoftwareTranslations[language];
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-[rgba(255,255,255,1)] mb-10 opacity-100 text-5xl md:text-7xl font-bold italic font-normal">
              {t.hero.title}
            </h1>
          </motion.div>
          
          <motion.p 
            className="text-white mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.button
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg transition-colors"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t.hero.cta}
          </motion.button>
        </div>
      </section>

      {/* Intro Section */}
      <FadeInSection>
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              className="text-white mb-12 text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              {t.intro.heading}
            </motion.h2>
            
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-emerald-400 mb-6 tracking-wider text-sm">
                {t.intro.subheading}
              </p>
              <p className="text-gray-400 mb-16">
                {t.intro.description}
              </p>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Requirements Section with Animated Checkmarks */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <h3 className="text-white mb-8">{t.intro.requirements.title}</h3>
          </FadeInSection>
          
          <ul className="space-y-6 mb-12">
            {t.intro.requirements.list.map((item, index) => (
              <AnimatedListItem key={index} delay={index * 0.15}>
                {item}
              </AnimatedListItem>
            ))}
          </ul>

          <FadeInSection delay={0.6}>
            <motion.button 
              className="bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,255,255,0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              {t.intro.requirements.cta}
            </motion.button>
          </FadeInSection>
        </div>
      </section>

      {/* Benefits Section */}
      <FadeInSection>
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.p 
              className="text-emerald-400 mb-4 tracking-wider text-sm text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
            >
              {t.benefits.label}
            </motion.p>
            <h2 className="text-white mb-12 text-center">{t.benefits.title}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {t.benefits.features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="text-center p-6 rounded-lg bg-gradient-to-b from-zinc-900/50 to-transparent border border-gray-800/50"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05,
                    borderColor: "rgba(16, 185, 129, 0.5)",
                    transition: { duration: 0.2 }
                  }}
                >
                  <h3 className="text-white mb-2 text-sm">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.subtitle}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Advantages Section with large icons */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto space-y-32">
          {t.advantages.items.map((item, index) => (
            <ScrollAnimatedSection 
              key={index} 
              direction={index % 2 === 0 ? 'left' : 'right'}
            >
              <div className={`grid md:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                {index % 2 === 0 ? (
                  <>
                    <motion.div 
                      className="flex justify-center"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <svg viewBox="0 0 200 200" className="w-48 h-48 text-white">
                        {index === 0 && (
                          // Euro tag icon
                          <>
                            <path 
                              d="M60 60 L100 40 L140 60 L160 100 L140 140 L100 160 L60 140 L40 100 Z" 
                              stroke="currentColor" 
                              strokeWidth="3" 
                              fill="none"
                            />
                            <circle cx="130" cy="70" r="8" fill="currentColor" />
                            <text x="85" y="115" fill="currentColor" fontSize="48" fontFamily="Arial">€</text>
                          </>
                        )}
                        {index === 2 && (
                          // Code brackets icon
                          <>
                            <rect x="50" y="50" width="100" height="100" fill="none" stroke="currentColor" strokeWidth="3" />
                            <path d="M80 70 L65 100 L80 130" stroke="currentColor" strokeWidth="3" fill="none" />
                            <path d="M120 70 L135 100 L120 130" stroke="currentColor" strokeWidth="3" fill="none" />
                            <line x1="95" y1="75" x2="105" y2="125" stroke="currentColor" strokeWidth="3" />
                          </>
                        )}
                      </svg>
                    </motion.div>
                    <div>
                      <h3 className="text-white mb-4">{item.title}</h3>
                      <p className="text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="order-2 md:order-1">
                      <h3 className="text-white mb-4">{item.title}</h3>
                      <p className="text-gray-400">
                        {item.description}
                      </p>
                    </div>
                    <motion.div 
                      className="flex justify-center order-1 md:order-2"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <svg viewBox="0 0 200 200" className="w-48 h-48 text-white">
                        {/* Bar chart icon */}
                        <rect x="30" y="130" width="30" height="40" fill="currentColor" />
                        <rect x="70" y="100" width="30" height="70" fill="currentColor" />
                        <rect x="110" y="70" width="30" height="100" fill="currentColor" />
                        <rect x="150" y="40" width="30" height="130" fill="currentColor" />
                        <line x1="20" y1="175" x2="190" y2="175" stroke="currentColor" strokeWidth="2" />
                        <line x1="20" y1="30" x2="20" y2="175" stroke="currentColor" strokeWidth="2" />
                      </svg>
                    </motion.div>
                  </>
                )}
              </div>
            </ScrollAnimatedSection>
          ))}
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeInSection className="text-center mb-16">
            <p className="text-emerald-400 mb-4 tracking-wider text-sm">
              {t.workflow.label}
            </p>
            <h2 className="text-white mb-4">{t.workflow.title}</h2>
            <p className="text-gray-400">{t.workflow.subtitle}</p>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-12">
            {t.workflow.steps.map((step, index) => (
              <motion.div
                key={index}
                className="text-center relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div 
                  className="text-6xl text-emerald-400 mb-6"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ 
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                    delay: index * 0.15 + 0.2
                  }}
                >
                  {step.number}
                </motion.div>
                <h3 className="text-white mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
                
                {/* Connecting arrow */}
                {index < t.workflow.steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 -right-6 text-emerald-400/30 text-4xl">
                    →
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <FadeInSection>
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.p 
              className="text-emerald-400 mb-4 tracking-wider text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
            >
              {t.about.label}
            </motion.p>
            <h2 className="text-white mb-8">{t.about.title}</h2>
            <div className="space-y-6 text-gray-400 mb-8">
              {t.about.paragraphs.map((para, index) => (
                <motion.p 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {para}
                </motion.p>
              ))}
            </div>
            <motion.button 
              className="bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,255,255,0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              {t.about.cta}
            </motion.button>
          </div>
        </section>
      </FadeInSection>

      {/* Testimonials Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <FadeInSection className="text-center mb-12">
            <h2 className="text-white">{t.testimonials.title}</h2>
          </FadeInSection>

          <div className="space-y-12">
            {t.testimonials.items.map((testimonial, index) => (
              <ScrollAnimatedSection 
                key={index} 
                direction={index % 2 === 0 ? 'left' : 'right'}
              >
                <motion.div 
                  className="border-l-4 border-emerald-400 pl-6 py-4 bg-zinc-900/20 rounded-r-lg"
                  whileHover={{ 
                    borderColor: "rgba(16, 185, 129, 1)",
                    backgroundColor: "rgba(39, 39, 42, 0.3)",
                    x: 10
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-gray-300 mb-4 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="text-white">{testimonial.author}</p>
                    <p className="text-gray-500 text-sm">{testimonial.company}</p>
                  </div>
                </motion.div>
              </ScrollAnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <FadeInSection>
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-white mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
            >
              Ready to start your custom software project?
            </motion.h2>
            <motion.button 
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-12 py-4 rounded-lg transition-colors"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 30px rgba(16, 185, 129, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              {t.hero.cta}
            </motion.button>
          </div>
        </section>
      </FadeInSection>
    </div>
  );
}