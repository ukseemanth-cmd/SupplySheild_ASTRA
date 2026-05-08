import { ArrowUpRight, ArrowDownRight, Minus, Fuel, Flame, Beef, Apple } from 'lucide-react'
import GlassCard from '../ui/GlassCard'
import { cn } from '../../lib/utils'

const icons = {
  Fuel: Fuel,
  Flame: Flame,
  Beef: Beef,
  Apple: Apple,
}

interface CommodityCardProps {
  name: string
  price: string
  change: string
  trend: 'up' | 'down' | 'neutral'
  status: 'success' | 'warning' | 'danger'
  icon: keyof typeof icons
  delay?: number
}

const CommodityCard = ({ name, price, change, trend, status, icon, delay }: CommodityCardProps) => {
  const Icon = icons[icon]
  
  return (
    <GlassCard delay={delay} className="min-w-[240px]">
      <div className="flex justify-between items-start mb-4">
        <div className={cn(
          "w-12 h-12 rounded-xl flex items-center justify-center bg-white/5 border border-white/10",
          status === 'success' && "text-success border-success/20 bg-success/5",
          status === 'warning' && "text-warning border-warning/20 bg-warning/5",
          status === 'danger' && "text-danger border-danger/20 bg-danger/5"
        )}>
          <Icon className="w-6 h-6" />
        </div>
        <div className={cn(
          "flex items-center gap-1 text-sm font-medium px-2 py-1 rounded-full",
          trend === 'up' && "text-danger bg-danger/10",
          trend === 'down' && "text-success bg-success/10",
          trend === 'neutral' && "text-muted bg-white/5"
        )}>
          {trend === 'up' && <ArrowUpRight className="w-4 h-4" />}
          {trend === 'down' && <ArrowDownRight className="w-4 h-4" />}
          {trend === 'neutral' && <Minus className="w-4 h-4" />}
          {change}
        </div>
      </div>
      
      <div>
        <h3 className="text-muted text-sm font-medium mb-1">{name}</h3>
        <p className="text-2xl font-bold tracking-tight">{price}</p>
      </div>
      
      <div className="mt-4 h-1 w-full bg-white/5 rounded-full overflow-hidden">
        <div className={cn(
          "h-full rounded-full transition-all duration-1000",
          status === 'success' ? "bg-success w-1/3" : 
          status === 'warning' ? "bg-warning w-2/3" : "bg-danger w-full"
        )} />
      </div>
    </GlassCard>
  )
}

export default CommodityCard
