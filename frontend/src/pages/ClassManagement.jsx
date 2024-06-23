import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import classService from '../services/classService';
import TableComponent from '../components/TableComponent/TableComponent';
import { toast } from 'react-toastify';

const ClassManagement = () => {
    const [classes, setClasses] = useState([]);
    const navigate = useNavigate();

    const fetchClasses = async () => {
        const data = await classService.getClasses();
        setClasses(data);
    };

    const handleDelete = async (id) => {
        try {
            await classService.deleteClass(id);
            setClasses(classes.filter(classItem => classItem._id !== id));
            toast.success('Class deleted successfully!');
        } catch (error) {
            toast.error('Failed to delete class.');
        }
    };

    useEffect(() => {
        fetchClasses();
    }, []);

    const columns = ['className', 'year', 'noOfTeachers', 'studentFees', 'noOfStudents'];

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', rowGap: '5vh' }}>
            <h2>Class Management</h2>
            <TableComponent columns={columns} handleDelete={handleDelete} data={classes.map(cls => ({
                ...cls,
                teacher: cls?.teacher?.length,
                studentList: cls?.studentList?.length
            }))} />
            <Link to="/classes/new">Add New Class</Link>
        </div>
    );
};

export default ClassManagement;
