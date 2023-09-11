function showError(input, error, settings) {
  const errorId = "error-" + input.id;
  const errorElement = document.getElementById(errorId);
  errorElement.textContent = error;
  input.classList.add(settings.ivalidPopupField);
}

function hideError(input, settings) {
  const errorId = "error-" + input.id;
  const errorElement = document.getElementById(errorId);
  errorElement.textContent = "";
  input.classList.remove(settings.ivalidPopupField);
}

const checkField = (input, settings) => {
  if (!input.validity.valid) {
    showError(input, input.validationMessage, settings);
  } else {
    hideError(input, settings);
  }
};

const enableButton = (button) => {
  button.disabled = false;
};

const disableButton = (button) => {
  button.disabled = true;
};

function checkButton(form, buttonSubmit) {
  if (form.checkValidity()) {
    enableButton(buttonSubmit);
  } else disableButton(buttonSubmit);
}

function setEventListeners(form, settings) {
  const buttonSubmit = form.querySelector(settings.buttonSelector);
  disableButton(buttonSubmit);

  form.addEventListener('reset', () => {
    disableButton(buttonSubmit);
  });2
  const inputList = form.querySelectorAll(settings.inputSelector);

  inputList.forEach((input) => {
    input.addEventListener("input", () => {
      checkField(input, settings);
      checkButton(form, buttonSubmit);
    });
  });
}

export default function enableValidation(settings) {
  const formList = document.querySelectorAll(settings.formSelector);
  formList.forEach((form) => {
    setEventListeners(form, settings);
  });
}

