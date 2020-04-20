import axios from "axios";
import { push } from "connected-react-router";
import { routes } from "../containers/Router";


const BaseURL = 'https://us-central1-lubetube-db4e7.cloudfunctions.net/app'


export const autenticateLogin = (email, password) => async (dispatch) => {
    const loginInformation = {
        email,
        password,
    }

    try {
        const response = await axios.post(`${BaseURL}/login`, loginInformation);

        const userToken = response.data.token;
        window.localStorage.setItem("token", userToken);

        dispatch(push(routes.feed))

    } catch (error) {
        window.alert("Ocorreu um erro ao tentar fazer login.")
    }
}


export const createUser = (name, email, password, birthDate, picture) => async (dispatch) => {
    const registerInformation = {
        name,
        email,
        password,
        birthDate,
        picture
    }

    try {
        const response = await axios.post(`${BaseURL}/signup`, registerInformation);

        const userToken = response.data.token;
        window.localStorage.setItem("token", userToken);

        dispatch(push(routes.root))

        window.alert("Cadastro realizado com sucesso!")
    } catch (error) {
        window.alert("Ocorreu um erro ao tentar se cadastrar")
    }

}


export const changePassword = (email) => async (dispatch) => {
    const changeInformation = {
        email
    }

    try {

        await axios.post(`${BaseURL}/password`, changeInformation);

        window.alert("E-mail enviado. Acesse o link para redefinir sua senha.")

        dispatch(push(routes.root))

    } catch (error) {
        window.alert("Ocorreu um erro ao tentar enviar e-mail")
    }
}


export const logOut = () => async (dispatch) => {
        window.localStorage.removeItem("token");
        dispatch(push(routes.root))
    }



