import { openImagePopup } from "../index";
import { removeUserCard, putLike, deleteLike } from "./api.js"

export const initialCards = [];

























// Функция для создания карточки
export function createCard(item) {
  const cardTemplate = document.querySelector("#place-template").content;
  const cardElement = cardTemplate.cloneNode(true);

  cardElement.querySelector(".element__heading").textContent = item.name;
  const imageElement = cardElement.querySelector(".element__image");
  imageElement.src = item.link;
  imageElement.alt = item.name;
  

  const likeButton = cardElement.querySelector(".element__button");
  likeButton.addEventListener("click", toggleLike);

  const trashButton = cardElement.querySelector(".element__trash-button");
  trashButton.addEventListener("click", removeCard);
  imageElement.addEventListener("click", openImagePopup);


  return cardElement; // Возвращаем готовую карточку
}

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

