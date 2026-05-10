import { motion } from "motion/react"
import { Bell, User, Flame, Activity, Zap, Moon } from "lucide-react"

export function Dashboard() {
  return (
    <div className="bg-clinical-white min-h-[calc(100vh-88px)] w-full flex justify-center py-10 px-4">
      {/* Mobile Frame Simulation for Desktop, actual full width for mobile */}
      <div className="w-full max-w-md bg-white min-h-[800px] rounded-[3rem] shadow-2xl border-[8px] border-graphite-black overflow-hidden flex flex-col relative">
        
        {/* Hardware Status Bar Simulation */}
        <div className="w-full h-8 flex justify-between items-center px-6 pt-2">
           <span className="text-xs font-medium">9:41</span>
           <div className="flex gap-1.5 items-center">
              <div className="w-4 h-3 bg-graphite-black rounded-sm" />
              <div className="w-3 h-3 bg-graphite-black rounded-full" />
           </div>
        </div>

        {/* Dashboard Header */}
        <header className="px-6 pt-8 pb-4 flex justify-between items-center relative z-10">
           <div>
             <h2 className="text-sm font-semibold text-deep-neural-gray uppercase tracking-wider mb-1">Durabilita</h2>
             <h1 className="text-3xl font-display tracking-tight font-bold text-graphite-black">Good morning, Alex.</h1>
           </div>
           <button className="w-10 h-10 rounded-full bg-clinical-white flex items-center justify-center relative border border-medical-gray/30 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&auto=format&fit=crop" alt="Profile" className="w-full h-full object-cover" />
           </button>
        </header>

        {/* Scrollable Content */}
        <div className="flex-grow overflow-y-auto px-6 pb-24 scrollbar-hide relative z-10">
          
          {/* Daily Protocol Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-clinical-white rounded-3xl p-6 mb-6 border border-medical-gray/40 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-neural-orange/5 rounded-bl-full" />
            <div className="flex justify-between items-start mb-6 relative z-10">
               <div>
                  <p className="text-xs font-bold text-neural-orange uppercase tracking-wider mb-1">Daily Protocol</p>
                  <h3 className="text-lg font-display font-bold text-graphite-black">Protocol 01</h3>
               </div>
               <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm border border-medical-gray/20">
                 <Zap className="w-5 h-5 text-neural-orange" />
               </div>
            </div>

            <div className="flex items-center gap-4 mb-6 relative z-10">
               <div className="flex-grow h-2 bg-white rounded-full overflow-hidden">
                  <div className="h-full bg-neural-orange w-1/3 rounded-full" />
               </div>
               <span className="text-sm font-semibold text-deep-neural-gray">1 of 3 doses</span>
            </div>

            <button className="w-full bg-neural-orange text-white py-3.5 rounded-xl font-semibold hover:bg-neural-glow transition-colors shadow-sm relative z-10">
               Log Morning Dose
            </button>
          </motion.div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-3xl p-5 border border-medical-gray/30 clinical-shadow"
            >
               <div className="flex justify-between items-center mb-4">
                 <Activity className="w-5 h-5 text-deep-neural-gray" />
                 <span className="text-xs font-bold text-[#FF5A1F] bg-[#FF5A1F]/10 px-2 py-0.5 rounded-md">+2%</span>
               </div>
               <h4 className="text-3xl font-display font-extrabold text-graphite-black mb-1">92</h4>
               <p className="text-xs text-deep-neural-gray font-medium leading-tight">Cognitive<br/>Baseline</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl p-5 border border-medical-gray/30 clinical-shadow"
            >
               <div className="flex justify-between items-center mb-4">
                 <Moon className="w-5 h-5 text-deep-neural-gray" />
                 <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-md">Optimal</span>
               </div>
               <h4 className="text-3xl font-display font-extrabold text-graphite-black mb-1">7.5<span className="text-lg">h</span></h4>
               <p className="text-xs text-deep-neural-gray font-medium leading-tight">Restorative<br/>Sleep</p>
            </motion.div>
          </div>

          {/* Adherence Streak */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-graphite-black rounded-3xl p-6 relative overflow-hidden"
          >
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-48 h-48 bg-neural-orange/20 blur-[50px] rounded-full" />
            <div className="flex justify-between items-center relative z-10 mb-2">
               <h3 className="text-xs font-bold text-medical-gray uppercase tracking-wider">Adherence Streak</h3>
               <Flame className="w-5 h-5 text-neural-orange" fill="#FF5A1F" />
            </div>
            <div className="relative z-10 flex items-baseline gap-2">
               <span className="text-5xl font-display font-extrabold text-white">14</span>
               <span className="text-medical-gray font-medium">days</span>
            </div>
          </motion.div>

        </div>

        {/* Mobile Bottom Nav Simulation */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-medical-gray/30 px-6 py-4 flex justify-between items-center pb-8 rounded-b-[2.5rem]">
           {[
             { name: "Home", icon: Activity, active: true },
             { name: "Science", icon: Zap, active: false },
             { name: "Profile", icon: User, active: false }
           ].map((tab, i) => (
             <button key={i} className={`flex flex-col items-center gap-1.5 ${tab.active ? 'text-neural-orange' : 'text-deep-neural-gray focus:text-graphite-black'}`}>
                <tab.icon className="w-6 h-6" strokeWidth={tab.active ? 2.5 : 2} />
                <span className="text-[10px] font-semibold">{tab.name}</span>
             </button>
           ))}
        </div>
        
      </div>
    </div>
  )
}
