import React, { useContext } from 'react'
import {
  DataTable,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
} from "carbon-components-react";
import { useEffect } from 'react';
import { AppContext } from '../App';
import { TableContainer, TableExpandedRow, TableExpandHeader, TableExpandRow } from '@carbon/react';
import { SymbolInfo } from 'react-ts-tradingview-widgets';

function Trends() {
  const {marketData} = useContext(AppContext);

  const formatDollar = (number, maximumSignificantDigits) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumSignificantDigits,
    }).format(number);
  
  const rows = marketData.map((coin) => ({
      id: coin.symbol,
      img: (
        <img src={coin.image} alt="${coin.name}" style={{ width: "2rem" }} />
      ),
      name: coin.name,
      symbol: coin.symbol,
      price: formatDollar(coin.current_price, 2),
      marketCap: formatDollar(coin.market_cap, 2),
    }));


  console.log(marketData);
  

  
  const headers = [
    {
      key: "img",
      header: "",
    },
    {
      key: "name",
      header: "Name",
    },
    {
      key: "symbol",
      header: "Symbol",
    },
    {
      key: "price",
      header: "Price",
    },
    {
      key: "marketCap",
      header: "Market Cap",
    }
  ];

  if(marketData){
    return (
      <DataTable
        rows={rows}
        headers={headers}
        render={({
          rows,
          headers,
          getHeaderProps,
          getExpandHeaderProps,
          getRowProps,
          getTableProps,
          getTableContainerProps,
        }) => (
          <TableContainer
            title="Trending Coins"
            description="Top 100 coins"
            {...getTableContainerProps()}
          >
            <Table {...getTableProps()}>
              <TableHead>
                <TableRow>
                  <TableExpandHeader
                    id="expand"
                    enableExpando={true}
                    {...getExpandHeaderProps()}
                  />
                  {headers.map((header, i) => (
                    <TableHeader key={i} {...getHeaderProps({ header })}>
                      {header.header}
                    </TableHeader>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <React.Fragment key={row.id}>
                    <TableExpandRow
                      expandHeader="expand"
                      {...getRowProps({ row })}
                    >
                      {row.cells.map((cell) => (
                        <TableCell key={cell.id}>{cell.value}</TableCell>
                      ))}
                    </TableExpandRow>
                    <TableExpandedRow colSpan={headers.length + 1}>
                      {row.cells.map((cell) => (
                        <div></div>
                      ))}
                    </TableExpandedRow>
                  </React.Fragment>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      />
    );
  } else {
    <div>Loading....</div>
  }
}

export default Trends