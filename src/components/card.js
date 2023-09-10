import { openImagePopup } from "../index";
import { saveItem, getLike, deleteLike, deleteCardServer} from "./api.js"

export const initialCards = [];


import { myUserId } from "../index";






















// Функция для создания карточки
//export function createCard(item) {
  //const cardTemplate = document.querySelector("#place-template").content;
  //const cardElement = cardTemplate.cloneNode(true);
//
  //cardElement.querySelector(".element__heading").textContent = item.name;
  //const imageElement = cardElement.querySelector(".element__image");
  //imageElement.src = item.link;
  //imageElement.alt = item.name;
  

  //const likeButton = cardElement.querySelector(".element__button");
  //likeButton.addEventListener("click", toggleLike);

  //const trashButton = cardElement.querySelector(".element__trash-button"); 
  //trashButton.addEventListener("click", removeCard);

  //imageElement.addEventListener("click", openImagePopup);


  //return cardElement; // Возвращаем готовую карточку
//}

const template = document.querySelector('#place-template').content.querySelector('.element');

export function createCard(item) {
  const cardElement = template.cloneNode(true);
  const elementsImage = cardElement.querySelector('.element__image');
  const elementsTitle = cardElement.querySelector('.element__heading');
  const elementsLike = cardElement.querySelector('.element__button');
  const elementsDelete = cardElement.querySelector('.element__trash-button');
  const likeCounter = cardElement.querySelector('.element__like-container');

  elementsLike.addEventListener('click', () => {
    if (elementsLike.classList.contains('element__button_theme_dark')) {
      deleteLike(item._id)
      .then((res) => {
        likeCounter.textContent = res.likes.length;
        elementsLike.classList.remove('element__button_theme_dark');
      })
      .catch((err) => console.log('Ошибка связана с лайком', err));
    } else {
      getLike(item._id)
      .then((res) => {
        likeCounter.textContent = res.likes.length;
        elementsLike.classList.add('element__button_theme_dark');
      })
      .catch((err) => console.log('Ошибка связана с лайком', err));
    }
  });

 

  elementsDelete.addEventListener('click', () => {
    deleteCardServer(item._id)
    .then(() => cardElement.remove())
    .catch((err) => console.log(err));
  });

  elementsTitle.textContent = item.name;
  elementsImage.src = item.link;
  elementsImage.alt = item.name;
  likeCounter.textContent = item.likes.length; //получаем длину массива лайков с объекта карточки

  // проверяем айди карточки и блокируем удаление чужой карточки
  if (!(item.owner._id === myUserId)) {
    elementsDelete.classList.remove('element__button_theme_dark');
  }

  // меняем состояние иконки, если там есть мой айди
  item.likes.forEach(like => {
    if (like._id === myUserId) {
      elementsLike.classList.add('element__button_theme_dark');
    }
  })

  return cardElement;
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

