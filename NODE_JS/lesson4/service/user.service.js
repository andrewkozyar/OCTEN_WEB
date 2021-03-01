const User = require('../dataBase/models/User');
require('../dataBase/models/Car');

module.exports = {
    findUsers: () => User.find(),

    findSingleUser: (userID) => User.findById(userID),

    createUser: (userObject) => User.create(userObject),

    deleteUser: (userID) => User.findByIdAndDelete(userID)
};
