import { Footer } from "./Footer"
import { Navbar } from "./Navbar"
import { Outlet, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "motion/react"

export function Layout() {
  const location = useLocation()
  
  return (
    <div className="min-h-screen flex flex-col bg-clinical-white selection:bg-neural-orange/20">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main 
          key={location.pathname}
          className="flex-grow pt-[88px] min-w-0" // Offset for fixed navbar + min-w-0 to prevent layout blowouts
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  )
}
