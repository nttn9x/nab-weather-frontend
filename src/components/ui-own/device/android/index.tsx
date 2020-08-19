import React, { useEffect, useState } from "react";
import "../style.scss";
import useStyles from "../styles";
import moment from "moment";
import { Typography } from "components/ui-libraries";

import BatteryCharging80Icon from "@material-ui/icons/BatteryCharging80";
import WifiIcon from "@material-ui/icons/Wifi";
import SdCardIcon from "@material-ui/icons/SdCard";

export const DeviceAndroid = ({ children }: any) => {
  const classes = useStyles();
  const [state, setState] = useState({
    hour: 0,
    minute: 0,
  });

  useEffect(() => {
    const now = moment();
    setState({
      hour: now.hour(),
      minute: now.minute(),
    });
  }, [setState]);

  return (
    <div className="device note8">
      <div className="inner"></div>
      <div className="overflow">
        <div className="shadow"></div>
      </div>
      <div className="speaker"></div>
      <div className="sensors"></div>
      <div className="more-sensors"></div>
      <div className="sleep"></div>
      <div className="volume"></div>
      <div className="camera"></div>
      <div className={`screen ${classes.screen}`}>
        <div className={"status-bar"}>
          <SdCardIcon className={classes.text}/>
          <div className={"note8"}>
            <WifiIcon className={`${classes.text} ${classes.marginRight}`} />
            <BatteryCharging80Icon
              className={`${classes.text} ${classes.marginRight}`}
            />
            <Typography
              component={"span"}
              className={`time ${classes.text}`}
            >{`${state.hour}:${state.minute}`}</Typography>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};
