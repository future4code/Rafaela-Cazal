import React from 'react';
import styled from 'styled-components';


const Container = styled.form`
  height: 80vh;
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
  text-align: justify;
  display: flex;
  align-items: center;
  justify-content: justify;
`

const Header = styled.h2`
  margin-bottom: 40px;
  font-weight: 600;
  margin-top: 40px;
`
const DateParagraph = styled.p`
font-size: 12px;
text-align: initial;
width: 25vw;
margin-bottom: 1px;
margin-top: 2px;
color: #666666;
`

const Input = styled.input`
  width: 60%; 
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
  margin-bottom: 15px;
`

const Button = styled.button`
  width: 50%;
  height: 3em;
  margin-top: 15px;
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

export function RegisterForm(props) {
  return(
    <Container onSubmit={props.onSubmit}>

      <Header>Obtenha acesso aos vídeos!</Header>
      <Input
        type='text'
        name='name'
        placeholder='Nome'
        onChange={props.onChange}
        value={props.name}
      />
      <Input
        type='text'
        name='email'
        placeholder='E-mail'
        onChange={props.onChange}
        value={props.email}
      />
       <Input
        type='password'
        name='password'
        placeholder='Senha'
        onChange={props.onChange}
        value={props.password}
      />
      <DateParagraph>Data de nascimento</DateParagraph>
      <Input
        type='date'
        name='birthDate'
        label='Data de nascimento'
        placeholder='Data de nascimento'
        onChange={props.onChange}
        value={props.birthDate}
      />
     <Input
        type='picture'
        name='picture'
        placeholder='Url da sua foto'
        onChange={props.onChange}
        value={props.picture}
      />
      <Button>Cadastrar</Button>
    </Container>
  );
} 