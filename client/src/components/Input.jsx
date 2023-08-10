import React from 'react';

const Input = ({label ,id,  onChange, type = 'text', placeholder}) => {
    return (
        <div className="mb-6">
            <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900">{label}</label>
            <input onChange={onChange} type={type} id={id} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none" placeholder={placeholder} required />
        </div>
    );
};

export default Input;