import React from "react";
import styled from 'styled-components';


export const ContainerPlanner = styled.div`
display: flex-box;
padding: 10px;
box-shadow: 0px 0px 13px 0px rgba(0,0,0,0.15);
width: 50vw;
height: 20vh;
margin: 0 auto;
`
export const InputPlanner = styled.input`
border: none;
background: none;
border-bottom: 1px black solid;
width: 200px;
`
export const ButtonTask = styled.button`
background: black;
color: white;
width: 100px;
border: none;
font-size: 12px;
border-radius: 4px;
`

export function Planner(){
    return (
      <ContainerPlanner>
      </ContainerPlanner>
    )
}

export default Planner; 