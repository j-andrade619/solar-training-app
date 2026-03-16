function MetricsGrid({ data }) {
  const totalProduction = data.reduce(
    (total, item) => total + item.productionKwh,
    0,
  )
  const averageProduction = totalProduction / data.length
  const bestDay = data.reduce((highestDay, currentDay) =>
    currentDay.productionKwh > highestDay.productionKwh
      ? currentDay
      : highestDay,
  )

  const metrics = [
    {
      label: 'Total Production',
      value: `${totalProduction.toFixed(1)} kWh`,
      detail: 'Total output across the selected training range',
    },
    {
      label: 'Average Production',
      value: `${averageProduction.toFixed(1)} kWh`,
      detail: 'Average production per day in the current view',
    },
    {
      label: 'Best Day',
      value: `${bestDay.day} • ${bestDay.productionKwh} kWh`,
      detail: `Top-performing day in this ${data.length}-day sample`,
    },
  ]

  return (
    <section className="grid gap-4 md:grid-cols-3">
      {metrics.map((metric) => (
        <article key={metric.label} className="rounded-2xl bg-white p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
            {metric.label}
          </p>
          <p className="mt-3 text-2xl font-semibold text-gray-900">{metric.value}</p>
          <p className="mt-2 text-sm text-gray-600">{metric.detail}</p>
        </article>
      ))}
    </section>
  )
}

export default MetricsGrid
