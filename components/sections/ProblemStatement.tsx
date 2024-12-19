import React from 'react';

interface ProblemStatementProps {
  title: string;
  problem: string;
  // Add other fields if necessary
}

const ProblemStatement: React.FC<ProblemStatementProps> = ({ title, problem }) => {
  return (
    <section className="problem-statement">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <p className="text-gray-700 whitespace-pre-line">{problem}</p>
      {/* Extend this section with more detailed content as needed */}
    </section>
  );
};

export default ProblemStatement;