function ScenarioNotesCard() {
  return (
    <section className="rounded-2xl bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-gray-900">Scenario Notes</h2>
      <p className="mt-2 text-sm text-gray-600">
        Students are reviewing output patterns after a mixed-weather training
        week. Use the chart and metrics to compare stronger and weaker production
        days and discuss what might trigger a follow-up inspection.
      </p>

      <div className="mt-5 rounded-2xl bg-gray-50 p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
          Practice Prompt
        </p>
        <p className="mt-2 text-sm text-gray-700">
          Identify the best production day, compare it to the weekly average, and
          explain what questions you would ask if output dropped below expected
          levels during a site visit.
        </p>
      </div>
    </section>
  )
}

export default ScenarioNotesCard
