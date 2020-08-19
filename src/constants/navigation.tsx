export enum ROUTES {
  HOME = "/",
  LOGIN = "/login",
  REGISTER = "/register",

  ProjectList = "/project",

  PROJECT_ITEM = "/project/:id/:setting?/:subSetting?",
  PROJECT_ITEM_APP_ICON = "/project/:id/appearance/app-icon",
  PROJECT_ITEM_LAUNCH_SCREEN = "/project/:id/appearance/launch-screen",
  PROJECT_ITEM_TABS = "/project/:id/appearance/tabs",
  PROJECT_ITEM_SETTING = "/project/:id/connectivity",

  PROJECT_ITEM_ADD = "/add-project",
}
