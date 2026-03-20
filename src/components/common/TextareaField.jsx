function TextareaField({
  id,
  name,
  label,
  value,
  onChange,
  placeholder = '',
  rows = 4,
  required = false,
  helperText,
}) {
  return (
    <label htmlFor={id} className="block">
      <span className="mb-2 block text-sm font-medium text-gray-700">{label}</span>
      <textarea
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        required={required}
        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
      />
      {helperText && (<p className="mt-1 text-xs text-gray-500">{helperText}</p>)}
    </label>
  )
}

export default TextareaField
