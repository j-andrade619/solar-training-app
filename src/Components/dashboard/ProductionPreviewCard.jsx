const productionPoints = [38, 52, 71, 66, 84, 96, 88]
const hourLabels = ['6a', '8a', '10a', '12p', '2p', '4p', '6p']

function ProductionPreviewCard() {
  const chartPath = productionPoints
    .map((point, index) => {
      const x = index * 52
      const y = 120 - point
      return `${index === 0 ? 'M' : 'L'} ${x},${y}`
    })
    .join(' ')

  return (
    <section className="rounded-2xl bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            Production Preview
          </h2>
          <p className="mt-1 text-sm text-gray-600">
            Simulated array output across the training day.
          </p>
        </div>
        <div className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
          Sunny Conditions
        </div>
      </div>

      <div className="mt-6 rounded-2xl bg-gray-50 p-4">
        <svg
          viewBox="0 0 312 140"
          className="h-40 w-full"
          role="img"
          aria-label="Production preview line chart"
        >
          <defs>
            <linearGradient id="productionFill" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#22c55e" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#22c55e" stopOpacity="0.02" />
            </linearGradient>
          </defs>

          <path
            d={`${chartPath} L 312,120 L 0,120 Z`}
            fill="url(#productionFill)"
          />
          <path
            d={chartPath}
            fill="none"
            stroke="#15803d"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {productionPoints.map((point, index) => (
            <circle
              key={hourLabels[index]}
              cx={index * 52}
              cy={120 - point}
              r="4"
              fill="#15803d"
            />
          ))}
        </svg>

        <div className="mt-3 grid grid-cols-7 text-xs text-gray-500">
          {hourLabels.map((label) => (
            <span key={label}>{label}</span>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
            Forecast Total
          </p>
          <p className="mt-1 text-lg font-semibold text-gray-900">31.2 kWh</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
            Best Window
          </p>
          <p className="mt-1 text-lg font-semibold text-gray-900">12 PM - 4 PM</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
            Weather Impact
          </p>
          <p className="mt-1 text-lg font-semibold text-gray-900">Low Cloud Risk</p>
        </div>
      </div>
    </section>
  )
}

export default ProductionPreviewCard
