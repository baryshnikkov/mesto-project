export default class Card {
  constructor({ dataAboutCard, idUser, putLike, deleteLike, deleteCard, handleCardClick }, selector) {
    this._name = dataAboutCard.name;
    this._link = dataAboutCard.link;
    this._likes = dataAboutCard.likes;
    this._cardId = dataAboutCard._id;
    this._cardOwner = dataAboutCard.owner._id;
    this._idUser = idUser;
    this._putLike = putLike;
    this._deleteLike = deleteLike;
    this._deleteCard = deleteCard;
    this._handleCardClick = handleCardClick;
    this._selector = selector;
  }

  renderer() {
    this._element = this._getElement();

    this._searchElements(this._element);

    this._elementImage.src = this._link;
    this._elementImage.alt = this._name;
    this._elementName.textContent = this._name;

    this._getNumberOfLikes(this._likes);
    this._checkOwnerLike(this._likes);
    this._showTrashOnOwnerCard();
    this._setEventListeners();

    return this._element;
  }

  like(el) {
    this._checkOwnerLike(el);
    this._getNumberOfLikes(el);
  }

  _getElement() {
    return document
      .querySelector(`#${this._selector}`)
      .content
      .querySelector(`.${this._selector}`)
      .cloneNode(true);
  }

  _searchElements(element) {
    this._elementImage = element.querySelector('.card__image');
    this._elementName = element.querySelector('.card__title');
    this._elementLikeAmount = element.querySelector('.card__number-of-likes');
    this._elementLike = element.querySelector('.card__toogle-like');
    this._elementRemove = element.querySelector('.card__delete-card');
  }

  _getNumberOfLikes(el) {
    this._elementLikeAmount.textContent = el.length;
  }

  _checkOwnerLike(el) {
    this._isLike = el.some((el) => {
      return el._id === this._idUser;
    });

    this._toggleLike();
  }

  _toggleLike() {
    if (this._isLike) {
      this._elementLike.classList.add('card__toggle-like_active');
    } else {
      this._elementLike.classList.remove('card__toggle-like_active');
    }
  }

  _showTrashOnOwnerCard() {
    if (this._cardOwner === this._idUser) {
      this._elementRemove.classList.add('card__delete-card_active');
    }
  }

  _setEventListeners() {
    this._elementLike.addEventListener('click', () => {
      if (!this._isLike) {
        this._putLike(this._cardId);
      } else {
        this._deleteLike(this._cardId);
      }
    })

    if (this._elementRemove.classList.contains('card__delete-card_active')) {
      this._elementRemove.addEventListener('click', () => {
        this._deleteCard(this._element, this._cardId);
      })
    }

    this._elementImage.addEventListener('click', () => {
      this._handleCardClick(this._elementImage);
    })
  }
}
