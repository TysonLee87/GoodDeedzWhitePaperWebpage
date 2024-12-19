import React from 'react';

interface TechnologySecurityProps {
  title: string;
  technology: string;
  // Add other fields if necessary
}

const TechnologySecurity: React.FC<TechnologySecurityProps> = ({ title, technology }) => {
  return (
    <section className="technology-security">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <p className="text-gray-700 whitespace-pre-line">{technology}</p>
      {/* Extend this section with more detailed content as needed */}
    </section>
  );
};

export default TechnologySecurity;