const errorCodes = require('../constant/errorCodes.enum');

module.exports = {
    isCarIDValid: async (req, res, next) => {
        try {
            const { userId } = await req.params;

            if (userId.length !== 24) {
                throw new Error('Not Valid user id');
            }

            next();
        } catch (e) {
            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    }
};
