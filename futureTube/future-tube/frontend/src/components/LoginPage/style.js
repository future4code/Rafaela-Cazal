import React from 'react';
import styled from 'styled-components';
import 'normalize.css';
import logo from '../../assets/BlackLogo.png';
import { Link, useHistory } from 'react-router-dom';
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
margin-top: 100px;
width: 600px; 

`
export const SectionForm = styled.div`
  margin-left: 100px;
  margin-bottom: 50px;
  width: 100%;
  max-width: 300px; 
`

export const Form = styled.form`
margin-top: 130px;
margin-bottom: 80px;
  h1 {
    color: black;
    font-size: 32px;
    font-family: Roboto, sans-serif;
    margin-bottom: 32px;
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
    font: 400 20px Roboto, sans-serif;
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

  export const LogoImg = styled.img`
  width: 300px;
  margin-top: -15px;
  margin-left: -60px;
`

export function LoginPageStyle() {
  async function handleLogin(e) {
    e.preventDefault()
  }

  return (
    <LoginContainer>
      <SectionForm>
      <LogoImg src={logo} alt="Logo FutureTube" />
        <Form onSubmit={handleLogin}>
          <h1>Faça seu login</h1>
          <input 
          placeholder="E-mail"
            type="text"
            // value={email}
          />
           <input
            placeholder="Senha"
            type="password"
            // value={password}
          />
          <Button type="submit" to="/videos">Entrar</Button>

          <Link className="firstLink"to="/register">
            <FiLogIn size={16} color="#ff602f" />
            Não tenho cadastro
          </Link>

          <Link className="link" to='/changePassword'>
          <FiLogIn size={16} color="#ff602f" />
            Esqueci minha senha 
          </Link>

        </Form>
      </SectionForm>


      <ImgLogin src={VideoImg} alt="Onlinevideo"/>
    </LoginContainer>
  )

}