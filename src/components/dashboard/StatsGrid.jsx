import productionData from '../../data/productionData.json'
import liveStatus from '../../data/liveStatus.json'

const totalProduction = productionData.reduce((sum, day) => sum + day.kwh, 0)
const latestDay = productionData[productionData.length - 1]
const previousDay = productionData[productionData.length - 2]
const productionDelta = latestDay.kwh - previousDay.kwh
const productionDeltaLabel =
  productionDelta >= 0
    ? `+${productionDelta.toFixed(1)} kWh vs ${previousDay.day}`
    : `${productionDelta.toFixed(1)} kWh vs ${previousDay.day}`

const stats = [
  {
    label: 'Energy Today',
    value: `${latestDay.kwh} kWh`,
    detail: productionDeltaLabel,
    accent: 'text-emerald-700',
    tone: 'bg-emerald-50',
  },
  {
    label: 'Peak Output',
    value: `${liveStatus.currentOutputKw} kW`,
    detail: `Forecast total ${liveStatus.forecastTotalKwh} kWh`,
    accent: 'text-sky-700',
    tone: 'bg-sky-50',
  },
  {
    label: 'System Efficiency',
    value: `${liveStatus.systemEfficiency}%`,
    detail: `Weekly average ${liveStatus.weeklyAverageKwh} kWh`,
    accent: 'text-amber-700',
    tone: 'bg-amber-50',
  },
  {
    label: 'CO2 Avoided',
    value: `${liveStatus.carbonAvoidedLbs} lbs`,
    detail: `${(totalProduction / 37.5).toFixed(1)} tree-equivalent days`,
    accent: 'text-violet-700',
    tone: 'bg-violet-50',
  },
]

function StatsGrid() {
  return (
    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <article
          key={stat.label}
          className="rounded-2xl bg-white p-6 shadow-sm"
        >
          <div
            className={`mb-4 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${stat.accent} ${stat.tone}`}
          >
            {stat.label}
          </div>
          <p className="text-3xl font-semibold text-gray-900">{stat.value}</p>
          <p className="mt-2 text-sm text-gray-600">{stat.detail}</p>
        </article>
      ))}
    </section>
  )
}

export default StatsGrid
