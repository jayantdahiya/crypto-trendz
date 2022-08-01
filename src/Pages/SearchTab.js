import React, {useContext} from 'react'
import {  Dropdown, Search, Select, SelectItem } from '@carbon/react';
import { AppContext } from '../App';
import { useNavigate } from 'react-router-dom';
import { Block, BlockTitle, List, ListButton, ListItem, Button, ListInput } from 'konsta/react';

function SearchTab() {
  const {tickers, searchName, setSearchName, marketData} = useContext(AppContext);
  let navigate = useNavigate();
  console.log(marketData)
  return (
    <div>
      <Block>
        <BlockTitle>Search</BlockTitle>
      </Block>
    </div>
  );
}

export default SearchTab