import React from "react";
import { useTranslation } from "react-i18next";

import { Grid, Typography } from "components/ui-libraries";

const TableDisplayEmpty = () => {
  const { t } = useTranslation(["common", "home"]);
  return (
    <Grid
      item
      xs={12}
      container
      spacing={3}
      alignItems={"center"}
      justify={"center"}
      direction="column"
    >
      <Grid item xs>
        <Typography variant={"h5"} gutterBottom>
          {t("no_data_to_display")}
        </Typography>
      </Grid>
      <Grid item xs>
        <Typography>
          {t(
            "home:please_input_into_search_box_and_select_the_city_that_you_want_to_view"
          )}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default TableDisplayEmpty;
