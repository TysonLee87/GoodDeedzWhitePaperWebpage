import React from 'react';
import { whitepaperContent } from '../../content/whitepaper';

const MarketLandscape = () => {
  const { title, landscape } = whitepaperContent.marketLandscape;

  return (
    <section className="market-landscape">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <p className="text-gray-700 whitespace-pre-line">{landscape}</p>
      {/* Extend this section with more detailed content as needed */}
    </section>
  );
};

export default MarketLandscape;