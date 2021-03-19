const { idValidator, carValidators } = require('../validator');

module.exports = {
    isCarIDValid: async (req, res, next) => {
        try {
            const { userId } = req.params;

            const { error } = await idValidator.validate(userId);

            if (error) {
                throw new Error(error.details[0].message);
            }

            next();
        } catch (e) {
            next(e);
        }
    },

    isCarValid: async (req, res, next) => {
        try {
            const { error } = await carValidators.createCarValidator.validate(req.body);

            if (error) {
                throw new Error(error.details[0].message);
            }

            next();
        } catch (e) {
            next(e);
        }
    }
};
