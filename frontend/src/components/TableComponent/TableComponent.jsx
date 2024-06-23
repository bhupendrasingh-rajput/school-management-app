import React from 'react';
import './TableComponent.css';
import { useLocation } from 'react-router-dom';

const TableComponent = ({ columns, data, handleDelete }) => {
    const camelToTitle = (camelCase) => {
        return camelCase
            .replace(/([A-Z])/g, ' $1')
            .replace(/^./, (str) => str.toUpperCase());
    };
    return (
        <table className='table'>
            <thead>
                <tr>
                    {columns.map(column => (
                        <th key={column}>{camelToTitle(column)}</th>
                    ))}
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {data.map((row, index) => (
                    <tr key={index}>
                        {columns.map(column => (
                            <td key={column}>{column === 'dob' ? new Date(row[column]).toLocaleDateString() : row[column]}</td>
                        ))}
                        <td>
                            <button className='action' onClick={() => handleDelete(row._id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TableComponent;
