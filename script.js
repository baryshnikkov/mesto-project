const buttonEditProfile = document.querySelector('.profile__edit-button');
const buttonPopupClose = document.querySelector('.popup__in-button-exit');
const popup = document.querySelector('.popup');
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');
const profileNameInput = document.querySelector('.popup__in-text_el_name');
const profileProfessionInput = document.querySelector('.popup__in-text_el_profession');
const formElement = document.querySelector('.popup__container');


function popupOpene() {
  popup.classList.add('popup_opened');
  profileNameInput.value = profileName.textContent;
  profileProfessionInput.value = profileProfession.textContent;
}
buttonEditProfile.addEventListener('click', popupOpene);

function popupClose() {
  popup.classList.remove('popup_opened');
}
buttonPopupClose.addEventListener('click', popupClose);

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileProfession.textContent = profileProfessionInput.value;
  popupClose();
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

function addCard(src) {
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

addCard(initialCards);
