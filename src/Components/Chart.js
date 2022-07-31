import React, { useContext } from 'react';
import { AppContext } from '../App';
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";

function Chart() {
  const {searchName} = useContext(AppContext);
  return (
    <div style={{
      width: "100vw",
      height: "90vh",
    }}>
    <AdvancedRealTimeChart 
    theme='dark' 
    symbol={searchName}
    autosize
    allow_symbol_change={false}
    locale='en'
    ></AdvancedRealTimeChart>
    </div>
  )
}

export default Chart