import {
  ICity,
  IConsolidatedWeather,
  Types,
  SetFilterAction,
  SetSearchingAction,
  SetDataAction,
} from "./weather.constant";

export function selectCity(city: ICity): SetFilterAction {
  return { type: Types.SET_FILTER, payload: { params: { city } } };
}

export function setData(
  consolidatedWeather: IConsolidatedWeather[]
): SetDataAction {
  return {
    type: Types.SET_DATA,
    payload: { consolidatedWeather },
  };
}

export function setSearchingStatus(searching: boolean): SetSearchingAction {
  return { type: Types.SET_SEARCHING, payload: { searching } };
}
