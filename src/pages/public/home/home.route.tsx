import { lazy } from "react";

// import store from "store";

// export default lazy(() =>
//   import("store/weather").then((module: any) => {
//     store.injectReducer("weather", module.reducer);
//     store.injectSaga("weather", module.saga);
//
//     return import("pages/public/home");
//   })
// );

export default lazy(() => import("pages/public/home"));
