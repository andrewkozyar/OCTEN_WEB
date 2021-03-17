const { models: { userModel } } = require('../dataBase');
require('../dataBase/models/Car');

module.exports = {
    findUsers: () => userModel.find(),

    findByEmail: (email) => userModel.findOne(email),

    findSingleUser: (userID) => userModel.findById(userID),

    createUser: (userObject) => userModel.create(userObject),

    deleteUser: (userID) => userModel.findByIdAndDelete(userID),

    updateUserById: (userId, updateObject) => userModel.updateOne({ _id: userId }, { $set: updateObject })
};
