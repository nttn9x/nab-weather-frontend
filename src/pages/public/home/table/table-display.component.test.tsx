import React from "react";
import "@testing-library/jest-dom";
import configureStore from "store/configure.store";
import { render, screen } from "utils/test-utils";

import reducer from "store/weather/weather.reducer";
import saga from "store/weather/weather.saga";
import { setData } from "store/weather/weather.action";

import { consolidated_weather } from "store/weather/weather.data-mock";

import TableDisplay from "./table-display.component";

test("render table", async () => {
  const store = configureStore();
  store.injectReducer("weather", reducer);
  store.injectSaga("weather", saga);

  store.dispatch(setData(consolidated_weather));

  render(<TableDisplay />, { store });

  expect(screen.queryAllByLabelText("data").length).toBe(5);
});
