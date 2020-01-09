import React from 'react';
import styled from 'styled-components';
import ListTask from './components/ListTask';

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

class AppContainer {
    render() {
    <MainContainer>
    <Title>4Task</Title>
    <ListTask/>
    </MainContainer>
  };
}

export default AppContainer;
