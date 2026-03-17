import AssessmentForm from '../components/site-eval/AssessmentForm'

function AssessmentFormPage() {
  return (
    <main className="min-h-screen bg-gray-100 px-4 py-6 text-left sm:px-6">
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl bg-white p-6 shadow-sm">
          <h1 className="text-3xl font-bold text-gray-900">
            New Site Assessment
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-gray-600">
            Complete this form before capturing photos so the class has a clear
            record of roof, electrical, and safety conditions at the site.
          </p>
        </header>

        <AssessmentForm />
      </div>
    </main>
  )
}

export default AssessmentFormPage
