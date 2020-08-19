import React, { useEffect, useState } from "react";
import "../style.scss";
import moment from "moment";

import { Typography } from "components/ui-libraries";

import WifiIcon from "@material-ui/icons/Wifi";
import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt";

import useStyles from "../styles";

export const DeviceIOS = ({ children }: any) => {
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
    <div className="device iphone-x">
      <div className="notch">
        <div className="camera"></div>
        <div className="speaker"></div>
      </div>
      <div className="top-bar"></div>
      <div className="sleep"></div>
      <div className="bottom-bar"></div>
      <div className="volume"></div>
      <div className="overflow">
        <div className="shadow shadow--tr"></div>
        <div className="shadow shadow--tl"></div>
        <div className="shadow shadow--br"></div>
        <div className="shadow shadow--bl"></div>
      </div>
      <div className="inner-shadow"></div>
      <div className={`screen ${classes.screen}`}>
        <div className={"status-bar"}>
          <Typography
            className={`time ${classes.text}`}
          >{`${state.hour}:${state.minute}`}</Typography>
          <div>
            <SignalCellularAltIcon className={`${classes.text} ${classes.marginRight}`} />
            <WifiIcon className={classes.text}/>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};
