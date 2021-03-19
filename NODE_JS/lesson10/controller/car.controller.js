const fs = require('fs-extra').promises;

const { carService, fileService } = require('../service');
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
            const { photos, docs } = req;

            const car = await carService.createCar(req.body);

            if (photos) {
                for (const photo of photos) {
                    const { finalPath, uploadPath, dirPath } = fileService.pathDirBuilder(photo.name, car._id, 'photos', 'car');

                    // eslint-disable-next-line no-await-in-loop
                    await fs.mkdir(dirPath, { recursive: true });
                    // eslint-disable-next-line no-await-in-loop
                    await photo.mv(finalPath);

                    // eslint-disable-next-line no-await-in-loop
                    await carService.updateCarById(car._id, { photos: uploadPath });
                }
            }

            if (docs) {
                for (const doc of docs) {
                    const {
                        finalPath,
                        uploadPath,
                        dirPath
                    } = fileService.pathDirBuilder(doc.name, car._id, 'docs', 'car');

                    // eslint-disable-next-line no-await-in-loop
                    await fs.mkdir(dirPath, { recursive: true });
                    // eslint-disable-next-line no-await-in-loop
                    await doc.mv(finalPath);

                    // eslint-disable-next-line no-await-in-loop
                    await carService.updateCarById(car._id, { docs: uploadPath });
                }
            }

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
