import { combineReducers } from "redux";

import notifications from "./notification.reducer";

const common = combineReducers({ notifications });

const root = {
  common,
};

export default root;
