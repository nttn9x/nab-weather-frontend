import {testSaga} from "redux-saga-test-plan";
import {call, put, select} from "redux-saga/effects";
import {get, size} from "lodash";

import {getLocation} from "services/metaweather.service";

import {paramsSelector} from "./weather.selector";
import {setData} from "./weather.action";
import {Types} from "./weather.constant";
import rootSaga, {searchDataWatch} from "./weather.saga";

import {city, consolidated_weather, data} from "./weather.data-mock";

describe("searchCharacters", () => {
  it("Search success", () => {
    const generator = searchDataWatch();
    // const response = { data: { results: GetCharactersMock } };

    expect(generator.next({ city }).value).toEqual(select(paramsSelector));

    const woeid: any = city.woeid;

    // @ts-ignore
    expect(generator.next({ city, woeid }).value).toEqual(call(getLocation, city.woeid));

    // @ts-ignore
    expect(generator.next({ data, consolidated_weather }).value).toEqual(
      put(setData(consolidated_weather))
    );
  });

  it("Search error", () => {
    const generator = searchDataWatch();
    // @ts-ignore
    expect(generator.next({ city: null, woeid: null }).value).toEqual(
      select(paramsSelector)
    );
    // @ts-ignore
    const next = generator.next({ city: null, woeid: null });
    const error_length = size(get(next, "value.payload.action.notifications"));

    expect(error_length).toEqual(1);

    // @ts-ignore
    expect(generator.next({ consolidated_weather: [] }).value).toEqual(
      put(setData([]))
    );
  });
});

describe("Unit Test Weather Saga", () => {
  it("Root", () => {
    testSaga(rootSaga)
      // Get city from state
      .next()
      .takeLatest(Types.SET_FILTER, searchDataWatch)

      .next()
      .isDone();
  });

  // it("Search", () => {
  //   const woeid = city.woeid;
  //
  //   testSaga(searchDataWatch)
  //     // Get city from state
  //     .next()
  //     .select(paramsSelector)
  //
  //     // call api
  //     .next({ city, woeid })
  //     .call(getLocation, woeid)
  //
  //     // make logic
  //     .next({ data, consolidated_weather })
  //     .put(setData(consolidated_weather))
  //
  //     .next()
  //     .isDone();
  // });
});
