import { useContext, useState, useEffect } from "react";
import '../index.css'
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function EditProfilePopup({onUpdateUser, isOpened, onClose, status }) {
    const currentUser = useContext(CurrentUserContext)

    const [profileName, setProfileName] = useState("")
    const [profileDescription, setProfileDescription] = useState("")

    const  handleNameChange = e => {
        setProfileName(e.target.value)
    }
    // input change
    const  handleDescriptionChange = e => {
        setProfileDescription(e.target.value)
    }

    useEffect(() => {
        if (isOpened) {
            setProfileName(currentUser.name)
            setProfileDescription(currentUser.about)
        }
      }, [isOpened, currentUser]);

    function handleSubmit(e) {
        e.preventDefault();

        onUpdateUser({
            name: profileName,
            about: profileDescription
        });
    }

    return (
        <PopupWithForm
            name='profile'
            title='Редактировать профиль'
            buttonText={status ? 'Сохранение' : 'Сохранить'}
            isOpen={isOpened}
            onClose={onClose}
            onSubmit={handleSubmit}
        >
            <input type="text" id="name-input" className="form__input" name="name" placeholder="Ваше Имя" required
                minLength="2" maxLength="40" value={profileName} onChange={handleNameChange} />
            <span id="name-input-error" className="form__error form__error-visible"></span>
            <input id="description-input" type="text" className="form__input" name="description" placeholder="О вас"
                required minLength="2" maxLength="200" value={profileDescription} onChange={handleDescriptionChange} />
            <span id="description-input-error" className="form__error form__error-visible"></span>
        </PopupWithForm>
    );
}

export default EditProfilePopup;
