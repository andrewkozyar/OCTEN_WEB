const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const { SQL_DB, SQL_LOGIN, SQL_PASSWORD } = require('../../config/config');

module.exports = (() => {
    let instance;

    const initConnection = () => {
        const client = new Sequelize(SQL_DB, SQL_LOGIN, SQL_PASSWORD, { dialect: 'mysql' });

        const models = {};
        const modelsPath = path.join(process.cwd(), 'dataBase', 'Mysql', 'models');

        const getModels = () => {
            fs.readdir(modelsPath, (err, files) => {
                files.forEach((file) => {
                    const [model] = file.split('.');
                    // eslint-disable-next-line import/no-dynamic-require
                    const modelFile = require(path.join(modelsPath, model));

                    models[model] = modelFile(client);
                });
            });
        };

        return {
            setModels: () => getModels(),
            getModel: (modelName) => models[modelName]
        };
    };

    return {
        getInstance: () => {
            if (!instance) {
                instance = initConnection;
            }
            return instance;
        }
    };
})();