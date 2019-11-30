import React from 'react'
import './PostSection.css'
import styled from 'styled-components'

const PageSection = styled.main`
   margin: 0;
   padding: 0;
   box-sizing: border-box;
`

const TituloH3 = styled.h3`
   margin-left: 120px;
`

const FormContainer = styled.section`
   display: flex;
   flex-direction: column;
   padding: 10px 0;
   margin-left: 20px;
   width: 300px;
`
const InputPost = styled.input`
margin-top: 10px;
margin-bottom: 10px;
border: none; 
border-bottom: solid black 1px ;

`
const ButtonForm = styled.button`
margin-top: 10px;
width: 50px;
margin-left: 120px;
background-color: orange;
color: black;
`
const Linha = styled.hr`
width: 100%
`

// CriarPost = () => {

// }

 
class PostSection extends React.Component {
   constructor() {
      super();
   }

   render() {
      return (
         <PageSection>
            <TituloH3>Formulário</TituloH3>
            <FormContainer>
               <label> Nome de usuário: </label>
               <InputPost type="text" placeholder="nome do usuário Insta4"/>

               <label> Foto de perfil: </label>
               <InputPost type="url" placeholder="https://"/>

               <label> Foto para postar: </label>
               <InputPost type="url" placeholder="https://"/>

               <ButtonForm> Postar </ButtonForm>
            </FormContainer>
            <Linha/>
         </PageSection>
      )
   }
}

export default PostSection;