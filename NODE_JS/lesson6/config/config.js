module.exports = {
    JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET,
    JWT_SECRET: process.env.JWT_SECRET,
    MONGO_URL: process.env.MONGO_URL || 'mongodb://localhost/lesson4',
    PORT: process.env.PORT || '5000'
};
