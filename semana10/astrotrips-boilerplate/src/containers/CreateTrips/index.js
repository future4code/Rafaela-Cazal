import React from 'react';
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import { push } from "connected-react-router";
import { routes } from '../Router/index'

const CreateTrips = props => {


        console.log(props)
        return (
            <div>
               <h1>from de criar viagens </h1>
            <Button onClick={props.goToTripsList}>Trip List</Button> 
            </div>

        );

};

function mapDispatchToProps(dispatch) {
    return {
        goToTripsList: () => dispatch(push(routes.tripsList)),
    }


}

export default connect(null, mapDispatchToProps)(CreateTrips)  