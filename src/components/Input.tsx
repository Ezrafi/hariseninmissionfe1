import type { InputProps } from '../types';

const Input = ({ label, type = 'text', placeholder, name, required = false, value, onChange, icon, onIconClick }: InputProps) => {
  return (
    <div className="mb-4 text-left">
      <label className="block text-gray-700 text-sm mb-1.5 font-medium">
        {label} {required && <span className="text-orange-500">*</span>}
      </label>
      <div className="relative">
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-600 transition-all"
        />
        {icon && (
          <button 
            type="button" 
            onClick={onIconClick}
            className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-600 focus:outline-none"
          >
            {icon}
          </button>
        )}
      </div>
    </div>
  );
};

export default Input;
