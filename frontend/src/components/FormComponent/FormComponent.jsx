import React from 'react';
import './FormComponent.css';
import { useLocation } from 'react-router-dom';

const FormComponent = ({ fields, model, handleSubmit, handleChange }) => {
    return (
        <form onSubmit={handleSubmit} className='form'>
            {fields.map(field => (
                <div key={field.name} className='input-field'>
                    <label>{field.label}</label>
                    <input
                        className='input'
                        type={field.type}
                        name={field.name}
                        value={model[field.name]}
                        onChange={handleChange}
                        placeholder={
                            field.name === 'year' ? 'Enter Year of Joining from 1965-2024' :
                                field.name === 'className' ? `Enter Class Name from I to XII` : 'Enter Valid Details'}
                    />
                </div>
            ))}
            <button className='button' type="submit">Submit</button>
        </form>
    );
};

export default FormComponent;
