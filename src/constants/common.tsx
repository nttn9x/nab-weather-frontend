export const API_ROOT =
  process && process.env.REACT_APP_ENV === "development"
    ? "http://113.161.43.181:5000/api/v1"
    : "http://113.161.43.181:5000/api/v1";

export enum KEYBOARD {
  Enter = 13,
}

export enum HTTP_CODE {
  InternalServerError = 500,
  Unauthorized = 401,
}

export enum SNACKBAR_TYPE {
  Error = "error",
  Success = "success",
}

export enum TIMEOUT {
  Default = 300,
  Search = 300,
  IntervalToken = 15 * 60 * 1000, // second
  RefreshToken = 15, // minute
}

export enum SCREEN_TYPES {
  Home = "HOME",
  Category = "CATEGORY",
}

export const SCREENS = [
  {
    id: SCREEN_TYPES.Home,
    i18nKey: "home",
  },
  {
    id: SCREEN_TYPES.Category,
    i18nKey: "category",
  },
];

export enum COMPONENT_TYPES {
  CATEGORY_SLIDER = "CATEGORY_SLIDER",
  CATEGORY = "CATEGORY",
}

export const COMPONENTS = [
  {
    id: COMPONENT_TYPES.CATEGORY_SLIDER,
    i18nKey: "category_slider",
  },
  {
    id: COMPONENT_TYPES.CATEGORY,
    i18nKey: "category",
  },
];

export enum STEP_TYPES {
  Root = 0,
  Layout = 1,
  Component = 2,
}
