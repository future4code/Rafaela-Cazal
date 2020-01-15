import React from "react";
import Button from "@material-ui/core/Button";
// import styled from "styled-components";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from '../Router/index'

const HomePage = props => {


        console.log(props)
        return (
            <div>
            <h1>FUTUREX (home page)</h1>
            <Button onClick={props.goToFormPage}>Form</Button> 
            <Button onClick={props.goToLoginPage}>Admin</Button> 
            <Button onClick={props.goToAboutPage}>About</Button> 
            <Button onClick={props.goToListTripsPage}>List Trips</Button> 
            <Button onClick={props.goToTripsDetailsPage}>Trips Details</Button> 
            <Button onClick={props.goToCreateTripsPage}>Create trips</Button>
            </div>

        );

};

function mapDispatchToProps(dispatch) {
    return {
        goToFormPage: () => dispatch(push(routes.formPage)),
        goToLoginPage: () => dispatch(push(routes.loginAdmin)),
        goToAboutPage: () => dispatch(push(routes.aboutPage)),
        goToListTripsPage: () => dispatch(push(routes.tripsList)),
        goToTripsDetailsPage: () => dispatch(push(routes.tripsDetails)),
        goToCreateTripsPage: () => dispatch(push(routes.createTrips)),

    }


}

export default connect(null, mapDispatchToProps)(HomePage)  