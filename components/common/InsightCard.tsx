import React from 'react';

interface InsightCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const InsightCard: React.FC<InsightCardProps> = ({ title, children, className = "" }) => (
  <div className={`bg-indigo-50 p-6 rounded-xl border-l-4 border-indigo-600 ${className}`}>
    <h4 className="font-semibold text-gray-900 mb-2">{title}</h4>
    <p className="text-gray-600">{children}</p>
  </div>
);

export default InsightCard; 