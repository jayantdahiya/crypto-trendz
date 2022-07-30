import React from 'react';
import { ButtonSet, Button } from "@carbon/react";
import { Search, ChartLine, List } from '@carbon/icons-react';
import { useNavigate } from 'react-router-dom';

function SwitchBar() {
  let navigate = useNavigate();
  const handleSearch = () => {
    navigate('/search');
  }
  const handleTrends = () => {
    navigate('/trends');
  }
  const handleChart = () => {
    navigate('/');
  }
  return (
    <>
      <div style={{
        
      }}>
        <ButtonSet
          size="2xl"
        >
          <Button
            renderIcon={ChartLine}
            onClick={handleChart}
            iconDescription="Chart"
            size="lg"
          >
            Chart
          </Button>
          <Button
            renderIcon={List}
            onClick={handleTrends}
            iconDescription="Trends List"
            kind="secondary"
            size="lg"
          >
            Trends
          </Button>
          <Button
            renderIcon={Search}
            onClick={handleSearch}
            iconDescription="Search"
            kind="secondary"
            size="lg"
          >
            Search
          </Button>
        </ButtonSet>
      </div>
    </>
  );
}

export default SwitchBar