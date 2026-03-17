function PhotoProgressCard({ capturedCount, totalRequired }) {
  return (
    <section className="rounded-2xl bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-gray-900">Photo Progress</h2>
      <p className="mt-2 text-sm text-gray-600">
        Photos Captured: {capturedCount} / {totalRequired}
      </p>

      <div className="mt-4 h-3 w-full rounded-full bg-gray-100">
        <div
          className="h-3 rounded-full bg-emerald-600 transition-all"
          style={{ width: `${(capturedCount / totalRequired) * 100}%` }}
        />
      </div>
    </section>
  )
}

export default PhotoProgressCard
