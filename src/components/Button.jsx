import React from 'react';

const Button = ({ children, variant = 'primary', type = 'button', onClick, className = '' }) => {
const variants = {
    primary: 'bg-green-500 hover:bg-green-600 text-white',
    secondary: 'bg-green-100 hover:bg-green-200 text-green-700',
    outline: 'bg-white border border-gray-300 hover:bg-gray-50 text-gray-700',
};

return (
    <button
    type={type}
    onClick={onClick}
    className={`w-full py-2.5 px-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${variants[variant]} ${className}`}
    >
    {children}
    </button>
);
};

export default Button;