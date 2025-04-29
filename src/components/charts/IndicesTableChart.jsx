import { useEffect, useState } from "react";
import { EQUITY_ICON_URL } from "../../config/urlConfig";
import { Link } from "react-router-dom";

export default function IndicesTableChart({ stocks, type, indicesName = null }) {
  
  useEffect(()=>{
    console.log(stocks)
  },[stocks, type, indicesName])


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
                  <Link to={`/market/indices/${indicesName}/${stock.name}`}><span>{stock.name}</span></Link>
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
