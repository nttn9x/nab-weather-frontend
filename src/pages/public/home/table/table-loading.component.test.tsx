import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "utils/test-utils";

import TableLoading from "./table-loading.component";

test("render table loading", async () => {
  render(<TableLoading />);

  expect(screen.queryAllByLabelText("plh-card").length).toBe(5);
});
