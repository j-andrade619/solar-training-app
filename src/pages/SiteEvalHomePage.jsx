import { Link } from 'react-router-dom'
import RequiredPhotosChecklistCard from '../components/site-eval/RequiredPhotosChecklistCard'

function SiteEvalHomePage() {
  return (
    <main className="min-h-screen bg-gray-100 px-4 py-6 text-left sm:px-6">
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl bg-white p-6 shadow-sm">
          <h1 className="text-3xl font-bold text-gray-900">Site Evaluation</h1>
          <p className="mt-2 max-w-2xl text-sm text-gray-600">
            Use this module to document a solar installation site, capture key
            details, and prepare students for structured field assessments.
          </p>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/site-eval/form"
              className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
            >
              Start New Assessment
            </Link>
            <Link
              to="/site-eval/form"
              className="inline-flex items-center justify-center rounded-xl bg-gray-100 px-5 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-200"
            >
              View Sample Assessment
            </Link>
          </div>
        </header>

        <RequiredPhotosChecklistCard />
      </div>
    </main>
  )
}

export default SiteEvalHomePage
