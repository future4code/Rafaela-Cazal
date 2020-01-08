import React from 'react';
import styled from 'styled-components';

const Menu = styled.div`
border: none;
height: 3em;
width: 100%;
outline: none;
text-indent: 4em;
font-size: 15pt; 
`
const ButtonMenu = styled.button`
border: 1px solid black;
height: 2em;
`

function MenuSelection() {
  return (
    <Menu>
     <ButtonMenu>Marcar todas como completas</ButtonMenu>
     <ButtonMenu>Todas</ButtonMenu>
     <ButtonMenu>Pendentes</ButtonMenu>
     <ButtonMenu>Completas</ButtonMenu>
     <ButtonMenu>Remover completas</ButtonMenu  >
    </Menu>
  );
}

export default MenuSelection;