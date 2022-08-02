import React, {useContext} from 'react'
import {  Dropdown, Search, Select, SelectItem } from '@carbon/react';
import { AppContext } from '../App';
import { useNavigate } from 'react-router-dom';
import { Block, BlockTitle, List, ListButton, ListItem, Button, ListInput } from 'konsta/react';

function SearchTab() {
  const {searchName, setSearchName} = useContext(AppContext);
  let navigate = useNavigate();
  const handleChange = (e) => {
    setSearchName(e.target.value);
    console.log(e.target.value);
  }
  return (
    <div>
      <Block>
        <BlockTitle>Search</BlockTitle>
        <List inset>
          <ListInput 
            label="Enter the coin name or symbol"
            type='text'
            placeholder='Search Coin (e.g. BTC, ETH, LTC)'
            value={searchName}
            clearButton={searchName !== ''}
            onChange={handleChange}
            onClear={() => setSearchName('')}
          />
          <Button
            onClick={() => navigate("/")}
            disabled={searchName === ''}
            raised
          >Search</Button>
        </List>
      </Block>
    </div>
  );
}

export default SearchTab