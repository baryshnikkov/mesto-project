import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImage = this._popup.querySelector('.popup-selected-image__image');
    this._popupImageText = this._popup.querySelector('.popup-selected-image__caption');
  }

  open(element) {
    super.open();
    this._popupImage.src = element.src;
    this._popupImage.alt = element.alt;
    this._popupImageText.textContent = element.alt;
  }
}
