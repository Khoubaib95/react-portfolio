import React from "react";
import { withRouter } from "react-router-dom";
import ReactGA from "react-ga";
const RouteChangeTracker = ({ history }: any) => {
  //@ts-ignore
  // eslint-disable-next-line no-restricted-globals
  history.listen((location, action) => {
    // console.log(location);
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);
  });

  return <div></div>;
};

export default withRouter(RouteChangeTracker);
