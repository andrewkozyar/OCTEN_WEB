const { errorCodesEnum, errorMessagesEnum } = require('../constant');
const { idValidator, userValidators } = require('../validator');
const { userService: { findUsers } } = require('../service');

module.exports = {
    isUserIDValid: async (req, res, next) => {
        try {
            const { userId } = req.params;

            const { error } = await idValidator.validate(userId);

            if (error) {
                throw new Error(error.details[0].message);
            }

            next();
        } catch (e) {
            res.status(errorCodesEnum.BAD_REQUEST).json(e.message);
        }
    },

    isUserValid: async (req, res, next) => {
        try {
            const { error } = await userValidators.createUserValidator.validate(req.body);

            if (error) {
                throw new Error(error.details[0].message);
            }

            next();
        } catch (e) {
            res.status(errorCodesEnum.BAD_REQUEST).json(e.message);
        }
    },

    isUserEmailRepeated: async (req, res, next) => {
        try {
            const users = await findUsers();
            const { email } = req.body;

            for (const value of users) {
                if (value.email === email) {
                    throw new Error(errorMessagesEnum.emailIsRepeated);
                }
            }

            next();
        } catch (e) {
            res.status(errorCodesEnum.BAD_REQUEST).json(e.message);
        }
    }
};
