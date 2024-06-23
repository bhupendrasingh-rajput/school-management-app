const express = require('express');
const router = express.Router();
const { getTeachers, createTeacher, deleteTeacher } = require('../controllers/teacherController');

router.route('/')
    .get(getTeachers)
    .post(createTeacher);

router.route('/:teacherId')
    .delete(deleteTeacher);

module.exports = router;
