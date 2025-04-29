import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "Jan", value1: 22, value2: 15, value3: -10 },
  { name: "Feb", value1: 18, value2: 25, value3: 5 },
  { name: "Mar", value1: 20, value2: 35, value3: 10 },
  { name: "Apr", value1: 30, value2: 32, value3: 12 },
  { name: "Mai", value1: 55, value2: 30, value3: 15 },
  { name: "Jun", value1: 28, value2: 45, value3: 22 },
];

export default function ChartCard() {
  return (
    <div className="bg-white rounded-xl p-6 w-[374px] shadow-md space-y-4">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div className="space-y-1">
          <h3 className="text-sm font-semibold text-black">CHART TITLE</h3>
          <h2 className="text-3xl font-bold text-blue-700">5.000,00</h2>
          <p className="text-sm text-gray-700">50 Orders</p>
        </div>
        <div className="text-sm text-gray-700 cursor-pointer">This Week ▼</div>
      </div>

      {/* Chart */}
      <div className="h-[160px] -ml-6 -mr-6">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 10, right: 20, left: 20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis domain={[-60, 60]} />
            <Tooltip />
            <Line type="monotone" dataKey="value1" stroke="#3B82F6" strokeWidth={2} dot />
            <Line type="monotone" dataKey="value2" stroke="#A78BFA" strokeWidth={2} dot />
            <Line type="monotone" dataKey="value3" stroke="#F472B6" strokeWidth={2} dot />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="flex justify-center gap-6 text-sm font-medium mt-2">
        <div className="flex items-center gap-1">
          <span className="w-3 h-3 rounded-full bg-blue-500 inline-block"></span> Content
        </div>
        <div className="flex items-center gap-1">
          <span className="w-3 h-3 rounded-full bg-purple-400 inline-block"></span> Content
        </div>
        <div className="flex items-center gap-1">
          <span className="w-3 h-3 rounded-full bg-pink-400 inline-block"></span> Content
        </div>
      </div>
    </div>
  );
}
