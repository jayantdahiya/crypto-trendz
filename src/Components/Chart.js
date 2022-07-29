import React, { Component } from "react";

import { TradingViewStockChartWidget } from "react-tradingview-components";

class Chart extends Component {
  render() {
    return (
      <TradingViewStockChartWidget 
      symbol="BTC" 
      theme="Dark" 
      range="12m" 
      allow_symbol_change={false}
      width={'100vw'}
       />
    );
  }
}

export default Chart;