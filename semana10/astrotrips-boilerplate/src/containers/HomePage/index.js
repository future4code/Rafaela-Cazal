import React from "react";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from '../Router/index'

const HomePage = props => {


        console.log(props)
        return (
            <div>
               <h1>WELCOME TO FUTUREX (home page)</h1>
            <Button onClick={props.goToFormPage}>Form</Button> 
            <Button onClick={props.goToLoginPage}>Admin</Button> 
            <Button onClick={props.goToAboutPage}>About</Button> 
            </div>

        );

};

function mapDispatchToProps(dispatch) {
    return {
        goToFormPage: () => dispatch(push(routes.formPage)),
        goToLoginPage: () => dispatch(push(routes.loginAdmin)),
        goToAboutPage: () => dispatch(push(routes.aboutPage)),


    }


}

export default connect(null, mapDispatchToProps)(HomePage)  