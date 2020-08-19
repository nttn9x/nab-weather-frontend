import { selectCity, setData, setSearchingStatus } from "./weather.action";
import reducer, { initialState } from "./weather.reducer";
import { city, consolidated_weather } from "./weather.data-mock";

describe("Weather Reducer", () => {
  describe("SET_FILTER", () => {
    const action = selectCity(city);
    const newState = reducer(initialState, action);

    it("city is set", () => {
      expect(newState.params.city).toEqual(city);
    });
  });

  describe("SET_DATA", () => {
    const action = setData(consolidated_weather);
    const newState = reducer(initialState, action);

    it("call api done", () => {
      expect(newState.data.consolidatedWeather).toEqual(consolidated_weather);
    });
  });

  describe("SET_SEARCHING", () => {
    const action = setSearchingStatus(false);
    const newState = reducer(initialState, action);

    it("is not searching", () => {
      expect(newState.searching).toEqual(false);
    });
  });

  describe("SET_SEARCHING", () => {
    const action = setSearchingStatus(true);
    const newState = reducer(initialState, action);

    it("is searching", () => {
      expect(newState.searching).toEqual(true);
    });
  });
});
