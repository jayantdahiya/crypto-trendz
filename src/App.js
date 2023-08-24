import React from "react";
import { App, Page, Navbar} from "konsta/react";
import Chart from './Components/Chart';
import { createContext, useEffect } from "react";
import Trends from "./Pages/Trends";
import SearchTab from "./Pages/SearchTab";
import { Routes, Route } from "react-router-dom";
import TabBar from "./Components/TabBar";
import './App.css';

export const AppContext = createContext();

export default function MyApp() {
  var [searchName, setSearchName] = React.useState("BTCUSD");
  const [marketData, setMarketData] = React.useState([]);
  
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
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchMarketData();
  }, []);
  return (
    <App theme="ios" dark={false}>
      <Page>
        <Navbar title="Cryto-Trendz 🚀" />
        <AppContext.Provider value={{ searchName, setSearchName, marketData }}>
          <Routes>
              <Route path="/" element={<Chart />} />
              <Route path="/trends" element={<Trends />} />
              <Route path="/search" element={<SearchTab />} />
          </Routes>
        </AppContext.Provider>
        <TabBar />
      </Page>
    </App>
  );
}
