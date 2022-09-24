(()=>{"use strict";function e(e,t,r){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?function(e,t,r){var n=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(r.inputErrorClass),n.classList.remove(r.errorClass)}(e,t,r):function(e,t,r,n){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(n.inputErrorClass),o.textContent=r,o.classList.add(n.errorClass)}(e,t,t.validationMessage,r)}function t(e,t,r){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove(r.inactiveButtonClass)):(t.disabled=!0,t.classList.add(r.inactiveButtonClass))}var r=document.querySelector(".popup-img__button-exit");function n(e){var t;e.classList.add("popup_opened"),(t=document.querySelector(".popup_opened")).addEventListener("click",(function(e){e.target.classList.remove("popup_opened")})),document.addEventListener("keydown",(function(e){27===e.keyCode&&t.classList.remove("popup_opened")}))}function o(e){e.classList.remove("popup_opened")}var c=document.querySelector("#card").content;function i(e,t,r){var o=document.querySelector(".".concat(r)),i=function(e,t){var r=c.querySelector(".card").cloneNode(!0);return r.querySelector(".card__photo").src=t,r.querySelector(".card__photo").alt=e,r.querySelector(".card__title").textContent=e,r.querySelector(".card__like").addEventListener("click",(function(e){e.target.classList.toggle("card__like_active")})),r.querySelector(".card__trash").addEventListener("click",(function(e){e.target.closest(".card").remove()})),r.querySelector(".card__photo").addEventListener("click",(function(r){var o=document.querySelector(".popup-img"),c=o.querySelector(".popup-img__photo"),i=o.querySelector(".popup-img__caption");c.src=t,c.alt=e,i.textContent=e,n(o)})),r}(e,t);o.prepend(i)}var u=document.querySelector(".profile__add-button"),a=document.querySelector("#popup-create"),s=a.querySelector(".popup__in-button-exit"),p=a.querySelector(".popup__container"),l=a.querySelector(".popup__in-text_el_name"),d=a.querySelector(".popup__in-text_el_profession"),_=document.querySelector(".profile__edit-button"),v=document.querySelector("#popup-edit"),m=v.querySelector(".popup__in-text_el_name"),f=v.querySelector(".popup__in-text_el_profession"),y=document.querySelector(".profile__name"),S=document.querySelector(".profile__profession"),q=v.querySelector(".popup__in-button-exit"),k=v.querySelector(".popup__container");[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}].forEach((function(e){i(e.name,e.link,"cards")})),r.addEventListener("click",(function(){o(document.querySelector(".popup-img"))})),u.addEventListener("click",(function(){n(a)})),s.addEventListener("click",(function(){o(a)})),p.addEventListener("submit",(function(e){e.preventDefault(),i(l.value,d.value,"cards"),l.value="",d.value="",o(a)})),_.addEventListener("click",(function(){n(v),m.value=y.textContent,f.value=S.textContent})),q.addEventListener("click",(function(){o(v)})),k.addEventListener("submit",(function(e){e.preventDefault(),y.textContent=m.value,S.textContent=f.value,o(v)})),Array.from(document.querySelectorAll(".button-opene")).forEach((function(r){r.addEventListener("click",(function(){var r;r={formSelector:".popup__container",inputSelector:".popup__in-text",submitButtonSelector:".popup__in-button",inactiveButtonClass:"popup__in-button_disabled",inputErrorClass:"form__input_error",errorClass:"form__input-error_active"},Array.from(document.querySelectorAll(r.formSelector)).forEach((function(n){n.addEventListener("submit",(function(e){e.preventDefault()})),function(r,n){var o=Array.from(r.querySelectorAll(n.inputSelector)),c=r.querySelector(n.submitButtonSelector);o.forEach((function(i){e(r,i,n),t(o,c,n),i.addEventListener("input",(function(){e(r,i,n),t(o,c,n)}))}))}(n,r)}))}))}))})();