

import { initialCards } from "../components/card.js"

const config = {
    baseUrl: 'https://mesto.nomoreparties.co/v1/wbf-cohort-12', 

    headers: {
        'Content-Type': 'application/json',
      authorization: 'a5b874b6-9996-4636-90dc-7aca01fd7b4e'
    }
  }

function checkResponse(res) {
    if (res.ok) {
        return res.json();
      }

      // если ошибка, отклоняем промис
      return Promise.reject(`Ошибка: ${res.status}`);
}


export function getInitialCards() {
    return fetch(`${config.baseUrl}/cards`, config)
    
      .then(checkResponse
        )
        
      .then(data => {
        const newData = data.map(card => ({
          name: card.name,
          link: card.link
        }));
  
        initialCards.push(...newData);
      })
     // catch в самом конце только!!! .catch(error => {
       // console.error('Ошибка при обновлении профиля:', error);
     // });
  }

  export function saveItem(name, link) {
    return fetch(`${config.baseUrl}/cards`, {
        headers: config.headers,
        'Content-Type': 'application/json',
        method: "POST",
        body: JSON.stringify({
            name: name,
            link: link
        })
    })
    .then(checkResponse)
    
}

export function deleteItem(id) {
    return fetch(`${config.baseUrl}/users/me/avatar`, {
        headers: config.headers,
        'Content-Type': 'application/json',
        method: "DELETE",
  
    })
    .then(checkResponse);
}



// 10. Обновление аватара пользователя

export function changeAvatar(avatar) {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
      headers: config.headers,
      'Content-Type': 'application/json',
      method: "PATCH",
      body: JSON.stringify({
          avatar: avatar
          
      })
  })
  .then(checkResponse)
  
}


//7

//добавление инфо о лайке на сервер
export function addLike(id) {
  return request(`${config.baseUrl}/cards/likes/${id}`, {
    method: 'PUT',
    headers: config.headers,
  })
}

export function removeLike(id) {
  return request(`${config.baseUrl}/cards/likes/${id}`, {
    method: 'DELETE',
    headers: config.headers,
  })
}