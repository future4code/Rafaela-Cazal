import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from '../Router/index'


const ApplicationForm = props => {
        return (
            <div>
                <h1>inscrição para as viagens</h1>
                <Button onClick={props.goToHome}>Salvar e enviar</Button>
            </div>

        )

}

function mapDispatchToProps(dispatch) {
    return{
        goToHome: () => dispatch(push(routes.root)),
    }

}

export default connect(null, mapDispatchToProps)(ApplicationForm);