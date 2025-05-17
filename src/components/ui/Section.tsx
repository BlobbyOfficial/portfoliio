import { ReactNode } from 'react';

interface SectionProps {
  title?: string;
  subtitle?: string;
  className?: string;
  children: ReactNode;
  id?: string;
}

export default function Section({ title, subtitle, className = '', children, id }: SectionProps) {
  return (
    <section id={id} className={`py-16 ${className}`}>
      <div className="container mx-auto px-4">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className="text-3xl font-bold mb-4 text-slate-800 dark:text-white">{title}</h2>
            )}
            {subtitle && (
              <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">{subtitle}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}