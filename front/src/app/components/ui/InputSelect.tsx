import React from 'react';

interface Option {
  value: string;
  label: string;
}

interface InputSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: Option[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const InputSelect: React.FC<InputSelectProps> = ({
  label,
  options = [],
  value,
  onChange,
  ...props
}) => (
  <div>
    {label && <label>{label}</label>}
    <select className="font-serif font-light border border-gray-300 w-full h-10 mt-2 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent" value={value} onChange={onChange} {...props}>
      {options.map(opt => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  </div>
);

export default InputSelect;