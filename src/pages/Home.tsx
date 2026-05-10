import { motion } from "motion/react"
import { Button } from "@/components/ui/Button"
import { Link } from "react-router-dom"
import { Shield, Zap, Brain, Activity } from "lucide-react"

export function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  return (
    <div className="flex flex-col w-full overflow-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-10 overflow-hidden">
        {/* Background ambient glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neural-glow/10 rounded-full blur-[120px] pointer-events-none -z-10" />
        
        <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="flex flex-col items-start max-w-2xl"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="mb-6 inline-flex items-center gap-2">
              <span className="w-8 h-[1px] bg-neural-orange"></span>
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-neural-orange">Precision Neuroscience</span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl font-display font-light tracking-tighter text-graphite-black leading-[0.9] mb-8">
              Restore <br/>
              <span className="italic font-serif text-deep-neural-gray">Neural</span> <br/>
              Vitality.
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-lg text-deep-neural-gray mb-10 leading-relaxed font-sans max-w-md">
              Premium neuroscience-inspired nutritional support for nerve health, cellular energy metabolism, and modern wellness.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4">
              <Link to="/products">
                <Button size="lg" className="w-full sm:w-auto">
                  Explore Durabilita
                </Button>
              </Link>
              <Link to="/science">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  Learn the Science
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div 
            className="relative h-[500px] lg:h-[700px] flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-neural-orange/5 to-transparent rounded-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-20 pointer-events-none">
              <div className="w-full h-full rounded-full blur-[120px] bg-gradient-to-tr from-neural-orange to-medical-gray"></div>
            </div>
            {/* Actual Product Render or Video */}
            <div className="z-10 relative w-64 md:w-80 h-[400px] md:h-[500px] rounded-[2rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] border border-medical-gray/30 overflow-hidden transform hover:-translate-y-2 transition-transform duration-700 bg-white">
              <img 
                src="/Assets/main image.png" 
                alt="Durabilita Product" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 mt-12 text-center w-full z-10 hidden lg:block">
              <p className="text-[10px] uppercase tracking-widest text-deep-neural-gray font-bold">Clinical Grade 01 / Formula N-8</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Ingredients/Stats Footer Strip */}
      <div className="bg-graphite-black px-6 md:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-8 z-10 relative">
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-8 md:gap-16 w-full md:w-auto">
          <div>
            <p className="text-neural-orange text-[10px] font-bold tracking-widest uppercase mb-1">B-Complex</p>
            <p className="text-white text-sm font-medium">Methylcobalamin B12</p>
          </div>
          <div className="hidden md:block w-[1px] h-10 bg-white/10"></div>
          <div>
            <p className="text-neural-orange text-[10px] font-bold tracking-widest uppercase mb-1">Metabolic</p>
            <p className="text-white text-sm font-medium">Alpha-Lipoic Acid</p>
          </div>
          <div className="hidden md:block w-[1px] h-10 bg-white/10"></div>
          <div>
            <p className="text-neural-orange text-[10px] font-bold tracking-widest uppercase mb-1">Absorption</p>
            <p className="text-white text-sm font-medium">Benfotiamine</p>
          </div>
        </div>
        <div className="text-center md:text-right flex items-center gap-6 shrink-0">
           <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full border-2 border-graphite-black bg-medical-gray"></div>
              <div className="w-8 h-8 rounded-full border-2 border-graphite-black bg-deep-neural-gray"></div>
              <div className="w-8 h-8 rounded-full border-2 border-graphite-black bg-neural-orange"></div>
           </div>
           <p className="text-white text-xs font-semibold tracking-wide text-left">Trusted by 10k+ <br/> Experts Globally</p>
        </div>
      </div>

      {/* 2. Scientific Benefits */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Vitality Starts at the Synapse</h2>
            <p className="text-lg text-deep-neural-gray">
              Targeted nutritional support designed to optimize the foundational elements of your nervous system.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: "Nerve Support", 
                desc: "Formulated with precise B-vitamins to support the structural integrity of the myelin sheath and optimize signaling.",
                icon: Brain 
              },
              { 
                title: "Energy Metabolism", 
                desc: "Facilitates cellular energy production, reducing fatigue at the molecular level for sustained daily vitality.",
                icon: Zap 
              },
              { 
                title: "Neurological Wellness", 
                desc: "Provides essential nutrients often depleted by modern stress, supporting overall cognitive and peripheral health.",
                icon: Activity 
              },
              { 
                title: "Antioxidant Support", 
                desc: "Helps neutralize free radicals that can damage sensitive nerve tissues, promoting long-term cellular resilience.",
                icon: Shield 
              }
            ].map((benefit, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-clinical-white p-8 rounded-3xl border border-medical-gray/30 hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="w-12 h-12 bg-neural-orange/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-6 h-6 text-neural-orange" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-display font-bold text-graphite-black mb-3">{benefit.title}</h3>
                <p className="text-deep-neural-gray text-sm leading-relaxed">
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CTA Section */}
      <section className="py-32 relative overflow-hidden bg-graphite-black text-center">
         <div className="absolute inset-0 bg-graphite-black/70 z-10 transition-colors duration-1000"></div>
         <video 
            src="/Assets/7.mp4"
            autoPlay loop muted playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-60 z-0"
         />
         <div className="max-w-4xl mx-auto px-6 relative z-20">
            <h2 className="text-5xl md:text-7xl font-display font-light text-white mb-8 tracking-tighter">Ready to <span className="italic font-serif text-medical-gray">reclaim</span> your natural rhythm?</h2>
            <p className="text-xl text-medical-gray mb-12 max-w-2xl mx-auto font-sans">
              Experience the clinical standard in neurological support. Formulated for the decades ahead.
            </p>
            <Link to="/products">
              <Button size="lg" className="px-10 text-lg">
                Start Your Protocol
              </Button>
            </Link>
         </div>
      </section>

    </div>
  )
}
