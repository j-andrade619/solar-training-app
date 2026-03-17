function ToggleField({ id, name,label, checked, onChange, required = false, helperText }) {
  return (
    <div>
      <label
        htmlFor={id}
        className="flex items-center justify-between gap-4 rounded-xl border border-gray-200 bg-white px-4 py-3"
      >
        <span className="text-sm font-medium text-gray-700">{label}</span>

        <input
          id={id}
          name={name || id}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          required={required}
          aria-checked={checked}
          className="h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
        />
      </label>

      {helperText && (
        <p className="mt-1 text-xs text-gray-500">{helperText}</p>
      )}
    </div>
  )
}

export default ToggleField
