const userService = require('../service/user.service');
const errorCodes = require('../constant/errorCodes.enum');
const responseCodes = require('../constant/responseCodes.enum');

module.exports = {
    getAllUsers: async (req, res) => {
        try {
            const users = await userService.findUsers();

            res.json(users);
        } catch (e) {
            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    },

    getSingleUser: async (req, res) => {
        try {
            const { userID } = req.params;
            const user = await userService.findSingleUser(userID);

            res.json(user);
        } catch (e) {
            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    },

    createUser: async (req, res) => {
        try {
            await userService.createUser(req.body);

            res.status(responseCodes.CREATED).json('user is created');
        } catch (e) {
            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    },

    deleteUser: async (req, res) => {
        try {
            const { userID } = req.params;
            await userService.deleteUser(userID);

            res.status(responseCodes.DELETED).json('user is deleted');
        } catch (e) {
            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    }
};
