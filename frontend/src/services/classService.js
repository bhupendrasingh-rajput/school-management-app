import axios from 'axios';
import { toast } from 'react-toastify';

const API_URL = 'http://localhost:8000/api/classes';

// Get all classes
const getClasses = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        toast.error(error.response.data.message)
    }
};

// Create a new class
const createClass = async (classData) => {
    try {
        const response = await axios.post(API_URL, classData);
        return response.data;
    } catch (error) {
        toast.error(error.response.data.message)
    }
};

// Delete a class by ID
const deleteClass = async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
};

export default { getClasses, createClass, deleteClass };
