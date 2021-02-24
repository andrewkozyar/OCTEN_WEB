const userService = require('../service/user.service');
const errorCodes = require('../constant/errorCodes.enum');
const responseCodes = require('../constant/responseCodes.enum');


module.exports = {
    getAllUsers: async (req, res) => {
        try {
            const users = userService.findUsers();

            res.json(users);
        } catch (e) {
            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    },

    getSingleUser: async (req, res) => {
        try{
            const {userName} = req.params;
            const user = userService.findUserByName(userName);

            res.json(user);
        } catch (e) {
            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    },

    createUser: async (req, res) => {
        try{
            userService.createUser(req.body);

            res.status(responseCodes.CREATED).json('user are created');
        } catch (e) {
            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    },

    deleteUser: async (req, res) => {
        try {
            userService.deleteUser(req.body);

            res.status(responseCodes.DELETED).json('user are deleted');

        } catch (e) {
            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    }
};
