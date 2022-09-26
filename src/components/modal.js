export const popupImgButtonClose = document.querySelector('.popup-img__button-exit');

export function openModalWindow(modalWindow) {
  modalWindow.classList.add('popup_opened');
  closeByOvelayClick();
  document.addEventListener('keydown', closeByEscPress);
}

export function closeModalWindow(modalWindow) {
  modalWindow.classList.remove('popup_opened');
}

function closeByOvelayClick() {
  const popupOpene = document.querySelector('.popup_opened');
  popupOpene.addEventListener('click', function (evt) {
    evt.target.classList.remove('popup_opened')
  });
}

function closeByEscPress(evt) {
  const popupOpene = document.querySelector('.popup_opened');
  const escCode = 27;
  if (evt.keyCode === escCode) {
    popupOpene.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeByEscPress);
  }
}
