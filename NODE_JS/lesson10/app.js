const dotenv = require('dotenv');
const express = require('express');
const fileupload = require('express-fileupload');
const mongoose = require('mongoose');
const path = require('path');

const db = require('./dataBase/Mysql').getInstance();

dotenv.config({ path: './.env' });

db().setModels();

const apiRouter = require('./router/api.router');
const { MONGO_URL, PORT } = require('./config/config');

const app = express();

_connectDB();

app.use(fileupload());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(process.cwd(), 'static')));

app.use('/', apiRouter);

// eslint-disable-next-line no-unused-vars
app.use('*', (err, req, res, next) => {
    res
        .status(err.status || 500)
        .json({
            customCode: err.customCode || 0,
            message: err.message || ''
        });
});

app.listen(PORT, () => {
    console.log(`App listen ${PORT}`);
});

function _connectDB() {
    mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });

    const { connection } = mongoose;

    connection.on('error', (error) => {
        console.log(error);
    });
}
