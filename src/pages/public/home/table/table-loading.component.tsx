import React from "react";
import styles from "./table.module.scss";

import { Grid, Skeleton } from "components/ui-libraries";

const TableItem = () => {
  return (
    <Grid item>
      <div className={styles.card}>
        <Grid item xs={12} container spacing={1}>
          <Grid item xs={12}>
            <Skeleton aria-label={"plh-card"} className={styles.card} variant={"rect"} height={200} />
          </Grid>
          <Grid item xs={12}>
            <Skeleton width={"50%"} height={30} />
          </Grid>
        </Grid>
      </div>
    </Grid>
  );
};

const TableLoading = React.memo(() => {
  return (
    <Grid item xs={12} container spacing={3}>
      <TableItem />
      <TableItem />
      <TableItem />
      <TableItem />
      <TableItem />
    </Grid>
  );
});

export default TableLoading;
