import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import '../index.css'
import Header from "./Header.js";
import Footer from "./Footer.js";
import Main from "./Main.js";
import Login from './Login.js'
import ImagePopup from "./ImagePopup.js";
import Api from '../utils/Api.js'
import { CurrentUserContext } from '../contexts/CurrentUserContext.js'
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import DeleteCardPopup from './DeleteCardPopup';
import Register from './Register';



function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)
  const [isDeleteCardPopupOpen, setIsDeleteCardPopupOpen] = useState(false)
  const [isCardPopupOpen, setCardPopupOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState({})
  const [currentUser, setCurrentUser] = useState({})
  const [cards, setCards] = useState([])
  const [isStatus, setIsStatus] = useState(false)

  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    Api
      .getUserInfo()
      .then(res => {
        setCurrentUser(res)
      })
      .then(
        Api
          .getInitialCards()
          .then(res => {
            setCards(res)
          }))
      .catch(err =>
        console.log(err)
      )
  }, [])

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }

  function handleDeleteCardClick(card) {
    setIsDeleteCardPopupOpen(true)
    setSelectedCard(card)
  }

  function handleCardClick(card) {
    setCardPopupOpen(true)
    setSelectedCard(card)
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false)
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setCardPopupOpen(false)
    setIsDeleteCardPopupOpen(false)
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id)

    if (!isLiked) {
      Api
        .putLike(card._id, !isLiked)
        .then((newCard) => {
          setCards((state) =>
            state.map((c) => (c._id === card._id ? newCard : c))
          )
        })
        .catch(err =>
          console.log(err))
    } else {
      Api
        .delLike(card._id, isLiked)
        .then((newCard) => {
          setCards((state) =>
            state.map((c) => (c._id === card._id ? newCard : c))
          )
        })
        .catch(err =>
          console.log(err))
    }
  }

  function handleCardDelete(card) {
    setIsStatus(true)
    Api
      .delCard(card._id)
      .then(() => {
        setCards((state) =>
          state.filter(item => item._id !== (card._id))
        )
        closeAllPopups()
      })
      .catch(err =>
        console.log(err))
      .finally(() => {
        setIsStatus(false)
      })
  }

  function handleUpdateUser(info) {
    setIsStatus(true)
    Api
      .updateUserInfo(info)
      .then((newInfo) => {
        setCurrentUser(newInfo)
        closeAllPopups()
      })
      .catch(err =>
        console.log(err))
      .finally(() => {
        setIsStatus(false)
      })
  }

  function handleUpdateAvatar(avatar) {
    setIsStatus(true)
    Api
      .updateUserAvatar(avatar)
      .then((newInfo) => {
        setCurrentUser(newInfo)
        closeAllPopups()
      })
      .catch(err =>
        console.log(err))
      .finally(() => {
        setIsStatus(false)
      })
  }

  function handleAddPlaceSubmit(data) {
    setIsStatus(true)
    Api
      .addNewCard(data)
      .then((newCard) => {
        setCards([newCard, ...cards])
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setIsStatus(false)
      })
  }

  return (
    <BrowserRouter>
      <div className="root">
        <div className="page">
          {/* <CurrentUserContext.Provider value={currentUser}> */}
          {/* <Header /> */}
          <Routes>
            <Route path="/" element={!loggedIn && <Navigate to="/login" replace />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          {/* <Login /> */}
          <Register />
          {/* <Main
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onDeleteCard={handleDeleteCardClick}
            onCardClick={handleCardClick}
            onCardLike={handleCardLike}
            cards={cards}
          />
          <Footer />
          <EditProfilePopup
            isOpened={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
            status={isStatus}
          />
          <DeleteCardPopup
            card={selectedCard}
            isOpened={isDeleteCardPopupOpen}
            onClose={closeAllPopups}
            onDelCard ={handleCardDelete}
            status={isStatus}
          />
          <AddPlacePopup
            isOpened={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            onAddCard={handleAddPlaceSubmit}
            status={isStatus}
          />

          <EditAvatarPopup
            isOpened={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
            status={isStatus}
          />

          <ImagePopup
            card={selectedCard}
            isOpened={isCardPopupOpen}
            onClose={closeAllPopups}
          />
        </CurrentUserContext.Provider> */}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
