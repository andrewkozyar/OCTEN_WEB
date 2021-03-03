const router = require('express').Router();

const { userController } = require('../controller');
const { userMiddleware } = require('../middleware');

router.get('/', userController.getAllUsers);

router.get('/:userID', userMiddleware.isUserIDValid, userController.getSingleUser);

router.post('/', userMiddleware.isUserEmailRepeated, userMiddleware.isUserValid, userController.createUser);

router.delete('/:userID', userMiddleware.isUserIDValid, userController.deleteUser);

module.exports = router;
