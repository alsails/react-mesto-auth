import {useState, useEffect} from "react";
import PopupWithForm from "./PopupWithForm";
import '../index.css'

function AddPlacePopup({isOpened, onClose, onAddCard, status}) {

    const [cardName, setCardName] = useState("")
    const [cardLink, setCardLink] = useState("")

    const  handleCardNameChange = e => {
      setCardName(e.target.value)
    }
  
     const  handleCardLinkChange = e => {
      setCardLink(e.target.value)
    }

    useEffect(() => {
      if (isOpened) {
          setCardName("")
          setCardLink("")
      }
    }, [isOpened]);

    function handleSubmit(e) {
        e.preventDefault();

        onAddCard({
            name: cardName,
            link: cardLink,
        });
    }

    return (
        <PopupWithForm
            name='cards'
            title='Новое место'
            buttonText={status ? 'Создание' : 'Создать'}
            isOpen={isOpened}
            onClose={onClose}
            onSubmit={handleSubmit}
          >
            <input id="title-input" type="text" className="form__input" name="name" placeholder="Название" required
              minLength="2" maxLength="30" value={cardName} onChange={handleCardNameChange} />
            <span id="title-input-error" className="form__error form__error-visible"></span>
            <input id="link-input" type="url" className="form__input" name="link" placeholder="Ссылка на картинку"
              required value={cardLink} onChange={handleCardLinkChange} />
            <span id="link-input-error" className="form__error form__error-visible"></span>
          </PopupWithForm>
    );
}

export default AddPlacePopup;