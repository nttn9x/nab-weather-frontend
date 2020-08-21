import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "utils/test-utils";

import configureStore from "store/configure.store";
import reducer from "store/weather/weather.reducer";
import saga from "store/weather/weather.saga";

import Table from "./table";
import Search from "./search";

test("Load search", async () => {
  render(<Search />);

  expect(screen.getByLabelText("h-s-input")).toBeInTheDocument();
});

test("Load table", async () => {
  const store = configureStore();
  store.injectReducer("weather", reducer);
  store.injectSaga("weather", saga);

  render(<Table />, {
    store,
  });

  expect(screen.getByLabelText("data-empty")).toBeInTheDocument();
});
