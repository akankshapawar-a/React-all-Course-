import React from 'react';

const Input = ({ label, type = 'text', name, placeholder, value, onChange, className }) => (
  <div className={`input-container ${className}`}>
    {label && <label htmlFor={name}>{label}</label>}
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="input-field"
    />
  </div>
);

export default Input;
