import React from "react";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from '../Router/index'

class TripDetailsPage extends React.Component {

    
    render() {
      return (
        <div>
        <h1>candidatos de uma viagem para validação </h1>
        <Button onClick={this.props.goToListTrips}>ir para Trips list </Button>
        <Button onClick={this.props.goToHome}>ir para home </Button>
    </div>
      );
    }
  }


function mapDispatchToProps(dispatch){
    return {
        goToListTrips: () => dispatch(push(routes.tripsList)),
        goToHome: () => dispatch(push(routes.root)),
    }
}

export default connect(null, mapDispatchToProps)(TripDetailsPage) 