import React from "react";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from '../Router/index'

const AboutPage = props => {
        return (
            <div>
               <h1>Sobre e dúvidas frequentes</h1>
            <Button onClick={props.goToHome}>voltar pra home</Button> 
            <Button onClick={props.goToApplicationForm}>se inscrever para viagens</Button> 
            </div>

        );

};

function mapDispatchToProps(dispatch) {
    return {
      goToHome: () => dispatch(push(routes.root)),
      goToApplicationForm: () => dispatch(push(routes.formPage)),
    }


}

export default connect(null, mapDispatchToProps)(AboutPage) 