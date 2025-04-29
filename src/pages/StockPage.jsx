import { useState } from "react";
import { EQUITY_ICON_URL } from "../config/urlConfig";
import { Link } from "react-router-dom";
// Stock Data
const stockData = {
  "Nifty 50": {
    topGainers: [
      { name: "RELIANCE", change: "+3.2%", price: "2840", volume: "2.3M" },
      { name: "INFY", change: "+2.9%", price: "1540", volume: "1.9M" },
      { name: "HCLTECH", change: "+2.7%", price: "1225", volume: "1.5M" },
      { name: "TATASTEEL", change: "+2.5%", price: "118", volume: "3.2M" },
      { name: "ITC", change: "+2.2%", price: "430", volume: "2.1M" },
      { name: "ONGC", change: "+2.0%", price: "168", volume: "1.2M" },
    ],
    topLosers: [
      { name: "TCS", change: "-2.1%", price: "3600", volume: "1.1M" },
      { name: "WIPRO", change: "-1.9%", price: "430", volume: "1.5M" },
      { name: "BAJAJ-AUTO", change: "-1.7%", price: "7450", volume: "600K" },
      { name: "CIPLA", change: "-1.6%", price: "1210", volume: "700K" },
      { name: "POWERGRID", change: "-1.5%", price: "252", volume: "2.4M" },
      { name: "AXISBANK", change: "-1.3%", price: "1035", volume: "3.3M" },
    ],
  },
  "Nifty Bank": {
    topGainers: [
      { name: "HDFCBANK", change: "+3.5%", price: "1780", volume: "2.1M" },
      { name: "ICICIBANK", change: "+3.1%", price: "1020", volume: "2.9M" },
      { name: "AXISBANK", change: "+2.9%", price: "1035", volume: "2.3M" },
      { name: "KOTAKBANK", change: "+2.6%", price: "1840", volume: "1.2M" },
      { name: "SBIN", change: "+2.3%", price: "562", volume: "4.5M" },
      { name: "IDFCFIRSTB", change: "+2.1%", price: "87", volume: "5M" },
    ],
    topLosers: [
      { name: "YESBANK", change: "-2.2%", price: "18.5", volume: "5.2M" },
      { name: "BANDHANBNK", change: "-2.0%", price: "190", volume: "1.1M" },
      { name: "AUBANK", change: "-1.8%", price: "680", volume: "700K" },
      { name: "UCOBANK", change: "-1.6%", price: "48", volume: "3M" },
      { name: "MAHABANK", change: "-1.5%", price: "42", volume: "1.8M" },
      { name: "IDBI", change: "-1.4%", price: "56", volume: "2.4M" },
    ],
  },
};

// Component
export default function MarketHomePage() {
  const [selectedIndex, setSelectedIndex] = useState("Nifty 50");

  const currentData = stockData[selectedIndex];

  return (
    <div className="space-y-6">
      {/* Header + Filter */}
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-bold text-gray-800">Market Overview</h3>
        <select
          value={selectedIndex}
          onChange={(e) => setSelectedIndex(e.target.value)}
          className="border p-2 rounded-md shadow-sm"
        >
          {Object.keys(stockData).map((index) => (
            <option key={index} value={index}>
              {index}
            </option>
          ))}
        </select>
      </div>

      {/* Chart Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Top Gainers */}
        <div className="bg-white shadow rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-4 text-green-600">Top Gainers</h3>
          <StockTable stocks={currentData.topGainers} type="gainer" />
        </div>

        {/* Top Losers */}
        <div className="bg-white shadow rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-4 text-red-600">Top Losers</h3>
          <StockTable stocks={currentData.topLosers} type="loser" />
        </div>
      </div>
    </div>
  );
}

function StockTable({ stocks, type }) {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-700">
        <thead className="text-xs uppercase bg-gray-100">
          <tr>
            <th className="px-6 py-3">Stock</th>
            <th className="px-6 py-3">Change</th>
            <th className="px-6 py-3">Price</th>
            <th className="px-6 py-3">Volume</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock) => (
            <tr
              key={stock.name}
              className="bg-white border-b hover:bg-gray-50 transition border-gray-100"
            >
              <td className="px-4 py-3 font-medium text-gray-900">
                <div className="flex items-center gap-x-2">
                  <img
                    className="w-10 h-10 rounded-full"
                    src={EQUITY_ICON_URL+"/"+stock.name+".png"}
                    alt="Graph icon"
                  />
                  
                  <Link to={"/market/stocks/"+stock.name}><span>{stock.name}</span></Link>
                </div>
              </td>
              <td className={`px-4 py-3 font-semibold ${type === "gainer" ? "text-green-600" : "text-red-600"}`}>
                {stock.change}
              </td>
              <td className={`px-4 py-3 font-semibold ${type === "gainer" ? "text-green-600" : "text-red-600"}`}>
                ₹{stock.price}
              </td>
              <td className="px-4 py-3">{stock.volume}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
