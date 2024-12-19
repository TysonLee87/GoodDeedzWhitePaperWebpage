import React from 'react';

interface KeyMetric {
  title: string;
  value: string;
  description: string;
}

interface ExecutiveSummaryProps {
  title: string;
  mainContent: string;
  keyMetrics: KeyMetric[];
  // ... other fields if necessary
}

const ExecutiveSummary: React.FC<ExecutiveSummaryProps> = ({ title, mainContent, keyMetrics }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-8">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <p className="text-gray-700 mb-6">{mainContent}</p>
      <div>
        <h3 className="text-xl font-medium mb-2">Key Metrics</h3>
        <ul className="list-disc list-inside space-y-2">
          {keyMetrics.map((metric, index) => (
            <li key={index}>
              <strong>{metric.title}:</strong> {metric.value} - {metric.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExecutiveSummary;