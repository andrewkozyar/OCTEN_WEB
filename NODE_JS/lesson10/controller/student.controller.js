const { studentService } = require('../service');

module.exports = {
    getAllStudents: async (req, res, next) => {
        try {
            const students = await studentService.findAllStudents();

            res.json(students);
        } catch (e) {
            next(e);
        }
    },

    createNewStudent: async (req, res, next) => {
        try {
            await studentService.createStudent(req.body);

            res.json('OK');
        } catch (e) {
            next(e);
        }
    }
};
