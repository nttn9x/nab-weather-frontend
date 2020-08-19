import React from "react";
import styles from "./home.module.scss";

import { LayoutPage } from "components/ui-own";

import Table from "./table";
import Search from "./search";

import { Grid } from "components/ui-libraries";

const Home = () => {
  return (
    <LayoutPage bodyStyle={styles.container}>
      <Search />

      <Grid container spacing={3}>
        <Table />
      </Grid>
    </LayoutPage>
  );
};

export default Home;
