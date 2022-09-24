import './pages/index.css'
import { initialCards } from './components/constants.js';
import { enableValidation } from './components/validate.js';
import { renderCard } from './components/card.js';
import { popupImgButtonClose, closeModalWindow, openModalWindow } from './components/modal.js'
import {
  buttonAddProfile, popupAdd, buttonPopupAddClose, formCard, profileNameInputAdd, profileProfessionInputAdd,
  buttonEditProfile, popupEdit, profileNameInputEdit, profileProfessionInputEdit, profileName, profileProfession,
  buttonPopupEditClose, formElement, submitHandlerEditProfile
} from './components/utils.js';

initialCards.forEach(function (el) {
  renderCard(el.name, el.link, 'cards');
});

popupImgButtonClose.addEventListener('click', function () {
  const popupImgOpene = document.querySelector('.popup-img');
  closeModalWindow(popupImgOpene);
});

buttonAddProfile.addEventListener('click', function () {
  openModalWindow(popupAdd);
});

buttonPopupAddClose.addEventListener('click', function () {
  closeModalWindow(popupAdd);
});

formCard.addEventListener('submit', function (evt) {
  evt.preventDefault();
  renderCard(profileNameInputAdd.value, profileProfessionInputAdd.value, 'cards');
  profileNameInputAdd.value = '';
  profileProfessionInputAdd.value = '';
  closeModalWindow(popupAdd);
});

buttonEditProfile.addEventListener('click', function () {
  openModalWindow(popupEdit);
  profileNameInputEdit.value = profileName.textContent;
  profileProfessionInputEdit.value = profileProfession.textContent;
});

buttonPopupEditClose.addEventListener('click', function () {
  closeModalWindow(popupEdit);
});

formElement.addEventListener('submit', submitHandlerEditProfile);

Array.from(document.querySelectorAll('.button-opene')).forEach(function (el) {
  el.addEventListener('click', function () {
    enableValidation({
      formSelector: '.popup__container',
      inputSelector: '.popup__in-text',
      submitButtonSelector: '.popup__in-button',
      inactiveButtonClass: 'popup__in-button_disabled',
      inputErrorClass: 'form__input_error',
      errorClass: 'form__input-error_active'
    });
  });
});
