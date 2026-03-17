import { useState } from 'react'
import ProductionChart from '../components/charts/ProductionChart'
import TimeRangeToggle from '../components/charts/TimeRangeToggle'
import MetricsGrid from '../components/monitoring/MetricsGrid'
import ScenarioNotesCard from '../components/monitoring/ScenarioNotesCard'
import productionData from '../data/productionData'

function ProductionPage() {
  const [selectedRange, setSelectedRange] = useState('Weekly')

  return (
    <main className="min-h-screen bg-gray-100 px-4 py-6 text-left sm:px-6">
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Production Monitoring
              </h1>
              <p className="mt-2 max-w-2xl text-sm text-gray-600">
                Practice reading production trends, comparing output windows, and
                discussing how monitoring data supports classroom troubleshooting.
              </p>
            </div>
            <TimeRangeToggle
              selectedRange={selectedRange}
              onChange={setSelectedRange}
            />
          </div>
        </header>

        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Output Trend</h2>
              <p className="mt-1 text-sm text-gray-600">
                Viewing the {selectedRange.toLowerCase()} training sample using mock
                production data.
              </p>
            </div>
            <span className="inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
              Responsive Chart
            </span>
          </div>

          <div className="mt-6 rounded-2xl bg-gray-50 p-4">
            <ProductionChart data={productionData} />
          </div>
        </section>

        <MetricsGrid data={productionData} />
        <ScenarioNotesCard />
      </div>
    </main>
  )
}

export default ProductionPage
