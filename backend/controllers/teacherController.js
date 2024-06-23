const Teacher = require('../models/Teacher');
const Class = require('../models/Class');

const getTeachers = async (req, res) => {
    try {
        const teachers = await Teacher.find({});
        res.json(teachers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createTeacher = async (req, res) => {
    try {
        const { name, gender, dob, contactDetails, salary, assignedClass } = req.body;

        const classReference = await Class.findOne({ className: assignedClass });

        if (!classReference) {
            return res.status(400).json({ message: 'Class not found' });
        }

        const newTeacher = new Teacher({
            name,
            gender,
            dob,
            contactDetails,
            salary,
            assignedClass: classReference.className
        });

        const createdTeacher = await newTeacher.save();
        res.status(201).json(createdTeacher);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteTeacher = async (req, res) => {
    try {
        const {teacherId} = req.params;
        const teacher = await Teacher.findById(teacherId);
        if (!teacher) { return res.json({ message: 'Teacher not found' }) }
        await Teacher.deleteOne({ _id: teacherId })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getTeachers, createTeacher, deleteTeacher };
