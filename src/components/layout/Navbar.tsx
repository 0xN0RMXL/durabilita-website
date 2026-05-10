import { Link, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "motion/react"
import { useState, useEffect } from "react"
import { Menu, X, Sun, Moon } from "lucide-react"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (document.documentElement.classList.contains("dark")) {
      setIsDark(true)
    }
  }, [])

  const toggleDarkMode = () => {
    const next = !isDark
    setIsDark(next)
    if (next) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location])

  const navLinks = [
    { name: "Science", path: "/science" },
    { name: "Products", path: "/products" },
    { name: "Gallery", path: "/gallery" },
    { name: "Protocol", path: "/app" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-clinical-white/80 backdrop-blur-md border-b border-medical-gray/30 py-4" : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 z-50">
          <span className="font-display font-bold text-2xl tracking-tighter uppercase text-neural-orange">
            DURABILITA
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-[11px] font-semibold tracking-widest uppercase text-deep-neural-gray hover:text-neural-orange transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-8">
          <button 
            onClick={toggleDarkMode}
            className="text-graphite-black hover:text-neural-orange transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button className="text-[11px] font-semibold tracking-widest uppercase border-b border-graphite-black pb-1 hover:text-neural-orange hover:border-neural-orange transition-colors">
            Account
          </button>
          <Link
            to="/products"
            className="bg-graphite-black text-white px-8 py-3 rounded-full text-[11px] font-semibold tracking-widest uppercase hover:bg-neural-orange transition-colors"
          >
            Shop Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-50 p-2 text-graphite-black"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 top-0 pt-24 bg-clinical-white z-40 flex flex-col items-center px-6"
            >
              <nav className="flex flex-col items-center gap-8 w-full">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="text-2xl font-display font-semibold text-graphite-black hover:text-neural-orange w-full text-center py-2 border-b border-medical-gray/20"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="w-full mt-8 flex flex-col gap-4">
                  <button 
                    onClick={toggleDarkMode}
                    className="w-full flex items-center justify-center gap-2 py-4 border border-medical-gray/30 rounded-full text-graphite-black font-semibold hover:bg-black/5 transition-colors"
                  >
                    {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                    <span>{isDark ? "Light Mode" : "Dark Mode"}</span>
                  </button>
                  <Link
                    to="/products"
                    className="w-full bg-graphite-black text-white py-4 rounded-full text-center font-semibold text-lg hover:bg-neural-orange transition-colors"
                  >
                    Shop Now
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
