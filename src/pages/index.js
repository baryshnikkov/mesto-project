import './index.css';
import * as constants from '../utils/constants.js';
import Api from '../components/Api.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupDeleteCard from '../components/PopupDeleteCard.js';
import FormValidator from '../components/FormValidator.js';
import Card from '../components/Card';
import Section from '../components/Section';
import UserInfo from '../components/UserInfo';

const api = new Api(constants.apiConfig);
const userInfo = new UserInfo(constants.userSelectorsConfig);
const popupImage = new PopupWithImage('#popup-selected-image');
const popupDelete = new PopupDeleteCard('#popup-delete-card', {
  hendleSubmit: (item, cardId) => {
    popupDelete.renderLoading(true);
    api.deleteCard(cardId)
      .then(() => {
        item.remove();
        popupDelete.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupDelete.renderLoading(false);
      });
  }
});

Promise.all([api.getUserInformation(), api.getInitialCards()])
  .then(([userData, cards]) => {
    userInfo.setUserInfo(userData);
    cardList.renderItems(cards.reverse());
  })
  .catch((err) => {
    console.log(err);
  });

const cardList = new Section({
  renderer: (item) => {
    renderCard(item, cardList);
  }
}, '.cards');

const renderCard = (item, cardList) => {
  const card = createCard(item);
  cardList.addItem(card);
};

const createCard = (item) => {
  const card = new Card({
    dataAboutCard: item,
    idUser: userInfo.getUserId(),
    putLike: (item) => {
      api.addLikeCard(item)
        .then((res) => {
          card.like(res.likes);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    deleteLike: (item) => {
      api.deleteLikeCard(item)
        .then((res) => {
          card.like(res.likes);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    deleteCard: (item, cardId) => {
      popupDelete.open(item, cardId);
    },
    handleCardClick: (image) => {
      popupImage.open(image);
    }
  }, 'card');

  const cardElement = card.renderer();

  return cardElement;
};

const formEditAvatar = new PopupWithForm('#popup-edit-avatar', {
  hendleSubmit: (element) => {
    formEditAvatar.renderLoading(true);
    api.updateAvatar(element['avatar-link'])
      .then((res) => {
        userInfo.setUserInfo(res);
        formEditAvatar.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        formEditAvatar.renderLoading(false);
      });
  }
});

const formEditInfo = new PopupWithForm('#popup-edit-info', {
  hendleSubmit: (element) => {
    formEditInfo.renderLoading(true);
    api.changeUserData(element['info-name'], element['info-about'])
      .then((res) => {
        userInfo.setUserInfo(res);
        formEditInfo.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        formEditInfo.renderLoading(false);
      });
  }
});

const formAddCard = new PopupWithForm('#popup-add-card', {
  hendleSubmit: (element) => {
    formAddCard.renderLoading(true);
    api.addNewCard(element['card-name'], element['card-link'])
      .then((cards) => {
        cardList.renderItems(cards);
        formAddCard.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        formAddCard.renderLoading(false);
      });
  }
});

const validateFormEditAvatar = new FormValidator(constants.validateConfig, '#popup-edit-avatar');
const validateFormEditInfo = new FormValidator(constants.validateConfig, '#popup-edit-info');
const validateFormAddCard = new FormValidator(constants.validateConfig, '#popup-add-card');

validateFormEditAvatar.addValidation();
validateFormEditInfo.addValidation();
validateFormAddCard.addValidation();

constants.buttonEditAvatar.addEventListener('click', () => {
  validateFormEditAvatar.checkValidation();
  formEditAvatar.open();
});

constants.buttonEditInfo.addEventListener('click', () => {
  formEditInfo.setInputValues(userInfo.getUserInfo());
  validateFormEditInfo.checkValidation();
  formEditInfo.open();
});

constants.buttonAddCard.addEventListener('click', () => {
  validateFormAddCard.checkValidation();
  formAddCard.open();
});
