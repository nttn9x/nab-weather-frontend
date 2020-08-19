import React from "react";
import styles from "./style.module.scss";

import { Skeleton } from "components/ui-libraries";

const Cell = React.memo(({ data, columnIndex, rowIndex, style }: any) => {
  const { itemWidth } = data;

  return (
    <div style={style}>
      <div className={styles.card}>
        <Skeleton
          variant="rect"
          className={styles.image}
          style={{ height: itemWidth - 16, marginBottom: 8 }}
        />

        <Skeleton variant="text" width={itemWidth * 0.4} />
      </div>
    </div>
  );
});

export default Cell;
