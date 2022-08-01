import React from 'react'
import { AdvancedRealTimeChart } from 'react-ts-tradingview-widgets';
import { AppContext } from '../App';

function Chart() {
  const {searchName} = React.useContext(AppContext);
  return (
    <div className='h-full w-full'>
      <AdvancedRealTimeChart
        theme="dark"
        symbol={searchName}
        autosize
        allow_symbol_change={false}
        locale="en"
      ></AdvancedRealTimeChart>
    </div>
  );
}

export default Chart