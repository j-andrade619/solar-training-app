function TimeRangeToggle({ selectedRange, onChange }) {
  const ranges = ['Daily', 'Weekly', 'Monthly']

  return (
    <div className="inline-flex rounded-2xl bg-gray-100 p-1">
      {ranges.map((range) => {
        const isSelected = selectedRange === range

        return (
          <button
            key={range}
            type="button"
            onClick={() => onChange(range)}
            className={`rounded-xl px-4 py-2 text-sm font-medium transition ${
              isSelected
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {range}
          </button>
        )
      })}
    </div>
  )
}

export default TimeRangeToggle
