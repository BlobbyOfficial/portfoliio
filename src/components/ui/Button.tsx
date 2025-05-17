import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
  animate?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  disabled = false,
  type = 'button',
  fullWidth = false,
  animate = true,
}: ButtonProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-purple-600 hover:bg-purple-700 text-white transform hover:scale-105 hover:shadow-lg';
      case 'secondary':
        return 'bg-teal-500 hover:bg-teal-600 text-white transform hover:scale-105 hover:shadow-lg';
      case 'outline':
        return 'bg-transparent border border-purple-600 text-purple-600 hover:bg-purple-50 dark:hover:bg-slate-800 dark:text-purple-400 dark:border-purple-400 transform hover:scale-105';
      case 'ghost':
        return 'bg-transparent hover:bg-slate-100 text-slate-700 dark:text-slate-200 dark:hover:bg-slate-800 transform hover:scale-105';
      default:
        return 'bg-purple-600 hover:bg-purple-700 text-white transform hover:scale-105 hover:shadow-lg';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'text-sm px-3 py-1.5';
      case 'lg':
        return 'text-lg px-6 py-3';
      default:
        return 'text-base px-4 py-2';
    }
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        font-medium rounded-md transition-all duration-200
        ${getVariantClasses()} 
        ${getSizeClasses()} 
        ${fullWidth ? 'w-full' : ''} 
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''} 
        ${animate ? 'animate-[fadeIn_0.3s_ease-out]' : ''}
        ${className}
      `}
    >
      {children}
    </button>
  );
}