import { openModalWindow } from './modal.js'

const templateCard = document.querySelector('#card').content;

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

export function renderCard(name, link, container) {
  const containerCard = document.querySelector(`.${container}`);
  const element = createCard(name, link);
  containerCard.prepend(element);
}
