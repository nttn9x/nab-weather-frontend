import React from "react";
import { shallow } from "enzyme";

import Router from "./router";

it("renders without crashing", () => {
  shallow(<Router />);
});
