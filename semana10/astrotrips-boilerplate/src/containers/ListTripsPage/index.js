import React from "react";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from '../Router/index';
import { getTrips } from '../../actions/tripsAction'
import { render } from "react-dom";

class ListTripsPage extends React.Component {


  componentDidMount(){
    this.props.fetchTrips()
  }

  render(){
    console.log(this.props.trips)
    return (
            <div>
            <h1>todas as viagens</h1>
            {this.props.trips.map((trip)  =>(
            <div> 
            <li>{trip.name}</li>
            </div>))}
            <Button onClick={this.props.goToTripDetails}>Trips Details</Button> 
            </div>
            );
     }
};

const mapStateToProps = state => ({
trips: state.trips.allTrips

}

);

function mapDispatchToProps(dispatch) {
  return {
    goToTripDetails: () => dispatch(push(routes.tripsDetails)),
    fetchTrips: () => dispatch(getTrips())
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(ListTripsPage) 