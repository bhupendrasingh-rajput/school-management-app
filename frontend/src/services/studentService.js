import axios from 'axios';
import { toast } from 'react-toastify';

const API_URL = `${process.env.REACT_APP_BACKEND_URI}/api/students`;

// Get all students
const getStudents = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        toast.error(error.response.data.message)
    }
};

// Create a new student
const createStudent = async (studentData) => {
    try {
        const response = await axios.post(API_URL, studentData);
        return response.data;
    } catch (error) {
        toast.error(error.response.data.message)
    }
};


// Delete a student by ID
const deleteStudent = async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
};

export default { getStudents, createStudent, deleteStudent };
