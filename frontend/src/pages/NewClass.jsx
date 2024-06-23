import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormComponent from '../components/FormComponent/FormComponent';
import classService from '../services/classService';
import { toast } from 'react-toastify';

const NewClass = () => {
    const [classData, setClassData] = useState({
        className: '',
        year: '',
        studentFees: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setClassData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!classData.className || !classData.studentFees || !classData.year) {
            toast.error('Enter All Fileds');
            return;
        }

        await classService.createClass(classData);
        navigate('/classes');
    };

    const fields = [
        { name: 'className', label: 'Class Name', type: 'text' },
        { name: 'year', label: 'Year', type: 'number' },
        { name: 'studentFees', label: 'Student Fees', type: 'number' }
    ];

    return (
        <div>
            <h2>Add New Class</h2>
            <FormComponent fields={fields} model={classData} handleChange={handleChange} handleSubmit={handleSubmit} />
        </div>
    );
};

export default NewClass;
