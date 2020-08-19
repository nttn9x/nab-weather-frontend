import "react-app-polyfill/ie9";
import "react-app-polyfill/stable";

import "./styles/index.scss";

import React from "react";
import ReactDOM from "react-dom";

import { setUpApi } from "utils/http-interceptors/request";

import Router from "./router";

// import * as serviceWorker from "./serviceWorker";

import "i18n";

function generateUI(): void {
  const root: HTMLElement = document.createElement("div");
  root.id = "approot";

  document.body.append(root);

  ReactDOM.render(<Router />, root);
}

function createMagic() {
  setUpApi();

  generateUI();
}

// this is a magic
createMagic();
