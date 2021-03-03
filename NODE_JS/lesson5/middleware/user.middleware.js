const { errorCodesEnum } = require('../constant');
const { idValidator, userValidators } = require('../validator');

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
    }
};
