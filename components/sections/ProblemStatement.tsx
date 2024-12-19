import React from 'react';
import { whitepaperContent } from '../../content/whitepaper';

const ProblemStatement = () => {
  const { title, problem } = whitepaperContent.problemStatement;

  return (
    <section className="problem-statement">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <p className="text-gray-700 whitespace-pre-line">{problem}</p>
      {/* Extend this section with more detailed content as needed */}
    </section>
  );
};

export default ProblemStatement;