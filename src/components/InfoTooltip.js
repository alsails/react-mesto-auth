import React from "react";
import '../index.css'
import error from "../images/Union-error.svg"
import correct from "../images/Union.svg"

function InfoTooltip({isOpen, onClose, status}) {
    const linkImg = status ? error : correct
    return (
        <div className={`popup popup_type_info ${isOpen ? `popup_opened` : ""}`}>
        <div className="popup__container">
            <button type="button" id="profile-close" className="popup__close-button" onClick={onClose}></button>
            <img className="popup__img-info" src={linkImg} alt="Картинка"/>
            <h2 className="popup__title-info">{`${status ? `Что-то пошло не так! Попробуйте ещё раз.` : `Вы успешно зарегистрировались!`}`}</h2>
        </div>
    </div>
    );
}

export default InfoTooltip;