function showInputError(form, input, errorMessage, objClass) {
  const textError = form.querySelector(`.${input.id}-error`);
  input.classList.add(objClass.inputErrorClass);
  textError.textContent = errorMessage;
  textError.classList.add(objClass.errorClass);
}

function hideInputError(form, input, objClass) {
  const textError = form.querySelector(`.${input.id}-error`);
  input.classList.remove(objClass.inputErrorClass);
  textError.classList.remove(objClass.errorClass);
}

function isValid(form, input, objClass) {
  if (input.validity.patternMismatch) {
    input.setCustomValidity(input.dataset.errorMessage);
  } else {
    input.setCustomValidity("");
  }

  if (!input.validity.valid) {
    showInputError(form, input, input.validationMessage, objClass);
  } else {
    hideInputError(form, input, objClass);
  }
}

function setEventListenersForInput(form, objClass) {
  const inputList = Array.from(form.querySelectorAll(objClass.inputSelector));
  const button = form.querySelector(objClass.submitButtonSelector);

  inputList.forEach(function (input) {
    isValid(form, input, objClass);
    toggleButtonState(inputList, button, objClass);
    input.addEventListener('input', function () {
      isValid(form, input, objClass);
      toggleButtonState(inputList, button, objClass);
    });
  });
}

function checkValidationInput(inputList) {
  return inputList.some(function (el) {
    return !el.validity.valid;
  });
}

function toggleButtonState(inputList, button, objClass) {
  if (checkValidationInput(inputList)) {
    button.disabled = true;
    button.classList.add(objClass.inactiveButtonClass);
  } else {
    button.disabled = false;
    button.classList.remove(objClass.inactiveButtonClass);
  }
}

export function enableValidation(objClass) {
  const formList = Array.from(document.querySelectorAll(objClass.formSelector));

  formList.forEach(function (formSelector) {
    formSelector.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });

    setEventListenersForInput(formSelector, objClass);
  });
}
