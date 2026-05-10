import { useState } from "react"
import { motion } from "motion/react"
import { Button } from "@/components/ui/Button"
import { CheckCircle2, ChevronRight, Microscope, Droplet, ShieldCheck, Activity, Brain } from "lucide-react"

const productImages = [
  { src: "/Assets/1..png",  alt: "Capsule Close-Up" },
  { src: "/Assets/2.png",   alt: "Product Lifestyle" },
  { src: "/Assets/3.png",   alt: "Studio Product" },
  { src: "/Assets/5.png",   alt: "Clinical Setting" },
]

export function Product() {
  const [isSubscribed, setIsSubscribed] = useState(true)
  const [quantity, setQuantity] = useState(1)
  const [activeImg, setActiveImg] = useState(0)

  return (
    <div className="pt-10 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center text-xs font-semibold tracking-wider text-deep-neural-gray uppercase mb-10">
          <span>Products</span>
          <ChevronRight className="w-4 h-4 mx-2 text-medical-gray" />
          <span className="text-neural-orange">Nerve Support Protocol</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-32">
          
          {/* Gallery Area */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            <div className="aspect-[4/5] bg-clinical-white rounded-[2rem] border border-medical-gray/30 flex items-center justify-center relative overflow-hidden group">
              {/* Soft background glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white to-clinical-white opacity-50" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-neural-orange/5 rounded-full blur-[60px] group-hover:bg-neural-orange/10 transition-colors duration-700" />
              
              {/* Product Image */}
              <div className="z-10 relative bg-white rounded-[2rem] clinical-shadow w-full h-full flex flex-col items-center justify-center border border-medical-gray/30 overflow-hidden transform hover:scale-105 transition-transform duration-700">
                <img 
                  src={productImages[activeImg].src} 
                  alt={productImages[activeImg].alt} 
                  className="w-full h-full object-cover mix-blend-multiply dark:mix-blend-normal"
                />
              </div>

              {/* Badges */}
              <div className="absolute top-8 left-8 flex flex-col gap-3">
                <div className="inline-flex items-center gap-2 border border-medical-gray/40 rounded-full px-3 py-1.5 bg-white/80 backdrop-blur-sm shadow-sm text-xs font-semibold text-graphite-black">
                  <ShieldCheck className="w-4 h-4 text-neural-orange" />
                  Clinical Grade
                </div>
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-4">
              {productImages.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`aspect-square rounded-xl flex items-center justify-center cursor-pointer transition-all overflow-hidden ${i === activeImg ? 'border-2 border-neural-orange bg-white ring-2 ring-neural-orange/20' : 'border border-medical-gray/30 bg-clinical-white hover:border-medical-gray'}`}
                >
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover mix-blend-multiply dark:mix-blend-normal" />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Product Info & Purchase Area */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="flex flex-col"
          >
            <div className="flex items-center gap-2 text-neural-orange mb-4">
               {[1,2,3,4,5].map(i => <svg key={i} fill="currentColor" viewBox="0 0 20 20" className="w-4 h-4"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>)}
               <a href="#reviews" className="text-sm font-medium text-deep-neural-gray hover:text-graphite-black hover:underline cursor-pointer ml-2">124 Scientific Reviews</a>
            </div>

            <h1 className="text-4xl md:text-5xl font-display font-light tracking-tighter text-graphite-black mb-4">Nerve Support Protocol</h1>
            <p className="text-lg text-deep-neural-gray mb-8 leading-relaxed">
              Advanced neural optimization formula designed to support peripheral nerve health, cognitive clarity, and sustained energy metabolism.
            </p>

            <div className="flex items-end gap-4 mb-10">
              <span className="text-4xl font-display font-bold text-neural-orange">${isSubscribed ? '58.00' : '68.00'}</span>
              {isSubscribed && <span className="text-lg text-deep-neural-gray line-through mb-1">$68.00</span>}
            </div>

            {/* Subscription Box */}
            <div className="bg-clinical-white border border-medical-gray/30 rounded-2xl p-6 mb-8 flex flex-col gap-4">
              <label className={`relative flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-colors ${isSubscribed ? 'border-neural-orange bg-white' : 'border-medical-gray/20 hover:border-medical-gray/50'}`}>
                <input type="radio" className="sr-only" checked={isSubscribed} onChange={() => setIsSubscribed(true)} />
                <div className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${isSubscribed ? 'border-neural-orange' : 'border-medical-gray'}`}>
                    {isSubscribed && <div className="w-2.5 h-2.5 rounded-full bg-neural-orange" />}
                  </div>
                  <div>
                    <span className="font-semibold text-graphite-black block">Subscribe & Save 15%</span>
                    <span className="text-xs text-deep-neural-gray">Delivered monthly. Cancel anytime.</span>
                  </div>
                </div>
                <span className="font-bold text-graphite-black">$58.00</span>
              </label>

              <label className={`relative flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-colors ${!isSubscribed ? 'border-graphite-black bg-white' : 'border-medical-gray/20 hover:border-medical-gray/50'}`}>
                <input type="radio" className="sr-only" checked={!isSubscribed} onChange={() => setIsSubscribed(false)} />
                <div className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${!isSubscribed ? 'border-graphite-black' : 'border-medical-gray'}`}>
                    {!isSubscribed && <div className="w-2.5 h-2.5 rounded-full bg-graphite-black" />}
                  </div>
                  <span className="font-semibold text-graphite-black">One-time Purchase</span>
                </div>
                <span className="font-bold text-graphite-black">$68.00</span>
              </label>
            </div>

            <div className="flex items-center gap-4 mb-10">
              <div className="flex items-center border border-medical-gray rounded-full h-14 bg-white px-2">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-graphite-black rounded-full hover:bg-gray-100"
                >
                  -
                </button>
                <div className="w-12 text-center font-semibold text-graphite-black">{quantity}</div>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-graphite-black rounded-full hover:bg-gray-100"
                >
                  +
                </button>
              </div>
              <Button size="lg" className="flex-grow shadow-xl">
                Add to Protocol
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-4 pt-8 border-t border-medical-gray/30">
              {[
                 { text: "Science-Backed", icon: Microscope },
                 { text: "FDA Registered Facility", icon: ShieldCheck },
                 { text: "Third-Party Tested", icon: Droplet },
                 { text: "Made in USA", icon: Activity }
              ].map((badge, i) => (
                <div key={i} className="flex items-center gap-3 text-sm font-medium text-graphite-black">
                  <div className="w-8 h-8 rounded-full bg-clinical-white flex items-center justify-center border border-medical-gray/30 text-neural-orange">
                    <badge.icon className="w-4 h-4" />
                  </div>
                  {badge.text}
                </div>
              ))}
            </div>
            
          </motion.div>
        </div>

        {/* Efficacy Section */}
        <section className="py-20 border-t border-medical-gray/30">
           <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-graphite-black mb-4">Clinical Efficacy <br/><span className="text-transparent border-none bg-clip-text bg-gradient-to-r from-neural-orange to-neural-glow">By Design</span></h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="col-span-1 md:col-span-2 bg-clinical-white rounded-3xl p-10 border border-medical-gray/30 relative overflow-hidden">
                 <div className="absolute right-0 bottom-0 opacity-5">
                    <Brain className="w-64 h-64" />
                 </div>
                 <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-medical-gray/20">
                    <Activity className="w-6 h-6 text-neural-orange" />
                 </div>
                 <h3 className="text-2xl font-display font-bold text-graphite-black mb-4 relative z-10">Peripheral Nerve Integrity</h3>
                 <p className="text-deep-neural-gray leading-relaxed max-w-md relative z-10">
                    Our complex utilizes bioavailable Lecithin and a precise B-Vitamin matrix to support the myelin sheath, crucial for optimal nerve signal transmission and structural integrity.
                 </p>
              </div>

              <div className="bg-white rounded-3xl p-10 border border-medical-gray shadow-sm flex flex-col justify-center text-center">
                 <p className="text-xs font-bold uppercase tracking-widest text-neural-orange mb-4">Core Catalyst</p>
                 <div className="text-6xl font-display font-extrabold text-graphite-black mb-2">B12</div>
                 <p className="text-sm font-medium text-deep-neural-gray mb-6">(Cyanocobalamin)</p>
                 <div className="w-12 h-1 bg-medical-gray mx-auto mb-6"></div>
                 <p className="text-sm text-graphite-black">Essential for nerve tissue health and cellular energy production.</p>
              </div>
           </div>
        </section>

      </div>
    </div>
  )
}
