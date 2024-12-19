import React from 'react';

interface MarketLandscapeProps {
  title: string;
  landscape: string;
  // Add other fields if necessary
}

const MarketLandscape: React.FC<MarketLandscapeProps> = ({ title, landscape }) => {
  return (
    <section className="market-landscape">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <p className="text-gray-700 whitespace-pre-line">{landscape}</p>
      {/* Extend this section with more detailed content as needed */}
    </section>
  );
};

export default MarketLandscape;