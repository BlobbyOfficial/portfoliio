import { ReactNode } from 'react';

interface CardProps {
  title?: string;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
  hoverEffect?: boolean;
  animate?: boolean;
}

export default function Card({ 
  title, 
  className = '', 
  children, 
  onClick, 
  hoverEffect = true,
  animate = true
}: CardProps) {
  return (
    <div 
      className={`bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden 
        ${hoverEffect ? 'hover-lift hover-glow' : ''} 
        ${animate ? 'opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]' : ''}
        ${onClick ? 'cursor-pointer' : ''} 
        ${className}`}
      onClick={onClick}
      style={{
        animationDelay: `${Math.random() * 0.5}s`
      }}
    >
      {title && (
        <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-700">
          <h3 className="text-lg font-semibold text-slate-800 dark:text-white">{title}</h3>
        </div>
      )}
      <div className={title ? '' : 'p-6'}>
        {children}
      </div>
    </div>
  );
}