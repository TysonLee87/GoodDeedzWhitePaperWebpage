import React from 'react';

interface CompetitiveLandscapeProps {
  competitive: string;
}

const CompetitiveLandscape: React.FC<CompetitiveLandscapeProps> = ({ competitive }) => {
  return (
    <section className="competitive-landscape">
      <h2 className="text-2xl font-semibold mb-4">Competitive Landscape</h2>
      <p className="text-gray-700 whitespace-pre-line">{competitive}</p>
    </section>
  );
};

export default CompetitiveLandscape;
