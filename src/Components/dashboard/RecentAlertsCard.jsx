const alerts = [
  {
    title: 'Inverter temperature elevated',
    detail: 'Unit 2 exceeded baseline by 6 F during midday peak.',
    time: '8 minutes ago',
    severity: 'Monitor',
    tone: 'bg-amber-50 text-amber-700',
  },
  {
    title: 'String B output dip detected',
    detail: 'Training scenario flagged a 14% drop to review shading effects.',
    time: '27 minutes ago',
    severity: 'Review',
    tone: 'bg-sky-50 text-sky-700',
  },
  {
    title: 'Maintenance reminder',
    detail: 'Scheduled panel cleaning walkthrough is due tomorrow morning.',
    time: '1 hour ago',
    severity: 'Planned',
    tone: 'bg-emerald-50 text-emerald-700',
  },
]

function RecentAlertsCard() {
  return (
    <section className="rounded-2xl bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Recent Alerts</h2>
          <p className="mt-1 text-sm text-gray-600">
            Practice reading common monitoring notifications.
          </p>
        </div>
        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
          {alerts.length} active
        </span>
      </div>

      <div className="mt-6 space-y-4">
        {alerts.map((alert) => (
          <article
            key={alert.title}
            className="rounded-2xl border border-gray-100 bg-gray-50 p-4"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-sm font-semibold text-gray-900">
                {alert.title}
              </h3>
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${alert.tone}`}
              >
                {alert.severity}
              </span>
            </div>
            <p className="mt-2 text-sm text-gray-600">{alert.detail}</p>
            <p className="mt-3 text-xs text-gray-500">{alert.time}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default RecentAlertsCard
