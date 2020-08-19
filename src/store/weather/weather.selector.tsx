import { createSelector } from "reselect";

import { IState } from "store/constants";

export const weatherSelector = (state: IState) => {
  return state.weather;
};

export const searchingSelector = createSelector(
  weatherSelector,
  (weather) => weather.searching
);

export const citySelector = createSelector(
  weatherSelector,
  (weather) => weather.params.city
);

export const paramsSelector = createSelector(
  weatherSelector,
  (weather) => weather.params
);

export const dataSelector = createSelector(
  weatherSelector,
  (weather) => weather.data
);
