import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import { Button, CircularProgress } from "components/ui-libraries";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      margin: theme.spacing(1),
      position: "relative",
    },
    buttonProgress: {
      color: theme.palette.primary.main,
      position: "absolute",
      top: "50%",
      left: "50%",
      marginTop: -12,
      marginLeft: -12,
    },
  })
);

const ButtonCircular = React.memo(({ loading, ...props }: any) => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Button disabled={loading} {...props} />
      {loading && (
        <CircularProgress size={24} className={classes.buttonProgress} />
      )}
    </div>
  );
});

export default ButtonCircular;
