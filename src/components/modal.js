// Функция для закрытия попапа на Escape
function closePopupEscape(e) {
  const popup = document.querySelector(".popup_opened");
  if (e.key === "Escape") closePopup(popup);
}

function closePopupOverlay(e) {
  const popup = document.querySelector(".popup_opened");
  if (e.target === popup) closePopup(popup);
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
