import React, { useContext } from 'react';
import { AppContext } from '../App';
import { Block, BlockTitle, List, ListItem } from 'konsta/react';
import { Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Trends() {
  const {marketData, setSeachName} = useContext(AppContext);
  let navigate = useNavigate();

  const formatDollar = (number, maximumSignificantDigits) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumSignificantDigits,
    }).format(number);

    const handleRowClick = (e) => {
      setSeachName(e.target.value);
      navigate("/");
    }

  if(marketData){
    return (
      <Block>
        {/* <List>
          {marketData.map((coin) => (
            <ListItem
              link
              title={coin.name}
              after={formatDollar(coin.current_price,2)}
              subtitle={coin.price_change_percentage_24h.toFixed(2)+'%'}
              text={formatDollar(coin.market_cap,2)}
              href={`/`}
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
        </List> */}
        <Table bordered hover className="table-auto w-full self-center">
          <thead>
            <tr>
              <th></th>
              <th>Price</th>
              <th>Market Cap</th>
              <th>24H Change</th>
            </tr>
          </thead>
          <tbody>
            {marketData.map((coin) => (
              <tr onClick={(e) => handleRowClick(e)} value={coin.symbol}>
                <td
                  style={{
                    display: "flex",
                  }}
                >
                  <img
                    src={coin.image}
                    alt="${coin.name}"
                    style={{ width: "1.5rem", marginRight: "1rem" }}
                  />
                  {coin.symbol.toUpperCase()}
                </td>
                <td>{formatDollar(coin.current_price, 2)}</td>
                <td 
                className={coin.price_change_percentage_24h > 0 ? "text-success" : "text-danger"}
                >{coin.price_change_percentage_24h.toFixed(2) + "%"}</td>
                <td>{formatDollar(coin.market_cap, 2)}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Block>
    );
  } else {
    <div>Loading....</div>
  }
}

export default Trends