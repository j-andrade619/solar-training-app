import liveStatus from '../data/liveStatus.json'
import SystemSummaryCard from '../components/dashboard/SystemSummaryCard'
import StatsGrid from '../components/dashboard/StatsGrid'
import ProductionPreviewCard from '../components/dashboard/ProductionPreviewCard'

function DashboardHomePage() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-6xl space-y-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Solar Training Dashboard
            </h1>
            <p className="mt-1 text-sm text-gray-600">
              Monitoring practice for {liveStatus.siteName} in {liveStatus.location}.
            </p>
          </div>
          <div className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-600 shadow-sm">
            Status: <span className="ml-1 text-green-700">{liveStatus.status}</span>
          </div>
        </div>

        <SystemSummaryCard />
        <StatsGrid />
        <ProductionPreviewCard />
      </div>
    </main>
  )
}

export default DashboardHomePage
