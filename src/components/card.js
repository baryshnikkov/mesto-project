import { openModalWindow } from './modal.js'
import { popupImage } from './utils.js';

const templateCard = document.querySelector('#card').content;
const popupImgPhoto = popupImage.querySelector('.popup-img__photo');
const popupImgCaption = popupImage.querySelector('.popup-img__caption');

export function createCard(name, link) {
  const newCard = templateCard.querySelector('.card').cloneNode(true);
  const cardPhoto = newCard.querySelector('.card__photo');
  cardPhoto.src = link;
  cardPhoto.alt = name;
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
    popupImgPhoto.src = link;
    popupImgPhoto.alt = name;
    popupImgCaption.textContent = name;
    openModalWindow(popupImage);
  });
  return newCard
}
