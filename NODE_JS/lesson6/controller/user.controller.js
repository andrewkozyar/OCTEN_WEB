const { userService } = require('../service');
const {
    errorCodesEnum, errorMessagesEnum, responseCodesEnum, responseMessagesEnum: { userResponse }
} = require('../constant');
const { passwordHasher } = require('../helper');

module.exports = {
    getAllUsers: async (req, res) => {
        try {
            const users = await userService.findUsers();

            res.json(users);
        } catch (e) {
            res.status(errorCodesEnum.BAD_REQUEST).json(e.message);
        }
    },

    getSingleUser: async (req, res) => {
        try {
            const { userID } = req.params;

            const user = await userService.findSingleUser(userID);

            res.json(user);
        } catch (e) {
            res.status(errorCodesEnum.BAD_REQUEST).json(e.message);
        }
    },

    createUser: async (req, res) => {
        try {
            const { password } = req.body;

            const hashPassword = await passwordHasher.hash(password);

            userService.createUser({ ...req.body, password: hashPassword });

            res.status(responseCodesEnum.CREATED).json(userResponse.create);
        } catch (e) {
            res.status(errorCodesEnum.BAD_REQUEST).json(e.message);
        }
    },

    deleteUser: async (req, res) => {
        try {
            const { userID } = req.params;

            if (userID !== req.user._id.toString()) {
                throw new Error(errorMessagesEnum.unauthorized);
            }

            await userService.deleteUser(userID);

            res.status(responseCodesEnum.DELETED).json(userResponse.delete);
        } catch (e) {
            res.status(errorCodesEnum.BAD_REQUEST).json(e.message);
        }
    }
};
