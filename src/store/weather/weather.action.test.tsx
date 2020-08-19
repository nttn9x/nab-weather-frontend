import {Types,} from "./weather.constant";
import {selectCity, setData, setSearchingStatus} from "./weather.action";
import {city, consolidated_weather} from "./weather.data-mock";

describe("Weather Action", () => {
  it("Select City to search", () => {
    const action = selectCity(city);

    expect(action).toEqual({
      type: Types.SET_FILTER,
      payload: { params: { city: city } },
    });
  });

  it("Set Data - days forecast", () => {
    const action = setData(consolidated_weather);

    expect(action).toEqual({
      type: Types.SET_DATA,
      payload: { consolidatedWeather: consolidated_weather },
    });
  });

  it("Set Searching Status - Blocking UI", () => {
    const action = setSearchingStatus(false);

    expect(action).toEqual({
      type: Types.SET_SEARCHING,
      payload: { searching: false },
    });
  });

  it("Set Searching Status - UnBlocking UI", () => {
    const action = setSearchingStatus(true);

    expect(action).toEqual({
      type: Types.SET_SEARCHING,
      payload: { searching: true },
    });
  });
});
