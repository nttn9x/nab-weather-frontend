import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import SettingsThemDarkTheme from "./user-settings-theme-dark-theme.component";
import SettingsThemPallete from "./user-settings-theme-pallete.component";

import { SETTINGS } from "./user-settings.constant";

const useUserSettingsHook = () => {
  const { t } = useTranslation(["theme", "common"]);
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const [tabTypeSub, setTabTypeSub] = useState<number>(-1);

  function handleClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
    setTabTypeSub(SETTINGS.EMPTY);
  }

  function goToSubSetting(type: number) {
    setTabTypeSub(type);
  }

  function doBack() {
    goToSubSetting(SETTINGS.EMPTY);
  }

  function getSubSetting(type: number) {
    switch (type) {
      case SETTINGS.DARK_THEME:
        return <SettingsThemDarkTheme doBack={doBack} />;
      case SETTINGS.THEMES:
        return <SettingsThemPallete doBack={doBack} />;
      default:
        return null;
    }
  }

  return {
    t,
    anchorEl,
    tabTypeSub,
    handleClose,
    handleClick,
    goToSubSetting,
    getSubSetting,
  };
};

export default useUserSettingsHook;
