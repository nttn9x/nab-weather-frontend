import React from "react";
import configureStore from "store/configure.store";
import "@testing-library/jest-dom";
import { render, screen } from "utils/test-utils";

import TableDisplayEmpty from "./table-display-empty.component";
import { consolidated_weather } from "store/weather/weather.data-mock";

test("render table empty", async () => {
  render(<TableDisplayEmpty />);

  expect(screen.getByLabelText("title")).toBeInTheDocument();
  expect(screen.getByLabelText("content")).toBeInTheDocument();
});
