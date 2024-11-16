// src/components/Button.tsx
import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
};

const Button: React.FC<ButtonProps> = ({ children, onClick, variant = 'primary' }) => {
  const buttonStyle = variant === 'primary'
    ? 'bg-[#1E90FF] text-white'
    : 'bg-[rgba(255,255,255,0.1)] text-[#1E90FF]';

  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-md font-semibold hover:opacity-80 ${buttonStyle}`}
    >
      {children}
    </button>
  );
};

export default Button;
