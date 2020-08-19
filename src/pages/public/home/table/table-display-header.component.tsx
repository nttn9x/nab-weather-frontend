import React from "react";
import styles from "./table.module.scss";
import { useTranslation } from "react-i18next";
import { MAX_LENGTH_OF_DATA } from "store/weather/weather.constant";

import { Grid, Typography } from "components/ui-libraries";

interface IProps {
  cityName: String;
}

const TableHeader: React.FC<IProps> = React.memo(({ cityName }) => {
  const { t } = useTranslation();

  return (
    <Grid item xs={12} container spacing={3} alignItems={"baseline"}>
      <Grid item>
        <Typography variant={"h3"}>{cityName}</Typography>
      </Grid>
      <Grid item>
        <Typography
          variant={"h6"}
          className={styles.title}
          color={"textSecondary"}
        >
          {t("day_forecast", { size: MAX_LENGTH_OF_DATA })}
        </Typography>
      </Grid>
    </Grid>
  );
});

export default TableHeader;
