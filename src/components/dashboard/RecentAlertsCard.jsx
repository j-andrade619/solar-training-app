import alerts from '../../data/alerts.json'

const severityStyles = {
  Low: 'bg-sky-50 text-sky-700',
  Medium: 'bg-amber-50 text-amber-700',
  Info: 'bg-emerald-50 text-emerald-700',
}

function RecentAlertsCard() {
  return (
    <section className="rounded-2xl bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Recent Alerts</h2>
          <p className="mt-1 text-sm text-gray-600">
            Review common status messages used in the monitoring training flow.
          </p>
        </div>
        <span className="inline-flex rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
          {alerts.length} active
        </span>
      </div>

      <div className="mt-6 space-y-4">
        {alerts.map((alert) => (
          <article
            key={alert.id}
            className="rounded-2xl border border-gray-100 bg-gray-50 p-4"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-sm font-semibold text-gray-900">
                  {alert.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{alert.detail}</p>
              </div>
              <span
                className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${severityStyles[alert.severity]}`}
              >
                {alert.severity}
              </span>
            </div>
            <p className="mt-3 text-xs text-gray-500">{alert.time}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default RecentAlertsCard
