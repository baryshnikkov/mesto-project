(()=>{"use strict";function e(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?function(e,t,n){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),o.classList.remove(n.errorClass)}(e,t,n):function(e,t,n,o){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.add(o.inputErrorClass),r.textContent=n,r.classList.add(o.errorClass)}(e,t,t.validationMessage,n)}function t(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove(n.inactiveButtonClass)):(t.disabled=!0,t.classList.add(n.inactiveButtonClass))}function n(n){Array.from(document.querySelectorAll(n.formSelector)).forEach((function(o){o.addEventListener("submit",(function(e){e.preventDefault()})),function(n,o){var r=Array.from(n.querySelectorAll(o.inputSelector)),c=n.querySelector(o.submitButtonSelector);r.forEach((function(a){t(r,c,o),a.addEventListener("input",(function(){e(n,a,o),t(r,c,o)}))}))}(o,n)}))}var o=document.querySelector(".popup-img__button-exit");function r(e){e.classList.add("popup_opened"),e.addEventListener("click",a),document.addEventListener("keydown",i)}function c(e){e.classList.remove("popup_opened"),e.removeEventListener("click",a),document.removeEventListener("keydown",i)}function a(e){var t=document.querySelector(".popup_opened");t===e.target&&c(t)}function i(e){var t=document.querySelector(".popup_opened");27===e.keyCode&&c(t)}var u,s=document.querySelector(".profile__add-button"),l=document.querySelector("#popup-create"),d=l.querySelector(".popup__in-button-exit"),p=l.querySelector(".popup__container"),_=l.querySelector(".popup__in-text_el_name"),f=l.querySelector(".popup__in-text_el_profession"),m=document.querySelector(".profile__edit-button"),v=l.querySelector(".popup__in-button"),h=document.querySelector("#popup-edit"),y=h.querySelector(".popup__in-text_el_name"),S=h.querySelector(".popup__in-text_el_profession"),q=document.querySelector(".profile__name"),b=document.querySelector(".profile__profession"),k=h.querySelector(".popup__in-button-exit"),C=h.querySelector(".popup__container"),L=h.querySelector(".popup__in-button"),E=document.querySelector(".popup-img"),x=document.querySelector(".profile__avatar"),g=document.querySelector(".profile__overlay"),j=document.querySelector("#popup-avatar"),P=j.querySelector(".popup__in-button-exit"),U=j.querySelector(".popup__container"),A=j.querySelector(".popup__in-text_el_avatar"),T=j.querySelector(".popup__in-button"),B={baseUrl:"https://nomoreparties.co/v1/plus-cohort-15",headers:{authorization:"05cc3a2e-5b2a-47f6-84c3-1337641f5c93","Content-Type":"application/json"}},D=document.querySelector("#card").content,N=E.querySelector(".popup-img__photo"),O=E.querySelector(".popup-img__caption");var w={formSelector:".popup__container",inputSelector:".popup__in-text",submitButtonSelector:".popup__in-button",inactiveButtonClass:"popup__in-button_disabled",inputErrorClass:"form__input_error",errorClass:"form__input-error_active"};function J(e,t){var n=document.querySelector(".".concat(t)),o=function(e){var t=D.querySelector(".card").cloneNode(!0),n=t.querySelector(".card__photo");n.src=e.link,n.alt=e.name,t.querySelector(".card__title").textContent=e.name,e.likes.length>0&&(t.querySelector(".card__numbers").textContent=e.likes.length);var o=t.querySelector(".card__like");if(e.likes.some((function(e){return e._id===u}))&&o.classList.add("card__like_active"),o.addEventListener("click",(function(n){var o;n.target.classList.contains("card__like_active")?(o=e._id,fetch("".concat(B.baseUrl,"/cards/likes/").concat(o),{method:"DELETE",headers:B.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))).then((function(e){t.querySelector(".card__numbers").textContent=e.likes.length,0===e.likes.length&&(t.querySelector(".card__numbers").textContent="")})):function(e){return fetch("".concat(B.baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:B.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}(e._id).then((function(e){t.querySelector(".card__numbers").textContent=e.likes.length})),n.target.classList.toggle("card__like_active")})),u===e.owner._id){var c=t.querySelector(".card__trash");c.classList.add("card__trach_active"),c.addEventListener("click",(function(t){var n;(n=e._id,fetch("".concat(B.baseUrl,"/cards/").concat(n),{method:"DELETE",headers:B.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))).then((function(){t.target.closest(".card").remove()})).catch((function(e){console.log(e)}))}))}return t.querySelector(".card__photo").addEventListener("click",(function(t){N.src=e.link,N.alt=e.name,O.textContent=e.name,r(E)})),t}(e);n.prepend(o)}fetch("".concat(B.baseUrl,"/users/me"),{headers:B.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){q.textContent=e.name,b.textContent=e.about,x.src=e.avatar,u=e._id})).catch((function(e){console.log(e)})),fetch("".concat(B.baseUrl,"/cards"),{headers:B.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){e.reverse().forEach((function(e){J(e,"cards")}))})).catch((function(e){console.log(e)})),o.addEventListener("click",(function(){c(E)})),s.addEventListener("click",(function(){r(l)})),d.addEventListener("click",(function(){c(l)})),p.addEventListener("submit",(function(e){var t,o;v.textContent="Сохранение...",e.preventDefault(),(t="".concat(_.value),o="".concat(f.value),fetch("".concat(B.baseUrl,"/cards"),{method:"POST",headers:B.headers,body:JSON.stringify({name:t,link:o})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))).then((function(e){J(e,"cards")})).catch((function(e){console.log(e)})).finally((function(){p.reset(),v.textContent="Сохранить",c(l),n(w)}))})),m.addEventListener("click",(function(n){var o,c,a,i;r(h),y.value=q.textContent,S.value=b.textContent,o=C,c=w,a=Array.from(o.querySelectorAll(c.inputSelector)),i=o.querySelector(c.submitButtonSelector),a.forEach((function(n){e(o,n,c),t(a,i,c)}))})),k.addEventListener("click",(function(){c(h)})),C.addEventListener("submit",(function(){var e,t;L.textContent="Сохранение...",(e="".concat(y.value),t="".concat(S.value),fetch("".concat(B.baseUrl,"/users/me"),{method:"PATCH",headers:B.headers,body:JSON.stringify({name:e,about:t})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))).then((function(e){q.textContent=e.name,b.textContent=e.about})).catch((function(e){console.log(e)})).finally((function(){c(h),L.textContent="Сохранить"}))})),g.addEventListener("click",(function(){r(j)})),P.addEventListener("click",(function(){c(j)})),U.addEventListener("submit",(function(e){var t;T.textContent="Сохранение...",e.preventDefault(),(t=A.value,fetch("".concat(B.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:B.headers,body:JSON.stringify({avatar:t})}).then((function(e){return T.textContent="adfsdf",e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))).then((function(e){x.src=e.avatar})).catch((function(e){console.log(e)})).finally((function(){U.reset(),T.textContent="Сохранить",c(j),n(w)}))})),n(w)})();