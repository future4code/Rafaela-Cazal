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
        <Route exact path={routes.root} component={HomePage} />
        <Route path={routes.formPage} component={ApplicationForm} />
        <Route path={routes.loginAdmin} component={LoginPage} />
        <Route path={routes.aboutPage} component={AboutPage} />
        <Route path={routes.tripsList} component={ListTripsPage} />
        <Route path={routes.tripsDetails} component={TripDetailsPage} />
      </Switch>
    </ConnectedRouter>
  );
}
export default Router;