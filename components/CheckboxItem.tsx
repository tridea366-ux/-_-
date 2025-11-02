
import React from 'react';

interface CheckboxItemProps {
  text: string;
  isChecked: boolean;
  onToggle: () => void;
}

const CheckboxItem: React.FC<CheckboxItemProps> = ({ text, isChecked, onToggle }) => {
  return (
    <label className="flex items-center my-2 p-2 rounded-lg cursor-pointer transition-colors duration-200 hover:bg-slate-100">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={onToggle}
        className="h-6 w-6 mr-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 focus:ring-2"
      />
      <span className={`text-lg ${isChecked ? 'text-gray-500 line-through' : 'text-gray-800'}`}>
        {text}
      </span>
    </label>
  );
};

export default CheckboxItem;
