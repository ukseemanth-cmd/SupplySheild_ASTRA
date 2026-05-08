export const commodityPrices = [
  { id: '1', name: 'Petroleum', price: '₹101.2', change: '+1.2%', trend: 'up' as const, status: 'warning' as const, icon: 'Fuel' as const, sparkline: [40,42,41,45,48,47,50] },
  { id: '2', name: 'LPG', price: '₹950.0', change: '+0.5%', trend: 'up' as const, status: 'warning' as const, icon: 'Flame' as const, sparkline: [90,89,91,92,93,94,95] },
  { id: '3', name: 'Gold', price: '₹62,450', change: '+2.8%', trend: 'up' as const, status: 'danger' as const, icon: 'Gem' as const, sparkline: [58,59,60,59,61,62,62.4] },
  { id: '4', name: 'Crude Oil', price: '$82.4', change: '-1.3%', trend: 'down' as const, status: 'success' as const, icon: 'Droplets' as const, sparkline: [86,85,84,83,83,82,82] },
  { id: '5', name: 'Silver', price: '₹74,200', change: '+1.5%', trend: 'up' as const, status: 'warning' as const, icon: 'CircleDollarSign' as const, sparkline: [70,71,72,71,73,74,74.2] },
  { id: '9', name: 'Medicines', price: '₹Index 112', change: '+3.1%', trend: 'up' as const, status: 'warning' as const, icon: 'Pill' as const, sparkline: [100,102,105,107,109,111,112] },
  { id: '10', name: 'Semiconductors', price: '$Index 145', change: '-0.8%', trend: 'down' as const, status: 'success' as const, icon: 'Cpu' as const, sparkline: [150,149,148,147,146,145,145] },
  { id: '11', name: 'EV Batteries', price: '$132/kWh', change: '-4.2%', trend: 'down' as const, status: 'success' as const, icon: 'Battery' as const, sparkline: [142,140,138,136,134,133,132] },
]

export const trendData = [
  { name: 'Jan', price: 40, predicted: 42 },
  { name: 'Feb', price: 45, predicted: 44 },
  { name: 'Mar', price: 42, predicted: 46 },
  { name: 'Apr', price: 50, predicted: 49 },
  { name: 'May', price: 75, predicted: 68 },
  { name: 'Jun', price: 85, predicted: 80 },
  { name: 'Jul', price: 65, predicted: 72 },
  { name: 'Aug', price: null, predicted: 78 },
  { name: 'Sep', price: null, predicted: 85 },
  { name: 'Oct', price: null, predicted: 82 },
]

export const features = [
  { title: 'Crisis Price Alerts', description: 'Real-time notifications before prices surge due to wars, floods, or trade restrictions.', icon: 'AlertTriangle' },
  { title: 'AI Explanation Engine', description: 'Understand the "Why" behind price changes with clear AI-generated insights.', icon: 'Cpu' },
  { title: 'Global Supply Mapping', description: 'Interactive globe showing crisis hotspots and their impact on commodity flows.', icon: 'Globe' },
  { title: 'Shortage Prediction', description: 'ML-powered forecasting of shortages before they hit your region.', icon: 'TrendingUp' },
  { title: 'Weather Impact Analysis', description: 'Track floods, droughts, and storms impacting essential commodity supply chains.', icon: 'CloudRain' },
]

export const crisisAlerts = [
  { id: 1, title: 'Red Sea Shipping Crisis', severity: 'critical' as const, region: 'Middle East', commodity: 'Crude Oil', impact: '+12% price risk', time: '2h ago', description: 'Houthi attacks on cargo ships are disrupting 12% of global trade through the Suez Canal.' },
  { id: 2, title: 'Brazil Drought Emergency', severity: 'high' as const, region: 'South America', commodity: 'Coffee, Soybeans', impact: '+8% price risk', time: '5h ago', description: 'Worst drought in 40 years threatening major crop yields across southern Brazil.' },
  { id: 3, title: 'Taiwan Strait Tensions', severity: 'high' as const, region: 'East Asia', commodity: 'Semiconductors', impact: 'Supply chain risk', time: '1d ago', description: 'Military exercises near Taiwan raising concerns about semiconductor supply disruption.' },
  { id: 5, title: 'EU Carbon Tax Phase-in', severity: 'low' as const, region: 'Europe', commodity: 'Steel, Aluminum', impact: '+3% cost increase', time: '2d ago', description: 'New carbon border adjustment mechanism increasing import costs for industrial commodities.' },
  { id: 6, title: 'Ukraine Grain Corridor', severity: 'medium' as const, region: 'Eastern Europe', commodity: 'Wheat, Corn', impact: 'Export disruption', time: '6h ago', description: 'Black Sea grain deal uncertainties continue to affect global grain markets.' },
  { id: 7, title: 'Myanmar Cyclone Warning', severity: 'high' as const, region: 'Southeast Asia', commodity: 'Rice', impact: '+10% shortage risk', time: '1h ago', description: 'Category 4 cyclone approaching major rice-producing regions.' },
  { id: 8, title: 'OPEC+ Production Cut', severity: 'critical' as const, region: 'Global', commodity: 'Petroleum, LPG', impact: '+5-8% price hike', time: '4h ago', description: 'Additional 1M barrel/day voluntary production cuts announced for Q2.' },
]

export const globalCrisisEvents = [
  { lat: 15.5, lng: 44.2, label: 'Red Sea Crisis', severity: 'critical', size: 1.2 },
  { lat: -14.2, lng: -51.9, label: 'Brazil Drought', severity: 'high', size: 1.0 },
  { lat: 23.7, lng: 120.9, label: 'Taiwan Tensions', severity: 'high', size: 0.9 },
  { lat: 28.6, lng: 77.2, label: 'India Heatwave', severity: 'medium', size: 0.8 },
  { lat: 48.8, lng: 2.3, label: 'EU Carbon Tax', severity: 'low', size: 0.5 },
  { lat: 48.3, lng: 31.1, label: 'Ukraine Grain', severity: 'medium', size: 0.7 },
  { lat: 16.8, lng: 96.2, label: 'Myanmar Cyclone', severity: 'high', size: 0.9 },
  { lat: 24.7, lng: 46.7, label: 'OPEC+ Cuts', severity: 'critical', size: 1.1 },
  { lat: 35.8, lng: 104.1, label: 'China Export Ban', severity: 'medium', size: 0.8 },
  { lat: -1.2, lng: 36.8, label: 'East Africa Floods', severity: 'high', size: 0.9 },
]

export const localityReviews = [
  { id: 1, user: 'Arjun S.', region: 'South Asia', rating: 5, comment: 'Major flooding has disrupted rice transport routes. Local markets reporting 40% shortages.', date: '2h ago', type: 'Crisis', upvotes: 42, severity: 'high' as const },
  { id: 2, user: 'Priya K.', region: 'East Africa', rating: 4, comment: 'Drought conditions worsening. Maize prices up 60% this week.', date: '5h ago', type: 'Shortage', upvotes: 38, severity: 'critical' as const },
  { id: 3, user: 'Rahul M.', region: 'South America', rating: 3, comment: 'Port strike entering day 14. Container shipping severely impacted.', date: '1d ago', type: 'Crisis', upvotes: 56, severity: 'high' as const },
  { id: 4, user: 'Sofia L.', region: 'Eastern Europe', rating: 4, comment: 'Wheat corridor reopening. Supply expected to normalize within 2 weeks.', date: '2d ago', type: 'Update', upvotes: 29, severity: 'low' as const },
  { id: 5, user: 'Chen W.', region: 'East Asia', rating: 5, comment: 'Semiconductor shortage easing in Shenzhen. New fab capacity coming online.', date: '8h ago', type: 'Update', upvotes: 33, severity: 'low' as const },
  { id: 6, user: 'Maria G.', region: 'Central America', rating: 2, comment: 'Hurricane damage worse than expected. Coffee plantations devastated.', date: '12h ago', type: 'Disaster', upvotes: 67, severity: 'critical' as const },
]

export const awarenessCards = [
  { title: 'What Happens When Oil Hits $100?', category: 'Scenario', icon: 'Fuel', description: 'Every $10 increase in crude oil adds ₹5-7 to petrol and ₹15-20 to LPG cylinders. Transportation costs ripple across all commodities.', impact: 'High' },
  { title: 'Flood Impact on Food Prices', category: 'Weather', icon: 'CloudRain', description: 'Severe flooding can destroy 30-60% of crops in affected regions, causing 2-4x price spikes within 2 weeks.', impact: 'Critical' },
  { title: 'Semiconductor Supply Chain', category: 'Geopolitical', icon: 'Cpu', description: 'Taiwan produces 60% of global semiconductors. Any disruption would affect electronics, EVs, and medical devices.', impact: 'High' },
  { title: 'Emergency Buying Guide', category: 'Preparedness', icon: 'ShoppingCart', description: 'Stock 2 weeks of essentials. Prioritize non-perishables, medicines, and fuel. Avoid panic buying.', impact: 'Medium' },
  { title: 'Trade War Effects on Prices', category: 'Geopolitical', icon: 'Scale', description: 'Tariff increases of 25% on imports can raise consumer prices by 5-15% within 3-6 months.', impact: 'High' },
  { title: 'Pandemic Preparedness Score', category: 'Health', icon: 'HeartPulse', description: 'Rate your household\'s readiness for supply disruptions during health emergencies.', impact: 'Medium' },
]

export const tickerItems = [
  '🔴 Red Sea: Shipping routes under attack — Oil +3.2%',
  '🟡 Brazil: Severe drought — Coffee futures +8%',
  '🔴 OPEC+: Production cuts — Brent crude $86.4',
  '🟢 India: Monsoon on track — Rice supply stable',
  '🟡 Taiwan: Military exercises — Chip stocks volatile',
  '🔴 Myanmar: Cyclone Mocha — Rice exports halted',
  '🟢 EU: New grain corridor — Wheat -2.1%',
  '🟡 China: Rare earth export controls — EV battery costs +5%',
]

export const dashboardMetrics = [
  { label: 'Active Crises', value: '23', change: '+3', trend: 'up' as const, color: 'text-red-400' },
  { label: 'Commodities Tracked', value: '156', change: '+12', trend: 'up' as const, color: 'text-blue-400' },
  { label: 'AI Predictions', value: '2,847', change: '+156', trend: 'up' as const, color: 'text-purple-400' },
  { label: 'Avg Accuracy', value: '94.2%', change: '+0.8%', trend: 'up' as const, color: 'text-emerald-400' },
]

export const aiRecommendations = [
  { commodity: 'Petroleum', action: 'Wait' as const, reason: 'OPEC+ cuts may reverse next quarter. Expected -3% correction.', confidence: 72 },
  { commodity: 'Gold', action: 'Buy Now' as const, reason: 'Geopolitical uncertainty driving safe-haven demand. Expected +5% in 30 days.', confidence: 85 },
  { commodity: 'LPG', action: 'High Risk' as const, reason: 'Supply disruptions from Middle East conflict. Stock up if possible.', confidence: 88 },
]

export const newsItems = [
  { title: 'OPEC+ extends production cuts through Q3', source: 'Reuters', time: '2h ago', sentiment: 'negative' as const },
  { title: 'India monsoon forecast: Normal rainfall expected', source: 'IMD', time: '4h ago', sentiment: 'positive' as const },
  { title: 'Red Sea shipping costs triple amid Houthi attacks', source: 'Bloomberg', time: '6h ago', sentiment: 'negative' as const },
  { title: 'New semiconductor fab announced in Arizona', source: 'TechCrunch', time: '8h ago', sentiment: 'positive' as const },
  { title: 'Brazil declares emergency over record drought', source: 'AP News', time: '12h ago', sentiment: 'negative' as const },
  { title: 'EU carbon border tax begins phased implementation', source: 'FT', time: '1d ago', sentiment: 'neutral' as const },
]
