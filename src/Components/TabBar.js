import React, { useState } from 'react'
import { AppContext } from '../App';
import { useNavigate } from 'react-router-dom';
import { TbChartCandle, TbListSearch } from "react-icons/tb";
import { FaListUl } from "react-icons/fa";
import { Tabbar, TabbarLink } from 'konsta/react';

function TabBar() {
  const [activeTab, setActiveTab] = useState(0);
    let navigate = useNavigate();
    const handleChartTab = () => {
      setActiveTab(0);
      navigate("/");
    };
    const handleTrendsTab = () => {
      setActiveTab(1);
      navigate("/trends");
    };
    const handleSearchTab = () => {
      setActiveTab(2);
      navigate("/search");
    };
  return (
    <div>
      <Tabbar className="fixed bottom-0 left-0 h-[17vh]">
        <TabbarLink
          active={activeTab === 0}
          icon={<TbChartCandle className='h-5' />}
          label="Chart"
          onClick={handleChartTab}
        ></TabbarLink>
        <TabbarLink
          active={activeTab === 1}
          icon={<FaListUl />}
          label="Trends"
          onClick={handleTrendsTab}
        ></TabbarLink>
        <TabbarLink
          active={activeTab === 2}
          icon={<TbListSearch />}
          label="Search"
          onClick={handleSearchTab}
        ></TabbarLink>
      </Tabbar>
    </div>
  );
}

export default TabBar