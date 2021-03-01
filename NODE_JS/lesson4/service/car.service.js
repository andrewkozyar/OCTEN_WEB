const Car = require('../dataBase/models/Car');

module.exports = {
    findCars: () => Car.find(),

    findSingleCar: (carID) => Car.findById(carID),

    createCar: (carObject) => Car.create(carObject),

    deleteUser: (carID) => Car.findByIdAndDelete(carID)
};
