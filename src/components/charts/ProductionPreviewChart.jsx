import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

function ProductionPreviewChart({ data }) {
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
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
            cursor={{ fill: 'rgba(220, 252, 231, 0.6)' }}
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
          <Bar
            dataKey="productionKwh"
            fill="#16a34a"
            radius={[10, 10, 0, 0]}
            maxBarSize={42}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ProductionPreviewChart
