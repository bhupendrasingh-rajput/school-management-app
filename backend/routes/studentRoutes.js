const express = require('express');
const router = express.Router();
const { getStudents, createStudent, deleteStudent } = require('../controllers/studentController');

router.route('/')
    .get(getStudents)
    .post(createStudent);

router.route('/:studentId')
    .delete(deleteStudent);

module.exports = router;
