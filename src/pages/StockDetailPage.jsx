import { useParams } from "react-router-dom";
import CandleChart from "../components/charts/CandleChart";
import { EQUITY_ICON_URL } from "../config/urlConfig";

export default function StockDetailPage() {
    const { indexName, stockName } = useParams();
    return (
        <div className="space-y-6">
            {/* Header Row */}
            <div className="flex items-center gap-x-2">
                <img
                    className="w-10 h-10 rounded-full"
                    src={EQUITY_ICON_URL + "/" + stockName + ".png"}
                    alt="Graph icon"
                />
                <h3 className="text-2xl font-bold text-gray-800">{stockName} Stock Overview</h3>
            </div>

            {/* Index Cards */}
            <div className="flex flex-wrap gap-4 justify-center">
                <div className="bg-white shadow-md p-4">
                    <CandleChart></CandleChart>
                </div>
                <div className="bg-white shadow-md lg:w-96 w-full p-4">

                </div>
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
    )
}