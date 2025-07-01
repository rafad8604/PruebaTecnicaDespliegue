// src/components/Button.tsx
import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
};

const Button: React.FC<ButtonProps> = ({ children, onClick, type = 'button' }) => (
  <button type={type} onClick={onClick}>
    {children}
  </button>
);

export default Button;