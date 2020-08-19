import React from "react";
import style from "./layout-header.module.scss";
import { Link } from "react-router-dom";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import classnames from "clsx";

import { ROUTES } from "constants/navigation";

import { AppBar, Toolbar, Typography } from "components/ui-libraries";
import { MODE_THEME } from "utils/setting-themes";

import Logo from "styles/images/common/logo.png";

import UserSettingsComponent from "../user-settings/user-settings.component";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      borderBottom: `1px solid ${theme.palette.divider}`,
      backgroundColor:
        theme.palette.type !== MODE_THEME.DARK
          ? "#fff"
          : theme.palette.background.default,
    },
  })
);

const LayoutHeader: React.FC<any> = React.memo(({ animated }) => {
  const classes = useStyles();
  return (
    <AppBar
      id="a-h-t"
      color="default"
      classes={{
        root: classnames(style.header, classes.root, {
          [style["header--animated"]]: animated,
        }),
      }}
    >
      <Toolbar variant="dense" classes={{ root: style.toolbar }}>
        <Link to={ROUTES.ProjectList}>
          <img src={Logo} alt={"Logo"} className={style.logo} />
        </Link>
        <Typography variant={"h6"} className={style.header__title}>NBA</Typography>
        <UserSettingsComponent />
      </Toolbar>
    </AppBar>
  );
});

export default LayoutHeader;
