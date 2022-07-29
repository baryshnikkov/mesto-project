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


function openModalWindow(modalWindow) {
  modalWindow.classList.add('popup_opened');
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
// Загрузка сохраненных карточек из массива initialCards
function loadingSavedCards(src) {
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
//Добавление новых карточек
function submitHandlerCreateCard(evt) {
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
  const buttonLike = document.querySelector('.card__like');
  buttonLike.addEventListener('click', function (evt) {
    evt.target.classList.toggle('card__like_active');
  });
  const buttonTrash = document.querySelector('.card__trash');
  buttonTrash.addEventListener('click', function (evt) {
    const cardTrash = evt.target.closest('.card');
    cardTrash.remove();
  });
  const popupImgOpene = document.querySelector('.card__photo');
  popupImgOpene.addEventListener('click', function (evt) {
    const popupImgOpene = document.querySelector('.popup-img');
    const popupImgPhoto = popupImgOpene.querySelector('.popup-img__photo');
    const popupImgCaption = popupImgOpene.querySelector('.popup-img__caption');
    popupImgPhoto.src = evt.target.src;
    popupImgPhoto.alt = evt.target.parentElement.querySelector('.card__title').textContent;
    popupImgCaption.textContent = evt.target.parentElement.querySelector('.card__title').textContent;
    openModalWindow(popupImgOpene);
  });
  closeModalWindow(popupAdd);
}


buttonEditProfile.addEventListener('click', function () {
  popupEdit.classList.add('popup_opened');
  profileNameInputEdit.value = profileName.textContent;
  profileProfessionInputEdit.value = profileProfession.textContent;
});

buttonPopupEditClose.addEventListener('click', function () {
  closeModalWindow(popupEdit);
});

formElement.addEventListener('submit', submitHandlerEditProfile);

loadingSavedCards(initialCards);

buttonAddProfile.addEventListener('click', function () {
  popupAdd.classList.add('popup_opened');
});

buttonPopupAddClose.addEventListener('click', function () {
  closeModalWindow(popupAdd);
});

formCard.addEventListener('submit', submitHandlerCreateCard);

const buttonsLike = document.querySelectorAll('.card__like');
buttonsLike.forEach(function (el) {
  el.addEventListener('click', function () {
    el.classList.toggle('card__like_active');
  });
})

const buttonsTrash = document.querySelectorAll('.card__trash');
buttonsTrash.forEach(function (el) {
  el.addEventListener('click', function () {
    const cardTrash = el.closest('.card');
    cardTrash.remove();
  });
});

const popupsImgOpene = document.querySelectorAll('.card__photo');
popupsImgOpene.forEach(function (el) {
  el.addEventListener('click', function () {
    const popupImgOpene = document.querySelector('.popup-img');
    const popupImgPhoto = popupImgOpene.querySelector('.popup-img__photo');
    const popupImgCaption = popupImgOpene.querySelector('.popup-img__caption');
    popupImgPhoto.src = el.src;
    popupImgCaption.textContent = el.parentElement.querySelector('.card__title').textContent;
    openModalWindow(popupImgOpene);
  });
});

popupImgButtonClose.addEventListener('click', function () {
  const popupImgOpene = document.querySelector('.popup-img');
  closeModalWindow(popupImgOpene);
});
