function SystemSummaryCard() {
  return (
    <section className="rounded-2xl bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold text-gray-900">
          Goodwill Training Array
        </h2>
        <p className="text-sm text-gray-600">Albuquerque, NM</p>
        <p className="text-sm text-gray-600">Array Size: 6.4 kW</p>
        <p className="text-sm font-medium text-green-700">Status: Normal</p>
        <p className="text-xs text-gray-500">Last updated: 2 minutes ago</p>
      </div>
    </section>
  )
}

export default SystemSummaryCard