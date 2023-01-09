export default class FormValidator {
  constructor(config, form) {
    this._form = document.querySelector(form);
    this._inputList = Array.from(this._form.querySelectorAll(config.inputSelector));
    this._submit = this._form.querySelector(config.submitButtonSelector);

    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
  }

  addValidation() {
    this._inputList.forEach(inputElement => {
      inputElement.addEventListener('input', () => {
        this._isValid(inputElement);
        this._toggleButtonState();
      });
    });
  }

  checkValidation() {
    this._inputList.forEach(inputElement => {
      this._hideInputError(inputElement);
    });
    this._toggleButtonState();
  }

  _toggleButtonState() {
    if (this._checkValidationInput()) {
      this._submit.disabled = true;
      this._submit.classList.add(this._inactiveButtonClass);
    } else {
      this._submit.disabled = false;
      this._submit.classList.remove(this._inactiveButtonClass);
    }
  }

  _checkValidationInput() {
    return this._inputList.some(inputElement => {
      return !inputElement.validity.valid;
    });
  }

  _isValid(inputElement) {
    if (inputElement.validity.patternMismatch) {
      inputElement.setCustomValidity(inputElement.dataset.errorMessage);
    } else {
      inputElement.setCustomValidity('');
    }

    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _showInputError(inputElement, errorMessage) {
    const textError = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    textError.textContent = errorMessage;
    textError.classList.add(this._errorClass);
  }

  _hideInputError(inputElement) {
    const textError = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    textError.classList.remove(this._errorClass);
  }
}
