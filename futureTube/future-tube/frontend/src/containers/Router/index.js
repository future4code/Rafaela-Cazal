import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import { LoginPage } from "../../components/LoginPage";
import { RegisterPage } from '../../components/RegisterPage';
import { VideoPage } from "../../components/VideoPage";


export const routes = {
  root: "/",
  register: "/register",
  feed: "/feed"
};


function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.root} component={LoginPage} />
        <Route exact path={routes.register} component={RegisterPage} />
        <Route exact path={routes.feed} component={VideoPage} />
      </Switch>
    </ConnectedRouter>
  );
}


export default Router; 