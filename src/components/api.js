// 2. Перед стартом.

const config = {
  baseUrl: "https://mesto.nomoreparties.co/v1/wbf-cohort-12",
  headers: {
    "Content-Type": "application/json",
    authorization: "a5b874b6-9996-4636-90dc-7aca01fd7b4e",
  },
};

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }

  // если ошибка, отклоняем промис
  return Promise.reject(`Ошибка: ${res.status}`);
}

// 3. Загрузка информации о пользователе с сервера

export function fetchProfile() {
  return fetch("https://mesto.nomoreparties.co/v1/wbf-cohort-12/users/me", {
    headers: {
      authorization: "a5b874b6-9996-4636-90dc-7aca01fd7b4e",
    },
  })
    .then((res) => res.json())
    .catch((error) => {
      console.error("Ошибка при обновлении профиля:", error);
    });
}

// 4. Загрузка карточек с сервера

export function getInitialCards() {
  return fetch(`${config.baseUrl}/cards`, config).then(checkResponse);
}

// 5. Редактирование профиля

export function patchUserProfile(name, about) {
  return fetch("https://mesto.nomoreparties.co/v1/wbf-cohort-12/users/me", {
    method: "PATCH",
    headers: {
      authorization: "a5b874b6-9996-4636-90dc-7aca01fd7b4e",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      about: about,
    }),
  }).then((res) => {
    if (!res.ok) {
      throw new Error("Ошибка при обновлении профиля");
    }
    return res.json();
  });
}

// 6. Добавление новой карточки

export function saveItem(name, link) {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers,
    "Content-Type": "application/json",
    method: "POST",
    body: JSON.stringify({
      name: name,
      link: link,
    }),
  }).then(checkResponse);
}

// 8. Удаление карточки
export const deleteItem = (idCard) => {
  return fetch(`${config.baseUrl}/cards/${idCard}`, {
    method: "DELETE",
    headers: config.headers,
  }).then(checkResponse);
};

// 9. Постановка лайка
export const getLike = (idCard) => {
  return fetch(`${config.baseUrl}/cards/likes/${idCard}`, {
    method: "PUT",
    headers: config.headers,
  }).then(checkResponse);
};

// 9. Cнятие лайка
export const deleteLike = (idCard) => {
  return fetch(`${config.baseUrl}/cards/likes/${idCard}`, {
    method: "DELETE",
    headers: config.headers,
  }).then(checkResponse);
};

// 10. Обновление аватара пользователя

export function changeAvatar(avatar) {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    headers: config.headers,
    "Content-Type": "application/json",
    method: "PATCH",
    body: JSON.stringify({
      avatar: avatar,
    }),
  }).then(checkResponse);
}
