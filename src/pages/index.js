import './index.css';
import * as constants from '../utils/constants.js';
import Api from '../components/Api.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupDeleteCard from '../components/PopupDeleteCard.js';
import FormValidator from '../components/FormValidator.js';

const formEditAvatar = new PopupWithForm('#popup-edit-avatar', {
  hendleSubmit: () => {
    console.log('editAvatar');
  }
});
const formEditInfo = new PopupWithForm('#popup-edit-info', {
  hendleSubmit: () => {
    console.log('editInfo');
  }
});
const formAddCard = new PopupWithForm('#popup-create-card', {
  hendleSubmit: () => {
    console.log('addCard');
  }
});

const validateFormEditAvatar = new FormValidator(constants.validateConfig, '#popup-edit-avatar');
const validateFormEditInfo = new FormValidator(constants.validateConfig, '#popup-edit-info');
const validateFormAddCard = new FormValidator(constants.validateConfig, '#popup-create-card');

validateFormEditAvatar.addValidation();
validateFormEditInfo.addValidation();
validateFormAddCard.addValidation();

constants.buttonEditAvatar.addEventListener('click', () => {
  formEditAvatar.open();
  validateFormEditAvatar.checkValidation();
});

constants.buttonEditInfo.addEventListener('click', () => {
  formEditInfo.open();
  validateFormEditInfo.checkValidation();
});

constants.buttonAddCard.addEventListener('click', () => {
  formAddCard.open();
  validateFormAddCard.checkValidation();
});
