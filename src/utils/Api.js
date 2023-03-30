import React from "react";

class Api extends React.Component {
  constructor({ baseUrl, headers }, props) {
    super(props);
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getInitialCards() {
    return fetch(`${this.baseUrl}/cards`, {
      method: 'GET',
      headers: this.headers
    })
    .then(this._checkResponse)
  }

  getUserInfo() {
    return fetch(`${this.baseUrl}/users/me`, {
      method: 'GET',
      headers: this.headers
    })
    .then(this._checkResponse)
  }

  updateUserAvatar(data) {
    return fetch(`${this.baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      body: JSON.stringify({
        avatar: data.avatar
      }),
      headers: this.headers
    })
    .then(this._checkResponse)
  }

  updateUserInfo(data) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: 'PATCH',
      body: JSON.stringify({
        name: data.name,
        about: data.about
      }),
      headers: this.headers
    })
    .then(this._checkResponse)
  }

  addNewCard(data) {
    return fetch(`${this.baseUrl}/cards`, {
      method: 'POST',
      body: JSON.stringify({
        name: data.name,
        link: data.link
      }),
      headers: this.headers
    })
    .then(this._checkResponse)
  }

  delCard(data) {
    return fetch(`${this.baseUrl}/cards/${data}`, {
      method: 'DELETE',
      headers: this.headers
    })
    .then(this._checkResponse)
  }

  delLike(data) {
    return fetch(`${this.baseUrl}/cards/${data}/likes`, {
      method: 'DELETE',
      headers: this.headers
    })
    .then(this._checkResponse)
  }

  putLike(data) {
    return fetch(`${this.baseUrl}/cards/${data}/likes`, {
      method: 'PUT',
      headers: this.headers
    })
    .then(this._checkResponse)
  }
}

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-59',
  headers: {
    authorization: '1e9d1083-106c-4496-b210-76f261e591ba',
    'Content-Type': 'application/json'
  }
});

export default api;