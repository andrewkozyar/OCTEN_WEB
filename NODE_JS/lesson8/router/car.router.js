const router = require('express').Router();

const { carController } = require('../controller');
const { carMiddleware, fileMiddleware } = require('../middleware');

router.get('/', carController.getAllCars);

router.post('/', carMiddleware.isCarValid, fileMiddleware.checkFileMiddleware, carController.createCar);

router.get('/:carID', carMiddleware.isCarIDValid, carController.getSingleCar);

router.delete('/:carID', carMiddleware.isCarIDValid, carController.deleteCar);

module.exports = router;
