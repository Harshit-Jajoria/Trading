import React, {useState} from 'react'
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

export const Password = (props) => {
    const {name, value, onChange: handleChange, error, label, placeholder, helperText, required, ref} = props
    const [inputType, setInputType] = useState("password");

    const handleInputTypeChange = () => {
        setInputType((prev) => (prev === "password" ? "text" : "password"));
    };

    return (
        <div className="user__form_input-grp d-flex--c">
            <label>{label} {required && "*"}</label>
            <span className="user__form_input-grp-password d-flex">
                <input
                    type={inputType} name={name}
                    ref={ref}
                    placeholder={placeholder}
                    value={value}
                    onChange={handleChange}
                />
                <button
                    className="null-btn"
                    type="button"
                    onClick={handleInputTypeChange}
                >
                    {inputType === "text" ? (
                        <AiOutlineEye color="black" fontSize={24} />
                    ) : (
                        <AiOutlineEyeInvisible color="black" fontSize={24} />
                    )}
                </button>
            </span>
            {error && <small className='error'>{helperText}</small>}
        </div>
    )
}
