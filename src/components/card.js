import { myUserId, openImagePopup } from "../index.js";
import { getLike, deleteLike, deleteItem } from "./api.js";

// 7. Отображение количества лайков карточки(сервер)
// 8. Удаление карточки(сервер)
// 9. Постановка лайка(сервер)
// 9. Cнятие лайка(сервер)

export const initialCards = [];
const template = document
  .querySelector("#place-template")
  .content.querySelector(".element");
// Функция для создания карточки
export function createCard(item) {
  const cardElement = template.cloneNode(true);
  const elementsImage = cardElement.querySelector(".element__image");
  const elementsTitle = cardElement.querySelector(".element__heading");
  const elementsLike = cardElement.querySelector(".element__button");
  const elementsDelete = cardElement.querySelector(".element__trash-button");
  const likeCounter = cardElement.querySelector(".element__counter");

  elementsLike.addEventListener("click", () => {
    if (elementsLike.classList.contains("element__button_theme_dark")) {
      deleteLike(item._id)
        .then((res) => {
          likeCounter.textContent = res.likes.length;
          elementsLike.classList.remove("element__button_theme_dark");
        })
        .catch((err) => console.log("Ошибка связана с лайком", err));
    } else {
      getLike(item._id)
        .then((res) => {
          likeCounter.textContent = res.likes.length;
          elementsLike.classList.add("element__button_theme_dark");
        })
        .catch((err) => console.log("Ошибка связана с лайком", err));
    }
  });

  elementsDelete.addEventListener("click", () => {
    deleteItem(item._id)
      .then(() => cardElement.remove())
      .catch((err) => console.log(err));
  });

  elementsTitle.textContent = item.name;
  elementsImage.src = item.link;
  elementsImage.alt = item.name;
  likeCounter.textContent = item.likes.length;

  // elementsImage.addEventListener('click', () => openImagePopup(item)); - пишет ошибку

  elementsImage.addEventListener("click", openImagePopup);

  // проверяем айди карточки и блокируем удаление чужой карточки

  if (!(item.owner._id === myUserId)) {
    elementsDelete.remove();
  }

  // меняем состояние иконки, если там есть мой айди
  item.likes.forEach((like) => {
    if (like._id === myUserId) {
      elementsLike.classList.add("element__button_theme_dark");
    }
  });

  return cardElement;
}
