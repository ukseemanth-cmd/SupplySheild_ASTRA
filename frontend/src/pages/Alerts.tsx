import { motion, AnimatePresence } from 'framer-motion'
import { 
  AlertCircle, AlertTriangle, ShieldAlert, Bell, Filter, 
  MapPin, Clock, ArrowRight, Zap, Info, ShieldCheck,
  ChevronRight, Volume2, VolumeX, Search
} from 'lucide-react'
import { useState } from 'react'
import GlassCard from '../components/ui/GlassCard'
import { crisisAlerts } from '../data/mockData'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 }
}

const Alerts = () => {
  const [filter, setFilter] = useState('all')
  const [soundEnabled, setSoundEnabled] = useState(false)

  const filteredAlerts = filter === 'all' 
    ? crisisAlerts 
    : crisisAlerts.filter(a => a.severity === filter)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      {/* Emergency Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-red-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            <span className="text-xs font-bold text-red-500 uppercase tracking-widest">Live Emergency Feed</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            <span className="text-gradient">Intelligence Center</span>
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <button 
            onClick={() => setSoundEnabled(!soundEnabled)}
            className={`btn-icon ${soundEnabled ? 'text-primary border-primary/30 bg-primary/10' : ''}`}
          >
            {soundEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
          </button>
          <div className="bg-white/5 border border-white/10 rounded-xl p-1 flex">
            {['all', 'critical', 'high', 'medium'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  filter === f 
                    ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                    : 'text-muted hover:text-white'
                }`}
              >
                {f.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Live Feed */}
        <div className="lg:col-span-8 space-y-4">
          <AnimatePresence mode="popLayout">
            {filteredAlerts.map((alert) => (
              <motion.div
                key={alert.id}
                layout
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.95 }}
                className="group"
              >
                <GlassCard className={`p-0 overflow-hidden border-l-4 ${
                  alert.severity === 'critical' ? 'border-l-red-500' :
                  alert.severity === 'high' ? 'border-l-orange-500' :
                  alert.severity === 'medium' ? 'border-l-yellow-500' : 'border-l-green-500'
                }`}>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${
                          alert.severity === 'critical' ? 'bg-red-500/10 text-red-400' :
                          alert.severity === 'high' ? 'bg-orange-500/10 text-orange-400' :
                          'bg-blue-500/10 text-blue-400'
                        }`}>
                          {alert.severity === 'critical' ? <ShieldAlert className="w-5 h-5" /> : <AlertTriangle className="w-5 h-5" />}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{alert.title}</h3>
                          <div className="flex items-center gap-3 text-xs text-muted mt-1">
                            <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {alert.region}</span>
                            <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {alert.time}</span>
                          </div>
                        </div>
                      </div>
                      <div className={`text-xs font-black uppercase tracking-tighter px-2 py-1 rounded ${
                        alert.severity === 'critical' ? 'bg-red-500/20 text-red-400' :
                        alert.severity === 'high' ? 'bg-orange-500/20 text-orange-400' :
                        'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {alert.severity}
                      </div>
                    </div>
                    
                    <p className="text-sm text-white/80 leading-relaxed mb-6">
                      {alert.description}
                    </p>

                    <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/5">
                      <div className="flex gap-4">
                         <div>
                            <p className="text-[10px] uppercase font-bold text-muted mb-1">Affected Commodity</p>
                            <p className="text-xs font-bold text-white">{alert.commodity}</p>
                         </div>
                         <div>
                            <p className="text-[10px] uppercase font-bold text-muted mb-1">Price Impact</p>
                            <p className="text-xs font-bold text-red-400">{alert.impact}</p>
                         </div>
                      </div>
                      <button className="flex items-center gap-1 text-xs font-bold text-primary group-hover:gap-2 transition-all">
                        DETAILED ANALYSIS <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Right Column: Insights & Stats */}
        <div className="lg:col-span-4 space-y-6">
          {/* Quick Stats */}
          <GlassCard className="p-6" hoverEffect={false}>
            <h3 className="text-sm font-bold uppercase tracking-widest text-muted mb-6">Emergency Status</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-white/70">Total Active Alerts</span>
                <span className="text-lg font-bold">12</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-white/70">Critical Level</span>
                <span className="text-lg font-bold text-red-400">3</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-white/70">Regions Impacted</span>
                <span className="text-lg font-bold">8</span>
              </div>
            </div>
            
            <div className="mt-8 p-4 rounded-xl bg-primary/10 border border-primary/20">
               <div className="flex items-center gap-2 mb-2 text-primary">
                  <Zap className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase">AI Prediction</span>
               </div>
               <p className="text-xs text-white/80 leading-relaxed">
                  Probability of secondary price hikes in logistics sector has increased by <span className="text-primary font-bold">18%</span> in the last 24 hours.
               </p>
            </div>
          </GlassCard>

          {/* Watchlist Alerts */}
          <GlassCard className="p-6" hoverEffect={false}>
            <h3 className="text-sm font-bold uppercase tracking-widest text-muted mb-6">Smart Watchlist</h3>
            <div className="space-y-4">
              {[
                { name: 'Petroleum', risk: 'Critical', color: 'text-red-400' },
                { name: 'Semiconductors', risk: 'High', color: 'text-orange-400' },
                { name: 'Wheat', risk: 'Medium', color: 'text-yellow-400' },
              ].map(item => (
                <div key={item.name} className="flex justify-between items-center p-3 rounded-lg bg-white/5 border border-white/10">
                  <span className="text-sm font-bold">{item.name}</span>
                  <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded bg-white/5 ${item.color}`}>{item.risk}</span>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 py-2.5 text-xs font-bold text-primary border border-primary/20 rounded-xl hover:bg-primary/5 transition-all">
              MANAGE WATCHLIST
            </button>
          </GlassCard>

          {/* AI Explanation Card */}
          <GlassCard className="p-6 bg-gradient-to-br from-blue-600/20 to-purple-600/20 border-primary/30">
            <h3 className="text-sm font-bold flex items-center gap-2 mb-4">
              <ShieldCheck className="w-4 h-4 text-primary" />
              AI Crisis Summarizer
            </h3>
            <p className="text-xs text-white/70 leading-relaxed mb-4 italic">
              "Current market volatility is primarily driven by three converging factors: Red Sea shipping delays, record droughts in Brazil, and seasonal demand surges in South-East Asia."
            </p>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                 {[1,2,3].map(i => <div key={i} className="w-6 h-6 rounded-full bg-white/10 border-2 border-background" />)}
              </div>
              <span className="text-[10px] text-muted">Trusted by 2.4k users</span>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  )
}

export default Alerts
