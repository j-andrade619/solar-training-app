import alerts from '../../data/alerts.json'
import liveStatus from '../../data/liveStatus.json'

function SystemSummaryCard() {
  return (
    <section className="rounded-2xl bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold text-gray-900">
            {liveStatus.siteName}
          </h2>
          <p className="text-sm text-gray-600">{liveStatus.location}</p>
          <p className="text-sm text-gray-600">
            Array Size: {liveStatus.arraySizeKw} kW
          </p>
          <p className="text-sm font-medium text-green-700">
            Status: {liveStatus.status}
          </p>
          <p className="text-xs text-gray-500">
            Last updated: {liveStatus.lastUpdated}
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl bg-gray-50 px-4 py-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
              Weather
            </p>
            <p className="mt-1 text-sm font-semibold text-gray-900">
              {liveStatus.weather}
            </p>
          </div>
          <div className="rounded-2xl bg-gray-50 px-4 py-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
              Alerts
            </p>
            <p className="mt-1 text-sm font-semibold text-gray-900">
              {alerts.length} active
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SystemSummaryCard
