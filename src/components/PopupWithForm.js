import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, { hendleSubmit }) {
    super(popupSelector);
    this._hendleSubmit = hendleSubmit;

    this._submitButton = this._popup.querySelector('.popup__submit');
    this._submitButtonText = this._submitButton.textContent;

    this._form = this._popup.querySelector('.popup__form');
    this._inputs = this._popup.querySelectorAll('.popup__input');
  }

  close() {
    super.close();
    this._form.reset();
  }

  renderLoading(isLoading, loadingText = 'Сохранение...') {
    this._submitButton.textContent = (isLoading) ? loadingText : this._submitButtonText;
  }

  setInputValues(data) {
    this._inputs.forEach((input) => {
      input.value = data[input.name];
    });
  }

  _getInputValues() {
    this._inputValues = {};
    this._inputs.forEach((input) => {
      this._inputValues[input.name] = input.value;
    });
    return this._inputValues;
  }

  _addEventListeners() {
    super._addEventListeners();
    this._clickSubmit = this._submitForm.bind(this);
    this._popup.addEventListener('submit', this._clickSubmit);
  }

  _removeEventListeners() {
    super._removeEventListeners();
    this._popup.removeEventListener('submit', this._clickSubmit);
  }

  _submitForm(evt) {
    evt.preventDefault();
    this._hendleSubmit(this._getInputValues());
  }
}
