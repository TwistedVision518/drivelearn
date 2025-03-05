import React from 'react';

export function Card({ children, className, ...props }) {
  return (
    <div className={`bg-white rounded-lg ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardContent({ children, className, ...props }) {
  return (
    <div className={`p-6 ${className}`} {...props}>
      {children}
    </div>
  );
} 