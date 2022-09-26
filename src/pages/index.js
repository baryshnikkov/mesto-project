import './index.css'
import { initialCards } from '../components/constants.js';
import { enableValidation, checkValidation } from '../components/validate.js';
import { createCard } from '../components/card.js';
import { popupImgButtonClose, closeModalWindow, openModalWindow } from '../components/modal.js'
import {
  buttonAddProfile, popupAdd, buttonPopupAddClose, formCard, profileNameInputAdd, profileProfessionInputAdd,
  buttonEditProfile, popupEdit, profileNameInputEdit, profileProfessionInputEdit, profileName, profileProfession,
  buttonPopupEditClose, formEditProfile, popupImage
} from '../components/utils.js';

const validateObj = {
  formSelector: '.popup__container',
  inputSelector: '.popup__in-text',
  submitButtonSelector: '.popup__in-button',
  inactiveButtonClass: 'popup__in-button_disabled',
  inputErrorClass: 'form__input_error',
  errorClass: 'form__input-error_active'
};

function submitHandlerEditProfile(evt) {
  evt.preventDefault();
  profileName.textContent = profileNameInputEdit.value;
  profileProfession.textContent = profileProfessionInputEdit.value;
  closeModalWindow(popupEdit);
}

function renderCard(name, link, container) {
  const containerCard = document.querySelector(`.${container}`);
  const element = createCard(name, link);
  containerCard.prepend(element);
}

initialCards.forEach(function (el) {
  renderCard(el.name, el.link, 'cards');
});

popupImgButtonClose.addEventListener('click', function () {
  closeModalWindow(popupImage);
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
  formCard.reset();
  closeModalWindow(popupAdd);
});

buttonEditProfile.addEventListener('click', function (evt) {
  openModalWindow(popupEdit);
  profileNameInputEdit.value = profileName.textContent;
  profileProfessionInputEdit.value = profileProfession.textContent;
  checkValidation(formEditProfile, validateObj);
});

buttonPopupEditClose.addEventListener('click', function () {
  closeModalWindow(popupEdit);
});

formEditProfile.addEventListener('submit', submitHandlerEditProfile);

enableValidation(validateObj);
