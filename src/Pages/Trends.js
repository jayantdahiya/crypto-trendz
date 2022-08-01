import React, { useContext } from 'react';
import { AppContext } from '../App';
import { Block, BlockTitle, List, ListItem } from 'konsta/react';

function Trends() {
  const {marketData, setSeachName} = useContext(AppContext);

  const formatDollar = (number, maximumSignificantDigits) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumSignificantDigits,
    }).format(number);

  if(marketData){
    return (
      <Block>
        <BlockTitle>Trending Coins</BlockTitle>
        <List>
          {marketData.map((coin) => (
            <ListItem
              link
              title={coin.name}
              after={formatDollar(coin.current_price,2)}
              subtitle={coin.price_change_percentage_24h.toFixed(2)+'%'}
              text={formatDollar(coin.market_cap,2)}
              href={`/chart`}
              onClick={(e) => (setSeachName(e.target.value))}
              value={coin.symbol}
              media={
                <img
                  src={coin.image}
                  alt="${coin.name}"
                  style={{ width: "2rem" }}
                />
              }
            />
          ))}
        </List>
      </Block>
    );
  } else {
    <div>Loading....</div>
  }
}

export default Trends