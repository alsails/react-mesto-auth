import React from "react";
import Logo from '../images/logo.svg';
import '../index.css'

function Header() {
    return (
        <header className="header">
            <img src={Logo} alt="Логотип" className="header__logo" />
            <div className="header__info">
                {/* <p className="header__email">email@mail.com</p> */}
                <button className="header__button">Войти</button>
            </div>
        </header>
    );
}

export default Header;