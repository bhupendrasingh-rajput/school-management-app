import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormComponent from '../components/FormComponent/FormComponent';
import studentService from '../services/studentService';
import { toast } from 'react-toastify';

const NewStudent = () => {
    const [studentData, setStudentData] = useState({
        name: '',
        gender: '',
        dob: '',
        contactDetails: '',
        feesPaid: '',
        className: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudentData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!studentData.name || !studentData.gender || !studentData.dob || !studentData.feesPaid || !studentData.contactDetails || !studentData.className) {
            toast.error('Enter All Fileds');
            return;
        }

        await studentService.createStudent(studentData);
        navigate('/students');
    };

    const fields = [
        { name: 'name', label: 'Name', type: 'text' },
        { name: 'gender', label: 'Gender', type: 'text' },
        { name: 'dob', label: 'Date of Birth', type: 'date' },
        { name: 'contactDetails', label: 'Contact Details', type: 'text' },
        { name: 'feesPaid', label: 'Fees Paid', type: 'number' },
        { name: 'className', label: 'Class', type: 'text' }
    ];

    return (
        <div>
            <h2>New Student</h2>
            <FormComponent fields={fields} model={studentData} handleChange={handleChange} handleSubmit={handleSubmit} />
        </div>
    );
};

export default NewStudent;
