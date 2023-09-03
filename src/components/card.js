import arkhyzImage from "./images/arkhyz.jpg";

import chelyabinskImage from "./images/chelyabinsk-oblast.jpg";

import ivanovoImage from "./images/ivanovo.jpg";

import kamchatkaImage from "./images/kamchatka.jpg";

import holmogorImage from "./images/kholmogorsky-rayon.jpg";

import baikalImage from "./images/baikal.jpg";

export const initialCards = [
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

// 5555555555  Обработчик для кнопки "Лайк"
export function toggleLike(event) {
  const likeButton = event.target;
  likeButton.classList.toggle("element__button_theme_dark");
}

//6666666666 Обработчик для кнопки "Удалить"
export function removeCard(event) {
  const card = event.target.closest(".element");
  card.remove();
}
