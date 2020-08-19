import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import clsx from "clsx";

import { ProgressLoader } from "components/ui-own";

const useStyles = makeStyles((theme: Theme) => ({
  padding: {
    padding: theme.spacing(3),
  },
  container: {
    width: "100%",
    height: "100%",
  },
  round: {
    borderRadius: theme.shape.borderRadius * 2,
  },
  border: {
    border: `1px solid ${theme.palette.divider}`,
  },
}));

export const Container: React.FC<any> = ({
  children,
  loading,
  className,
  padding,
  border,
  round,
  ...props
}) => {
  const classes = useStyles();

  return (
    <div
      className={clsx(className, classes.container, {
        [classes.padding]: Boolean(padding),
        [classes.round]: Boolean(round),
        [classes.border]: Boolean(border),
      })}
      {...props}
    >
      {loading.running && <ProgressLoader message={loading.message} />}
      {!loading.running && children}
    </div>
  );
};

Container.defaultProps = {
  loading: {
    running: false,
    message: ",",
  },
};
