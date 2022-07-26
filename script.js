const buttonEditProfile = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('#popup-edit');
const buttonPopupEditClose = popupEdit.querySelector('.popup__in-button-exit');
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');
const profileNameInputEdit = popupEdit.querySelector('.popup__in-text_el_name');
const profileProfessionInputEdit = popupEdit.querySelector('.popup__in-text_el_profession');
const formElement = popupEdit.querySelector('.popup__container');

buttonEditProfile.addEventListener('click', function () {
  popupEdit.classList.add('popup_opened');
  profileNameInputEdit.value = profileName.textContent;
  profileProfessionInputEdit.value = profileProfession.textContent;
});

function popupClose(name) {
  name.classList.remove('popup_opened');
}
buttonPopupEditClose.addEventListener('click', function () {
  popupClose(popupEdit);
});

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = profileNameInputEdit.value;
  profileProfession.textContent = profileProfessionInputEdit.value;
  popupClose(popupEdit);
}
formElement.addEventListener('submit', formSubmitHandler);


const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

function addCards(src) {
  const templateCard = document.querySelector('#card').content;
  const sectionCard = document.querySelector('.cards');

  src.forEach(el => {
    const newCard = templateCard.querySelector('.card').cloneNode(true);
    newCard.querySelector('.card__photo').src = el.link;
    newCard.querySelector('.card__photo').alt = el.name;
    newCard.querySelector('.card__title').textContent = el.name;
    sectionCard.append(newCard);
  });
}

addCards(initialCards);


const buttonAddProfile = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector('#popup-create');
const buttonPopupAddClose = popupAdd.querySelector('.popup__in-button-exit');
const profileNameInputAdd = popupAdd.querySelector('.popup__in-text_el_name');
const profileProfessionInputAdd = popupAdd.querySelector('.popup__in-text_el_profession');
const formCard = popupAdd.querySelector('.popup__container');

buttonAddProfile.addEventListener('click', function () {
  popupAdd.classList.add('popup_opened');
});

buttonPopupAddClose.addEventListener('click', function () {
  popupClose(popupAdd);
});

function addNewCard(evt) {
  evt.preventDefault();
  const templateCard = document.querySelector('#card').content;
  const sectionCard = document.querySelector('.cards');
  const newCard = templateCard.querySelector('.card').cloneNode(true);
  newCard.querySelector('.card__photo').src = profileProfessionInputAdd.value;
  newCard.querySelector('.card__photo').alt = profileNameInputAdd.value;
  newCard.querySelector('.card__title').textContent = profileNameInputAdd.value;
  sectionCard.prepend(newCard);
  const obj = {};
  obj.name = profileNameInputAdd.value;
  obj.link = profileProfessionInputAdd.value;
  initialCards.unshift(obj);
  popupClose(popupAdd);
}

formCard.addEventListener('submit', addNewCard);
