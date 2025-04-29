// src/routes/AppRoutes.tsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import App from "../App";
import MarketHomePage from "../pages/MarketHomePage";
import IndicesPage from "../pages/IndicesPage";
import NewsAndUpdatesPage from "../pages/NewsAndUpdatesPage";
import StockPage from "../pages/StockPage";
import SectorPage from "../pages/SectorPage";
import IndicesDetailsPage from "../pages/IndicesDetailsPage";
import StockDetailPage from "../pages/StockDetailPage";

const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<App />}>
            <Route path="/market">
                <Route path="stock-detail" element={<StockDetailPage></StockDetailPage>}></Route>
                <Route path="market-home" element={<MarketHomePage />} />
                <Route path="indices" >
                    <Route index element={<IndicesPage />}></Route>
                    <Route path=":indexName" element={<IndicesDetailsPage />} />
                    <Route path=":indexName/:stockName" element={<StockDetailPage />} />
                </Route>
                <Route path="news-updates" element={<NewsAndUpdatesPage />} />
                <Route path="stocks" >  
                    <Route index element={<StockPage />}></Route>
                    <Route path=":stockName" element={<StockDetailPage />} />
                </Route>
                <Route path="sectors" element={<SectorPage />} />
                <Route path="*" element={<p>Page not found</p>} />
            </Route>
            <Route path="*" element={<p>Page not found</p>} />
        </Route>
    </Routes>
);

export default AppRoutes;
