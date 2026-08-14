import { useState } from "react";

const Input = ({ label, state, setState, type = 'text', id }) => {
    const inputId = id || label.toLowerCase().replace(/\s+/g, '-');
    return (
        <div className="form-floating mb-2">
            <input
                type={type}
                className="form-control"
                value={state}
                onChange={e => setState(e.target.value)}
                id={inputId}
                placeholder={label}
            />
            <label htmlFor={inputId}>{label}</label>
        </div>
    )
}

export default Input