import React from 'react'
import { AdvancedRealTimeChart } from 'react-ts-tradingview-widgets';
import { AppContext } from '../App';

function Chart() {
  const {searchName} = React.useContext(AppContext);
  console.log(searchName);
  return (
    <div className="relative w-screen h-screen">
      <AdvancedRealTimeChart
        theme="dark"
        symbol={searchName}
        allow_symbol_change={false}
        locale="en"
        autosize={true}
      ></AdvancedRealTimeChart>
    </div>
  );
}

export default Chart