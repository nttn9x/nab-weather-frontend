import { call, put, select, takeLatest } from "redux-saga/effects";
import _get from "lodash/get";
import { getLocation } from "services/metaweather.service";
import { pushErrorMessage } from "store/common/action/notification.action";

import { setData } from "./weather.action";
import { MAX_LENGTH_OF_DATA, Types } from "./weather.constant";
import { paramsSelector } from "./weather.selector";

export function* searchDataWatch() {
  const { city } = yield select(paramsSelector);

  let consolidatedWeather;
  try {
    const woeid = city.woeid;
    const data = yield call(getLocation, woeid);
    consolidatedWeather = _get(data, "consolidated_weather", []);

    if (consolidatedWeather.length > MAX_LENGTH_OF_DATA) {
      consolidatedWeather = consolidatedWeather.slice(0, 5);
    }
  } catch (e) {
    yield put(pushErrorMessage(e));

    consolidatedWeather = [];
  }
  yield put(setData(consolidatedWeather));
}

export default function* rootSaga() {
  yield takeLatest(Types.SET_FILTER, searchDataWatch);
}
