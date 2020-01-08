import React from 'react';
import styled from 'styled-components';


const Container = styled.div `
  background-color: #ffffff;
  box-shadow: 0px 0px 15px -2px rgba(0,0,0,0.3);
  width: 45vw;
  margin: 0 auto;
  margin-bottom: 2vh;
`

const InputTask = styled.input `
  border: none;
  height: 3em;
  width: 100%;
  outline: none;
  text-indent: 4em;
  font-size: 15pt;
`



function ListTask() {
    return (
      <Container>
          <InputTask placeholder='O que tem que ser feito?'/>
      </Container>
    );
}


export default ListTask; 