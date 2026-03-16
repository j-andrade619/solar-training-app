const stats = [
  {
    label: 'Energy Today',
    value: '28.4 kWh',
    detail: '+12% vs yesterday',
    accent: 'text-emerald-700',
    tone: 'bg-emerald-50',
  },
  {
    label: 'Peak Output',
    value: '5.8 kW',
    detail: 'Reached at 1:14 PM',
    accent: 'text-sky-700',
    tone: 'bg-sky-50',
  },
  {
    label: 'System Efficiency',
    value: '94.6%',
    detail: 'Within target range',
    accent: 'text-amber-700',
    tone: 'bg-amber-50',
  },
  {
    label: 'CO2 Avoided',
    value: '41 lbs',
    detail: 'Equivalent to 0.8 trees',
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
