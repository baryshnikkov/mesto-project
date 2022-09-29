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
  if (evt.target.classList.contains('popup_opened')) {
    closeModalWindow(evt.target);
  }
}

function closeByEscPress(evt) {
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closeModalWindow(popupOpened);
  }
}
