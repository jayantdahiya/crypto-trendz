import React from "react";
import { App, Page, Navbar, Block, Tabbar, TabbarLink } from "konsta/react";
import { Search, ChartLine, List } from "@carbon/icons-react";
import Chart from './Components/Chart';
import { createContext, useEffect } from "react";
import Trends from "./Pages/Trends";
import SearchTab from "./Pages/SearchTab";
import { Routes, Route } from "react-router-dom";

export const AppContext = createContext();

export default function MyApp() {
  const [activeTab, setActiveTab] = React.useState(0);
  const [searchName, setSearchName] = React.useState("BTCUSD");
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
    <App theme="ios">
      <Page>
        <Navbar title="Cryto-Trendz" />
        <Tabbar className="left-0 bottom-0 fixed">
          <TabbarLink
            active={activeTab === 0}
            icon={<ChartLine className="h-5" />}
            label="Chart"
            onClick={() => setActiveTab(0)}
          ></TabbarLink>
          <TabbarLink
            active={activeTab === 1}
            icon={<List className="h-5" />}
            label="Trends"
            onClick={() => setActiveTab(1)}
          ></TabbarLink>
          <TabbarLink
            active={activeTab === 2}
            icon={<Search className="h-5" />}
            label="Search"
            onClick={() => setActiveTab(2)}
          ></TabbarLink>
        </Tabbar>
        <AppContext.Provider value={{ activeTab, setActiveTab, searchName, setSearchName, marketData }}>
          {activeTab === 0 && <Chart />}
          {activeTab === 1 && <div><Trends /></div>}
          {activeTab === 2 && <div><SearchTab /></div>}
          <Routes>
            <Route path="/" element={<Chart />} />
            <Route path="/trends" element={<Trends />} />
            <Route path="/search" element={<SearchTab />} />
          </Routes>
        </AppContext.Provider>
      </Page>
    </App>
  );
}
