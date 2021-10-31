const { Router } = require('express');

const {
  getUsers,
  getCurrentUser,
  getUserById,
  updateUser,
  updateAvatar,
} = require('../controllers/users');

const {
  validId,
  validAbout,
  validAvatar
} = require('../middlewares/validation');

const usersRouter = Router();

usersRouter.get('/users', getUsers);

usersRouter.get('/users/me', validId, getCurrentUser);

usersRouter.get('/users/:id', validId, getUserById);

usersRouter.patch('/users/me', validAbout, updateUser);

usersRouter.patch('/users/me/avatar', validAvatar, updateAvatar);

module.exports = usersRouter;