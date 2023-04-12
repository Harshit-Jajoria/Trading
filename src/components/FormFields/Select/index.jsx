import React from 'react'
import "../formFields.css";

export const Select = (props) => {
    const { name, value, onChange: handleChange, error, label, placeholder, helperText, required, options } = props
    return (
        <div className="user__form_input-grp d-flex--c w-100">
            <label>{label} {required && "*"}</label>
            <select name={name}
                // ref={user_email}
                placeholder={placeholder}
                value={value} onChange={handleChange}>
                {
                    options.map((res, index) => <option disabled={!res.value} value={res.value} key={index}>{res.label}</option>)
                }
            </select>
            {error && <small className='error'>{helperText}</small>}
        </div>
    )
}
