import { useEffect, useRef } from "react";
import '../index.css'
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpened, onClose, onUpdateAvatar, status }) {
    const avatarRef = useRef()

    const handleAvatarChange = e => {
        return avatarRef.current.value
    }

    useEffect(() => {
        avatarRef.current.value = ''
    }, [isOpened]);

    function handleSubmit(e) {
        e.preventDefault();

        onUpdateAvatar({
            avatar: avatarRef.current.value,
        });
    }

    return (
        <PopupWithForm
            name='avatar'
            title='Обновить аватар'
            buttonText={status ? 'Сохранение' : 'Сохранить'}
            isOpen={isOpened}
            onClose={onClose}
            onSubmit={handleSubmit}
        >
            <input id="avatar-input" type="url" className="form__input" name="avatar" placeholder="Ссылка на картинку"
                required ref={avatarRef} onChange={handleAvatarChange} />
            <span id="avatar-input-error" className="form__error form__error-visible"></span>
        </PopupWithForm>
    );
}

export default EditAvatarPopup;