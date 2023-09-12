import { popupImageImg, popupSubtitle, popupImage } from "../index.js";

// Функция для закрытия попапа на Escape
function closePopupEscape(e) {
  if (e.key === "Escape") {
    const popup = document.querySelector(".popup_opened");
    closePopup(popup);
  }
}

function closePopupOverlay(e) {
  if (e.target.classList.contains('popup_opened')) {
    closePopup(e.target);
  }
  }

// Функция для открытия попапа
function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupEscape);
  document.addEventListener("click", closePopupOverlay);
}

// Функция для закрытия попапа
function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closePopupEscape);
  document.removeEventListener("click", closePopupOverlay);
}

export { openPopup, closePopup };


export function openImagePopup(event) {
  const clickedImage = event.target;
  const imageUrl = clickedImage.src;
  const imageAlt = clickedImage.alt;

  popupImageImg.src = imageUrl;
  popupImageImg.alt = `${imageAlt} вставлять`;
  popupSubtitle.textContent = imageAlt;
  openPopup(popupImage);
}
