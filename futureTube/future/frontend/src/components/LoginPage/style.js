import styled from 'styled-components';
import 'normalize.css';

export const Container = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  outline: 0;
  display: flex;
  max-width: 100%;
  height: 100vh;
  margin: 0 auto;
  background: #050505;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const ImgLogin = styled.img`
margin-right: 70px;
width: 600px; 

`
export const SectionForm = styled.div`
  margin-left: 50px;
  width: 100%;
  max-width: 300px; 
`
export const Form = styled.form`
margin-top: 120px;
margin-bottom: 90px;
  h1 {
    color: white;
    font-size: 32px;
    font-family: Roboto, sans-serif;
    margin-bottom: 32px;
    border-width: 3px;
  }

  input {
    height: 30px;
    border-radius: 5px;
    padding: 0 10px;
    background: #050505;
    border: none;
    border-bottom: 1px solid #d4d4d4;
    border-radius: 0;
    outline: none;
    width: 92%;
    color: #d4d4d4;
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
    margin-top: 20px
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
  -webkit-box-pack: center;
  justify-content: center;
  transition: border 0.2s ease 0s, transform 0.2s ease 0s;
  border-width: 3px;
  &:hover {
    transform: translateY(-7px);
  }
`
