import React from 'react';
import styled from 'styled-components';
import ListTask from './components/ListTask';
// import { createStore } from 'redux';
// import rootReducer from './reducers';
// import { Provider } from "react-redux";

const MainContainer = styled.div `
  background-color: #f4f4f4;
  height: 100vh;
  width: 100vw;
 }
`
const Title = styled.p `
  font-weight: 200;
  color: #b83f45;
  text-align: center;
  font-size: 10vh;
  padding: 5vh;
`


function App() {
  return (
    <MainContainer>
    <Title>4Task</Title>
    <ListTask/>
    </MainContainer>
  );
}

export default App;
