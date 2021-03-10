const { models: { userModel } } = require('../dataBase');
require('../dataBase/models/Car');

module.exports = {
    findUsers: () => userModel.find(),

    findSingleUser: (userID) => userModel.findById(userID),

    createUser: (userObject) => userModel.create(userObject),

    deleteUser: (userID) => userModel.findByIdAndDelete(userID)
};
