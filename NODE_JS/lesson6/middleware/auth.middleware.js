const jwt = require('jsonwebtoken');

const { JWT_SECRET } = require('../config/config');
const { constants: { AUTHORIZATION }, errorMessagesEnum } = require('../constant');
const { models: { oAuthModel } } = require('../dataBase');

module.exports = {
    checkAccessTokenMiddleware: async (req, res, next) => {
        try {
            const access_token = req.get(AUTHORIZATION);

            if (!access_token) {
                throw new Error(errorMessagesEnum.required_token);
            }

            const tokens = await oAuthModel.findOne({ access_token }).populate('_user_id');

            if (!tokens) {
                throw new Error(errorMessagesEnum.not_valid_token);
            }

            jwt.verify(access_token, JWT_SECRET, (err) => {
                if (err) {
                    throw new Error(errorMessagesEnum.not_valid_token);
                }
            });

            req.user = tokens._user_id;

            next();
        } catch (e) {
            res.json(e.message);
        }
    }
};
