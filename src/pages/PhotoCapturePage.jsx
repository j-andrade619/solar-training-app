import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import InstructionCard from '../components/site-eval/InstructionCard'
import PhotoGrid from '../components/site-eval/PhotoGrid'
import PhotoProgressCard from '../components/site-eval/PhotoProgressCard'
import { useNavigate } from 'react-router-dom'
import {
  optionalPhotoCategories,
  requiredPhotoCategories,
} from '../data/photoCategories'

function PhotoCapturePage() {
  const navigate = useNavigate()
  const [photoFiles, setPhotoFiles] = useState({})

  function handleFileChange(categoryId, file) {
    setPhotoFiles((currentFiles) => ({
      ...currentFiles,
      [categoryId]: file,
    }))
  }

  const capturedRequiredCount = useMemo(() => {
    return requiredPhotoCategories.filter((category) => photoFiles[category.id]).length
  }, [photoFiles])

  return (
    <main className="min-h-screen bg-gray-100 px-4 py-6 text-left sm:px-6">
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl bg-white p-6 shadow-sm">
          <h1 className="text-3xl font-bold text-gray-900">Photo Capture</h1>
          <p className="mt-2 max-w-2xl text-sm text-gray-600">
            Capture all required site photos before completing the assessment so
            students can review installation conditions and compare findings.
          </p>
        </header>

        <InstructionCard />
        <PhotoProgressCard
          capturedCount={capturedRequiredCount}
          totalRequired={requiredPhotoCategories.length}
        />
        <PhotoGrid
          requiredCategories={requiredPhotoCategories}
          optionalCategories={optionalPhotoCategories}
          photoFiles={photoFiles}
          onFileChange={handleFileChange}
        />

        <footer className="rounded-2xl bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">
            <Link
              to="/site-eval/form"
              className="inline-flex items-center justify-center rounded-xl bg-gray-100 px-5 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-200"
            >
              Back to Form
            </Link>
            <button
              type="button"
              onClick={() => navigate('/site-eval/summary')}
              className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
            >
              Continue to Summary
            </button>
          </div>
        </footer>
      </div>
    </main>
  )
}

export default PhotoCapturePage
