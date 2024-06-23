import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormComponent from '../components/FormComponent/FormComponent';
import teacherService from '../services/teacherService';
import { toast } from 'react-toastify';

const NewTeacher = () => {
    const [teacherData, setTeacherData] = useState({
        name: '',
        gender: '',
        dob: '',
        contactDetails: '',
        salary: '',
        assignedClass: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTeacherData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!teacherData.name || !teacherData.gender || !teacherData.dob || !teacherData.contactDetails || !teacherData.salary || !teacherData.assignedClass) {
            return toast.error('Enter All Fileds');
        }
        await teacherService.createTeacher(teacherData);
        navigate('/teachers');
    };

    const fields = [
        { name: 'name', label: 'Name', type: 'text' },
        { name: 'gender', label: 'Gender', type: 'text' },
        { name: 'dob', label: 'Date of Birth', type: 'date' },
        { name: 'contactDetails', label: 'Contact Details', type: 'text' },
        { name: 'salary', label: 'Salary', type: 'number' },
        { name: 'assignedClass', label: 'Assigned Class', type: 'text' }
    ];

    return (
        <div>
            <h2>New Teacher</h2>
            <FormComponent fields={fields} model={teacherData} handleChange={handleChange} handleSubmit={handleSubmit} />
        </div>
    );
};

export default NewTeacher;
