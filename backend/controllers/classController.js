const Class = require('../models/Class');
const Teacher = require('../models/Teacher');
const Student = require('../models/Student');

const getClass = async (req, res) => {
    const classes = await Class.find({});
    const classDetails = await Promise.all(classes.map(async (classItem) => {
        const studentCount = await Student.countDocuments({ className: classItem.className });
        const teacherCount = await Teacher.countDocuments({ assignedClass: classItem.className });

        return {
            className: classItem.className,
            year: classItem.year,
            studentFees: classItem.studentFees,
            noOfStudents: studentCount,
            noOfTeachers: teacherCount
        };
    }));
    res.json(classDetails);
};

const createClass = async (req, res) => {
    try {
        const { className, year, studentFees } = req.body;

        const ExistingClass = await Class.findOne({ className });

        if (ExistingClass) { return res.status(400).json({ message: 'Class Details already present!' }) }

        const newClass = new Class({
            className,
            year,
            studentFees,
        });

        const createdClass = await newClass.save();
        res.status(201).json(createdClass);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteClass = async (req, res) => {
    try {
        const { classId } = req.params;

        const classToDelete = await Class.findById(classId);

        if (!classToDelete) {
            return res.status(404).json({ message: 'Class not found' });
        }

        await Class.deleteOne({ _id: classId });

        res.status(200).json({ message: 'Class deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



module.exports = { getClass, createClass, deleteClass };
