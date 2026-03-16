import SystemSummaryCard from "../dashboard/SystemSummaryCard"

function DashboardHomePage() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-6 text-3xl font-bold text-gray-900">
          Solar Training Dashboard
        </h1>

        <SystemSummaryCard />
      </div>
    </main>
  )
}

export default DashboardHomePage