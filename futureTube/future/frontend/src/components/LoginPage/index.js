import React, { useState, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'
import styled from 'styled-components';
import logo from '../../assets/WhiteLogo.png';
import { Container, SectionForm, Button, Form, ImgLogin } from './style';
import VideoImg from '../../assets/undrawVideoiv.svg';

export const LogoImg = styled.img`
  width: 300px;
  margin-top: -50px;
`

export default function LoginPage() {
  async function handleLogin(e) {
    e.preventDefault()
  }

  return (
    <Container>

      <SectionForm>

      <LogoImg src={logo} alt="Logo FutureTube" />
        <Form onSubmit={handleLogin}>
          <h1>Faça seu login</h1>
          <input 
          placeholder="e-mail"
            type="text"
            // value={email}
          />
           <input
            placeholder="password"
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
    </Container>
  )
}