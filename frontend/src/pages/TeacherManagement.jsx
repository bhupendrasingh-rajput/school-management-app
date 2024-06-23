import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import teacherService from '../services/teacherService';
import TableComponent from '../components/TableComponent/TableComponent';
import { toast } from 'react-toastify';

const TeacherManagement = () => {
    const [teachers, setTeachers] = useState([]);
    const fetchTeachers = async () => {
        const data = await teacherService.getTeachers();
        setTeachers(data);
    };

    const handleDelete = async (id) => {
        try {
            await teacherService.deleteTeacher(id);
            setTeachers(teachers.filter(teacher => teacher._id !== id));
            toast.success('Teacher info deleted successfully!');
        } catch (error) {
            toast.error('Failed to delete Teacher.');
        }
    };

    useEffect(() => {
        fetchTeachers();
    }, []);

    const columns = ['name', 'gender', 'dob', 'contactDetails', 'salary', 'assignedClass'];

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', rowGap: '5vh' }}>
            <h2>Teacher Management</h2>
            <TableComponent columns={columns} handleDelete={handleDelete} data={teachers} />
            <Link to="/teachers/new">Add New Teacher</Link>
        </div>
    );
};

export default TeacherManagement;
