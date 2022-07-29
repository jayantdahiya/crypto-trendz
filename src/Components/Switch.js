import React from 'react';
import { ContentSwitcher, Switch, SearchFilterButton, ModalWrapper } from "@carbon/react";
import { Search, ChartLine, List } from '@carbon/icons-react';

function SwitchBar() {
  const handleSearch = () => {
    <ModalWrapper
    modalHeading="Search"
    >
    <SearchFilterButton />
    </ModalWrapper>
  }
  return (
    <ContentSwitcher style={{
      width: '60vw'
    }}>
      <Switch name={"first"} text={<ChartLine />} />
      <Switch name={"second"} text={<List />} />
      <Switch name={"third"} text={<Search />} onClick={handleSearch} />
    </ContentSwitcher>
  );
}

export default SwitchBar