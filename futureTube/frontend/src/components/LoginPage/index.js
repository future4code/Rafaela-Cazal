import React from 'react';
import './style.css';
import onlineVideo from '../../assets/undrawVideoiv.svg';

export default function LoginPage() {

    return(
        <div className="logon-container">
            <section className="form">

                <form>
                    <h1>Faça seu login</h1>

                    <input type="text" placeholder="e-mail" />
                    <input type="text" placeholder="senha" />
                    <button className="button" type="submit">Entrar</button>
                        <a href="" > Não tenho cadastro</a>
                </form>
            </section>

            <img src={onlineVideo} alt="Video page"/>
        </div>
    );
}