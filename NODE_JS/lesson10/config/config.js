module.exports = {
    JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET,
    JWT_SECRET: process.env.JWT_SECRET,
    MONGO_URL: process.env.MONGO_URL || 'mongodb://localhost/lesson4',
    PORT: process.env.PORT || '5000',

    ROOT_EMAIL: process.env.ROOT_EMAIL,
    ROOT_EMAIL_PASSWORD: process.env.ROOT_EMAIL_PASSWORD,

    SQL_DB: process.env.SQL_DB,
    SQL_LOGIN: process.env.SQL_LOGIN,
    SQL_PASSWORD: process.env.SQL_PASSWORD
};
