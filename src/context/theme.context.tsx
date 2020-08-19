import React, {
  useContext,
  useState,
  createContext,
  useEffect,
  useCallback,
} from "react";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

import {
  isDarkThemeMode,
  setModeTheme,
  getPrimaryObject,
  getSecondaryObject,
  MODE_THEME,
} from "utils/setting-themes";

import { loadFont } from "utils/font.util";

export const ThemesContext = createContext<any>(null);

const ThemesProvider = (props: any) => {
  const themeUI = useTheme();
  const isMobile = useMediaQuery(themeUI.breakpoints.down("sm"));
  const isTablet = useMediaQuery(themeUI.breakpoints.down("md"));
  const isLargeScreen = useMediaQuery(themeUI.breakpoints.up("md"));

  const generateTheme = useCallback(
    function generateTheme() {
      return createMuiTheme({
        palette: {
          type: isDarkThemeMode() ? MODE_THEME.DARK : MODE_THEME.LIGHT,
          background: {
            default: isDarkThemeMode() ? "#303030" : "#fafafa",
          },
          primary: getPrimaryObject(),
          secondary: getSecondaryObject(),
        },
        spacing: isMobile ? 4 : 8,
        typography: {
          fontSize: isMobile ? 12 : 14,
        },
        shadows: [
          "none",
          "0 2px 1px rgba(0, 0, 0, 0.07)",
          "0 0.6px 1.3px rgba(0, 0, 0, 0.035), 0 4px 10px rgba(0, 0, 0, 0.07)",
          "0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)",
          "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
          "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)",
          "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
          "0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)",
          "0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)",
          "0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)",
          "0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px…gba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)",
          "0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px…gba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)",
          "0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px…gba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)",
          "0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px…gba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)",
          "0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px…gba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)",
          "0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px…gba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)",
          "0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2p…gba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)",
          "0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2p…gba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)",
          "0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2p…gba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)",
          "0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2p…gba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)",
          "0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3…gba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)",
          "0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3…gba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)",
          "0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3…gba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)",
          "0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3…gba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)",
          "0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3…gba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)",
        ],
      });
    },
    [isMobile]
  );

  const [theme, setTheme] = useState<any>(() => {
    const theme = generateTheme();

    return theme;
  });

  useEffect(() => {
    loadFont();
  }, []);

  useEffect(() => {
    setTheme(generateTheme());
  }, [generateTheme]);

  function changeModeType(isDarkTheme: boolean) {
    setModeTheme(isDarkTheme);

    setTheme(generateTheme());
  }

  function changeColor() {
    setTheme(generateTheme());
  }

  return (
    <ThemesContext.Provider
      value={{ changeModeType, changeColor, isMobile, isTablet, isLargeScreen }}
    >
      <ThemeProvider theme={theme} {...props} />
    </ThemesContext.Provider>
  );
};

export const useThemesContext = () => useContext<any>(ThemesContext);

export default ThemesProvider;
