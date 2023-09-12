(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};function t(e){"Escape"===e.key&&r(document.querySelector(".popup_opened"))}function n(e){e.target.classList.contains("popup_opened")&&r(e.target)}function o(e){e.classList.add("popup_opened"),document.addEventListener("keydown",t),document.addEventListener("click",n)}function r(e){e.classList.remove("popup_opened"),document.removeEventListener("keydown",t),document.removeEventListener("click",n)}function c(e){var t=e.target,n=t.src,r=t.alt;x.src=n,x.alt="".concat(r," вставлять"),C.textContent=r,o(k)}e.d({},{YX:()=>B,vi:()=>k,BV:()=>x,Vn:()=>C});var a={baseUrl:"https://mesto.nomoreparties.co/v1/wbf-cohort-12",headers:{"Content-Type":"application/json",authorization:"a5b874b6-9996-4636-90dc-7aca01fd7b4e"}};function u(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}function l(e,t){return fetch(e,t).then(u)}var i=document.querySelector("#place-template").content.querySelector(".element");function s(e){var t=i.cloneNode(!0),n=t.querySelector(".element__image"),o=t.querySelector(".element__heading"),r=t.querySelector(".element__button"),u=t.querySelector(".element__trash-button"),s=t.querySelector(".element__counter");return r.addEventListener("click",(function(){var t;r.classList.contains("element__button_theme_dark")?(t=e._id,l("".concat(a.baseUrl,"/cards/likes/").concat(t),{method:"DELETE",headers:a.headers})).then((function(e){s.textContent=e.likes.length,r.classList.remove("element__button_theme_dark")})).catch((function(e){return console.log("Ошибка связана с лайком",e)})):function(e){return l("".concat(a.baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:a.headers})}(e._id).then((function(e){s.textContent=e.likes.length,r.classList.add("element__button_theme_dark")})).catch((function(e){return console.log("Ошибка связана с лайком",e)}))})),u.addEventListener("click",(function(){var n;(n=e._id,l("".concat(a.baseUrl,"/cards/").concat(n),{method:"DELETE",headers:a.headers})).then((function(){return t.remove()})).catch((function(e){return console.log(e)}))})),o.textContent=e.name,n.src=e.link,n.alt=e.name,s.textContent=e.likes.length,n.addEventListener("click",c),e.owner._id!==B&&u.remove(),e.likes.forEach((function(e){e._id===B&&r.classList.add("element__button_theme_dark")})),t}var d=function(e){e.disabled=!0};function f(e,t){var n=e.querySelector(t.buttonSelector);d(n),e.addEventListener("reset",(function(){d(n)})),e.querySelectorAll(t.inputSelector).forEach((function(o){o.addEventListener("input",(function(){(function(e,t){e.validity.valid?function(e,t){var n="error-"+e.id;document.getElementById(n).textContent="",e.classList.remove(t.ivalidPopupField)}(e,t):function(e,t,n){var o="error-"+e.id;document.getElementById(o).textContent=t,e.classList.add(n.ivalidPopupField)}(e,e.validationMessage,t)})(o,t),function(e,t){e.checkValidity()?t.disabled=!1:d(t)}(e,n)}))}))}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var p,v=document.forms.name,_=document.forms.place,y=document.forms.avatar,h=document.querySelector(".profile__name"),b=document.querySelector(".profile__speciality"),S=document.querySelector(".profile__add-button"),g=document.querySelector(".popup_new-place"),E=document.querySelector("#new-place-name"),q=document.querySelector("#new-place-url"),L=document.querySelector(".elements"),k=document.querySelector(".popup_type_image"),C=document.querySelector(".popup__subtitle"),x=k.querySelector(".popup__image"),w=document.querySelector(".popup_avatar"),A=document.querySelector(".profile__avatar-container"),O=(document.querySelector(".popup__save_avatar"),document.querySelector("#avatar-url")),P=document.querySelector(".profile__edit-button"),U=document.querySelector(".profile__avatar"),j=document.querySelector(".popup_profile"),T=document.querySelectorAll(".popup__close"),D=v.elements.username,I=v.elements.speciality;T.forEach((function(e){return e.addEventListener("click",(function(e){r(e.target.closest(".popup"))}))})),P.addEventListener("click",(function(){var e,t;o(j),e=h.textContent,t=b.textContent,D.focus(),D.value=e,I.value=t})),v.addEventListener("submit",(function(e){e.preventDefault();var t,n,o=D.value,c=I.value,u=e.submitter;u.textContent="Сохранение...",(t=o,n=c,l("".concat(a.baseUrl,"/users/me"),{method:"PATCH",headers:a.headers,body:JSON.stringify({name:t,about:n})})).then((function(){console.log("Профиль успешно обновлен."),h.textContent=o,b.textContent=c,r(j)})).catch((function(e){console.error("Ошибка при обновлении профиля:",e)})).finally((function(){u.textContent="Сохранить"}))})),S.addEventListener("click",(function(){o(g)})),_.addEventListener("submit",(function(e){e.preventDefault();var t,n,o=e.submitter;o.textContent="Сохранение...",(t=E.value,n=q.value,l("".concat(a.baseUrl,"/cards"),{headers:a.headers,method:"POST",body:JSON.stringify({name:t,link:n})})).then((function(t){var n=s(t);L.insertBefore(n,L.firstChild),r(g),e.target.reset()})).then((function(){console.log("Место успешно обновлено.")})).catch((function(e){console.error("Ошибка при обновлении профиля:",e)})).finally((function(){o.textContent="Добавить"}))})),p={inputSelector:".popup__field",buttonSelector:".popup__save",formSelector:".popup__form",ivalidPopupField:"popup__field_invalid"},document.querySelectorAll(p.formSelector).forEach((function(e){f(e,p)})),A.addEventListener("click",(function(){o(w)})),y.addEventListener("submit",(function(e){var t=e.submitter;t.textContent="Сохранение...",e.preventDefault();var n,o=O.value;(n=o,l("".concat(a.baseUrl,"/users/me/avatar"),{headers:a.headers,method:"PATCH",body:JSON.stringify({avatar:n})})).then((function(){console.log("Аватар успешно обновлен."),U.src=o,r(w),y.reset()})).catch((function(e){console.error("Ошибка при обновлении аватара:",e)})).finally((function(){t.textContent="Сохранить"}))}));var B="";Promise.all([l("".concat(a.baseUrl,"/users/me"),{headers:a.headers}),l("".concat(a.baseUrl,"/cards"),a)]).then((function(e){var t,n,o=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,c,a,u=[],l=!0,i=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(o=c.call(n)).done)&&(u.push(o.value),u.length!==t);l=!0);}catch(e){i=!0,r=e}finally{try{if(!l&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(i)throw r}}return u}}(t,n)||function(e,t){if(e){if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),r=o[0],c=o[1];h.textContent=r.name,b.textContent=r.about,U.src=r.avatar,B=r._id,c.forEach((function(e){var t=s(e);L.append(t)}))})).catch((function(e){console.error("Ошибка при обновлении профиля:",e)}))})();