import React from 'react';
import { whitepaperContent } from '../../content/whitepaper';

const GoodDeedzSolution = () => {
  const { title, solution } = whitepaperContent.goodDeedzSolution;

  return (
    <section className="good-deedz-solution">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <p className="text-gray-700 whitespace-pre-line">{solution}</p>
      {/* Extend this section with more detailed content as needed */}
    </section>
  );
};

export default GoodDeedzSolution;