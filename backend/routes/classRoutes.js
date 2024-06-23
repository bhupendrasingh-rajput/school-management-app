const express = require('express');
const router = express.Router();
const { getClass, createClass, deleteClass } = require('../controllers/classController');

router.route('/').get(getClass).post(createClass);
router.delete('/:classId', deleteClass)

module.exports = router;
