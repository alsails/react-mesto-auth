import React from "react";
import '../index.css'
import Header from "./Header";

import { Link } from "react-router-dom";

function Register() {
    return (
        <>
        <Header 
        buttonText = "Войти"/>
        <div className="authentication">
            <h2 className="authentication__title">Регистрация</h2>
            <form className="authentication-form">
                <input className="authentication-form__input" id="email-input" type="email" name="email" placeholder="Email"
                required/>
                <input className="authentication-form__input"  id="password-input" type="password" name="password" placeholder="Пароль"
                required/>
                <button className="authentication-form__save-button">Зарегистрироваться</button>
                <Link to="/sign-in" className="authentication-form__login-link">
                    Уже зарегистрированы? Войти
                </Link>
            </form>
        </div>
        </>
    );
}

export default Register;