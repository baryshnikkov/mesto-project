(()=>{"use strict";var e={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__submit",inactiveButtonClass:"popup__submit_disabled",inputErrorClass:"popup__input_error",errorClass:"popup__input-error_active"},t=document.querySelector(".profile__edit-avatar"),n=document.querySelector(".profile__edit-info"),r=document.querySelector(".profile__add-card");function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t){var n=t.baseUrl,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=n,this._headers=r}var t,n;return t=e,(n=[{key:"getUserInformation",value:function(){return this._request("".concat(this._baseUrl,"/users/me"),{method:"GET",headers:{authorization:this._headers.authorization}})}},{key:"getInitialCards",value:function(){return this._request("".concat(this._baseUrl,"/cards"),{method:"GET",headers:{authorization:this._headers.authorization}})}},{key:"changeUserData",value:function(e,t){return this._request("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})})}},{key:"addNewCard",value:function(e,t){return this._request("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:t})})}},{key:"deleteCard",value:function(e){return this._request("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this._headers.authorization}})}},{key:"addLikeCard",value:function(e){return this._request("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:{authorization:this._headers.authorization}})}},{key:"deleteLikeCard",value:function(e){return this._request("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:{authorization:this._headers.authorization}})}},{key:"updateAvatar",value:function(e){return this._request("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})})}},{key:"_request",value:function(e,t){return fetch(e,t).then(this._checkResponse)}},{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._closeButton=this._popup.querySelector(".popup__close-popup")}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),this._addEventListeners()}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),this._removeEventListeners()}},{key:"_addEventListeners",value:function(){this._clickCloseButton=this.close.bind(this),this._closeButton.addEventListener("click",this._clickCloseButton),this._clickOverlay=this._handleOverlayClode.bind(this),this._popup.addEventListener("mousedown",this._clickOverlay),this._clickEsc=this._handleEscClose.bind(this),document.addEventListener("keydown",this._clickEsc)}},{key:"_removeEventListeners",value:function(){this._closeButton.removeEventListener("click",this._clickCloseButton),this._popup.removeEventListener("mousedown",this._clickOverlay),document.removeEventListener("keydown",this._clickEsc)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"_handleOverlayClode",value:function(e){e.target===e.currentTarget&&this.close()}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(){return l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=f(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},l.apply(this,arguments)}function f(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=d(e)););return e}function p(e,t){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},p(e,t)}function h(e,t){if(t&&("object"===c(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}var _=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(r);if(o){var n=d(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return h(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._popupImage=t._popup.querySelector(".popup-selected-image__image"),t._popupImageText=t._popup.querySelector(".popup-selected-image__caption"),t}return t=a,(n=[{key:"open",value:function(e){l(d(a.prototype),"open",this).call(this),this._popupImage.src=e.src,this._popupImage.alt=e.alt,this._popupImageText.textContent=e.alt}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(u);function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(){return m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=b(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},m.apply(this,arguments)}function b(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}function k(e,t){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},k(e,t)}function g(e,t){if(t&&("object"===y(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}var O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&k(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=w(r);if(o){var n=w(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return g(this,e)});function a(e,t){var n,r=t.hendleSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._hendleSubmit=r,n._submitButton=n._popup.querySelector(".popup__submit"),n._submitButtonText=n._submitButton.textContent,n._form=n._popup.querySelector(".popup__form"),n._inputs=n._popup.querySelectorAll(".popup__input"),n}return t=a,n=[{key:"close",value:function(){m(w(a.prototype),"close",this).call(this),this._form.reset()}},{key:"renderLoading",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Сохранение...";this._submitButton.textContent=e?t:this._submitButtonText}},{key:"setInputValues",value:function(e){this._inputs.forEach((function(t){t.value=e[t.name]}))}},{key:"_getInputValues",value:function(){var e=this;return this._inputValues={},this._inputs.forEach((function(t){e._inputValues[t.name]=t.value})),this._inputValues}},{key:"_addEventListeners",value:function(){m(w(a.prototype),"_addEventListeners",this).call(this),this._clickSubmit=this._submitForm.bind(this),this._popup.addEventListener("submit",this._clickSubmit)}},{key:"_removeEventListeners",value:function(){m(w(a.prototype),"_removeEventListeners",this).call(this),this._popup.removeEventListener("submit",this._clickSubmit)}},{key:"_submitForm",value:function(e){e.preventDefault(),this._hendleSubmit(this._getInputValues())}}],n&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(u);function L(e){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L(e)}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(){return S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=C(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},S.apply(this,arguments)}function C(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=I(e)););return e}function j(e,t){return j=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},j(e,t)}function P(e,t){if(t&&("object"===L(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function I(e){return I=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},I(e)}var q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&j(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=I(r);if(o){var n=I(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return P(this,e)});function a(e,t){var n,r=t.hendleSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._hendleSubmit=r,n._buttonDelete=n._popup.querySelector(".popup__submit"),n._buttonDeleteText=n._buttonDelete.textContent,n}return t=a,n=[{key:"open",value:function(e,t){S(I(a.prototype),"open",this).call(this),this._item=e,this._cardId=t}},{key:"renderLoading",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Удаление...";this._buttonDelete.textContent=e?t:this._buttonDeleteText}},{key:"_addEventListeners",value:function(){S(I(a.prototype),"_addEventListeners",this).call(this),this._clickSubmit=this._clickOnSubmit.bind(this),this._popup.addEventListener("submit",this._clickSubmit)}},{key:"_removeEventListeners",value:function(){S(I(a.prototype),"_removeEventListeners",this).call(this),this._popup.removeEventListener("submit",this._clickSubmit)}},{key:"_clickOnSubmit",value:function(e){e.preventDefault(),this._hendleSubmit(this._item,this._cardId)}}],n&&E(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(u);function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var R=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._form=document.querySelector(n),this._inputList=Array.from(this._form.querySelectorAll(t.inputSelector)),this._submit=this._form.querySelector(t.submitButtonSelector),this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass}var t,n;return t=e,(n=[{key:"addValidation",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._isValid(t),e._toggleButtonState()}))}))}},{key:"checkValidation",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t)})),this._toggleButtonState()}},{key:"_toggleButtonState",value:function(){this._checkValidationInput()?(this._submit.disabled=!0,this._submit.classList.add(this._inactiveButtonClass)):(this._submit.disabled=!1,this._submit.classList.remove(this._inactiveButtonClass))}},{key:"_checkValidationInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_isValid",value:function(e){e.validity.patternMismatch?e.setCustomValidity(e.dataset.errorMessage):e.setCustomValidity(""),e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_showInputError",value:function(e,t){var n=this._form.querySelector(".".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),n.textContent=t,n.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e){var t=this._form.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass)}}])&&T(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function U(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var A=function(){function e(t,n){var r=t.dataAboutCard,o=t.idUser,i=t.putLike,a=t.deleteLike,u=t.deleteCard,c=t.handleCardClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=r.name,this._link=r.link,this._likes=r.likes,this._cardId=r._id,this._cardOwner=r.owner._id,this._idUser=o,this._putLike=i,this._deleteLike=a,this._deleteCard=u,this._handleCardClick=c,this._selector=n}var t,n;return t=e,(n=[{key:"renderer",value:function(){return this._element=this._getElement(),this._searchElements(this._element),this._elementImage.src=this._link,this._elementImage.alt=this._name,this._elementName.textContent=this._name,this._getNumberOfLikes(this._likes),this._checkOwnerLike(this._likes),this._showTrashOnOwnerCard(),this._setEventListeners(),this._element}},{key:"like",value:function(e){this._checkOwnerLike(e),this._getNumberOfLikes(e)}},{key:"_getElement",value:function(){return document.querySelector("#".concat(this._selector)).content.querySelector(".".concat(this._selector)).cloneNode(!0)}},{key:"_searchElements",value:function(e){this._elementImage=e.querySelector(".card__image"),this._elementName=e.querySelector(".card__title"),this._elementLikeAmount=e.querySelector(".card__number-of-likes"),this._elementLike=e.querySelector(".card__toogle-like"),this._elementRemove=e.querySelector(".card__delete-card")}},{key:"_getNumberOfLikes",value:function(e){this._elementLikeAmount.textContent=e.length}},{key:"_checkOwnerLike",value:function(e){var t=this;this._isLike=e.some((function(e){return e._id===t._idUser})),this._toggleLike()}},{key:"_toggleLike",value:function(){this._isLike?this._elementLike.classList.add("card__toggle-like_active"):this._elementLike.classList.remove("card__toggle-like_active")}},{key:"_showTrashOnOwnerCard",value:function(){this._cardOwner===this._idUser&&this._elementRemove.classList.add("card__delete-card_active")}},{key:"_setEventListeners",value:function(){var e=this;this._elementLike.addEventListener("click",(function(){e._isLike?e._deleteLike(e._cardId):e._putLike(e._cardId)})),this._elementRemove.classList.contains("card__delete-card_active")&&this._elementRemove.addEventListener("click",(function(){e._deleteCard(e._element,e._cardId)})),this._elementImage.addEventListener("click",(function(){e._handleCardClick(e._elementImage)}))}}])&&U(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var x=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;Array.isArray(e)?this._cardsArray=e:this._cardsArray=[e],this._cardsArray.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&B(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function V(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var D=function(){function e(t){var n=t.name,r=t.about,o=t.avatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=document.querySelector(n),this._userAbout=document.querySelector(r),this._userAvatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{"info-name":this._userName.textContent,"info-about":this._userAbout.textContent}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.about,r=e.avatar,o=e._id;this._userName.textContent=t,this._userAbout.textContent=n,this._userAvatar.src=r,this._userId=o}},{key:"getUserId",value:function(){return this._userId}}])&&V(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var z=new i({baseUrl:"https://nomoreparties.co/v1/plus-cohort-15",headers:{authorization:"05cc3a2e-5b2a-47f6-84c3-1337641f5c93","Content-Type":"application/json"}}),M=new D({name:".profile__name",about:".profile__about",avatar:".profile__avatar"}),J=new _("#popup-selected-image"),F=new q("#popup-delete-card",{hendleSubmit:function(e,t){F.renderLoading(!0),z.deleteCard(t).then((function(){e.remove(),F.close()})).catch((function(e){console.log(e)})).finally((function(){F.renderLoading(!1)}))}});Promise.all([z.getUserInformation(),z.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return N(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?N(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];M.setUserInfo(o),G.renderItems(i.reverse())})).catch((function(e){console.log(e)}));var G=new x({renderer:function(e){H(e,G)}},".cards"),H=function(e,t){var n=$(e);t.addItem(n)},$=function(e){var t=new A({dataAboutCard:e,idUser:M.getUserId(),putLike:function(e){z.addLikeCard(e).then((function(e){t.like(e.likes)})).catch((function(e){console.log(e)}))},deleteLike:function(e){z.deleteLikeCard(e).then((function(e){t.like(e.likes)})).catch((function(e){console.log(e)}))},deleteCard:function(e,t){F.open(e,t)},handleCardClick:function(e){J.open(e)}},"card");return t.renderer()},K=new O("#popup-edit-avatar",{hendleSubmit:function(e){K.renderLoading(!0),z.updateAvatar(e["avatar-link"]).then((function(e){M.setUserInfo(e),K.close()})).catch((function(e){console.log(e)})).finally((function(){K.renderLoading(!1)}))}}),Q=new O("#popup-edit-info",{hendleSubmit:function(e){Q.renderLoading(!0),z.changeUserData(e["info-name"],e["info-about"]).then((function(e){M.setUserInfo(e),Q.close()})).catch((function(e){console.log(e)})).finally((function(){Q.renderLoading(!1)}))}}),W=new O("#popup-add-card",{hendleSubmit:function(e){W.renderLoading(!0),z.addNewCard(e["card-name"],e["card-link"]).then((function(e){G.renderItems(e),W.close()})).catch((function(e){console.log(e)})).finally((function(){W.renderLoading(!1)}))}}),X=new R(e,"#popup-edit-avatar"),Y=new R(e,"#popup-edit-info"),Z=new R(e,"#popup-add-card");X.addValidation(),Y.addValidation(),Z.addValidation(),t.addEventListener("click",(function(){X.checkValidation(),K.open()})),n.addEventListener("click",(function(){Q.setInputValues(M.getUserInfo()),Y.checkValidation(),Q.open()})),r.addEventListener("click",(function(){Z.checkValidation(),W.open()}))})();