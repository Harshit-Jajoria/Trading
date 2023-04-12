import React from 'react'
import "../formFields.css";

export const Input = (props) => {
    const {name, value, onChange: handleChange, error, label, placeholder, helperText, required} = props
    return (
        <div className="user__form_input-grp d-flex--c w-100">
            <label>{label} {required && "*"}</label>
            <input
                type="text" name={name}
                // ref={user_email}
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
            />
            {error && <small className='error'>{helperText}</small>}
        </div>
    )
}
