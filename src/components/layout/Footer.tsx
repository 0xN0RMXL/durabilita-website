import { Link } from "react-router-dom"

export function Footer() {
  return (
    <footer className="bg-clinical-white border-t border-medical-gray/30 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <span className="font-display font-bold text-2xl tracking-tighter uppercase text-neural-orange block mb-6">
              DURABILITA
            </span>
            <p className="text-deep-neural-gray text-sm leading-relaxed max-w-xs">
              Premium neuroscience-inspired nutritional support for nerve health and modern vitality.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-graphite-black mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-deep-neural-gray hover:text-neural-orange text-sm transition-colors">Our Science</Link></li>
              <li><Link to="/ingredients" className="text-deep-neural-gray hover:text-neural-orange text-sm transition-colors">Ingredients</Link></li>
              <li><Link to="/products" className="text-deep-neural-gray hover:text-neural-orange text-sm transition-colors">Shop</Link></li>
              <li><Link to="/contact" className="text-deep-neural-gray hover:text-neural-orange text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-graphite-black mb-6">Support</h4>
            <ul className="space-y-4">
              <li><Link to="/faq" className="text-deep-neural-gray hover:text-neural-orange text-sm transition-colors">FAQ</Link></li>
              <li><Link to="/shipping" className="text-deep-neural-gray hover:text-neural-orange text-sm transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/protocol" className="text-deep-neural-gray hover:text-neural-orange text-sm transition-colors">Protocol Guide</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-graphite-black mb-6">Stay Optimised</h4>
            <p className="text-deep-neural-gray text-sm mb-4">
              Subscribe for clinical insights and neurological health science.
            </p>
            <form className="flex border border-medical-gray rounded-full overflow-hidden focus-within:border-neural-orange transition-colors bg-white">
              <input 
                type="email" 
                placeholder="Email address" 
                className="flex-grow px-4 py-3 text-sm outline-none bg-transparent"
              />
              <button 
                type="submit" 
                className="text-neural-orange font-semibold px-6 hover:bg-neural-orange/5 transition-colors text-sm"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-medical-gray/30 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-deep-neural-gray text-center md:text-left">
            *This statement has not been evaluated by the Food & Drug Administration. This product is not intended to diagnose, treat, cure or prevent any disease.
          </p>
          <div className="flex items-center gap-6 text-xs text-deep-neural-gray shrink-0">
            <Link to="/privacy" className="hover:text-neural-orange transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-neural-orange transition-colors">Terms of Service</Link>
          </div>
        </div>
        
        <div className="mt-8 text-center text-xs text-deep-neural-gray/60">
          © {new Date().getFullYear()} DURABILITA NEUROSCIENCE. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  )
}
