import axios, {AxiosRequestConfig} from "axios";

import {ICity} from "store/weather/weather.constant";

const LOCATION = "weather/location";

export async function getLocation<T, R>(
  woeId: string,
  options?: AxiosRequestConfig
) {
  return await axios.get<T, R>(`${LOCATION}/${woeId}`, options);
}

export async function getAllCity(options?: AxiosRequestConfig) {
  return await getLocation<ICity, ICity[]>("search", options);
}

export const getIcon = (weather_state_abbr: string) => {
  return `https://www.metaweather.com/static/img/weather/${weather_state_abbr}.svg`;
};
