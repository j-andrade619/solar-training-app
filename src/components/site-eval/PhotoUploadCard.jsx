import { useEffect, useState } from 'react'

function PhotoUploadCard({ category, file, onFileChange, required = true }) {
  const [previewUrl, setPreviewUrl] = useState('')

  useEffect(() => {
    if (!file) {
      setPreviewUrl('')
      return undefined
    }

    const objectUrl = URL.createObjectURL(file)
    setPreviewUrl(objectUrl)

    return () => {
      URL.revokeObjectURL(objectUrl)
    }
  }, [file])

  const statusLabel = file ? 'Captured' : 'Missing'
  const statusClasses = file
    ? 'bg-emerald-50 text-emerald-700'
    : 'bg-amber-50 text-amber-700'

  return (
    <article className="rounded-2xl bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{category.label}</h3>
          <p className="mt-1 text-sm text-gray-600">
            {required ? 'Required photo' : 'Optional photo'}
          </p>
        </div>
        <span
          className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${statusClasses}`}
        >
          {statusLabel}
        </span>
      </div>

      <label
        htmlFor={category.id}
        className="mt-5 flex min-h-44 cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-gray-50 px-4 py-6 text-center"
      >
        {previewUrl ? (
          <img
            src={previewUrl}
            alt={`${category.label} preview`}
            className="h-40 w-full rounded-xl object-cover"
          />
        ) : (
          <>
            <span className="text-sm font-medium text-gray-700">
              Select a photo
            </span>
            <span className="mt-2 text-xs text-gray-500">
              JPG, PNG, or phone camera image
            </span>
          </>
        )}
      </label>

      <input
        id={category.id}
        type="file"
        accept="image/*"
        onChange={(event) => onFileChange(category.id, event.target.files?.[0] ?? null)}
        className="mt-4 block w-full text-sm text-gray-600 file:mr-4 file:rounded-xl file:border-0 file:bg-emerald-600 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-emerald-700"
      />
    </article>
  )
}

export default PhotoUploadCard
