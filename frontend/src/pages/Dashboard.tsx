import { motion } from 'framer-motion'
import {
  TrendingUp, TrendingDown, AlertTriangle, Cpu, Activity, Zap,
  BarChart2, Globe, Cloud, Newspaper, ShieldAlert, ThumbsUp, Clock, Target
} from 'lucide-react'
import {
  ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid,
  BarChart, Bar, PieChart, Pie, Cell, RadialBarChart, RadialBar
} from 'recharts'
import GlassCard from '../components/ui/GlassCard'
import CommodityCard from '../components/dashboard/CommodityCard'
import { commodityPrices, trendData, crisisAlerts, aiRecommendations, newsItems, dashboardMetrics } from '../data/mockData'

const containerV = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.06 } } }
const itemV = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }

const riskData = [
  { name: 'Energy', risk: 78, fill: '#ef4444' },
  { name: 'Food', risk: 62, fill: '#f59e0b' },
  { name: 'Metals', risk: 45, fill: '#3b82f6' },
  { name: 'Tech', risk: 34, fill: '#8b5cf6' },
]

const shortageData = [
  { name: 'Petroleum', value: 85 },
  { name: 'Rice', value: 72 },
  { name: 'Wheat', value: 58 },
  { name: 'Chips', value: 42 },
]

const COLORS = ['#ef4444', '#f59e0b', '#3b82f6', '#8b5cf6', '#10b981']

const Dashboard = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-12">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-1">
          <span className="text-gradient">Intelligence Dashboard</span>
        </h1>
        <p className="text-muted text-sm">Real-time supply chain monitoring & AI predictions</p>
      </motion.div>

      {/* Metrics Row */}
      <motion.div variants={containerV} initial="hidden" animate="visible" className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        {dashboardMetrics.map((m) => (
          <motion.div key={m.label} variants={itemV}>
            <div className="glass-card p-4 text-center">
              <p className="text-[10px] text-muted font-bold uppercase tracking-widest mb-1">{m.label}</p>
              <p className={`text-2xl font-extrabold ${m.color}`}>{m.value}</p>
              <p className="text-[10px] text-emerald-400 mt-0.5">{m.change} ↑</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        {/* Price Trend Chart */}
        <motion.div className="lg:col-span-2" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <GlassCard className="p-5" hoverEffect={false}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold flex items-center gap-2 text-sm">
                <TrendingUp className="w-4 h-4 text-blue-400" /> AI Price Prediction
              </h3>
              <div className="flex gap-2">
                {['1W', '1M', '3M', '6M'].map(p => (
                  <button key={p} className={`text-xs px-2.5 py-1 rounded-lg ${p === '6M' ? 'bg-blue-500/20 text-blue-400' : 'text-muted hover:text-white'}`}>{p}</button>
                ))}
              </div>
            </div>
            <div className="h-[240px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={trendData}>
                  <defs>
                    <linearGradient id="gA" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/><stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/></linearGradient>
                    <linearGradient id="gP" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.2}/><stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/></linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" vertical={false}/>
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 10 }}/>
                  <YAxis hide/>
                  <Tooltip contentStyle={{ backgroundColor: '#0f172a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', color: '#fff', fontSize: '11px' }}/>
                  <Area type="monotone" dataKey="price" stroke="#3b82f6" strokeWidth={2} fill="url(#gA)" connectNulls={false} name="Actual"/>
                  <Area type="monotone" dataKey="predicted" stroke="#8b5cf6" strokeWidth={2} strokeDasharray="5 3" fill="url(#gP)" name="Predicted"/>
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-between text-[10px] text-muted mt-2 pt-2 border-t border-white/5">
              <span>🔵 Actual · 🟣 Predicted</span>
              <span className="text-amber-400 font-semibold">Confidence: 88%</span>
            </div>
          </GlassCard>
        </motion.div>

        {/* Shortage Risk Meter */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <GlassCard className="p-5 h-full" hoverEffect={false}>
            <h3 className="font-bold flex items-center gap-2 text-sm mb-4">
              <ShieldAlert className="w-4 h-4 text-red-400" /> Shortage Risk
            </h3>
            <div className="space-y-3">
              {shortageData.map((item, i) => (
                <div key={item.name}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-white/80">{item.name}</span>
                    <span className={item.value > 70 ? 'text-red-400' : item.value > 50 ? 'text-amber-400' : 'text-emerald-400'}>{item.value}%</span>
                  </div>
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                      className={`h-full rounded-full ${item.value > 70 ? 'bg-red-500' : item.value > 50 ? 'bg-amber-500' : 'bg-emerald-500'}`}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 p-2.5 rounded-xl bg-red-500/5 border border-red-500/10">
              <p className="text-[10px] text-red-400 font-bold">⚠ HIGH RISK</p>
              <p className="text-xs text-white/70 mt-0.5">Petroleum shortage probability at 85% due to OPEC+ cuts</p>
            </div>
          </GlassCard>
        </motion.div>
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        {/* AI Recommendations */}
        <motion.div className="lg:col-span-2" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <GlassCard className="p-5" hoverEffect={false}>
            <h3 className="font-bold flex items-center gap-2 text-sm mb-4">
              <Cpu className="w-4 h-4 text-purple-400" /> Smart Recommendations
            </h3>
            <div className="space-y-2">
              {aiRecommendations.map((rec) => (
                <div key={rec.commodity} className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
                  <div className={`px-2 py-1 rounded-lg text-[10px] font-bold shrink-0 ${
                    rec.action === 'Buy Now' ? 'bg-emerald-500/20 text-emerald-400' :
                    rec.action === 'Wait' ? 'bg-amber-500/20 text-amber-400' :
                    'bg-red-500/20 text-red-400'
                  }`}>{rec.action}</div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold">{rec.commodity}</p>
                    <p className="text-xs text-muted truncate">{rec.reason}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-xs text-muted">Confidence</p>
                    <p className={`text-sm font-bold ${rec.confidence > 80 ? 'text-emerald-400' : rec.confidence > 60 ? 'text-amber-400' : 'text-red-400'}`}>{rec.confidence}%</p>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>

        {/* News Feed */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <GlassCard className="p-5 h-full" hoverEffect={false}>
            <h3 className="font-bold flex items-center gap-2 text-sm mb-4">
              <Newspaper className="w-4 h-4 text-cyan-400" /> News Intelligence
            </h3>
            <div className="space-y-3">
              {newsItems.map((n, i) => (
                <div key={i} className="flex gap-2 pb-3 border-b border-white/5 last:border-0 last:pb-0">
                  <div className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${
                    n.sentiment === 'negative' ? 'bg-red-500' : n.sentiment === 'positive' ? 'bg-emerald-500' : 'bg-gray-500'
                  }`} />
                  <div>
                    <p className="text-xs font-medium text-white/80 leading-tight">{n.title}</p>
                    <p className="text-[10px] text-muted mt-0.5">{n.source} · {n.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>

      {/* Commodity Grid */}
      <motion.div variants={containerV} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <h3 className="font-bold text-sm mb-4 flex items-center gap-2">
          <Activity className="w-4 h-4 text-blue-400" /> All Commodities
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {commodityPrices.map((item) => (
            <motion.div key={item.id} variants={itemV}>
              <CommodityCard {...item} delay={0} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default Dashboard
