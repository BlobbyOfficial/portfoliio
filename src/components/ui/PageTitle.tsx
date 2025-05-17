import { ReactNode } from 'react';

interface PageTitleProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

export default function PageTitle({ title, subtitle, children }: PageTitleProps) {
  return (
    <div className="text-center mb-12">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800 dark:text-white">
        {title}
      </h1>
      {subtitle && (
        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
}