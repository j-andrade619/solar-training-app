const photoCategories = [
  'Roof Overview',
  'Roof Obstructions',
  'Main Service Panel',
  'Utility Meter',
  'Attic / Structure',
  'Equipment Location',
]

function RequiredPhotosChecklistCard() {
  return (
    <section className="rounded-2xl bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-gray-900">
        Required Photo Checklist
      </h2>
      <p className="mt-2 text-sm text-gray-600">
        Capture each of these views during the site visit so students can review
        both layout and installation constraints.
      </p>

      <div className="mt-5 space-y-3">
        {photoCategories.map((category) => (
          <div
            key={category}
            className="flex items-center gap-3 rounded-xl bg-gray-50 px-4 py-3"
          >
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-xs font-semibold text-emerald-700">
              ✓
            </span>
            <span className="text-sm text-gray-700">{category}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default RequiredPhotosChecklistCard
