// src/components/Button.tsx
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text, className = "", ...props }) => {
  return (
    <button 
      className={`bg-orange-400 text-white font-serif font-light hover:bg-orange-500 transition-colors shadow-lg cursor-pointer ${className}`}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;