import React from "react";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from '../Router/index'

const ListTripsPage= props => {
        return (
            <div>
               <h1>todas as viagens</h1>
            <Button onClick={props.goToTripsDetails}>Trips Details</Button> 
            </div>

        );

};

function mapDispatchToProps(dispatch) {
    return {
      goToTripsDetails: () => dispatch(push(routes.tripsDetails)),
    }


}

export default connect(null, mapDispatchToProps)(ListTripsPage) 