const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const usersPath = path.join(process.cwd(), 'dataBase', 'users.json');

const writeFilePromisify = promisify(fs.writeFile);
const readFilePromisify = promisify(fs.readFile);

let users = [];

const readFile = async () => {
    try {
        const promise = await readFilePromisify(usersPath);
        users = JSON.parse(promise.toString());
    } catch (e) {
        console.log(e);
    }
};
readFile().then();

module.exports = {
    findUsers: () => users,

    findSingleUser: (userName) => {
        for (let i = 0; i < users.length; i++) {
            if (userName === users[i].name || userName === users[i].email) {
                return (users[i]);
            }
        }
    },

    createUser: (userObject) => {
        users.push(userObject);
        writeFilePromisify(usersPath, JSON.stringify(users)).then();
    },

    deleteUser: (userID) => {
        users.splice(userID, 1);
        writeFilePromisify(usersPath, JSON.stringify(users)).then();
    }
};
