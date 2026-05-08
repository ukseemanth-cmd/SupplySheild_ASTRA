import { motion } from 'framer-motion'
import { 
  BookOpen, ShieldCheck, Zap, Info, ChevronRight, 
  HelpCircle, Lightbulb, CheckSquare, ListChecks,
  TrendingUp, CloudRain, Cpu, Fuel, ShoppingCart, Scale, HeartPulse
} from 'lucide-react'
import GlassCard from '../components/ui/GlassCard'
import { awarenessCards } from '../data/mockData'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const Awareness = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          <span className="text-gradient">Supply Chain Awareness</span>
        </h1>
        <p className="text-muted text-lg max-w-2xl mx-auto">
          Educate yourself on how global events impact your local prices and learn how to prepare for supply disruptions.
        </p>
      </motion.div>

      {/* Hero Section: Preparedness Score */}
      <motion.div 
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mb-16"
      >
        <GlassCard className="p-8 md:p-12 bg-gradient-to-br from-blue-600/10 via-background to-purple-600/10 border-white/10 overflow-hidden relative">
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-6">
                <ShieldCheck className="w-4 h-4" /> 
                HOUSEHOLD READINESS
              </div>
              <h2 className="text-3xl font-bold mb-4">Calculate Your Crisis Preparedness Score</h2>
              <p className="text-muted mb-8">
                Answer a few questions about your stock of essentials, local alternative sources, and emergency funds to see how well you can withstand a 30-day supply chain breakdown.
              </p>
              <button className="btn btn-primary px-8">
                Start Quiz <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex justify-center">
               <div className="relative w-48 h-48">
                  <svg className="w-full h-full -rotate-90">
                    <circle 
                      cx="96" cy="96" r="88" 
                      className="stroke-white/5 fill-none" 
                      strokeWidth="12" 
                    />
                    <motion.circle 
                      cx="96" cy="96" r="88" 
                      className="stroke-primary fill-none" 
                      strokeWidth="12" 
                      strokeDasharray="552.9"
                      initial={{ strokeDashoffset: 552.9 }}
                      whileInView={{ strokeDashoffset: 552.9 * (1 - 0.65) }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-4xl font-black">65%</span>
                    <span className="text-[10px] uppercase font-bold text-muted tracking-widest">Global Avg</span>
                  </div>
               </div>
            </div>
          </div>
          
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-0 translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl -z-0 -translate-x-1/2 translate-y-1/2" />
        </GlassCard>
      </motion.div>

      {/* Main Educational Cards */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
      >
        {awarenessCards.map((card, i) => {
          const iconsMap: any = { Fuel, CloudRain, Cpu, ShoppingCart, Scale, HeartPulse }
          const Icon = iconsMap[card.icon] || Info
          
          return (
            <motion.div key={card.title} variants={itemVariants}>
              <GlassCard className="p-6 h-full flex flex-col glass-card-hover border-white/5 group">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary/10 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className={`text-[10px] font-black uppercase px-2 py-1 rounded ${
                    card.impact === 'Critical' ? 'bg-red-500/20 text-red-400' :
                    card.impact === 'High' ? 'bg-orange-500/20 text-orange-400' :
                    'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {card.impact} Impact
                  </span>
                </div>
                
                <h3 className="text-lg font-bold mb-2">{card.title}</h3>
                <p className="text-sm text-muted leading-relaxed mb-6 flex-1">
                  {card.description}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <span className="text-[10px] font-bold text-muted uppercase tracking-widest">{card.category}</span>
                  <button className="p-2 rounded-lg bg-white/5 text-primary hover:bg-white/10 transition-colors">
                    <BookOpen className="w-4 h-4" />
                  </button>
                </div>
              </GlassCard>
            </motion.div>
          )
        })}
      </motion.div>

      {/* Preparation Checklist Section */}
      <section className="mb-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Emergency Buy Checklist</h2>
          <p className="text-muted">Stay prepared without panic buying. Focus on what matters.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <GlassCard className="p-8 border-emerald-500/10">
            <h3 className="text-xl font-bold flex items-center gap-2 mb-6">
              <ListChecks className="w-5 h-5 text-emerald-400" />
              Essential Stocks (2-4 Weeks)
            </h3>
            <ul className="space-y-4">
              {[
                'Non-perishable grains (Rice, Wheat, Lentils)',
                'Cooking oil and essential spices',
                'LPG backup or alternative fuel sources',
                'Common medicines (Paracetamol, First-aid)',
                'Water storage (at least 3 liters per person/day)',
              ].map(item => (
                <li key={item} className="flex items-start gap-3">
                  <div className="mt-1 w-4 h-4 rounded border border-emerald-500/30 flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 bg-emerald-500 rounded-sm" />
                  </div>
                  <span className="text-sm text-white/80">{item}</span>
                </li>
              ))}
            </ul>
          </GlassCard>

          <GlassCard className="p-8 border-blue-500/10">
            <h3 className="text-xl font-bold flex items-center gap-2 mb-6">
              <Zap className="w-5 h-5 text-blue-400" />
              Intelligence Best Practices
            </h3>
            <ul className="space-y-4">
              {[
                'Monitor local news for route disruptions',
                'Watch global oil prices for transport hike signals',
                'Check weather forecasts for production regions',
                'Diversify local alternative supply sources',
                'Avoid bulk buying during early peak surge',
              ].map(item => (
                <li key={item} className="flex items-start gap-3">
                   <div className="mt-1 w-4 h-4 rounded border border-blue-500/30 flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 bg-blue-500 rounded-sm" />
                  </div>
                  <span className="text-sm text-white/80">{item}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>
      </section>

      {/* Footer Info */}
      <div className="text-center pb-20">
        <HelpCircle className="w-10 h-10 text-muted mx-auto mb-4 opacity-20" />
        <h3 className="text-xl font-bold mb-2 opacity-50">Still have questions?</h3>
        <p className="text-muted mb-8 opacity-50">Join our community discussions on the Locality page.</p>
        <button className="btn btn-outline px-10">
          Visit FAQ Center
        </button>
      </div>
    </div>
  )
}

export default Awareness
