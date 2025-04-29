import { TrendingUp } from "lucide-react"
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

const chartData = [
  { name: "Nifty 50", desktop: 186, mobile: 80 },
  { name: "Nifty Next 50", desktop: 305, mobile: 200 },
  { name: "Nifty 100", desktop: 237, mobile: 120 },
  { name: "April", desktop: 73, mobile: 190 },
  { name: "May", desktop: 209, mobile: 130 },
  { name: "June", desktop: 214, mobile: 140 },
]

export default function IndicesBarChart() {
  return (
    <div className="w-full max-w-3xl mx-auto space-y-4">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={chartData}
          layout="vertical"
          margin={{ top: 16, right: 16, left: -40, bottom: 0 }}
        >
          <CartesianGrid vertical={false} horizontal={false} strokeDasharray="3 3" />
          <YAxis
            dataKey="name"
            type="category"
            axisLine={false}
            tickLine={false}
            tick={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <XAxis type="number" axisLine={false} tickLine={false} hide />
          <Tooltip
            formatter={(value) => [`${value}`, "Desktop"]}
            labelFormatter={(label) => `Month: ${label}`}
          />
          <Bar
            dataKey="desktop"
            fill="hsl(220, 90%, 56%)"
            radius={[4, 4, 4, 4]}
          >
            <LabelList
              dataKey="name"
              position="insideLeft"
              offset={8}
              fill="hsl(0, 0%, 100%)"
              fontSize={12}
            />
            <LabelList
              dataKey="desktop"
              position="right"
              offset={8}
              fill="hsl(220, 90%, 30%)"
              fontSize={12}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <div className="flex flex-col gap-1 text-sm">
        <div className="flex items-center gap-2 font-medium text-green-600">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </div>
    </div>
  )
}
