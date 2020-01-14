import React from "react";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from '../Router/index'

const TripDetailsPage = props => {
    return(
        <div>
            <h1>candidatos de uma viagem para validação </h1>
            <Button onClick={props.goToListTrips}>ir para Trips list </Button>
        </div>
    )
}

function mapDispatchToProps(dispatch){
    return {
        goToListTrips: () => dispatch(push(routes.tripsList)),

    }
}

export default connect(null, mapDispatchToProps)(TripDetailsPage) 