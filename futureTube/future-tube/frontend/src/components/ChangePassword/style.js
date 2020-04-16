import React from 'react';
import styled from 'styled-components';
import VideoPage from '../VideoPage'

const Container = styled.form`
  height: 40vh;
  width: 25vw;
  min-width: 500px;
  font-family: Roboto, sans-serif;
  font-weight: 500;
  background: #f0f0f0;
  box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  margin: 5vh auto 0 auto;
  margin-top: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const FormContainer = styled.form`
  display: flex;
  width: 50%;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: space-around; 

  h2 {
    margin-bottom: 1vh;
    margin-bottom: 40px;
    font-weight: 600;
  }

 input {
  width: 100%; 
  display: 'inline';
  height: 50px;
  padding: 0 10px;
  color: #696969;
  background: #fcfcfc;
  border-radius: 5px;
  border: 1px solid rgba(230,230,230, 1);
  font-family: Roboto, sans-serif;
  font-weight: 400;
  ::placeholder{
    text-align: left;
  }
  margin: 0 20px 20px 0;
 }
`


const Button = styled.button`
  width: 70%;
  height: 3em;
  border-radius: 4px;
  border: 1px solid rgba(230,230,230, 1);
  background: #ff602f;
  color: white;
  outline: none;
  font-size: 18px;
  font-family: Roboto, sans-serif;
  font-weight: 600;
  justify-content: center;
  transition: filter 0.2s;
  &:hover {
    filter: brightness(98%);
  }
`

export default function ChangePasswordForm(props) {
  return (
    <Container >
      <FormContainer onSubmit={props.onSubmit}>
        <h3>Confirme seu email abaixo para a redefinição de senha</h3>
        <input
          name='confirmEmail'
          type="email"
          onChange={props.onChange}
          value={props.confirmEmail}
          placeholder='E-mail de redefinição'
        />

        <Button>Confirmar</Button>

      </FormContainer>
    </Container>
  );
} 