import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import LanguageChooser from "../../containers/LanguageChooser";
import { changePlanetAction } from "../../actions/planet";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  padding: 0px;
  color: white;
  overflow: hidden;
  height: 100vh;
`;

const Logo = styled.img`
  width: 300px;
  height: 300px;
`;

const App = props => {
  let selectedText;

  switch (props.selectedLanguage) {
    case "pt-br":
      selectedText = `Olá ${props.selectedPlanet}!`;
      break;
    case "es":
      selectedText = `¡Hola ${props.selectedPlanet}!`;
      break;
    case "en":
      selectedText = `Hello ${props.selectedPlanet}!`;
      break;
    default:
      selectedText = "";
  }

  let planetImage;

  if (props.selectedPlanet === "Terra") {
    planetImage =
      "https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/westernhemisphere_geos_2019246_lrg.jpg";
  } else if (props.selectedPlanet === "Saturno") {
    planetImage =
      "https://solarsystem.nasa.gov/system/feature_items/images/28_saturn.png";
  } else {
    planetImage = "ImagemDesconhecida";
  }

  return (
    <AppWrapper>
      <img width="200px" src={planetImage} />
      <h2>{selectedText}</h2>
      <LanguageChooser />
      <button onClick={() => props.changePlanet("Terra")}>Terra</button>
      <button onClick={() => props.changePlanet("Saturno")}>Saturno</button>
    </AppWrapper>
  );
};

const mapStateToProps = state => {
  return {
    selectedLanguage: state.languages.selectedLanguage,
    selectedPlanet: state.planets.selectedPlanet
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changePlanet: planet => dispatch(changePlanetAction(planet))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
