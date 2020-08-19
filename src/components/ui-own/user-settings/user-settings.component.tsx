import React from "react";
import { withRouter } from "react-router";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import { IconButton, Popover, Tooltip } from "components/ui-libraries";

import { SettingsIcon } from "../../icons";

import SettingsTheme from "./user-settings-theme.component";

import useUserSettingsHook from "./user-settings.hook";

import { SETTINGS } from "./user-settings.constant";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 300,
    },
  })
);

const UserSettings: React.FC<any> = () => {
  const classOwns = useStyles();
  const {
    t,
    anchorEl,
    tabTypeSub,
    handleClose,
    handleClick,
    goToSubSetting,
    getSubSetting,
  } = useUserSettingsHook();

  return (
    <>
      <Tooltip title={t("common:settings")}>
        <IconButton color={"primary"} onClick={handleClick}>
          <SettingsIcon />
        </IconButton>
      </Tooltip>
      <Popover
        transitionDuration={200}
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        classes={{ paper: classOwns.root }}
      >
        {tabTypeSub === SETTINGS.EMPTY && (
          <SettingsTheme goToSubSetting={goToSubSetting} />
        )}
        {tabTypeSub !== SETTINGS.EMPTY && getSubSetting(tabTypeSub)}
      </Popover>
    </>
  );
};

export default withRouter(UserSettings);
