import productionData from '../../data/productionData'
import ProductionPreviewChart from '../charts/ProductionPreviewChart'

function ProductionPreviewCard() {
  const weeklyTotal = productionData.reduce(
    (total, day) => total + day.productionKwh,
    0,
  )
  const bestDay = productionData.reduce((highestDay, currentDay) =>
    currentDay.productionKwh > highestDay.productionKwh
      ? currentDay
      : highestDay,
  )

  return (
    <section className="rounded-2xl bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            Production Preview
          </h2>
          <p className="mt-1 text-sm text-gray-600">
            Seven days of mock production for the training dashboard.
          </p>
        </div>
        <span className="inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
          7-Day View
        </span>
      </div>

      <div className="mt-6 rounded-2xl bg-gray-50 p-4">
        <ProductionPreviewChart data={productionData} />
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
            Weekly Total
          </p>
          <p className="mt-1 text-lg font-semibold text-gray-900">
            {weeklyTotal.toFixed(1)} kWh
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
            Best Day
          </p>
          <p className="mt-1 text-lg font-semibold text-gray-900">
            {bestDay.day} • {bestDay.productionKwh} kWh
          </p>
        </div>
      </div>
    </section>
  )
}

export default ProductionPreviewCard
