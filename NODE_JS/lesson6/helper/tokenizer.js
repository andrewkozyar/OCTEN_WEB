const jwt = require('jsonwebtoken');

module.exports = () => {
    const access_token = jwt.sign({}, 'JWT_SECRET', { expiresIn: '10m' });
    const refresh_token = jwt.sign({}, 'JWT_REFRESH', { expiresIn: '10m' });

    return {
        access_token,
        refresh_token
    };
};
