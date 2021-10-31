const { Router } = require('express');

const {
  getCards,
  createCard,
  deleteCard,
  likeCard,
  dislikeCard,
} = require('../controllers/cards');

const {
  validCard,
  validId
} = require('../middlewares/validation');

const cardsRouter = Router();

cardsRouter.get('/cards', getCards);

cardsRouter.post('/cards', validCard, createCard);

cardsRouter.delete('/cards/:id', validId, deleteCard);

cardsRouter.put('/cards/:id/likes', validId, likeCard);

cardsRouter.delete('/cards/:id/likes', validId, dislikeCard);


module.exports = cardsRouter;