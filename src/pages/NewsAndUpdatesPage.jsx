import { useState } from "react";

const categories = ["Spotlight", "Corporate", "IPO", "Earnings", "Economy"];

const newsData = [
  {
    id: 1,
    title: "LTIMindtree Mar 2025 Net Profit ₹1123 Cr vs ₹1100 Cr YoY",
    category: "IT - Software",
    summary: "Revenue ₹9772 Cr vs ₹8893 Cr YoY.",
    image: "https://via.placeholder.com/60",
  },
  {
    id: 2,
    title: "Tata Consumer Products Net Profit ₹349 Cr vs ₹212 Cr YoY",
    category: "Tea/Coffee",
    summary: "Revenue ₹4608 Cr vs ₹3926 Cr YoY.",
    image: "https://via.placeholder.com/60",
  },
];

const topGainers = [
  { name: "HCL Technologies", symbol: "HCLTECH", price: "₹1,594.00", change: "+7.71%" },
  { name: "LTIMindtree Ltd", symbol: "LTIM", price: "₹4,536.70", change: "+5.01%" },
];

export default function MarketNewsPage() {
  const [activeTab, setActiveTab] = useState("news");
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
      {/* Main Content */}
      <div className="lg:col-span-2 space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-800">News & Updates</h2>
        </div>

        {/* Tab Buttons */}
        <div className="flex space-x-4 mb-4">
          <button
            onClick={() => setActiveTab("news")}
            className={`px-4 py-2 rounded ${
              activeTab === "news" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
            }`}
          >
            News
          </button>
          <button
            onClick={() => setActiveTab("announcements")}
            className={`px-4 py-2 rounded ${
              activeTab === "announcements" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
            }`}
          >
            Announcements
          </button>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1 rounded-full border text-sm ${
                activeCategory === cat
                  ? "bg-blue-100 border-blue-500 text-blue-700"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* News Tab Content */}
        {activeTab === "news" && (
          <div className="space-y-4">
            {newsData.map((item) => (
              <div key={item.id} className="flex items-start bg-white p-4 rounded-md shadow hover:shadow-lg transition-all">
                <img src={item.image} alt="thumb" className="w-16 h-16 rounded mr-4 object-cover" />
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.category}</p>
                  <p className="text-gray-500 mt-1">{item.summary}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Announcements Tab Content */}
        {activeTab === "announcements" && (
          <div className="text-gray-500 italic">No announcements available at the moment.</div>
        )}
      </div>

      {/* Right Panel: Top Gainers */}
      <div className="bg-white rounded-md shadow-md p-4 h-fit sticky top-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Top Gainers</h3>
          <button className="text-blue-600 text-sm">Large Cap</button>
        </div>
        <div className="space-y-4">
          {topGainers.map((stock, index) => (
            <div key={index} className="flex justify-between items-center border-b pb-2">
              <div>
                <p className="font-medium">{stock.name}</p>
                <p className="text-xs text-gray-500">{stock.symbol}</p>
              </div>
              <div className="text-right">
                <p className="font-semibold">{stock.price}</p>
                <p className="text-green-600 text-sm">{stock.change}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
