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
    {label && <label style={{ display: 'block', marginBottom: 4 }}>{label}</label>}
    <select value={value} onChange={onChange} {...props}>
      <option value="">Seleccione...</option>
      {options.map(opt => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  </div>
);

export default InputSelect;