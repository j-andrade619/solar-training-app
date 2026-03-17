import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

function ProductionChart({ data }) {
  return (
    <div className="h-80 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 8, right: 12, left: -12, bottom: 0 }}>
          <CartesianGrid stroke="#e5e7eb" strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="label"
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#6b7280', fontSize: 12 }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            width={36}
            tick={{ fill: '#9ca3af', fontSize: 12 }}
          />
          <Tooltip
            cursor={{ fill: 'rgba(220, 252, 231, 0.7)' }}
            contentStyle={{
              border: '1px solid #dcfce7',
              borderRadius: '16px',
              boxShadow: '0 8px 24px rgba(15, 23, 42, 0.08)',
            }}
            formatter={(value) => [`${value} kWh`, 'Production']}
          />
          <Bar
            dataKey="productionKwh"
            fill="#16a34a"
            radius={[12, 12, 0, 0]}
            maxBarSize={52}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ProductionChart
