import { motion } from 'framer-motion'
import { 
  BarChart2, CloudRain, Sun, Wind, Thermometer, 
  TrendingUp, AlertTriangle, Info, Search, Filter,
  ArrowUpRight, ArrowDownRight, Zap
} from 'lucide-react'
import { 
  ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, 
  CartesianGrid, BarChart, Bar, Cell, LineChart, Line
} from 'recharts'
import GlassCard from '../components/ui/GlassCard'
import { commodityPrices, trendData } from '../data/mockData'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const weatherCorrelationData = [
  { factor: 'Heavy Rain', impact: 85, color: '#3b82f6' },
  { factor: 'Heatwave', impact: 65, color: '#f59e0b' },
  { factor: 'Storms', impact: 45, color: '#06b6d4' },
  { factor: 'Drought', impact: 92, color: '#f43f5e' },
  { factor: 'Frost', impact: 30, color: '#8b5cf6' },
]

const Market = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10"
      >
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">
          <span className="text-gradient">Market Analysis</span>
        </h1>
        <p className="text-muted max-w-2xl">
          Risk analysis and price fluctuations caused by weather, logistics, and global crisis events.
        </p>
      </motion.div>

      {/* Search and Filter Bar */}
      <div className="flex flex-wrap gap-4 mb-8">
        <div className="relative flex-1 min-w-[300px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
          <input 
            type="text" 
            placeholder="Search commodities, regions, or crisis types..."
            className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white outline-none focus:border-primary/50 transition-all"
          />
        </div>
        <button className="btn btn-outline py-2.5">
          <Filter className="w-4 h-4" /> Filter
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Main Chart Section */}
        <motion.div className="lg:col-span-2" variants={itemVariants} initial="hidden" animate="visible">
          <GlassCard className="p-6 h-full" hoverEffect={false}>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <BarChart2 className="w-5 h-5 text-primary" /> 
                Historical Correlation Analysis
              </h3>
              <select className="bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-sm outline-none">
                <option>Oil vs Conflict Intensity</option>
                <option>Wheat vs Drought Index</option>
              </select>
            </div>
            
            <div className="h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={trendData}>
                  <defs>
                    <linearGradient id="marketGlow" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                  <YAxis hide />
                  <Tooltip 
                    contentStyle={{backgroundColor: '#0f172a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px'}}
                  />
                  <Area type="monotone" dataKey="price" stroke="#3b82f6" strokeWidth={3} fill="url(#marketGlow)" />
                  <Line type="monotone" dataKey="predicted" stroke="#8b5cf6" strokeDasharray="5 5" strokeWidth={2} dot={false} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            
            <div className="mt-6 p-4 rounded-xl bg-blue-500/5 border border-blue-500/10 flex items-start gap-3">
              <Info className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
              <p className="text-sm text-white/70 italic">
                AI Insight: There is a <span className="text-white font-bold">82% correlation</span> between heavy rainfall in South-West regions and the 15% price spike observed in May.
              </p>
            </div>
          </GlassCard>
        </motion.div>

        {/* Hazard Impact Widget */}
        <motion.div variants={itemVariants} initial="hidden" animate="visible">
          <GlassCard className="p-6 h-full" hoverEffect={false}>
            <h3 className="text-xl font-bold flex items-center gap-2 mb-6">
              <Zap className="w-5 h-5 text-amber-400" />
              Hazard Impact Meter
            </h3>
            
            <div className="space-y-6">
              {weatherCorrelationData.map((data, idx) => (
                <div key={data.factor}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-white/80">{data.factor}</span>
                    <span className="text-xs font-bold" style={{color: data.color}}>{data.impact}% Impact</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${data.impact}%` }}
                      transition={{ duration: 1, delay: 0.5 + idx * 0.1 }}
                      className="h-full rounded-full"
                      style={{backgroundColor: data.color}}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <h4 className="text-sm font-bold mb-3 uppercase tracking-wider text-muted">Current Weather Risks</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-2 rounded-lg bg-red-500/5 border border-red-500/10">
                  <CloudRain className="w-4 h-4 text-red-400" />
                  <span className="text-xs font-medium">Flooding in coastal routes (High Risk)</span>
                </div>
                <div className="flex items-center gap-3 p-2 rounded-lg bg-amber-500/5 border border-amber-500/10">
                  <Sun className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-medium">Heatwave in production belt (Medium Risk)</span>
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>

      {/* Commodity Market Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mb-12"
      >
        <div className="flex justify-between items-end mb-6">
          <h2 className="text-2xl font-bold">Commodity Status</h2>
          <div className="flex gap-2">
             <button className="px-3 py-1 text-xs rounded-full bg-white/10 text-white font-medium border border-white/5">Grid View</button>
             <button className="px-3 py-1 text-xs rounded-full text-muted font-medium hover:text-white">List View</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {commodityPrices.map((item) => (
            <motion.div key={item.id} variants={itemVariants}>
              <GlassCard className="p-0 overflow-hidden group">
                <div className="p-5">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-primary border border-white/10 group-hover:border-primary/30 transition-colors">
                      <TrendingUp className="w-6 h-6" />
                    </div>
                    <div className={`flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full ${item.trend === 'up' ? 'text-red-400 bg-red-500/10' : 'text-emerald-400 bg-emerald-500/10'}`}>
                      {item.trend === 'up' ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                      {item.change}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-1">{item.name}</h3>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-2xl font-bold">{item.price}</span>
                    <span className="text-xs text-muted">/ Unit</span>
                  </div>
                  
                  <div className="space-y-3 pt-4 border-t border-white/5">
                    <div className="flex justify-between text-xs">
                      <span className="text-muted">Supply Risk</span>
                      <span className={item.status === 'danger' ? 'text-red-400' : 'text-emerald-400'}>{item.status.toUpperCase()}</span>
                    </div>
                    <div className="h-1 bg-white/5 rounded-full">
                      <div className={`h-full rounded-full ${item.status === 'danger' ? 'w-4/5 bg-red-400' : 'w-1/4 bg-emerald-400'}`} />
                    </div>
                  </div>
                </div>
                <div className="bg-white/5 p-3 flex justify-between items-center px-5">
                  <span className="text-[10px] uppercase font-bold text-muted tracking-widest">AI Summary</span>
                  <button className="text-[10px] text-primary font-bold hover:underline">VIEW INSIGHTS</button>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default Market
