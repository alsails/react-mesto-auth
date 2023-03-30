import React from "react";
import '../index.css'
import Header from "./Header";

function Login() {
    return (
        <>
        <Header 
        buttonText = "Регистрация"/>
        <div className="authentication">
            <h2 className="authentication__title">Вход</h2>
            <form className="authentication-form">
                <input className="authentication-form__input" id="email-input" type="email" name="email" placeholder="Email"
                required/>
                <input className="authentication-form__input"  id="password-input" type="password" name="password" placeholder="Пароль"
                required/>
                <button className="authentication-form__save-button">Войти</button>
            </form>
        </div>
        </>
    );
}

export default Login;