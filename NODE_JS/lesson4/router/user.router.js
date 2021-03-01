const router = require('express').Router();

const userController = require('../controller/user.controller');
const userMiddleware = require('../middleware/user.middleware');

router.get('/', userController.getAllUsers);

router.get('/:userID', userMiddleware.isUserIDValid, userController.getSingleUser);

router.post('/', userController.createUser);

router.delete('/:userID', userController.deleteUser);

module.exports = router;
