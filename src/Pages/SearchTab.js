import React, {useContext} from 'react'
import { Button, Dropdown, Search, Select, SelectItem } from '@carbon/react';
import { AppContext } from '../App';
import { useNavigate } from 'react-router-dom';

function SearchTab() {
  const {tickers, searchName, setSearchName, marketData} = useContext(AppContext);
  let navigate = useNavigate();
  const handleChartSearch = (e) => {
    setSearchName(e.target.value);
    navigate('/');
    console.log(searchName);
  }
  console.log(marketData)
  return (
    <div>
      <Select
      id="select-1"
      labelText="Select your coin"
      helperText="Make a selection from the list"
      onChange={handleChartSearch}
      >
      {marketData.map((ticker) => (
        <SelectItem value={ticker.symbol} text={ticker.name}></SelectItem>
      ))}
        <SelectItem value="BTC" text="Bitcoin" /> 
      </Select>
    </div>
  );
}

export default SearchTab