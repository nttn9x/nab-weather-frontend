import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "utils/test-utils";

import TableItem from "./table-display-item.component";
import { consolidated_weather } from "store/weather/weather.data-mock";

test("render table item", async () => {
  render(<TableItem data={consolidated_weather[0]} />);

  expect(screen.getByLabelText("data-date")).toBeInTheDocument();
  expect(screen.getByLabelText("data-min-temp")).toBeInTheDocument();
  expect(screen.getByLabelText("data-max-temp")).toBeInTheDocument();
  expect(screen.getByLabelText("data-image")).toBeInTheDocument();
  expect(screen.getByLabelText("data-state")).toBeInTheDocument();
});
