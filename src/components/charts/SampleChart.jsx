import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { TrendingUp } from "lucide-react";

const data = [
  { date: "2025-01-01", price: 400 },
  { date: "2025-01-02", price: 350 },
  { date: "2025-01-03", price: 450 },
  { date: "2025-01-04", price: 300 },
  { date: "2025-01-05", price: 375 },
  { date: "2025-01-06", price: 420 },
  { date: "2025-01-07", price: 500 },
  { date: "2025-01-08", price: 430 },
  { date: "2025-01-09", price: 380 },
  { date: "2025-01-10", price: 390 },
  { date: "2025-01-11", price: 410 },
  { date: "2025-01-12", price: 480 },
  { date: "2025-01-13", price: 460 },
  { date: "2025-01-14", price: 500 },
  { date: "2025-01-15", price: 520 },
  { date: "2025-01-16", price: 470 },
  { date: "2025-01-17", price: 490 },
  { date: "2025-01-18", price: 510 },
  { date: "2025-01-19", price: 430 },
  { date: "2025-01-20", price: 450 },
  { date: "2025-01-21", price: 470 },
  { date: "2025-01-22", price: 490 },
  { date: "2025-01-23", price: 510 },
  { date: "2025-01-24", price: 530 },
  { date: "2025-01-25", price: 550 },
  { date: "2025-01-26", price: 470 },
  { date: "2025-01-27", price: 490 },
  { date: "2025-01-28", price: 410 },
  { date: "2025-01-29", price: 530 },
  { date: "2025-01-30", price: 450 },
  { date: "2025-01-31", price: 670 },
  { date: "2025-02-01", price: 590 },
  { date: "2025-02-02", price: 610 },
  { date: "2025-02-03", price: 630 },
  { date: "2025-02-04", price: 750 },
];

export default function SampleChart({areaColor}) {
  return (
    <div className="w-full max-w-2xl mx-auto bg-white">
     
      <ResponsiveContainer width="100%" height={220}>
        <AreaChart data={data} margin={{ left: -40, right: 12 }}>
          {/* <CartesianGrid vertical={false} strokeDasharray="3 3" /> */}
          <XAxis
            dataKey="date"
            axisLine={false}
            tickLine={false}
            tickMargin={8}
            tickSize={1}
            tickFormatter={(date) =>
              new Date(date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              })
            }
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={false}
            // tickMargin={8}
            // tickFormatter={(value) => `$${value}`}
          />
          <Tooltip
            labelFormatter={(date) =>
              new Date(date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })
            }
            formatter={(value) => [`${value}`, "Price"]}
          />
          <Area
            type="monotone"
            dataKey="price"
            stroke={areaColor}
            fill={areaColor}
            fillOpacity={0.4}
          />
        </AreaChart>
      </ResponsiveContainer>
     
    </div>
  );
}
