import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "utils/test-utils";

import Search from "./index";

test("Load search", async () => {
  render(<Search />);

  const ele: any = screen.getByLabelText("h-s-input");

  expect(ele).toBeInTheDocument();

  fireEvent.change(ele, {
    target: {
      value: "London",
    },
  });

  expect(ele.value).toBe("London");
});
