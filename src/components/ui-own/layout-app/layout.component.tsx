import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";

import useLayoutHook from "./layout.hook";

const Layout = ({ history, children }: any) => {
  const { isShow } = useLayoutHook(history);

  return (
    <>
      <CssBaseline />

      <>{isShow && children}</>
    </>
  );
};

export default Layout;
