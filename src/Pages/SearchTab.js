import React, {useContext} from 'react'
import { Search } from '@carbon/react';
import { AppContext } from '../App';

function SearchTab() {
  const {tickers} = useContext(AppContext);
  console.log(tickers)
  return (
    <div>
      <Search
        autoComplete={tickers}
        closeButtonLabelText="Clear search input"
        defaultValue=""
        id="search-1"
        labelText="Search"
        onChange={(e) => console.log(e.target.value)}
        onKeyDown={(e) => console.log(e.target.value)}
        size="lg"
      />
    </div>
  );
}

export default SearchTab