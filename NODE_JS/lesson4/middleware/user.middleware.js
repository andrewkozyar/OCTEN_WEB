const errorCodes = require('../constant/errorCodes.enum');

module.exports = {
    isUserIDValid: async (req, res, next) => {
        try {
            const id = await req.params.userID;
            if (id.length !== 24) {
                throw new Error('Not Valid user id');
            }
            next();
        } catch (e) {
            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    }
};
