export const apiConfig = {
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-15',
  headers: {
    authorization: '05cc3a2e-5b2a-47f6-84c3-1337641f5c93',
    'Content-Type': 'application/json'
  }
}

export const validateConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_error',
  errorClass: 'popup__input-error_active'
}

export const userSelectorsConfig = {
  name: '.profile__name',
  about: '.profile__about',
  avatar: '.profile__avatar'
}

export const buttonEditAvatar = document.querySelector('.profile__edit-avatar');
export const buttonEditInfo = document.querySelector('.profile__edit-info');
export const buttonAddCard = document.querySelector('.profile__add-card');
