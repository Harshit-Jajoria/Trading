import React from 'react'

export const Button = (props) => {
    const {disabled, onClick: handleClick, children, className} = props
    return (
        <button
            disabled={disabled}
            onClick={handleClick}
            className={className}
        >
            {children}
        </button>
    )
}
