import { useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import {
  Menu as MenuIcon, BarChart2, TrendingUp, Users, PieChart, Settings, Radar,
  Home, LineChart, Flame, Newspaper, Handshake, Activity, Layers, Landmark,
  User, GraduationCap, Eye, Bell, StickyNote, ClipboardList, Star, Calendar, Shield
} from "lucide-react";

export default function AppLeftPanel() {
  const location = useLocation();
  const navigate = useNavigate();

  const [selectedMenu, setSelectedMenu] = useState("Market");
  const [selectedSubMenu, setSelectedSubMenu] = useState("");
  const [isSubmenuVisible, setIsSubmenuVisible] = useState(true);

  // Menu and Submenu configuration
  const menus = [
    {
      name: "Toggle", icon: <MenuIcon size={20} onClick={(e) => {
        e.stopPropagation();
        setIsSubmenuVisible(prev => !prev);
      }} />
    },
    { name: "Market", icon: <BarChart2 size={20} />, path: "/market" },
    { name: "Analytics", icon: <TrendingUp size={20} />, path: "/analytics" },
    { name: "Scanner", icon: <Radar size={20} />, path: "/scanner" },
    { name: "My SE", icon: <Users size={20} />, path: "/myse" },
    { name: "Mutual Funds", icon: <PieChart size={20} />, path: "/mf" },
    { name: "Settings", icon: <Settings size={20} />, path: "/settings" },
  ];

  const subMenus = {
    Market: [
      { name: "Market Home", link: "/market/market-home", icon: <Home size={16} /> },
      { name: "Indices", link: "/market/indices", icon: <LineChart size={16} /> },
      { name: "Stocks", link: "/market/stocks", icon: <Flame size={16} /> },
      { name: "News & Updates", link: "/market/news-updates", icon: <Newspaper size={16} /> },
      { name: "Deals", link: "/market/deals", icon: <Handshake size={16} /> },
      { name: "FII / DII Activity", link: "/market/fii-dii-activity", icon: <Activity size={16} /> },
      { name: "Sectors", link: "/market/sectors", icon: <Layers size={16} /> },
      { name: "IPO", link: "/market/ipo", icon: <Landmark size={16} /> },
      { name: "Investors", link: "/market/investors", icon: <User size={16} /> },
      { name: "SME Zone", link: "/market/sme-zone", icon: <ClipboardList size={16} /> },
      { name: "Learn", link: "/market/learn", icon: <GraduationCap size={16} /> },
    ],
    Analytics: [
      { name: "Overview", link: "/analytics/overview", icon: <BarChart2 size={16} /> },
      { name: "Trends", link: "/analytics/trends", icon: <TrendingUp size={16} /> },
      { name: "Reports", link: "/analytics/reports", icon: <PieChart size={16} /> },
    ],
    "My SE": [
      { name: "Watchlist", link: "/myse/watchlist", icon: <Eye size={16} /> },
      { name: "Alerts", link: "/myse/alerts", icon: <Bell size={16} /> },
      { name: "Notes", link: "/myse/notes", icon: <StickyNote size={16} /> },
    ],
    "Mutual Funds": [
      { name: "MF Overview", link: "/mf/overview", icon: <PieChart size={16} /> },
      { name: "Top Funds", link: "/mf/top-funds", icon: <Star size={16} /> },
      { name: "SIP Tracker", link: "/mf/sip-tracker", icon: <Calendar size={16} /> },
    ],
    Settings: [
      { name: "Account", link: "/settings/account", icon: <User size={16} /> },
      { name: "Preferences", link: "/settings/preferences", icon: <ClipboardList size={16} /> },
      { name: "Security", link: "/settings/security", icon: <Shield size={16} /> },
    ],
  };

  // On URL change, sync selected menu and submenu
  useEffect(() => {
    const pathParts = location.pathname.split("/").filter(Boolean);
    if (pathParts.length > 0) {
      const menuPath = `/${pathParts[0]}`;
      const menuObj = menus.find(m => m.path === menuPath);
      if (menuObj) {
        setSelectedMenu(menuObj.name);
        const subPath = location.pathname;
        const sub = subMenus[menuObj.name]?.find(item => item.link === subPath);
        setSelectedSubMenu(sub?.name || "");
      }
    }
  }, [location.pathname]);

  return (
    <div className="flex h-[calc(100vh-64px)] bg-white border-r border-gray-200">
      {/* Main Menu */}
      <div className="flex flex-col items-center py-4 border-r border-gray-200 space-y-2 h-[calc(100vh-64px)] overflow-y-auto">
        {menus.map((menu) => (
          <div key={menu.name} className="p-1 relative group w-full flex justify-center">
            <button
              onClick={() => {
                if (menu.name !== "Toggle") {
                  setSelectedMenu(menu.name);
                  const firstSub = subMenus[menu.name]?.[0];
                  if (firstSub) {
                    setSelectedSubMenu(firstSub.name);
                    navigate(firstSub.link);
                  } else if (menu.path) {
                    setSelectedSubMenu("");
                    navigate(menu.path);
                  }
                }
              }}
              className={`w-12 flex flex-col items-center justify-around p-1 rounded-xl transition-all duration-200
          ${selectedMenu === menu.name ? "bg-blue-100 text-blue-600 font-semibold" : "hover:bg-gray-100 text-gray-600"}
        `}
              title={menu.name !== "Toggle" ? menu.name : ""}
            >
              <span className="text-xl">{menu.icon}</span>
              <span className="text-[10px] mt-1">{menu.name !== "Toggle" ? menu.name : ""}</span>
            </button>
          </div>
        ))}
      </div>

      {/* Submenu */}
      <div
        className={`w-64 overflow-y-auto transition-all duration-300 ease-in-out ${isSubmenuVisible ? "opacity-100 max-w-64 p-4" : "opacity-0 max-w-0 p-0"
          }`}
      >
        {isSubmenuVisible && subMenus[selectedMenu] && (
          <>
            <h2 className="text-lg font-semibold mb-4">{selectedMenu}</h2>
            <nav className="flex flex-col gap-2">
              {subMenus[selectedMenu].map((item, idx) => (
                <Link
                  key={idx}
                  to={item.link}
                  onClick={() => setSelectedSubMenu(item.name)}
                  className={`flex items-center gap-2 text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-md px-3 py-2 text-md ${selectedSubMenu === item.name ? "bg-gray-100 text-red-600" : ""
                    }`}
                >
                  {item.icon}
                  {item.name}
                </Link>
              ))}
            </nav>
          </>
        )}
      </div>
    </div>
  );
}
