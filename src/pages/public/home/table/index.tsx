import React from "react";

import { useSelector } from "react-redux";

import {
  citySelector,
  searchingSelector,
} from "store/weather/weather.selector";
import { Grid } from "components/ui-libraries";

import TableHeader from "./table-display-header.component";
import TableLoading from "./table-loading.component";
import TableDisplay from "./table-display.component";
import TableDisplayEmpty from "./table-display-empty.component";

const Table = () => {
  const city = useSelector(citySelector);
  const searching = useSelector(searchingSelector);

  const _renderBody = () => {
    if (!city) {
      return <TableDisplayEmpty />;
    }
    return searching ? <TableLoading /> : <TableDisplay />;
  };

  return (
    <Grid item xs={12} container spacing={3}>
      {city && <TableHeader cityName={city.title} />}
      {_renderBody()}
    </Grid>
  );
};

export default Table;
