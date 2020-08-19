import Actions, { Types, IWeather } from "./weather.constant";

import produce from "immer";

export const initialState: IWeather = {
  searching: false,
  params: {},
  data: {
    consolidatedWeather: [],
  },
};

const reducer = produce((draft, action: Actions) => {
  switch (action.type) {
    case Types.SET_SEARCHING:
      draft.searching = action.payload.searching;
      break;
    case Types.SET_FILTER:
      draft.searching = true;
      draft.params = { ...draft.params, ...action.payload.params };
      break;
    case Types.SET_DATA:
      draft.data.consolidatedWeather = action.payload.consolidatedWeather;
      draft.searching = false;
      break;
  }
}, initialState);

export default reducer;
