// src/components/Button.tsx
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text, className = "", ...props }) => {
  return (
    <button 
      className={`bg-orange-400 text-white font-serif font-light ${className}`}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;