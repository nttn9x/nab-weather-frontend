import React from "react";
import { useSelector } from "react-redux";

import { dataSelector } from "store/weather/weather.selector";

import TableItem from "./table-display-item.component";

const TableDisplay = () => {
  const { consolidatedWeather: items } = useSelector(dataSelector);

  return (
    <>
      {items.map((d: any, i: number) => (
        <TableItem key={i} data={d} />
      ))}
    </>
  );
};

export default TableDisplay;
