import React from 'react';
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import HomePage from '../HomePage'
import ApplicationForm from '../ApplicationForm';
import AboutPage from '../AboutPage';
import ListTripsPage from '../ListTripsPage';
import TripDetailsPage from '../TripDetailsPage';


export const routes = {
  root: "/",
  formPage: "/form",
  loginAdmin: "/login",
  aboutPage: "/institutional",
  tripsList: "/trips/list",
  tripsDetails: "/trips/details",

};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.root} component={HomePage} exact/>
        <Route path={routes.formPage} component={ApplicationForm} exact />
        <Route path={routes.loginAdmin} component={LoginPage} exact />
        <Route path={routes.aboutPage} component={AboutPage} exact />
        <Route path={routes.tripsList} component={ListTripsPage} exact />
        <Route path={routes.tripsDetails} component={TripDetailsPage} exact />
      </Switch>
    </ConnectedRouter>
  );
}
export default Router;