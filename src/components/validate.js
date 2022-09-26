function showInputError(form, input, errorMessage, validationConfig) {
  const textError = form.querySelector(`.${input.id}-error`);
  input.classList.add(validationConfig.inputErrorClass);
  textError.textContent = errorMessage;
  textError.classList.add(validationConfig.errorClass);
}

function hideInputError(form, input, validationConfig) {
  const textError = form.querySelector(`.${input.id}-error`);
  input.classList.remove(validationConfig.inputErrorClass);
  textError.classList.remove(validationConfig.errorClass);
}

function isValid(form, input, validationConfig) {
  if (input.validity.patternMismatch) {
    input.setCustomValidity(input.dataset.errorMessage);
  } else {
    input.setCustomValidity("");
  }

  if (!input.validity.valid) {
    showInputError(form, input, input.validationMessage, validationConfig);
  } else {
    hideInputError(form, input, validationConfig);
  }
}

function setEventListenersForInput(form, validationConfig) {
  const inputList = Array.from(form.querySelectorAll(validationConfig.inputSelector));
  const button = form.querySelector(validationConfig.submitButtonSelector);

  inputList.forEach(function (input) {
    toggleButtonState(inputList, button, validationConfig);
    input.addEventListener('input', function () {
      isValid(form, input, validationConfig);
      toggleButtonState(inputList, button, validationConfig);
    });
  });
}

export function checkValidation(form, validationConfig) {
  const inputList = Array.from(form.querySelectorAll(validationConfig.inputSelector));
  const button = form.querySelector(validationConfig.submitButtonSelector);

  inputList.forEach(function (input) {
    isValid(form, input, validationConfig);
    toggleButtonState(inputList, button, validationConfig);
  });
}

function checkValidationInput(inputList) {
  return inputList.some(function (el) {
    return !el.validity.valid;
  });
}

function toggleButtonState(inputList, button, validationConfig) {
  if (checkValidationInput(inputList)) {
    button.disabled = true;
    button.classList.add(validationConfig.inactiveButtonClass);
  } else {
    button.disabled = false;
    button.classList.remove(validationConfig.inactiveButtonClass);
  }
}

export function enableValidation(validationConfig) {
  const formList = Array.from(document.querySelectorAll(validationConfig.formSelector));

  formList.forEach(function (formSelector) {
    formSelector.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });

    setEventListenersForInput(formSelector, validationConfig);
  });
}
