const router = require('express').Router();

const carController = require('../controller/car.controller');
const carMiddleware = require('../middleware/car.middleware');

router.get('/', carController.getAllCars);

router.get('/:carID', carMiddleware.isCarIDValid, carController.getSingleCar);

router.post('/', carController.createCar);

router.delete('/:carID', carController.deleteCar);

module.exports = router;
