import PhotoUploadCard from './PhotoUploadCard'

function PhotoGrid({
  requiredCategories,
  optionalCategories,
  photoFiles,
  onFileChange,
}) {
  return (
    <div className="space-y-6">
      <section>
        <div className="mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Required Photos</h2>
          <p className="mt-1 text-sm text-gray-600">
            Capture each required image before moving to the summary step.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {requiredCategories.map((category) => (
            <PhotoUploadCard
              key={category.id}
              category={category}
              file={photoFiles[category.id] ?? null}
              onFileChange={onFileChange}
            />
          ))}
        </div>
      </section>

      <section>
        <div className="mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Optional Photos</h2>
          <p className="mt-1 text-sm text-gray-600">
            Add any extra images that may help explain site conditions.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {optionalCategories.map((category) => (
            <PhotoUploadCard
              key={category.id}
              category={category}
              file={photoFiles[category.id] ?? null}
              onFileChange={onFileChange}
              required={false}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default PhotoGrid
