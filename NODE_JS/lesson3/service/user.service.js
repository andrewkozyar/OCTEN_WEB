const fs = require('fs');
const path = require('path');

const users = require('../dataBase/users.json');

const usersPath = path.join('.', 'dataBase', 'users.json');

module.exports = {
    findUsers: () => users,

    findUserByName: (userName) => {
        for(let i = 0; i < users.length; i++){
            if(userName === users[i].name || userName === users[i].email){
                return (users[i])
            }
        }
    },

    createUser: (userObject) => {
        fs.readFile(usersPath, ((err, data) => {
            if(err){
                console.log(err);
                return
            }

            const user = JSON.parse(data.toString());

            user.push(userObject);
            fs.writeFile(usersPath, JSON.stringify(user), err1 => console.log(err1));
        }));
    },

    deleteUser: (userID) => {
        fs.readFile(usersPath, ((err, data) => {
            if(err){
                console.log(err);
                return
            }

            const user = JSON.parse(data.toString());

            user.splice(userID,1);
            fs.writeFile(usersPath, JSON.stringify(user), err1 => console.log(err1));
        }));
    }
};
