// Функция для закрытия попапа на Escape
function closePopupEscape(e) {
    const popup = document.querySelector(".popup_opened")
    if (e.key === 'Escape')  
        closePopup(popup);
  }


// Функция для открытия попапа
function openPopup(popup) {
    popup.classList.add("popup_opened");
    document.addEventListener("keydown",closePopupEscape)
  }


// Функция для закрытия попапа
function closePopup(popup) {
    popup.classList.remove("popup_opened");
    document.removeEventListener("keydown",closePopupEscape)
  }


  export {openPopup,closePopup }