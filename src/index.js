import "./pages/index.css";
import { openPopup, closePopup } from "./components/modal";
import { createCard } from "./components/card";
import enableValidation from "./components/validation.js";
import { initialCards } from "./components/card.js";
import {
  changeAvatar,
  getInitialCards,
  saveItem,
  fetchProfile,
  patchUserProfile,
} from "./components/api.js";

// Находим форму в DOM
const formName = document.forms.name;
// Получаем элементы, куда должны быть вставлены значения полей
const profileName = document.querySelector(".profile__name");
const profileSpeciality = document.querySelector(".profile__speciality");

//111111 Открытие и закрытие модального окна

// Получаем кнопку "Редактировать профиль"
const openButton = document.querySelector(".profile__edit-button");
const profileAvatar = document.querySelector(".profile__avatar");
const profilePopup = document.querySelector(".popup_profile");

// Получаем кнопку закрытия попапа
const popupCloseButtons = document.querySelectorAll(".popup__close");

// Получаем инпуты
const nameInput = formName.elements.username;
const jobInput = formName.elements.speciality;

function insertInput() {
  // Получите значение из атрибута textContent элементов profile__name и profile__speciality
  const nameValue = profileName.textContent;
  const jobValue = profileSpeciality.textContent;
  nameInput.focus();

  // Вставьте новые значения в инпуты
  nameInput.value = nameValue;
  jobInput.value = jobValue;
}

function EditProfileButtonClick() {
  openPopup(profilePopup);
  insertInput();
}

popupCloseButtons.forEach((button) =>
  button.addEventListener("click", (e) => {
    const popup = e.target.closest(".popup");
    closePopup(popup);
  })
);

// Слушаем клик на кнопке "Редактировать профиль" и открываем попап
openButton.addEventListener("click", EditProfileButtonClick);

//111111(222222) Редактирование имени и информации о себе

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет

formName.addEventListener("submit", function (evt) {
  // отменим стандартное поведение
  evt.preventDefault();

  // вызываем функцию
  handleFormSubmit(evt);
});

//22222222222  Вставка Шесть карточек «из коробки»

const elementsContainer = document.querySelector(".elements");

// Добавление карточек из массива initialCards
export function addCards() {
  initialCards.forEach((item) => {
    const newCard = createCard(item); // Создаем карточку
    elementsContainer.appendChild(newCard); // Вставляем карточку в контейнер
  });
}

//33333333333 Форма добавления карточки

// Получаем кнопку "добавить"
const addButton = document.querySelector(".profile__add-button");

// Получаем попап
const newPlacePopup = document.querySelector(".popup_new-place");

// Получаем инпуты
const namePlace = document.querySelector("#new-place-name");
const imgUrl = document.querySelector("#new-place-url");

// Функция-обработчик клика для кнопки "Добавить место"
function handleAddPlaceButtonClick() {
  openPopup(newPlacePopup);
}

// Слушаем клик на кнопке "Редактировать профиль" и открываем попап
addButton.addEventListener("click", handleAddPlaceButtonClick);

//4444444444444  Добавление карточки

function addItem(event) {
  event.preventDefault(); // Предотвращаем перезагрузку страницы

  const saveButton = document.querySelector(".popup__save_new-place");
  saveButton.textContent = "Сохранение...";

  const nameValue = namePlace.value; // Получаем значение из поля ввода имени
  const urlValue = imgUrl.value; // Получаем значение из поля ввода URL

  // 6. Добавление новой карточки(сервер)

  saveItem(nameValue, urlValue)
    .then((res) => {
      const newCard = createCard(res); // Создаем новую карточку

      elementsContainer.insertBefore(newCard, elementsContainer.firstChild);
      closePopup(newPlacePopup); // Закрываем всплывающее окно

      namePlace.value = "";
      imgUrl.value = "";
    })
    .then(() => {
      console.log("Место успешно обновлено.");
    })
    .catch((error) => {
      console.error("Ошибка при обновлении профиля:", error);
    })
    .finally(() => {
      // После получения ответа от сервера, верните исходный текст кнопки
      saveButton.textContent = "Добавить";
    });
}

const formPlace = document.forms.place;

formPlace.addEventListener("submit", addItem);

//777777777777

// Получаем попап
const popupImage = document.querySelector(".popup_type_image");

// Получаем изображение "subtitle"
const popupSubtitle = document.querySelector(".popup__subtitle");

// Находим элемент <img> внутри попапа
const popupImageImg = popupImage.querySelector(".popup__image");

export function openImagePopup(event) {
  const clickedImage = event.target;
  const imageUrl = clickedImage.src;
  const imageAlt = clickedImage.alt;

  popupImageImg.src = imageUrl;
  popupImageImg.alt = `${imageAlt} вставлять`;
  popupSubtitle.textContent = imageAlt;
  openPopup(popupImage);
}

const validationSettings = {
  inputSelector: ".popup__field",
  buttonSelector: ".popup__save",
  formSelector: ".popup__form",
  ivalidPopupField: "popup__field_invalid",
};

enableValidation(validationSettings);

// 888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888 СПРИНТ

// 4. Загрузка карточек(сервер)

getInitialCards()
  .then((res) => {
    addCards();
  })
  .catch((error) => {
    console.error("Ошибка при обновлении профиля:", error);
  });

//5. Редактирование профиля(сервер)

// Функция для обработки сохранения профиля
function handleFormSubmit(evt) {
  evt.preventDefault();

  const nameValue = nameInput.value; // Получаем новое имя из поля ввода
  const jobValue = jobInput.value; // Получаем новую информацию о себе из поля ввода
  const saveButton = formName.querySelector(".popup__save");
  saveButton.textContent = "Сохранение...";
  patchUserProfile(nameValue, jobValue)
    .then(() => {
      console.log("Профиль успешно обновлен.");
      // Вставьте новые значения с помощью textContent
      profileName.textContent = nameValue;
      profileSpeciality.textContent = jobValue;
      closePopup(profilePopup);
    })
    .catch((error) => {
      console.error("Ошибка при обновлении профиля:", error);
    })
    .finally(() => {
      // После получения ответа от сервера, верните исходный текст кнопки
      saveButton.textContent = "Сохранить";
    });
}

// 10. Обновление аватара пользователя (сервер)

const popupAvatar = document.querySelector(".popup_avatar");
const editAvatar = document.querySelector(".profile__avatar-container");
const saveAvatar = document.querySelector(".popup__save_avatar");
const avatarValue = document.querySelector("#avatar-url");

function editAvatarButtonClick() {
  openPopup(popupAvatar);
  insertInput();
}

editAvatar.addEventListener("click", editAvatarButtonClick);

function saveAvatarButtonClick(evt) {
  saveAvatar.textContent = "Сохранение...";
  evt.preventDefault();
  const newAvatarUrl = avatarValue.value; // Получаем новый URL аватара из поля ввода
  changeAvatar(newAvatarUrl) // Отправляем новый URL на сервер
    .then(() => {
      console.log("Аватар успешно обновлен.");
      profileAvatar.src = newAvatarUrl; // Обновляем аватар на странице
      const popup = evt.target.closest(".popup");
      closePopup(popup);
    })
    .catch((error) => {
      console.error("Ошибка при обновлении аватара:", error);
    })
    .finally(() => {
      // После получения ответа от сервера, верните исходный текст кнопки
      saveAvatar.textContent = "Сохранить";
      avatarValue.value = "";
    });
}

saveAvatar.addEventListener("click", saveAvatarButtonClick);

// 7. Отображение количества лайков карточки(сервер)
// 7. Отображение количества лайков карточки(сервер)
// 8. Удаление карточки(сервер)
// 9. Постановка лайка(сервер)
// 9. Cнятие лайка(сервер)

export let myUserId = "";

//Промис получает сразу все необходимые нам данные при загрузке страницы

Promise.all([fetchProfile(), getInitialCards()])
  .then(([data, cards]) => {
    profileName.textContent = data.name;
    profileSpeciality.textContent = data.about;
    profileAvatar.src = data.avatar;
    myUserId = data._id;
    cards.forEach((card) => {
      const newCard = createCard(card);
      elementsContainer.append(newCard);
    });
  })
  .catch((err) => {
    console.log(err);
  });
