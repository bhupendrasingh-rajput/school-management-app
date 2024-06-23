import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';

const ClassAnalytics = ({ match }) => {
    const [classDetails, setClassDetails] = useState({});
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const fetchClassDetails = async () => {
            const { data } = await axios.get(`/api/classes/${match.params.id}`);
            setClassDetails(data);
            setStudents(data.studentList);
        };

        fetchClassDetails();
    }, [match.params.id]);

    const maleStudents = students.filter(student => student.gender === 'male').length;
    const femaleStudents = students.filter(student => student.gender === 'female').length;

    const data = {
        labels: ['Male', 'Female'],
        datasets: [
            {
                label: '# of Students',
                data: [maleStudents, femaleStudents],
                backgroundColor: ['#36A2EB', '#FF6384']
            }
        ]
    };

    return (
        <div>
            <h2>Class Analytics</h2>
            <div>
                <h3>Class Details</h3>
                <p>Name: {classDetails.className}</p>
                <p>Year: {classDetails.year}</p>
                <p>Teacher: {classDetails.teacher?.name}</p>
                <p>Student Fees: {classDetails.studentFees}</p>
                <ul>
                    {students.map(student => (
                        <li key={student._id}>{student.name}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h3>Student Gender Distribution</h3>
                <Bar data={data} />
            </div>
        </div>
    );
};

export default ClassAnalytics;
