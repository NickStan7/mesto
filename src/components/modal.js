import { blockButton } from "./validation";

// Функция для закрытия попапа на Escape
function closePopupEscape(e) {
  if (e.key === "Escape") {
    const popup = document.querySelector(".popup_opened");
    closePopup(popup);
  }
}

function closePopupOverlay(e) {
  const popup = document.querySelector(".popup_opened");
  if (e.target === popup) {
    closePopup(popup);
  }
}

// Функция для открытия попапа
function openPopup(popup) {
  blockButton();
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
