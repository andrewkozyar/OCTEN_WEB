const router = require('express').Router();

const { userController } = require('../controller');
const { authMiddleware, fileMiddleware, userMiddleware } = require('../middleware');

router.get('/', userController.getAllUsers);

router.get('/:userID', userMiddleware.isUserIDValid, userController.getSingleUser);

router.post(
    '/',
    userMiddleware.isUserEmailRepeated,
    userMiddleware.isUserValid,
    fileMiddleware.checkFileMiddleware,
    fileMiddleware.checkAvatar,
    userController.createUser
);

router.delete('/:userID', authMiddleware.checkAccessTokenMiddleware, userMiddleware.isUserIDValid, userController.deleteUser);

module.exports = router;
