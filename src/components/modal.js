export const popupImgButtonClose = document.querySelector('.popup-img__button-exit');

export function openModalWindow(modalWindow) {
  modalWindow.classList.add('popup_opened');
  modalWindow.addEventListener('click', closeByOvelayClick);
  document.addEventListener('keydown', closeByEscPress);
}

export function closeModalWindow(modalWindow) {
  modalWindow.classList.remove('popup_opened');
  modalWindow.removeEventListener('click', closeByOvelayClick);
  document.removeEventListener('keydown', closeByEscPress);
}

function closeByOvelayClick(evt) {
  const popupOpened = document.querySelector('.popup_opened');
  if (popupOpened === evt.target) {
    closeModalWindow(popupOpened);
  }
}

function closeByEscPress(evt) {
  const popupOpened = document.querySelector('.popup_opened');
  const escCode = 27;
  if (evt.keyCode === escCode) {
    closeModalWindow(popupOpened);
  }
}
