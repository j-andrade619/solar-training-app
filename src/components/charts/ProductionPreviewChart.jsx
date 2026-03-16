import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

function ProductionPreviewChart({ data }) {
  return (
    <div className="h-56 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 12, right: 8, left: -20, bottom: 0 }}
        >
          <CartesianGrid stroke="#e5e7eb" strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#6b7280', fontSize: 12 }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#9ca3af', fontSize: 12 }}
            width={32}
          />
          <Tooltip
            cursor={{ stroke: '#86efac', strokeWidth: 1 }}
            contentStyle={{
              border: '1px solid #dcfce7',
              borderRadius: '16px',
              boxShadow: '0 8px 24px rgba(15, 23, 42, 0.08)',
            }}
            formatter={(value) => [`${value} kWh`, 'Production']}
            labelFormatter={(label, payload) => {
              const point = payload?.[0]?.payload
              return point ? `${label} • ${point.date}` : label
            }}
          />
          <Line
            type="monotone"
            dataKey="kwh"
            stroke="#15803d"
            strokeWidth={3}
            dot={{ r: 4, fill: '#15803d', stroke: '#ffffff', strokeWidth: 2 }}
            activeDot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ProductionPreviewChart
