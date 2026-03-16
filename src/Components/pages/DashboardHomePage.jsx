import SystemSummaryCard from "../dashboard/SystemSummaryCard"
import StatsGrid from "../dashboard/StatsGrid"
import ProductionPreviewCard from "../dashboard/ProductionPreviewCard"
import RecentAlertsCard from "../dashboard/RecentAlertsCard"

function DashboardHomePage() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-6xl space-y-6">
        <h1 className="mb-6 text-3xl font-bold text-gray-900">
          Solar Training Dashboard
        </h1>

        <SystemSummaryCard />
        <StatsGrid />
        <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          <ProductionPreviewCard />
          <RecentAlertsCard />
        </div>
      </div>
    </main>
  )
}

export default DashboardHomePage
