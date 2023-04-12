import React from 'react'
import "../formFields.css";

export const Checkbox = (props) => {
    const { name, value, onChange: handleChange, error, label, placeholder, helperText, required } = props
    return (
        <>
            <div className="user__form_input-grp d-flex">
                <input type={"checkbox"}
                    name={name}
                    // ref={user_email}
                    placeholder={placeholder}
                    value={value}
                    onChange={handleChange}
                />
                <label>{label}</label>
            </div>
            {error && <small className='error'>{helperText}</small>}
        </>
    )
}
