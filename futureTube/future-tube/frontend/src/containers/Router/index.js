import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import { LoginPage } from "../../components/LoginPage";
import { RegisterPage } from '../../components/RegisterPage';
import { Feed } from "../../components/Feed";
import { ChangePassword } from "../../components/ChangePassword";
import { LoadingPage } from "../../components/Loading";


export const routes = {
  root: "/",
  feed: "/feed",
  register: "/register",
  changePassword: "/password",
  loading: "/loading"
};

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
    }
  />
);

function isAuthenticated() {
  const token = window.localStorage.getItem("token")
  return token ? true : false
}


export default function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.root} component={LoginPage} />
        <Route exact path={routes.feed} component={Feed} />
        <Route exact path={routes.register} component={RegisterPage} />
        <Route exact path={routes.changePassword} component={ChangePassword} />
        <Route exact path={routes.loading} component={LoadingPage} />
      </Switch>
    </ConnectedRouter>
  );
}
