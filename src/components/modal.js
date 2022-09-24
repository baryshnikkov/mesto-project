export const popupImgButtonClose = document.querySelector('.popup-img__button-exit');

export function openModalWindow(modalWindow) {
  modalWindow.classList.add('popup_opened');
  closePopupClickOnOverlayAndEsc()
}

export function closeModalWindow(modalWindow) {
  modalWindow.classList.remove('popup_opened');
}

function closePopupClickOnOverlayAndEsc() {
  const popupOpene = document.querySelector('.popup_opened');
  popupOpene.addEventListener('click', function (evt) {
    evt.target.classList.remove('popup_opened')
  });
  document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      popupOpene.classList.remove('popup_opened');
    }
  });
};
