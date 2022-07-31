import React, {useContext} from 'react'
import { Dropdown, Search } from '@carbon/react';
import { AppContext } from '../App';

function SearchTab() {
  const {tickers} = useContext(AppContext);
  console.log(tickers)
  return (
    <div>
      <Dropdown
        helperText="This is some helper text"
        id="default"
        itemToString={function noRefCheck() {}}
        items={[
          {
            id: "option-0",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
          },
          {
            id: "option-1",
            text: "Option 1",
          },
          {
            id: "option-2",
            text: "Option 2",
          },
          {
            disabled: true,
            id: "option-3",
            text: "Option 3 - a disabled item",
          },
          {
            id: "option-4",
            text: "Option 4",
          },
          {
            id: "option-5",
            text: "Option 5",
          },
        ]}
        label="Dropdown menu options"
        titleText="Dropdown label"
      />
    </div>
  );
}

export default SearchTab