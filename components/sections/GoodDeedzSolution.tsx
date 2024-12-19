import React from 'react';

interface GoodDeedzSolutionProps {
  title: string;
  solution: string;
  // Add other fields if necessary
}

const GoodDeedzSolution: React.FC<GoodDeedzSolutionProps> = ({ title, solution }) => {
  return (
    <section className="good-deedz-solution">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <p className="text-gray-700 whitespace-pre-line">{solution}</p>
      {/* Extend this section with more detailed content as needed */}
    </section>
  );
};

export default GoodDeedzSolution;