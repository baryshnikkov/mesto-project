import { openModalWindow } from './modal.js'
import { popupImage, idUser } from './utils.js';
import { deleteCard, putLike, deleteLike } from './api.js';

const templateCard = document.querySelector('#card').content;
const popupImgPhoto = popupImage.querySelector('.popup-img__photo');
const popupImgCaption = popupImage.querySelector('.popup-img__caption');

export function createCard(el) {
  const newCard = templateCard.querySelector('.card').cloneNode(true);
  const cardPhoto = newCard.querySelector('.card__photo');
  cardPhoto.src = el.link;
  cardPhoto.alt = el.name;
  newCard.querySelector('.card__title').textContent = el.name;
  if (el.likes.length > 0) {
    newCard.querySelector('.card__numbers').textContent = el.likes.length;
  }

  const buttonLike = newCard.querySelector('.card__like');
  if (el.likes.some(function (elem) {
    return elem._id === idUser;
  })) {
    buttonLike.classList.add('card__like_active');
  }
  buttonLike.addEventListener('click', function (evt) {
    if (evt.target.classList.contains('card__like_active')) {
      deleteLike(el._id)
        .then((res) => {
          newCard.querySelector('.card__numbers').textContent = res.likes.length;
          evt.target.classList.remove('card__like_active');
          if (res.likes.length === 0) {
            newCard.querySelector('.card__numbers').textContent = '';
          }
        });
    } else {
      putLike(el._id)
        .then((res) => {
          newCard.querySelector('.card__numbers').textContent = res.likes.length;
          evt.target.classList.add('card__like_active');
        });
    }
  });

  if (idUser === el.owner._id) {
    const buttonTrash = newCard.querySelector('.card__trash');
    buttonTrash.classList.add('card__trach_active');
    buttonTrash.addEventListener('click', function (evt) {
      deleteCard(el._id)
        .then(() => {
          const cardTrash = evt.target.closest('.card');
          cardTrash.remove();
        })
        .catch((err) => {
          console.log(err);
        })
    });
  }

  const popupCardPhoto = newCard.querySelector('.card__photo');
  popupCardPhoto.addEventListener('click', function (evt) {
    popupImgPhoto.src = el.link;
    popupImgPhoto.alt = el.name;
    popupImgCaption.textContent = el.name;
    openModalWindow(popupImage);
  });
  return newCard
}
