import "./pages/index.css";

// Находим форму в DOM
const formName = document.forms.name;
// Получаем элементы, куда должны быть вставлены значения полей
const profileName = document.querySelector(".profile__name");
const profileSpeciality = document.querySelector(".profile__speciality");


//111111

// Получаем кнопку "Редактировать профиль"
const editButton = document.querySelector('.profile__edit-button');

const popup = document.querySelector(".popup");

// Получаем попап
const profilePopup = document.querySelector(".profile-popup");


// Получаем кнопку закрытия попапа
const closeButton = document.querySelector(".popup__close");

// Получаем инпуты
const nameInput = formName.elements.username;
const jobInput = formName.elements.speciality;

 // Получите значение из атрибута textContent элементов profile__name и profile__speciality
 const nameValue = profileName.textContent;
 const jobValue = profileSpeciality.textContent;

 nameInput.focus();
 // Вставьте новые значения в инпуты
 nameInput.value = nameValue;
 jobInput.value = jobValue;

// Функция для открытия попапа
function openPopup(popup) {
 
  popup.classList.add("popup_opened");
}

function EditProfileButtonClick() {
  openPopup(profilePopup);
}


// Функция для закрытия попапа
function closePopup() {
  profilePopup.classList.remove("popup_opened");
}

// Слушаем клик на кнопке "Редактировать профиль" и открываем попап
editButton.addEventListener('click', EditProfileButtonClick);

// Слушаем клик на кнопке закрытия попапа и закрываем его
closeButton.addEventListener("click", closePopup);

//111111(222222)

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет

function handleFormSubmit(evt) {
  // Получите значение полей jobInput и nameInput из свойства value
  const nameValue = nameInput.value;
  const jobValue = jobInput.value;

  // Вставьте новые значения с помощью textContent
  profileName.textContent = nameValue;
  profileSpeciality.textContent = jobValue;

  // Закройте попап после сохранения
  closePopup();
}

formName.addEventListener("submit", function (evt) {
  // отменим стандартное поведение
  evt.preventDefault();

  // вызываем функцию
  handleFormSubmit(evt);
});

//22222222222

import arkhyzImage from "./images/arkhyz.jpg";

import chelyabinskImage from "./images/chelyabinsk-oblast.jpg";

import ivanovoImage from "./images/ivanovo.jpg";

import kamchatkaImage from "./images/kamchatka.jpg";

import holmogorImage from "./images/kholmogorsky-rayon.jpg";

import baikalImage from "./images/baikal.jpg";

const initialCards = [
  {
    name: "Архыз",
    link: arkhyzImage,
  },
  {
    name: "Челябинск",
    link: chelyabinskImage,
  },
  {
    name: "Иваново",
    link: ivanovoImage,
  },
  {
    name: "Камчатка",
    link: kamchatkaImage,
  },
  {
    name: "Холмогорский район",
    link: holmogorImage,
  },
  {
    name: "Байкал",
    link: baikalImage,
  },
];

const elementsContainer = document.querySelector(".elements");

// Функция для создания карточки
function createCard(name, link) {
  const cardTemplate = document.querySelector("#place-template").content;
  const cardElement = cardTemplate.cloneNode(true);

  cardElement.querySelector(".element__heading").textContent = name;
  const imageElement = cardElement.querySelector(".element__image");
  imageElement.src = link;
  imageElement.alt = name;

  const likeButton = cardElement.querySelector(".element__button");
  likeButton.addEventListener("click", toggleLike);

  const trashButton = cardElement.querySelector(".element__trash-button");
  trashButton.addEventListener("click", removeCard);

  const clickImages = cardElement.querySelectorAll(".element__image");
  clickImages.forEach((clickImage) => {
    clickImage.addEventListener("click", openImagePopup); // Добавляем слушатель для каждого изображения
  });

  return cardElement; // Возвращаем готовую карточку
}

// Обработчик для кнопки "Лайк"
function toggleLike(event) {
  const likeButton = event.target;
  likeButton.classList.toggle("element__button_theme_dark");
}

// Обработчик для кнопки "Удалить"
function removeCard(event) {
  const card = event.target.closest(".element");
  card.remove();
}

// Добавление карточек из массива initialCards
initialCards.forEach((card) => {
  const newCard = createCard(card.name, card.link); // Создаем карточку
  elementsContainer.appendChild(newCard); // Вставляем карточку в контейнер
});

//33333333333

// Получаем кнопку "добавить"
const addButton = document.querySelector('.profile__add-button');

// Получаем попап
const newPlacePopup = document.querySelector(".popup_new-place");

// Получаем кнопку закрытия попапа
const closeNewButton = newPlacePopup.querySelector(".popup__close");

// Получаем инпуты
const namePlace = document.querySelector("#new-place-name");
const imgUrl = document.querySelector("#new-place-url");


// Функция-обработчик клика для кнопки "Добавить место"
function handleAddPlaceButtonClick() {
  openPopup(newPlacePopup);
}

// Функция для закрытия попапа
function closeNewPopup() {
  newPlacePopup.classList.remove("popup_new-place_opened");
}

// Слушаем клик на кнопке "Редактировать профиль" и открываем попап
addButton.addEventListener('click', handleAddPlaceButtonClick);

// Слушаем клик на кнопке закрытия попапа и закрываем его
closeNewButton.addEventListener("click", closeNewPopup);

//4444444444444

// Контейнер, куда будут добавляться элементы
const itemsContainer = document.querySelector(".elements");

function addItem() {
  event.preventDefault(); // Предотвращаем перезагрузку страницы

  const nameValue = namePlace.value; // Получаем значение из поля ввода имени
  const urlValue = imgUrl.value; // Получаем значение из поля ввода URL

  const newCard = createCard(nameValue, urlValue); // Создаем новую карточку
  elementsContainer.insertBefore(newCard, elementsContainer.firstChild);


  namePlace.value = "";
  imgUrl.value = "";
  closeNewPopup(); // Закрываем всплывающее окно
}

const formPlace = document.forms.place;

formPlace.addEventListener("submit", addItem);

//55555555555555

const likeButtons = document.querySelectorAll(".element__button");

function like() {
  const likeButton = event.target;
  likeButton.classList.toggle("element__button_theme_dark");
}

//666666666

// Получаем кнопку "удалить карточку"

const trashButtons = document.querySelectorAll(".element__trash-button");

function removeItem(event) {
  const button = event.target;
  const card = button.closest(".element"); // Находим ближайший элемент с классом .element
  if (card) {
    card.remove(); // Удаляем карточку
  }
}

//777777777777

// Получаем изображение "добавить"

// Получаем попап
const popupImage = document.querySelector(".popup_type_image");

// Получаем кнопку закрытия попапа
const closeImage = popupImage.querySelector(".popup__close");

// Получаем изображение "subtitle"
const popupSubtitle = document.querySelectorAll(".popup__subtitle");
console.log(popupSubtitle);

// Получаем инпуты
const popupImageImg = popupImage.querySelector(".popup__image"); // Находим элемент <img> внутри попапа

// Функция для открытия попапа
function openImagePopup(event) {
  const clickedImage = event.target;
  const imageUrl = clickedImage.src;
  const imageAlt = clickedImage.alt;

  popupImageImg.src = imageUrl;
  popupImageImg.alt = `${imageAlt} вставлять`;

  const popupSubtitle = popupImage.querySelector(".popup__subtitle");
  popupSubtitle.textContent = imageAlt;

  popupImage.classList.add("popup_type_image_opened");
  
}

// Функция для закрытия попапа
function closeImagePopup() {
  popupImage.classList.remove("popup_type_image_opened");
}

// Слушаем клик на кнопке закрытия попапа и закрываем его
closeImage.addEventListener("click", closeImagePopup);

//popupNew.addEventListener("keydown", function(evt) {
// if (evt.key === "Escape") {
//   popupNew.classList.remove("popup_opened"); closePopup()
// }
// });



const validitySettings = {
  inputSelector: ".popup__field",
  buttonSelector: ".popup__save",
  formSelector: ".popup__form",
  ivalidPopupField: "popup__field_invalid",

}


function showError(input, error, settings) {
  const errorId = "error-" + input.id;
  const errorElement = document.getElementById(errorId);
  errorElement.textContent = error;
  input.classList.add(settings.ivalidPopupField)
}

function hideError(input, settings) {
  const errorId = "error-" + input.id;
  const errorElement = document.getElementById(errorId);
  errorElement.textContent = "";
  input.classList.remove(settings.ivalidPopupField)
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
}

const disableButton = (button) => {
  button.disabled = true;
}

function checkButton(form, buttonSubmit) {
if (form.checkValidity()) {
  enableButton(buttonSubmit)
}
else disableButton(buttonSubmit)
}

function setEventListeners (form, settings) {
const buttonSubmit = form.querySelector(settings.buttonSelector);
disableButton(buttonSubmit);
const inputList = form.querySelectorAll(settings.inputSelector);


inputList.forEach( (input) => {
  input.addEventListener("input", () => {
    checkField(input, settings);
    checkButton(form, buttonSubmit);

  })
})
}


function enableValidation(settings) {
const formList= document.querySelectorAll(settings.formSelector);
formList.forEach ( (form) => {
  setEventListeners (form, settings)
})
}

enableValidation(validitySettings)