import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Chart from './Components/Chart';
import SwitchBar from './Components/Switch';
import Trends from './Pages/Trends';
import SearchTab from './Pages/SearchTab';
import React, { useEffect } from 'react';
import { TickerTape } from 'react-ts-tradingview-widgets';

export const AppContext = React.createContext();

function App() {
  const [marketData, setMarketData] = React.useState([]);
  const [tickers, setTickers] = React.useState([]);
  const [searchName, setSearchName] = React.useState('BTC');

  const fetchMarketData = async () => {
    var axios = require("axios");

    var config = {
      method: "get",
      url: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true",
      headers: {
        accept: "application/json",
      },
    };

    await axios(config)
      .then(function (response) {
        setMarketData(response.data);
        setTickers(response.data.map((coin) => coin.name));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchMarketData();
  }, []);

  return (
    <>
      <AppContext.Provider value={{
        marketData,
        fetchMarketData,
        tickers,
        setSearchName,
        searchName,
      }}>
        <Routes>
          <Route path="/" element={<Chart name="searchName" />} />
          <Route path="/trends" element={<Trends />} />
          <Route path="/search" element={<SearchTab />} />
        </Routes>
        <div
          style={{
            padding: "1rem",
            placeContent: "center",
            position: "fixed",
            bottom: "0",
            width: "100%",
          }}
        >
          <SwitchBar />
        </div>
      </AppContext.Provider>
    </>
  );
}

export default App;