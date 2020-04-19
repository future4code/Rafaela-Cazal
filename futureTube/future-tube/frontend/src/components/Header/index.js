import styled from 'styled-components';


export const Header = styled.header`
    position: fixed;
    top: 0%;
    bottom: 98%;
    width: 98vw;
    height: 10vh;
    display: flex;
    padding: 0 5vw 0 1vw;
    align-items: center;
    justify-content: space-between;
    background-color: #dfdfdf;
`;

const logOut = () => {
    localStorage.removeItem("token");
    alert("Você foi deslogado")
    this.props.goToLoginPage();
  }

  