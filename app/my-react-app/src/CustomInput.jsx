import React from 'react';
import './customInput.css';

function CustomInput({ title, type }) {
    return (
        <div>
            <p>{title}</p>
            <input type={type} required />
        </div>
    )
}

export default CustomInput;