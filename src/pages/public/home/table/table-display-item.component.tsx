import React from "react";
import moment from "moment";

import { Card, CardContent, Grid, Typography } from "components/ui-libraries";
import { TypographyNowrap } from "components/ui-own";

import { IConsolidatedWeather } from "store/weather/weather.constant";

import { getIcon } from "services/metaweather.service";

import styles from "./table.module.scss";
import { useTranslation } from "react-i18next";

interface IProps {
  data: IConsolidatedWeather;
}

const TableItem: React.FC<IProps> = React.memo(({ data }) => {
  const { t } = useTranslation();

  const day = data.applicable_date
    ? moment(data.applicable_date).format("dddd")
    : "";
  const maxTemp = (data.max_temp || 0).toFixed(0);
  const minTemp = (data.min_temp || 0).toFixed(0);

  return (
    <Grid component={"section"} item>
      <Card variant={"outlined"} className={styles.card}>
        <CardContent>
          <Typography variant={"caption"} color="textSecondary" gutterBottom>
            {data.applicable_date}
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            {day}
          </Typography>
          <TypographyNowrap
            className={styles["min-temp"]}
            align={"center"}
            gutterBottom
            title={t("minimum")}
          >
            {minTemp}
            <span>&#8451;</span>
          </TypographyNowrap>
          <div className={styles["icon-weather"]}>
            <img
              className={styles["icon-weather_image"]}
              src={getIcon(data.weather_state_abbr)}
              alt={`Error ${data.weather_state_abbr}`}
            />
          </div>
          <Typography align={"center"} gutterBottom>
            {data.weather_state_name}
          </Typography>
          <TypographyNowrap
            className={styles["max-temp"]}
            align={"center"}
            color={"primary"}
            gutterBottom
            title={t("maximum")}
          >
            {maxTemp}
            <span>&#8451;</span>
          </TypographyNowrap>
        </CardContent>
      </Card>
    </Grid>
  );
});

export default TableItem;
