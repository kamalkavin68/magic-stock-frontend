import React, { useEffect, useRef } from 'react';
import { createChart, CandlestickSeries, LineSeries } from 'lightweight-charts';

const CandleChart = () => {
  const chartContainerRef = useRef(null);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const logo = document.getElementById('tv-attr-logo');
      if (logo) {
        logo.remove();
        observer.disconnect(); // stop watching after removing
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect(); // cleanup on unmount
  }, []);

  useEffect(() => {
    if (chartContainerRef.current) {
      // Create the chart with container reference
      const chart = createChart(chartContainerRef.current, {
        width: 800,

        layout: {
          background: { color: '#ffffff' },
          textColor: '#333',
        },
        grid: {
          vertLines: { color: '#d4d4d4', style: 2 },
          horzLines: { color: '#d4d4d4', style: 2 },
        },
        timeScale: {
          // borderColor: '#ddd',
          timeVisible: true,
          secondsVisible: false,
          borderColor: '#d1d4dc',   // bottom border
          barSpacing: 8,            // space between candles (can be 5-10)
          rightOffset: 10,          // space on the right side
          // fixLeftEdge: true,
        },

        // crosshair: {
        //   mode: 1, // 0 = Normal, 1 = Magnet mode (snaps to candles)
        //   vertLine: {
        //     color: '#758696',
        //     width: 1,
        //     style: 2,
        //     labelBackgroundColor: '#4c525e',
        //   },
        //   horzLine: {
        //     color: '#758696',
        //     width: 1,
        //     style: 2,
        //     labelBackgroundColor: '#4c525e',
        //   },
        // },

        localization: {
          dateFormat: 'dd MMM yyyy', // better readable dates
        },
      });

      // Add the candlestick series
      const candleSeries = chart.addSeries(CandlestickSeries);

      // Set the styling for the candlesticks
      candleSeries.applyOptions({
        upColor: '#26a69a',
        downColor: '#ef5350',
        borderVisible: false,
        wickUpColor: '#26a69a',
        wickDownColor: '#ef5350',
      });

      // const lineSeries = chart.addSeries(LineSeries);

      // // Example data for the line
      // lineSeries.setData([
      //   { time: "2019-04-01", value: 70 },
      //   { time: "2019-05-05", value: 80 },
      //   { time: "2019-06-10", value: 90 },
      // ]);

      // Set sample candlestick data (time, open, high, low, close)
      candleSeries.setData([{ "time": "2019-04-10", "open": 80, "high": 86.04, "low": 78.23, "close": 84.36 }, { "time": "2019-04-11", "open": 84.36, "high": 85.98, "low": 79.09, "close": 79.51 }, { "time": "2019-04-12", "open": 79.51, "high": 84.22, "low": 78.81, "close": 82.42 }, { "time": "2019-04-13", "open": 82.42, "high": 82.8, "low": 77.03, "close": 77.75 }, { "time": "2019-04-14", "open": 77.75, "high": 82.61, "low": 77.53, "close": 80.7 }, { "time": "2019-04-15", "open": 80.7, "high": 81.48, "low": 76.45, "close": 77.02 }, { "time": "2019-04-16", "open": 77.02, "high": 81.14, "low": 76.31, "close": 81.01 }, { "time": "2019-04-17", "open": 81.01, "high": 82.43, "low": 77.26, "close": 79.13 }, { "time": "2019-04-18", "open": 79.13, "high": 80.47, "low": 77.17, "close": 80.24 }, { "time": "2019-04-19", "open": 80.24, "high": 80.47, "low": 75.05, "close": 76.54 }, { "time": "2019-04-20", "open": 76.54, "high": 80.03, "low": 76.49, "close": 78.9 }, { "time": "2019-04-21", "open": 78.9, "high": 79.85, "low": 76.47, "close": 78.09 }, { "time": "2019-04-22", "open": 78.09, "high": 84.01, "low": 77.56, "close": 82.56 }, { "time": "2019-04-23", "open": 82.56, "high": 83.45, "low": 78.61, "close": 79.26 }, { "time": "2019-04-24", "open": 79.26, "high": 82.97, "low": 79.07, "close": 82.69 }, { "time": "2019-04-25", "open": 82.69, "high": 84.21, "low": 77.4, "close": 78.82 }, { "time": "2019-04-26", "open": 78.82, "high": 80.06, "low": 76.82, "close": 79.82 }, { "time": "2019-04-27", "open": 79.82, "high": 79.91, "low": 76.91, "close": 78.7 }, { "time": "2019-04-28", "open": 78.7, "high": 79.68, "low": 77.33, "close": 79.5 }, { "time": "2019-04-29", "open": 79.5, "high": 79.84, "low": 73.2, "close": 75.07 }, { "time": "2019-04-30", "open": 75.07, "high": 78.72, "low": 73.82, "close": 77.67 }, { "time": "2019-05-01", "open": 77.67, "high": 79.09, "low": 71.1, "close": 73.06 }, { "time": "2019-05-02", "open": 73.06, "high": 75.7, "low": 72.19, "close": 75.56 }, { "time": "2019-05-03", "open": 75.56, "high": 76.8, "low": 71.77, "close": 72.39 }, { "time": "2019-05-04", "open": 72.39, "high": 72.98, "low": 71.76, "close": 72.72 }, { "time": "2019-05-05", "open": 72.72, "high": 74.29, "low": 71.2, "close": 71.26 }, { "time": "2019-05-06", "open": 71.26, "high": 73.83, "low": 70.23, "close": 73.35 }, { "time": "2019-05-07", "open": 73.35, "high": 73.35, "low": 72.45, "close": 72.96 }, { "time": "2019-05-08", "open": 72.96, "high": 75.91, "low": 72.11, "close": 74.11 }, { "time": "2019-05-09", "open": 74.11, "high": 75.81, "low": 69.95, "close": 71.88 }, { "time": "2019-05-10", "open": 71.88, "high": 76.11, "low": 71.82, "close": 75.11 }, { "time": "2019-05-11", "open": 75.11, "high": 76.54, "low": 74.29, "close": 74.61 }, { "time": "2019-05-12", "open": 74.61, "high": 77.31, "low": 73.16, "close": 77.05 }, { "time": "2019-05-13", "open": 77.05, "high": 78.53, "low": 72.77, "close": 72.81 }, { "time": "2019-05-14", "open": 72.81, "high": 74.34, "low": 72.79, "close": 74.11 }, { "time": "2019-05-15", "open": 74.11, "high": 75.87, "low": 72.33, "close": 73.34 }, { "time": "2019-05-16", "open": 73.34, "high": 78.43, "low": 72.43, "close": 77.51 }, { "time": "2019-05-17", "open": 77.51, "high": 79.41, "low": 75.68, "close": 76.94 }, { "time": "2019-05-18", "open": 76.94, "high": 81.37, "low": 76.85, "close": 80.49 }, { "time": "2019-05-19", "open": 80.49, "high": 80.57, "low": 75.32, "close": 76.77 }, { "time": "2019-05-20", "open": 76.77, "high": 78.5, "low": 75.75, "close": 77.21 }, { "time": "2019-05-21", "open": 77.21, "high": 79.15, "low": 73.78, "close": 75.57 }, { "time": "2019-05-22", "open": 75.57, "high": 81.57, "low": 74.78, "close": 80.5 }, { "time": "2019-05-23", "open": 80.5, "high": 82.04, "low": 76.69, "close": 76.99 }, { "time": "2019-05-24", "open": 76.99, "high": 82.15, "low": 75.71, "close": 81.78 }, { "time": "2019-05-25", "open": 81.78, "high": 82.75, "low": 77.81, "close": 78.69 }, { "time": "2019-05-26", "open": 78.69, "high": 80.6, "low": 78.68, "close": 80.58 }, { "time": "2019-05-27", "open": 80.58, "high": 80.59, "low": 78.63, "close": 78.8 }, { "time": "2019-05-28", "open": 78.8, "high": 82.95, "low": 77.79, "close": 82.32 }, { "time": "2019-05-29", "open": 82.32, "high": 82.99, "low": 79.89, "close": 81.15 }, { "time": "2019-05-30", "open": 81.15, "high": 83.58, "low": 79.19, "close": 82.05 }, { "time": "2019-05-31", "open": 82.05, "high": 84.03, "low": 79.15, "close": 79.75 }, { "time": "2019-06-01", "open": 79.75, "high": 83.4, "low": 79.19, "close": 82.72 }, { "time": "2019-06-02", "open": 82.72, "high": 83.94, "low": 78.29, "close": 79.04 }, { "time": "2019-06-03", "open": 79.04, "high": 84.24, "low": 78.84, "close": 83.16 }, { "time": "2019-06-04", "open": 83.16, "high": 83.43, "low": 80.02, "close": 81.03 }, { "time": "2019-06-05", "open": 81.03, "high": 84.58, "low": 79.74, "close": 83.74 }, { "time": "2019-06-06", "open": 83.74, "high": 84.13, "low": 81.83, "close": 82.11 }, { "time": "2019-06-07", "open": 82.11, "high": 83.64, "low": 81.65, "close": 82.24 }, { "time": "2019-06-08", "open": 82.24, "high": 83.68, "low": 78.9, "close": 80.28 }, { "time": "2019-06-09", "open": 80.28, "high": 83.84, "low": 78.83, "close": 82.85 }, { "time": "2019-06-10", "open": 82.85, "high": 84.68, "low": 78.31, "close": 79.75 }, { "time": "2019-06-11", "open": 79.75, "high": 82.58, "low": 78.29, "close": 81.43 }, { "time": "2019-06-12", "open": 81.43, "high": 82.31, "low": 78.59, "close": 78.86 }, { "time": "2019-06-13", "open": 78.86, "high": 83.92, "low": 77.26, "close": 83.79 }, { "time": "2019-06-14", "open": 83.79, "high": 84.01, "low": 79.32, "close": 80.89 }, { "time": "2019-06-15", "open": 80.89, "high": 85.03, "low": 80.68, "close": 84.08 }, { "time": "2019-06-16", "open": 84.08, "high": 84.33, "low": 78.9, "close": 79.25 }, { "time": "2019-06-17", "open": 79.25, "high": 83.61, "low": 77.43, "close": 83.44 }, { "time": "2019-06-18", "open": 83.44, "high": 85.2, "low": 80.65, "close": 81.49 }, { "time": "2019-06-19", "open": 81.49, "high": 84.79, "low": 79.76, "close": 83.34 }, { "time": "2019-06-20", "open": 83.34, "high": 85.32, "low": 80.72, "close": 81.53 }, { "time": "2019-06-21", "open": 81.53, "high": 87.36, "low": 80.97, "close": 85.98 }, { "time": "2019-06-22", "open": 85.98, "high": 86.13, "low": 82.11, "close": 82.32 }, { "time": "2019-06-23", "open": 82.32, "high": 86.34, "low": 80.79, "close": 85.17 }, { "time": "2019-06-24", "open": 85.17, "high": 86.04, "low": 81.69, "close": 82.48 }, { "time": "2019-06-25", "open": 82.48, "high": 87.02, "low": 81.44, "close": 85.78 }, { "time": "2019-06-26", "open": 85.78, "high": 86.32, "low": 82.58, "close": 83.39 }, { "time": "2019-06-27", "open": 83.39, "high": 85.54, "low": 82.01, "close": 84.37 }, { "time": "2019-06-28", "open": 84.37, "high": 86.16, "low": 78.26, "close": 79.38 }, { "time": "2019-06-29", "open": 79.38, "high": 84.39, "low": 78.41, "close": 83.27 }, { "time": "2019-06-30", "open": 83.27, "high": 84.12, "low": 77.58, "close": 79.32 }, { "time": "2019-07-01", "open": 79.32, "high": 84.41, "low": 77.5, "close": 82.76 }, { "time": "2019-07-02", "open": 82.76, "high": 84.7, "low": 79.89, "close": 81.62 }, { "time": "2019-07-03", "open": 81.62, "high": 82.92, "low": 80.79, "close": 82.83 }, { "time": "2019-07-04", "open": 82.83, "high": 83.07, "low": 76.35, "close": 77.94 }, { "time": "2019-07-05", "open": 77.94, "high": 80.06, "low": 77.58, "close": 79.83 }, { "time": "2019-07-06", "open": 79.83, "high": 80.94, "low": 78.19, "close": 79.59 }, { "time": "2019-07-07", "open": 79.59, "high": 81.29, "low": 78.46, "close": 79.78 }, { "time": "2019-07-08", "open": 79.78, "high": 79.82, "low": 74.94, "close": 76.48 }, { "time": "2019-07-09", "open": 76.48, "high": 76.94, "low": 75.03, "close": 76.73 }, { "time": "2019-07-10", "open": 76.73, "high": 77.29, "low": 76.22, "close": 76.38 }, { "time": "2019-07-11", "open": 76.38, "high": 80.15, "low": 74.47, "close": 79.92 }, { "time": "2019-07-12", "open": 79.92, "high": 80.33, "low": 77.62, "close": 79.26 }, { "time": "2019-07-13", "open": 79.26, "high": 83.21, "low": 77.75, "close": 82.11 }, { "time": "2019-07-14", "open": 82.11, "high": 82.66, "low": 77.32, "close": 77.7 }, { "time": "2019-07-15", "open": 77.7, "high": 81.1, "low": 76.6, "close": 80.27 }, { "time": "2019-07-16", "open": 80.27, "high": 80.71, "low": 75.46, "close": 76.75 }, { "time": "2019-07-17", "open": 76.75, "high": 80.31, "low": 75.64, "close": 78.99 }, { "time": "2019-07-18", "open": 78.99, "high": 79.79, "low": 76.6, "close": 77.82 }])
      // Fit content to container
      chart.timeScale().fitContent();

      // Handle resizing
      const handleResize = () => {
        if (chartContainerRef.current) {
          chart.applyOptions({
            width: chartContainerRef.current.clientWidth
          });
        }
      };

      window.addEventListener('resize', handleResize);

      // Cleanup function
      return () => {
        window.removeEventListener('resize', handleResize);
        chart.remove();
      };
    }
  }, []);

  return (
    <div ref={chartContainerRef} className="chart-container" style={{ width: '100%', height: '400px' }} />
  );
};

export default CandleChart;