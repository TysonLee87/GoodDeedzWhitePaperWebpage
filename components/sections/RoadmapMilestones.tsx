import React from 'react';
import { whitepaperContent } from '../../content/whitepaper';

const RoadmapMilestones = () => {
  const { title, roadmap } = whitepaperContent.roadmapMilestones;

  return (
    <section className="roadmap-milestones">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <p className="text-gray-700 whitespace-pre-line">{roadmap}</p>
      {/* Extend this section with more detailed content as needed */}
    </section>
  );
};

export default RoadmapMilestones;
