import React from 'react';
import './customInput.css';

function CustomInput({ name, title, type, onChange, value }) {
    return (
        <div class="customInput">
            <p>{title}</p>
            <input id={name} name={name} type={type} onChange={onChange} required />
        </div>
    )
}

export default CustomInput;