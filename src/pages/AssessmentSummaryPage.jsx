import { Link, useNavigate } from 'react-router-dom'

function SummaryCard({ title, items }) {
  return (
    <section className="rounded-2xl bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-900">{title}</h2>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <div key={item.label} className={item.fullWidth ? 'sm:col-span-2' : ''}>
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
              {item.label}
            </p>
            <p className="mt-1 text-sm text-gray-900">{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function AssessmentSummaryPage() {
  const navigate = useNavigate()

  const summaryData = {
    assessmentInfo: [
      { label: 'Site Name', value: 'CleanTech Training House' },
      { label: 'Assessor Name', value: 'Jesse Andrade' },
      { label: 'Assessment Date', value: '2026-03-16' },
      { label: 'Property Type', value: 'Residential' },
    ],
    roofDetails: [
      { label: 'Roof Type', value: 'Gable' },
      { label: 'Roof Material', value: 'Asphalt Shingle' },
      { label: 'Roof Pitch', value: '6/12' },
      { label: 'Roof Condition', value: 'Good' },
      { label: 'Shading Level', value: 'Low' },
      { label: 'Obstruction Notes', value: 'Vent pipe near ridge; small tree on west side.' },
    ],
    electricalDetails: [
      { label: 'Service Panel Size', value: '200A' },
      { label: 'Main Breaker Rating', value: '200A' },
      { label: 'Breaker Spaces Available', value: '4' },
      { label: 'Meter Location', value: 'Exterior west wall' },
      { label: 'Panel Condition Notes', value: 'Panel appears accessible and clearly labeled.' },
    ],
    safetyDetails: [
      { label: 'Ladder Access OK', value: 'Yes' },
      { label: 'Attic Access Available', value: 'Yes' },
      { label: 'Trip Hazards', value: 'No' },
      { label: 'Animal Hazards', value: 'No' },
      { label: 'Safety Notes', value: 'Driveway slope should be reviewed during setup.' },
    ],
    photoStatus: [
      { label: 'Photos Captured', value: '5 / 6' },
      { label: 'Missing Items', value: 'Utility Meter' },
      { label: 'Assessment Status', value: 'Needs Review' },
      {
        label: 'Instructor Note',
        value: 'Capture the missing utility meter photo before final submission.',
        fullWidth: true,
      },
    ],
  }

  return (
    <main className="min-h-screen bg-gray-100 px-4 py-6 text-left sm:px-6">
      <div className="mx-auto max-w-6xl space-y-6">
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h1 className="text-3xl font-bold text-gray-900">Assessment Summary</h1>
          <p className="mt-2 text-sm text-gray-600">
            Review all site details and photo requirements before completing the
            assessment.
          </p>
        </section>

        <SummaryCard title="Assessment Info" items={summaryData.assessmentInfo} />
        <SummaryCard title="Roof Details" items={summaryData.roofDetails} />
        <SummaryCard title="Electrical Details" items={summaryData.electricalDetails} />
        <SummaryCard title="Access and Safety" items={summaryData.safetyDetails} />
        <SummaryCard title="Photo Status" items={summaryData.photoStatus} />

        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              to="/site-eval/photos"
              className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
            >
              Back to Photos
            </Link>

            <button
              type="button"
              onClick={() => navigate('/site-eval')}
              className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
            >
              Finish & Start Next Assessment
            </button>
          </div>
        </section>
      </div>
    </main>
  )
}

export default AssessmentSummaryPage
