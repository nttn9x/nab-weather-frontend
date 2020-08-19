import React, { useCallback, useState } from "react";
import Axios from "axios";
import { useDispatch } from "react-redux";
import styles from "./search.module.scss";

import { ICity } from "store/weather/weather.constant";

import { Grid } from "components/ui-libraries";
import { AutoComplete } from "components/ui-own";

import { getAllCity } from "services/metaweather.service";

import { selectCity } from "store/weather/weather.action";
import { pushErrorMessage } from "store/common/action/notification.action";

let source: any;

const Search = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState<any>({ loading: false, cities: [] });

  const onChange = async (cityName: string) => {
    let newCities: ICity[] = [];
    try {
      if (source) {
        try {
          await source.cancel("Cancel");
        } catch (e) {
          console.log("Nguyen C: index.tsx, F: onChange 26, N: e ", e);
        }
      }

      source = Axios.CancelToken.source();

      setState({ cities: [], loading: true });

      newCities = await getAllCity({
        params: { cityName },
        cancelToken: source.token,
      });
    } catch (e) {
      dispatch(pushErrorMessage(e))
    }

    setState({ cities: newCities, loading: false });
  };

  const onSelect = useCallback(
    (city: ICity, i: number) => {
      dispatch(selectCity(city));
    },
    [dispatch]
  );

  return (
    <Grid className={styles.container} container spacing={3}>
      <Grid item xs={2}>
        <AutoComplete
          autoFocus
          onSelect={onSelect}
          keyValue={"title"}
          onChange={onChange}
          data={state.cities}
          loading={state.loading}
        />
      </Grid>
    </Grid>
  );
};

export default Search;
