import {
    Bar,
    BarChart,
    XAxis,
    YAxis,
    Tooltip,
    Cell,
    ResponsiveContainer,
    LabelList,
} from "recharts";

import { Link, useNavigate } from "react-router-dom";

export default function IndicesPerformanceChart({ data = [] }) {
    // Sort data by pChange descending
    const sortedData = [...data].sort((a, b) => b.pChange - a.pChange);
    const chartHeight = sortedData.length * 32; // 35px per bar to avoid overlap

    let navigate = useNavigate();

    return (
        <div className="w-full max-w-4xl mx-auto p-6 bg-white space-y-6">
            {/* <h2 className="text-xl font-bold text-center">Indices Performance</h2> */}

            <ResponsiveContainer width="100%" height={chartHeight}>
                <BarChart
                    data={sortedData}
                    layout="vertical"
                    margin={{ top: 10, right: 0, left: 10, bottom: 0 }}
                    onClick={(payload)=>{
                        navigate(payload.activePayload[0].payload.index_symbol);
                        console.log(payload)
                    }}
                >
                    <XAxis
                        type="number"
                        domain={["dataMin - 0.5", "dataMax + 0.5"]}
                        tickFormatter={(value) =>
                            `${value > 0 ? "+" : ""}${value.toFixed(2)}%`
                        }
                        tick={false}
                        axisLine={false}
                        tickLine={false}
                    />
                    <YAxis
                        type="category"
                        dataKey="index_name"
                        tick={({ x, y, payload }) => (
                            <foreignObject x={x - 165} y={y - 12} width={120} height={24}>
                                <Link
                                    to={payload.value}
                                    xmlns="http://www.w3.org/1999/xhtml"
                                    className="text-xs font-medium px-2.5 py-0.5 dark:bg-gray-100 dark:text-gray-700 w-fit hover:bg-blue-100 hover:text-blue-700 rounded-md"
                                    style={{
                                        whiteSpace: 'nowrap',       // Prevent text from wrapping
                                        overflow: 'hidden',         // Hide any overflow text
                                        textOverflow: 'ellipsis',   // Show ellipsis when text overflows
                                        fontSize: 11
                                    }}
                                >
                                    {payload.value}
                                </Link>
                            </foreignObject>
                        )}
                        width={160}
                        axisLine={false}
                        tickLine={false}
                    />
                    <Tooltip
                        formatter={(value) =>
                            `${value > 0 ? "+" : ""}${value.toFixed(2)}%`
                        }
                        labelStyle={{ fontWeight: "bold" }}
                        itemStyle={{ fontSize: 14 }}
                        cursor={{ fill: "rgba(0, 0, 0, 0.05)" }}
                    />
                    <Bar dataKey="pChange" radius={[0, 4, 4, 0]}>
                        {sortedData.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={entry.pChange >= 0 ? "#00C49F" : "#FF5C5C"}
                            />
                        ))}

                        {sortedData.map((entry, index) => (
                            <LabelList
                                dataKey="pChange"
                                position="right"
                                formatter={(value) =>
                                    `${value > 0 ? "+" : ""}${value.toFixed(2)}%`
                                }
                                fontSize={12}
                                fill=""
                                className="font-medium"

                            />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
