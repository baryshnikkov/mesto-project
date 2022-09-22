const buttonEditProfile = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('#popup-edit');
const buttonPopupEditClose = popupEdit.querySelector('.popup__in-button-exit');
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');
const profileNameInputEdit = popupEdit.querySelector('.popup__in-text_el_name');
const profileProfessionInputEdit = popupEdit.querySelector('.popup__in-text_el_profession');
const formElement = popupEdit.querySelector('.popup__container');
const buttonAddProfile = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector('#popup-create');
const buttonPopupAddClose = popupAdd.querySelector('.popup__in-button-exit');
const profileNameInputAdd = popupAdd.querySelector('.popup__in-text_el_name');
const profileProfessionInputAdd = popupAdd.querySelector('.popup__in-text_el_profession');
const formCard = popupAdd.querySelector('.popup__container');
const popupImgButtonClose = document.querySelector('.popup-img__button-exit');
const templateCard = document.querySelector('#card').content;


function openModalWindow(modalWindow) {
  modalWindow.classList.add('popup_opened');
  closePopupClickOnOverlayAndEsc()
}

function closeModalWindow(modalWindow) {
  modalWindow.classList.remove('popup_opened');
}

function submitHandlerEditProfile(evt) {
  evt.preventDefault();
  profileName.textContent = profileNameInputEdit.value;
  profileProfession.textContent = profileProfessionInputEdit.value;
  closeModalWindow(popupEdit);
}

function createCard(name, link) {
  const newCard = templateCard.querySelector('.card').cloneNode(true);
  newCard.querySelector('.card__photo').src = link;
  newCard.querySelector('.card__photo').alt = name;
  newCard.querySelector('.card__title').textContent = name;
  const buttonLike = newCard.querySelector('.card__like');
  buttonLike.addEventListener('click', function (evt) {
    evt.target.classList.toggle('card__like_active');
  });
  const buttonTrash = newCard.querySelector('.card__trash');
  buttonTrash.addEventListener('click', function (evt) {
    const cardTrash = evt.target.closest('.card');
    cardTrash.remove();
  });
  const popupCardPhoto = newCard.querySelector('.card__photo');
  popupCardPhoto.addEventListener('click', function (evt) {
    const popupImgOpene = document.querySelector('.popup-img');
    const popupImgPhoto = popupImgOpene.querySelector('.popup-img__photo');
    const popupImgCaption = popupImgOpene.querySelector('.popup-img__caption');
    popupImgPhoto.src = link;
    popupImgPhoto.alt = name;
    popupImgCaption.textContent = name;
    openModalWindow(popupImgOpene);
  });
  return newCard
}

function renderCard(name, link, container) {
  const containerCard = document.querySelector(`.${container}`);
  const element = createCard(name, link);
  containerCard.prepend(element);
}

initialCards.forEach(function (el) {
  renderCard(el.name, el.link, 'cards');
});

formCard.addEventListener('submit', function (evt) {
  evt.preventDefault();
  renderCard(profileNameInputAdd.value, profileProfessionInputAdd.value, 'cards');
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

buttonAddProfile.addEventListener('click', function () {
  openModalWindow(popupAdd);
});

buttonPopupAddClose.addEventListener('click', function () {
  closeModalWindow(popupAdd);
});

popupImgButtonClose.addEventListener('click', function () {
  const popupImgOpene = document.querySelector('.popup-img');
  closeModalWindow(popupImgOpene);
});







// Валидация форм

Array.from(document.querySelectorAll('.button-opene')).forEach(function(el) {
  el.addEventListener('click', function() {
    enableValidation();
  });
});

function showInputError(form, input, errorMessage) {
  const textError = form.querySelector(`.${input.id}-error`);
  input.classList.add('form__input_error');
  textError.textContent = errorMessage;
  textError.classList.add('form__input-error_active');
}

function hideInputError(form, input) {
  const textError = form.querySelector(`.${input.id}-error`);
  input.classList.remove('form__input_error');
  textError.classList.remove('form__input-error_active');
}

function isValid(form, input) {
    if (input.validity.patternMismatch) {
    input.setCustomValidity(input.dataset.errorMessage);
  } else {
    input.setCustomValidity("");
  }

  if (!input.validity.valid) {
    showInputError(form, input, input.validationMessage);
  } else {
    hideInputError(form, input);
  }
}

function setEventListenersForInput(form) {
  const inputList = Array.from(form.querySelectorAll('.popup__in-text'));
  const button = form.querySelector('.popup__in-button');

  inputList.forEach(function(input) {
    isValid(form, input);
    toggleButtonState(inputList, button);
    input.addEventListener('input', function() {
      isValid(form, input);
      toggleButtonState(inputList, button);
    });
  });


}

function enableValidation() {
  const formList = Array.from(document.querySelectorAll('.popup__container'));

  formList.forEach(function(form) {
    form.addEventListener('submit', function(evt) {
      evt.preventDefault();
    });

    setEventListenersForInput(form);
  });
}

function checkValidationInput(inputList) {
  return inputList.some(function(el) {
    return !el.validity.valid;
  });
}

function toggleButtonState(inputList, button) {
  if  (checkValidationInput(inputList)) {
    button.disabled = true;
    button.classList.add('popup__in-button_disabled');
  } else {
    button.disabled = false;
    button.classList.remove('popup__in-button_disabled');
  }
}







// закрытие попапов на оверлей и esc


function closePopupClickOnOverlayAndEsc() {
  const popupOpene = document.querySelector('.popup_opened');
  popupOpene.addEventListener('click', function(evt) {
    evt.target.classList.remove('popup_opened')
  });
  document.addEventListener('keydown', function(evt) {
    if (evt.keyCode === 27) {
      popupOpene.classList.remove('popup_opened');
    }
  });
};
