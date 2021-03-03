const carService = require('../service/car.service');
const errorCodes = require('../constant/errorCodes.enum');
const responseCodes = require('../constant/responseCodes.enum');

module.exports = {
    getAllCars: async (req, res) => {
        try {
            const users = await carService.findCars();

            res.json(users);
        } catch (e) {
            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    },

    getSingleCar: async (req, res) => {
        try {
            const { carID } = req.params;

            const car = await carService.findSingleCar(carID);

            res.json(car);
        } catch (e) {
            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    },

    createCar: async (req, res) => {
        try {
            await carService.createCar(req.body);

            res.status(responseCodes.CREATED).json('car is created');
        } catch (e) {
            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    },

    deleteCar: async (req, res) => {
        try {
            const { carID } = req.params;

            await carService.deleteUser(carID);

            res.status(responseCodes.DELETED).json('car is deleted');
        } catch (e) {
            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    }
};
