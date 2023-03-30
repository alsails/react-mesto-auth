import React from "react";
import Logo from '../images/logo.svg';
import '../index.css'

function Header() {
    return (
        <header className="header">
            <img src={Logo} alt="Логотип" className="header__logo" />
        </header>
    );
}

export default Header;