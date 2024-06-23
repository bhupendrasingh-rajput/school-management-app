const Student = require('../models/Student');
const Class = require('../models/Class');

const getStudents = async (req, res) => {
    try {
        const students = await Student.find({});
        res.json(students);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createStudent = async (req, res) => {
    try {
        const { name, gender, dob, contactDetails, feesPaid, className } = req.body;

        const classReference = await Class.findOne({ 'className': className });

        if (!classReference) {
            return res.status(400).json({ message: 'Class not found' });
        }

        const newStudent = new Student({
            name,
            gender,
            dob,
            contactDetails,
            feesPaid,
            className: classReference.className
        });

        const createdStudent = await newStudent.save();
        res.status(201).json(createdStudent);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteStudent = async (req, res) => {
    try {
        const { studentId } = req.params;
        const student = await Student.findById(studentId);
        if (!student) { return res.status(400).json({ message: 'Student not found!' }) };
        await Student.deleteOne({ _id: studentId });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getStudents, createStudent, deleteStudent };
