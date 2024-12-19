import React from 'react';

interface RoadmapMilestonesProps {
  title: string;
  roadmap: string;
  // Add other fields if necessary
}

const RoadmapMilestones: React.FC<RoadmapMilestonesProps> = ({ title, roadmap }) => {
  return (
    <section className="roadmap-milestones">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <p className="text-gray-700 whitespace-pre-line">{roadmap}</p>
      {/* Extend this section with more detailed content as needed */}
    </section>
  );
};

export default RoadmapMilestones;
