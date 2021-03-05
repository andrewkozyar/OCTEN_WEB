const { carService } = require('../service');
const { errorCodesEnum, responseCodesEnum, responseMessagesEnum: { carResponse } } = require('../constant');

module.exports = {
    getAllCars: async (req, res) => {
        try {
            const users = await carService.findCars();

            res.json(users);
        } catch (e) {
            res.status(errorCodesEnum.BAD_REQUEST).json(e.message);
        }
    },

    getSingleCar: async (req, res) => {
        try {
            const { carID } = req.params;

            const car = await carService.findSingleCar(carID);

            res.json(car);
        } catch (e) {
            res.status(errorCodesEnum.BAD_REQUEST).json(e.message);
        }
    },

    createCar: async (req, res) => {
        try {
            await carService.createCar(req.body);

            res.status(responseCodesEnum.CREATED).json(carResponse.create);
        } catch (e) {
            res.status(errorCodesEnum.BAD_REQUEST).json(e.message);
        }
    },

    deleteCar: async (req, res) => {
        try {
            const { carID } = req.params;

            await carService.deleteUser(carID);

            res.status(responseCodesEnum.DELETED).json(carResponse.delete);
        } catch (e) {
            res.status(errorCodesEnum.BAD_REQUEST).json(e.message);
        }
    }
};
