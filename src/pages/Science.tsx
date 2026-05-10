import { motion } from "motion/react"
import { Brain, Dna, Microscope, Zap } from "lucide-react"

export function Science() {
  const FadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <div className="pt-20 pb-32">
      <div className="max-w-4xl mx-auto px-6">
        
        <div className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-clinical-white rounded-full border border-medical-gray/30 mb-8 clinical-shadow"
          >
            <Microscope className="w-8 h-8 text-neural-orange" strokeWidth={1.5} />
          </motion.div>
          <motion.h1 
            initial="hidden" animate="visible" variants={FadeIn}
            className="text-5xl md:text-7xl font-display font-light text-graphite-black tracking-tighter mb-6"
          >
            The Clinical Architecture of <br className="hidden md:block"/><span className="italic font-serif text-deep-neural-gray">Neural</span> Optimization
          </motion.h1>
          <motion.p 
            initial="hidden" animate="visible" variants={FadeIn}
            className="text-lg text-deep-neural-gray leading-relaxed max-w-2xl mx-auto"
          >
            Our formulations are engineered at the intersection of modern neuroscience and clinical nutrition. We focus on the structural integrity of the nervous system.
          </motion.p>
        </div>

        <div className="space-y-32">
          
          {/* Section 1 */}
          <motion.section 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={FadeIn}
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="text-4xl font-display font-light text-medical-gray">01</span>
              <h2 className="text-3xl font-display font-bold text-graphite-black">Myelin Sheath Integrity</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-deep-neural-gray leading-relaxed mb-6">
                  The myelin sheath is the protective insulation surrounding nerve fibers. Its structural integrity is critical for rapid and efficient signal transmission. 
                </p>
                <p className="text-deep-neural-gray leading-relaxed">
                  Durabilita utilizes a specific ratio of bioavailable B-Vitamins (B1, B6, B12) which are fundamental cofactors in the endogenous synthesis and maintenance of myelin.
                </p>
              </div>
              <div className="bg-clinical-white aspect-square rounded-[2rem] border border-medical-gray/30 flex items-center justify-center relative overflow-hidden group">
                 <div className="absolute inset-0 bg-gradient-to-br from-white to-transparent opacity-50" />
                 <video 
                    src="/Assets/6.mp4" 
                    autoPlay loop muted playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" 
                 />
              </div>
            </div>
          </motion.section>

          {/* Section 2 */}
          <motion.section 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={FadeIn}
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="text-4xl font-display font-light text-medical-gray">02</span>
              <h2 className="text-3xl font-display font-bold text-graphite-black">Cellular Energy Metabolism</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
              <div className="md:order-2">
                <p className="text-deep-neural-gray leading-relaxed mb-6">
                  Neurons are highly metabolically active cells. When cellular energy production wanes, nerve function is compromised resulting in fatigue and subjective numbness.
                </p>
                <p className="text-deep-neural-gray leading-relaxed">
                  Our protocol introduces catalysts for mitochondrial ATP production, ensuring neurons have the sustained energy required for constant signaling.
                </p>
              </div>
              <div className="bg-graphite-black aspect-square rounded-[2rem] flex flex-col items-center justify-center relative overflow-hidden md:order-1">
                 <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neural-orange/10 to-transparent" />
                 <img 
                    src="/Assets/pomelli_bdna_image_0509.png" 
                    alt="Scientific Visual" 
                    className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 opacity-90 mix-blend-screen"
                 />
              </div>
            </div>
          </motion.section>

        </div>

      </div>
    </div>
  )
}
