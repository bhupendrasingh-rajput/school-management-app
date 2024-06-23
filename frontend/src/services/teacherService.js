import axios from 'axios';
import { toast } from 'react-toastify';

const API_URL = 'http://localhost:8000/api/teachers';

// Get all teachers
const getTeachers = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        toast.error(error.response.data.message)
    }
};

// Create a new teacher
const createTeacher = async (teacherData) => {
    try {
        const response = await axios.post(API_URL, teacherData);
        return response.data;
    } catch (error) {
        toast.error(error.response.data.message)
    }
};

// Delete a teacher by ID
const deleteTeacher = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        toast.error(error.response.data.message)
    }
};

export default { getTeachers, createTeacher, deleteTeacher };
