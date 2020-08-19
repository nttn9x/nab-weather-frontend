import React from "react";
import { useTranslation } from "react-i18next";
import _get from "lodash/get";

import styles from "./style.module.scss";

import { Button, Typography } from "components/ui-libraries";

const Cell = React.memo(({ data, columnIndex, rowIndex, style }: any) => {
  const { items, columnCount, itemWidth, onItemClick } = data;
  const item = items[columnIndex + rowIndex * columnCount];
  const { t } = useTranslation();
  if (!item) {
    return null;
  }

  const url = _get(item, "image.src", null);

  return (
    <div style={style}>
      <div className={styles.card}>
        <div className={styles.ghost}>
          <Button
            variant={"outlined"}
            color={"secondary"}
            onClick={() => onItemClick({ columnIndex, rowIndex, item })}
          >
            {t("select")}
          </Button>
        </div>
        <div>
          <img
            className={styles.image}
            style={{ height: itemWidth - 16 }}
            src={url}
            alt={"error"}
          />
          <Typography align={"center"}>{item.name}</Typography>
        </div>
      </div>
    </div>
  );
});

export default Cell;
