const router = require('express').Router();

const userController = require('../controller/user.controller');
const userMiddleware = require('../middleware/user.middleware');

router.get('/', userController.getAllUsers);

router.get('/:userID', userController.getSingleUser);

router.post('/', userMiddleware.isUserValid, userController.createUser);

router.delete('/:userID', userController.deleteUser);

module.exports = router;
