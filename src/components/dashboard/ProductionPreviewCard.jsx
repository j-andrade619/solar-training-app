import productionData from '../../data/productionData.json'
import liveStatus from '../../data/liveStatus.json'
import ProductionPreviewChart from '../charts/ProductionPreviewChart'

function ProductionPreviewCard() {
  const totalProduction = productionData.reduce((sum, day) => sum + day.kwh, 0)
  const averageProduction = totalProduction / productionData.length

  return (
    <section className="rounded-2xl bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            Production Preview
          </h2>
          <p className="mt-1 text-sm text-gray-600">
            Seven days of mock training output for the monitored array.
          </p>
        </div>
        <span className="inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
          {liveStatus.weather}
        </span>
      </div>

      <div className="mt-6 rounded-2xl bg-gray-50 p-4">
        <ProductionPreviewChart data={productionData} />
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
            Latest Forecast
          </p>
          <p className="mt-1 text-lg font-semibold text-gray-900">
            {liveStatus.forecastTotalKwh} kWh
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
            Weekly Average
          </p>
          <p className="mt-1 text-lg font-semibold text-gray-900">
            {averageProduction.toFixed(1)} kWh
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
            Best Day
          </p>
          <p className="mt-1 text-lg font-semibold text-gray-900">
            {liveStatus.bestDayLabel} • {liveStatus.bestDayKwh} kWh
          </p>
        </div>
      </div>
    </section>
  )
}

export default ProductionPreviewCard
