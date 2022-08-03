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

  const convertToCurrency = (number) => {
    return Math.abs(Number(number)) >= 1.0e+9
    ? (Math.abs(Number(number)) / 1.0e+9).toFixed(2) + " B"
    : Math.abs(Number(number)) >= 1.0e+6
    ? (Math.abs(Number(number)) / 1.0e+6).toFixed(2) + " M"
    : Math.abs(Number(number)) >= 1.0e+3
    ? (Math.abs(Number(number)) / 1.0e+3).toFixed(2) + " K"
    : Math.abs(Number(number));
}

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
        <div className="h-screen w-screen">
          <Table hover className="table-auto">
            <thead>
              <tr>
                <th></th>
                <th>Price</th>
                <th>24H Change</th>
                <th>Market Cap ($)</th>
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
                    className={
                      coin.price_change_percentage_24h > 0
                        ? "text-success"
                        : "text-danger"
                    }
                  >
                    {coin.price_change_percentage_24h.toFixed(2) + "%"}
                  </td>
                  <td>{convertToCurrency(coin.market_cap)}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Block>
    );
  } else {
    <div>Loading....</div>
  }
}

export default Trends