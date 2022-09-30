import './index.css'
import { enableValidation, checkValidation } from '../components/validate.js';
import { createCard } from '../components/card.js';
import { popupImgButtonClose, closeModalWindow, openModalWindow } from '../components/modal.js'
import {
  buttonAddProfile, popupAdd, buttonPopupAddClose, formCard, profileNameInputAdd, profileProfessionInputAdd,
  buttonEditProfile, popupEdit, profileNameInputEdit, profileProfessionInputEdit, profileName, profileProfession,
  buttonPopupEditClose, formEditProfile, popupImage, avatarUser, idUser, buttonEditAvatar, popupAvatar,
  buttonPopupAvatarClose, submitFormAvatar, urlNewAvatar, avatarSave, createSave, editSave
} from '../components/utils.js';
import { getInformByUser, getCards, editProfile, addNewCard, changeAvatar } from '../components/api.js';

const validateObj = {
  formSelector: '.popup__container',
  inputSelector: '.popup__in-text',
  submitButtonSelector: '.popup__in-button',
  inactiveButtonClass: 'popup__in-button_disabled',
  inputErrorClass: 'form__input_error',
  errorClass: 'form__input-error_active'
};

function submitHandlerEditProfile() {
  editSave.textContent = 'Сохранение...';
  editProfile(`${profileNameInputEdit.value}`, `${profileProfessionInputEdit.value}`)
    .then((res) => {
      profileName.textContent = res.name;
      profileProfession.textContent = res.about;
      closeModalWindow(popupEdit);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      editSave.textContent = 'Сохранить';
    })
}

function renderCard(el, container) {
  const containerCard = document.querySelector(`.${container}`);
  const element = createCard(el);
  containerCard.prepend(element);
}

Promise.all([getInformByUser(), getCards()])
  .then(([user, cards]) => {
    idUser = user._id;
    profileName.textContent = user.name;
    profileProfession.textContent = user.about;
    avatarUser.src = user.avatar;
    cards.reverse().forEach(function (el) {
      renderCard(el, 'cards');
    })
  })
  .catch((err) => {
    console.log(err);
  })

popupImgButtonClose.addEventListener('click', function () {
  closeModalWindow(popupImage);
});

buttonAddProfile.addEventListener('click', function () {
  openModalWindow(popupAdd);
  checkValidation(formCard, validateObj)
});

buttonPopupAddClose.addEventListener('click', function () {
  closeModalWindow(popupAdd);
});

formCard.addEventListener('submit', function (evt) {
  createSave.textContent = 'Сохранение...';
  evt.preventDefault();
  addNewCard(`${profileNameInputAdd.value}`, `${profileProfessionInputAdd.value}`)
    .then((res) => {
      renderCard(res, 'cards');
      formCard.reset();
      closeModalWindow(popupAdd);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      createSave.textContent = 'Сохранить';
    })
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

buttonEditAvatar.addEventListener('click', function () {
  openModalWindow(popupAvatar);
  checkValidation(submitFormAvatar, validateObj);
});

buttonPopupAvatarClose.addEventListener('click', function () {
  closeModalWindow(popupAvatar);
});

submitFormAvatar.addEventListener('submit', function (evt) {
  avatarSave.textContent = 'Сохранение...';
  evt.preventDefault();
  changeAvatar(urlNewAvatar.value)
    .then((res) => {
      avatarUser.src = res.avatar;
      submitFormAvatar.reset();
      closeModalWindow(popupAvatar);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      avatarSave.textContent = 'Сохранить';
    })
});

enableValidation(validateObj);





