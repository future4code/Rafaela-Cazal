import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import { LoginPage } from "../../components/LoginPage";
import { RegisterPage } from '../../components/RegisterPage';
import { Feed } from "../../components/Feed";
import { ChangePassword } from "../../components/ChangePassword";


export const routes = {
  root: "/",
  register: "/register",
  changePassword: "/password",
  feed: "/feed"
};


const isAuthenticated = () => {
  const token = window.localStorage.getItem("token")
  return token ? true : false
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
    }
  />
);



function Router(props) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={routes.root} component={LoginPage} />
        <Route exact path={routes.register} component={RegisterPage} />
        <Route exact path={routes.changePassword} component={ChangePassword} />
        <PrivateRoute exact path={routes.feed} component={Feed}/>
      </Switch>
    </BrowserRouter>
  );
}



export default Router; 