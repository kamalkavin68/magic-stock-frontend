import { Link } from "react-router-dom";
import SampleChart from "../components/charts/SampleChart";
import { INDICES_ICON_URL } from "../config/urlConfig";

// Extract reusable components
const TimeframeSelector = () => (
  <ul className="hidden text-sm font-medium text-center text-gray-700 shadow-sm sm:flex bg-white border border-gray-300 divide-x divide-gray-300">
    {["1d", "1w", "1m", "3m", "6m", "1y", "3y", "5y", "All"].map((period, index) => (
      <li key={period} className="w-full">
        <a
          href="#"
          className={`inline-block w-full py-2 px-1 bg-white ${index === 0
              ? "text-gray-900 font-semibold"
              : "text-gray-700 hover:bg-gray-100"
            } focus:ring-2 focus:ring-blue-300 focus:outline-none`}
          aria-current={index === 0 ? "page" : undefined}
        >
          {period}
        </a>
      </li>
    ))}
  </ul>
);

const PriceChange = ({ value }) => {
  const isPositive = value > 0;
  return (
    <div className="flex items-center">
      <span className={`text-sm font-semibold ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
        {isPositive ? '+' : ''}{value}%
      </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`w-4 h-4 ml-1 ${isPositive ? 'text-green-500' : 'text-red-500'}`}
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d={isPositive
            ? "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            : "M5.293 12.707a1 1 0 011.414 0L10 9.414l3.293 3.293a1 1 0 111.414-1.414l-4-4a1 1 0 01-1.414 0l-4 4a1 1 0 010 1.414z"
          }
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

const LiveIndicator = ({ isLive = false }) => (
  <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${isLive ? "bg-green-100 text-green-900" : "bg-red-100 text-red-900"} inline-flex items-center`}>
    <span className={isLive ? "blinking-icon mr-1" : "mr-1"} >{isLive ? "🟢" : "🔴"}</span>
    {isLive ? "Live" : "Closed"}
  </span>
);

const IndexCard = ({ name, price, change, isLive = false, iconName = "nifty", areaColor = "green" }) => (
  <div className="bg-white shadow-md p-4 w-100">
    <div className="flex items-center mb-4">
      <img
        className="w-10 h-10 mr-4 rounded-full"
        src={`${INDICES_ICON_URL}/${iconName}.png`}
        alt={`${name} icon`}
      />
      <h3 className="text-lg font-semibold">{name}</h3>

      <div className="ml-auto text-right">
        <div className="flex items-center justify-end mb-1">
          <LiveIndicator isLive={isLive}/>
          <h2 className="text-2xl font-bold text-zinc-800 ml-2">{price}</h2>
        </div>

        <div className="flex items-center justify-end">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">20-Day Price Chart</p>
          <div className="ml-3">
            <PriceChange value={change} />
          </div>
        </div>
      </div>
    </div>

    <TimeframeSelector />
    <SampleChart areaColor={change < 0 ? "red" : "green"} />
  </div>
);

export default function MarketHomePage() {
  const indices = [
    { name: "Nifty 50", price: "24303.75", change: 1.23, isLive: false, iconName: "nifty" },
    { name: "Bank Nifty", price: "24303.75", change: 1.23, isLive: false, iconName: "nifty" },
    { name: "Sensex", price: "24303.75", change: -1.23, isLive: false, iconName: "bse" }
  ];

  return (
    <div className="space-y-6">
      {/* Header Row */}
      <div className="flex justify-between">
        <h3 className="text-2xl font-bold text-gray-800">Market Overview</h3>
        <Link to="/market/indices" className="text-blue-500 hover:text-blue-700">
          View All
        </Link>
      </div>

      {/* Index Cards */}
      <div className="flex flex-wrap gap-4 justify-center">
        {indices.map((index, i) => (
          <IndexCard key={i} {...index} />
        ))}
      </div>

      {/* Trending Section */}
      <div className="text-2xl font-bold text-gray-800">Trending Now</div>

      {/* Full-Width Card */}
      <div className="bg-white shadow-md p-4 h-200">
        <h3 className="text-lg font-semibold mb-2">Big Full Card</h3>
        <p className="text-gray-600">
          This card spans full width and contains more detailed content...
        </p>
      </div>
    </div>
  );
}