import React from 'react';
import { whitepaperContent } from '../../content/whitepaper';

const CompetitiveLandscape = () => {
  const { title, competitive } = whitepaperContent.competitiveLandscape;

  return (
    <section className="competitive-landscape">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <p className="text-gray-700 whitespace-pre-line">{competitive}</p>
      {/* Extend this section with more detailed content as needed */}
    </section>
  );
};

export default CompetitiveLandscape;
