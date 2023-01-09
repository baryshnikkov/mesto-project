import Popup from "./Popup.js";

export default class PopupDeleteCard extends Popup {
  constructor(popupSelector, { hendleSubmit }) {
    super(popupSelector);
    this._hendleSubmit = hendleSubmit;

    this._buttonDelete = this._popup.querySelector('.popup__submit');
    this._buttonDeleteText = this._buttonDelete.textContent;
  }

  open(cardId) {
    super.open();

    this._cardId = cardId;
  }

  renderLoading(isLoading, loadingText = 'Сохранение...') {
    this._buttonDelete.textContent = (isLoading) ? loadingText : this._buttonDeleteText;
  }

  _addEventListeners() {
    super._addEventListeners();
    this._clickSubmit = this._clickOnSubmit.bind(this);
    this._popup.addEventListener('submit', this._clickSubmit);
  }

  _removeEventListeners() {
    super._removeEventListeners();
    this._popup.removeEventListener('submit', this._clickSubmit);
  }



  _clickOnSubmit(evt) {
    evt.preventDefault();
    this._hendleSubmit(this._cardId);
  }
}
