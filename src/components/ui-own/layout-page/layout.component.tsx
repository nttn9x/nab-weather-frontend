import React from "react";

import { ProgressLoader } from "components/ui-own";

import LayoutHeader from "./layout-header.component";

import style from "./layout.module.scss";

const LayoutPage = ({
  children,
  bodyStyle,
  animated,
  loading,
  ...props
}: any) => {
  return (
    <>
      <LayoutHeader animated={animated} />
      <main className={style.container} {...props}>
        <article className={bodyStyle || style.main}>
          {loading && <ProgressLoader />}
          {!loading && children}
        </article>
      </main>
    </>
  );
};

export { LayoutPage };
