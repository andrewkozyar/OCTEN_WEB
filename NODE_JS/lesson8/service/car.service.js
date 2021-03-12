const { models: { carModel } } = require('../dataBase');

module.exports = {
    findCars: () => carModel.find(),

    findSingleCar: (carID) => carModel.findById(carID),

    createCar: (carObject) => carModel.create(carObject),

    deleteUser: (carID) => carModel.findByIdAndDelete(carID),

    updateCarById: (carId, updateObject) => carModel.updateOne({ _id: carId }, { $set: updateObject })
};
