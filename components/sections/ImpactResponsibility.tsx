import React from 'react';

interface ImpactResponsibilityProps {
  title: string;
  impact: string;
  // Add other fields if necessary
}

const ImpactResponsibility: React.FC<ImpactResponsibilityProps> = ({ title, impact }) => {
  return (
    <section className="impact-responsibility">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <p className="text-gray-700 whitespace-pre-line">{impact}</p>
      {/* Extend this section with more detailed content as needed */}
    </section>
  );
};

export default ImpactResponsibility;