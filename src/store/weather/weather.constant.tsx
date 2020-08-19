export const MAX_LENGTH_OF_DATA = 5;

export interface ICity {
  woeid: number;
  title: string;
  location_type: string;
  latt_long: string;
}

export interface IConsolidatedWeather {
  id: number;
  weather_state_name: string;
  weather_state_abbr: string;
  wind_direction_compass: string;
  created: any;
  applicable_date: any;
  min_temp: number;
  max_temp: number;
  the_temp: number;
  wind_speed: number;
  wind_direction: number;
  air_pressure: number;
  humidity: number;
  visibility: number;
  predictability: number;
}

export interface IWeather {
  searching: boolean;
  params: { city?: ICity };
  data: {
    consolidatedWeather: IConsolidatedWeather[];
  };
}

export enum Types {
  SET_FILTER = "[WEATHER] SET_FILTER",
  SET_SEARCHING = "[WEATHER] SET_SEARCHING",

  SET_DATA = "[WEATHER] SET_DATA",
}

export interface SetFilterAction {
  type: typeof Types.SET_FILTER;
  payload: {
    params: {
      city: ICity;
    };
  };
}

export interface SetSearchingAction {
  type: typeof Types.SET_SEARCHING;
  payload: {
    searching: boolean;
  };
}

export interface SetDataAction {
  type: typeof Types.SET_DATA;
  payload: {
    consolidatedWeather: IConsolidatedWeather[];
  };
}

type Actions = SetFilterAction | SetSearchingAction | SetDataAction;

export default Actions;
