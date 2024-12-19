import React from 'react';
import { whitepaperContent } from '../../content/whitepaper';

const ImpactResponsibility = () => {
  const { title, impact } = whitepaperContent.impactResponsibility;

  return (
    <section className="impact-responsibility">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <p className="text-gray-700 whitespace-pre-line">{impact}</p>
      {/* Extend this section with more detailed content as needed */}
    </section>
  );
};

export default ImpactResponsibility;