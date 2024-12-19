import React from 'react';

const DonationFlowVisualization = () => {
  return (
    <div className="w-full h-24 bg-indigo-200 rounded-md flex items-center justify-center overflow-hidden">
      <svg viewBox="0 0 400 96" className="w-full h-full px-4">
        {/* Left Side: Opaque Flow */}
        <g transform="translate(20, 10)">
          {/* Donor */}
          <circle cx="20" cy="38" r="12" fill="#4F46E5" opacity="0.5"/>
          
          {/* Obscured Path */}
          <path 
            d="M40,38 H100" 
            stroke="#4F46E5" 
            strokeWidth="2" 
            strokeDasharray="4,4"
            opacity="0.5"
          >
            <animate 
              attributeName="stroke-dashoffset" 
              from="0" 
              to="8" 
              dur="1s" 
              repeatCount="indefinite"
            />
          </path>
          
          {/* Black Box */}
          <rect x="100" y="28" width="20" height="20" fill="#312E81" rx="4"/>
          
          {/* Result */}
          <circle cx="160" cy="38" r="12" fill="#4F46E5" opacity="0.5"/>
          
          {/* Label */}
          <text x="90" y="70" textAnchor="middle" fontSize="10" fill="#312E81">
            Traditional Flow
          </text>
        </g>

        {/* Right Side: Transparent Flow */}
        <g transform="translate(220, 10)">
          {/* Donor */}
          <circle cx="20" cy="38" r="12" fill="#4F46E5"/>
          
          {/* Transparent Path with Checkpoints */}
          <path 
            d="M40,38 H160" 
            stroke="#4F46E5" 
            strokeWidth="2"
            strokeDasharray="2,2"
          >
            <animate 
              attributeName="stroke-dashoffset" 
              from="0" 
              to="4" 
              dur="1s" 
              repeatCount="indefinite"
            />
          </path>
          
          {/* Checkpoints */}
          <circle cx="80" cy="38" r="6" fill="#4F46E5"/>
          <circle cx="120" cy="38" r="6" fill="#4F46E5"/>
          
          {/* Result */}
          <circle cx="160" cy="38" r="12" fill="#4F46E5"/>
          
          {/* Label */}
          <text x="90" y="70" textAnchor="middle" fontSize="10" fill="#312E81">
            GoodDeedz Flow
          </text>
        </g>
      </svg>
    </div>
  );
};

export default DonationFlowVisualization; 