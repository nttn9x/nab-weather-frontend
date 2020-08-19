import React from "react";
import styles from "./loading.module.scss";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import { Typography } from "components/ui-libraries";

const useBackgroundStyles = makeStyles((theme: Theme) =>
  createStyles({
    loader: {
      "& div": {
        backgroundColor: theme.palette.primary.dark,
        boxShadow: `0 0 20px ${theme.palette.primary.main}`,
      },
    },
    loading: {
      opacity: 0.9,
    },
  })
);

const Loading = ({ label }: any) => {
  const classes = useBackgroundStyles();

  return (
    <div className={`${classes.loading} ${styles.loading}`}>
      <div className={styles.loading__container}>
        {label && (
          <Typography
            color="textPrimary"
            gutterBottom
            className={styles.message}
            align={"center"}
          >
            {label}
          </Typography>
        )}
        <div className={`${styles.loading__loader} ${classes.loader}`}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
