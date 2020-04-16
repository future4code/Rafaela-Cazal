import React from 'react';
import styled from 'styled-components';
import 'normalize.css';
import logo from '../../assets/BlackLogo.png';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import VideoImg from '../../assets/undrawVideoiv.svg';



export const LoginContainer = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  outline: 0;
  display: flex;
  max-width: 100%;
  height: 100vh;
  margin: 0 auto;
  background: #F0F0F0F5;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const ImgLogin = styled.img`
  margin-right: 70px;
  margin-top: 110px;
  width: 600px;
`

export const LogoImg = styled.img`
  width: 300px;
  margin-left: -60px;
  margin-top: -15px;
`


export const Cta = styled.p`
  font-family: Roboto, sans-serif;
  font-size: 19px;
  font-weight: 500;
  margin-top: -65px;
  margin-left: 230px;
  width: 600px;
`

export const SectionForm = styled.div`
  margin-left: 100px;
  margin-bottom: 80px;
  width: 100%;
  max-width: 300px; 
`

export const Form = styled.form`
margin-top: 160px;
margin-bottom: 80px;
  h3 {
    color: black;
    font-size: 28px;
    font-family: Roboto, sans-serif;
    margin-bottom: 20px;
    border-width: 3px;
  }

  input {
    height: 30px;
    border-radius: 4px;
    margin-bottom: 5px;
    border: 1px solid rgba(230,230,230, 1);
    padding: 0 10px;
    background: #F0F0F0F5;
    outline: none;
    width: 92%;
    color: #696969;
    font: 400 17px Roboto, sans-serif;
  }


  a{
    display: flex;
    align-items: center;
    font-family: Roboto, sans-serif;
    font-size: 18px;
    color: #0f5299;
    text-decoration: none;
    font-weight: 500;
    transition: opacity 0.2s;
    &:hover {
      opacity: 0.8;
    }

  svg {
    margin-right: 8px;
  }

  }


  a.firstLink {
    margin-top: 40px
  }

  a.link {
    margin-top: 10px
  }


`
export const Button = styled.button`
  width: 100%;
  height: 60px;
  background: #ff602f;
  border: none;
  border-radius: 8px;
  color: #ffff;
  font-weight: 600;
  margin-top: 16px;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  font-family: Roboto, sans-serif;
  line-height: 60px;
  justify-content: center;
  transition: filter 0.2s;
  &:hover {
    filter: brightness(98%);
  }`


export function LoginPageStyle(props) {

  return (
    <LoginContainer>
      <SectionForm>
        <LogoImg src={logo} alt="Logo FutureTube" />
        <Cta>Assista as aulas gravadas da Labenu quando e onde estiver!</Cta>
        <Form onSubmit={props.onSubmit}>
          <h3>Faça seu login</h3>
          <input
            name='email'
            type="text"
            onChange={props.onChange}
            value={props.email}
            placeholder='E-mail'
          />
          <input
            name='password'
            type="password"
            onChange={props.onChange}
            value={props.password}
            placeholder='Senha'
          />

          <Button type="submit" to="/feed">Entrar</Button>

          <Link className="firstLink" to="/register">
            <FiLogIn size={16} color="#ff602f" />
            Não tenho cadastro
          </Link>

          <Link className="link" to='/password'>
            <FiLogIn size={16} color="#ff602f" />
            Esqueci minha senha
          </Link>

        </Form>
      </SectionForm>


      <ImgLogin src={VideoImg} alt="Onlinevideo" />
    </LoginContainer>
  )

}