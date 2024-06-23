import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import studentService from '../services/studentService';
import TableComponent from '../components/TableComponent/TableComponent';
import { toast } from 'react-toastify';

const StudentManagement = () => {
    const [students, setStudents] = useState([]);

    const fetchStudents = async () => {
        const data = await studentService.getStudents();
        setStudents(data);
    };

    const handleDelete = async (id) => {
        try {
            await studentService.deleteStudent(id);
            setStudents(students.filter(student => student._id !== id));
            toast.success('Student deleted successfully!');
        } catch (error) {
            toast.error('Failed to delete student.');
        }
    };

    useEffect(() => {

        fetchStudents();
    }, []);

    const columns = ['name', 'gender', 'dob', 'contactDetails', 'feesPaid', 'className'];

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', rowGap: '5vh' }}>
            <h2>Student Management</h2>
            <TableComponent columns={columns} handleDelete={handleDelete} data={students} />
            <Link to="/students/new">Add New Student</Link>
        </div>
    );
};

export default StudentManagement;
