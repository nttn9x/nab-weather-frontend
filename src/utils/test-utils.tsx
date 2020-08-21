import React from "react";
import configureStore from "store/configure.store";
import { render as rtlRender } from "@testing-library/react";
import { Provider } from "react-redux";

function render(ui: any, { store, ...renderOptions }: any = {}) {
  const _store = store || configureStore();

  function Wrapper({ children }: any) {
    return <Provider store={_store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from "@testing-library/react";
// override render method
export { render };
