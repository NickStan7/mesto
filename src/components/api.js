// 2. Перед стартом.

const config = {
  baseUrl: "https://mesto.nomoreparties.co/v1/wbf-cohort-12",
  headers: {
    "Content-Type": "application/json",
    authorization: "a5b874b6-9996-4636-90dc-7aca01fd7b4e",
  },
};

export function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  // если ошибка, отклоняем промис
  return Promise.reject(`Ошибка: ${res.status}`);
}

function request(url, options) {
  // принимает два аргумента: урл и объект опций, как и `fetch`
  return fetch(url, options).then(checkResponse);
}

// 3. Загрузка информации о пользователе с сервера

export function fetchProfile() {
  const url = `${config.baseUrl}/users/me`;
  const options = {
    headers: config.headers,
  };
  return request(url, options);
}

// 4. Загрузка карточек с сервера

export function getInitialCards() {
  const url = `${config.baseUrl}/cards`;
  const options = config;
  return request(url, options);
}

// 5. Редактирование профиля

export function patchUserProfile(name, about) {
  const url = `${config.baseUrl}/users/me`;
  const options = {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      about: about,
    }),
  };
  return request(url, options);
}

// 6. Добавление новой карточки

export function saveItem(name, link) {
  const url = `${config.baseUrl}/cards`;
  const options = {
    headers: config.headers,
    method: "POST",
    body: JSON.stringify({
      name: name,
      link: link,
    }),
  };
  return request(url, options);
}

// 8. Удаление карточки
export const deleteItem = (idCard) => {
  const url = `${config.baseUrl}/cards/${idCard}`;
  const options = {
    method: "DELETE",
    headers: config.headers,
  };
  return request(url, options);
};

// 9. Постановка лайка
export const getLike = (idCard) => {
  const url = `${config.baseUrl}/cards/likes/${idCard}`;
  const options = {
    method: "PUT",
    headers: config.headers,
  };
  return request(url, options);
};

// 9. Cнятие лайка
export const deleteLike = (idCard) => {
  const url = `${config.baseUrl}/cards/likes/${idCard}`;
  const options = {
    method: "DELETE",
    headers: config.headers,
  };
  return request(url, options);
};

// 10. Обновление аватара пользователя

export function changeAvatar(avatar) {
  const url = `${config.baseUrl}/users/me/avatar`;
  const options = {
    headers: config.headers,
    method: "PATCH",
    body: JSON.stringify({
      avatar: avatar,
    }),
  };
  return request(url, options);
}
