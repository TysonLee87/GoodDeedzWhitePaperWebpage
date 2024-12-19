import React from 'react';
import { whitepaperContent } from '../../content/whitepaper';

const TechnologySecurity = () => {
  const { title, technology } = whitepaperContent.technologySecurity;

  return (
    <section className="technology-security">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <p className="text-gray-700 whitespace-pre-line">{technology}</p>
      {/* Extend this section with more detailed content as needed */}
    </section>
  );
};

export default TechnologySecurity; 