const db = require('../dataBase/Mysql').getInstance();

module.exports = {
    findAllStudents: () => {
        const Student = db().getModel('Student');

        return Student.findAll();
    },

    createStudent: (studentObject) => {
        const Student = db().getModel('Student');

        return Student.create(studentObject);
    },
};
