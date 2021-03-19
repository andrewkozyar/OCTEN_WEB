const router = require('express').Router();

const { studentController } = require('../controller');

router.get('/', studentController.getAllStudents);
router.post('/', studentController.createNewStudent);

module.exports = router;
