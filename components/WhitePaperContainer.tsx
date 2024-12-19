import React, { useState } from 'react';
import {
  ChevronRight,
  Book,
  Target,
  Lightbulb,
  Heart,
  Shield,
  BarChart3,
  Globe2,
  Rocket,
} from 'lucide-react';
import {
  ExecutiveSummary,
  MarketLandscape,
  ProblemStatement,
  GoodDeedzSolution,
  CompetitiveLandscape,
  TechnologySecurity,
  RoadmapMilestones,
  ImpactResponsibility,
} from './sections';

const WhitePaperContainer = () => {
  const [activeSection, setActiveSection] = useState('executive');

  const sections = [
    { id: 'executive', title: 'Executive Summary', icon: Book },
    { id: 'market', title: 'Market Landscape', icon: Target },
    { id: 'problem', title: 'Problem Statement', icon: Lightbulb },
    { id: 'solution', title: 'The GoodDeedz Solution', icon: Heart },
    { id: 'competitive', title: 'Competitive Landscape', icon: BarChart3 },
    { id: 'technology', title: 'Technology & Security', icon: Shield },
    { id: 'roadmap', title: 'Roadmap & Milestones', icon: Rocket },
    { id: 'impact', title: 'Impact & Responsibility', icon: Globe2 },
  ];

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'executive':
        return <ExecutiveSummary />;
      case 'market':
        return <MarketLandscape />;
      case 'problem':
        return <ProblemStatement />;
      case 'solution':
        return <GoodDeedzSolution />;
      case 'competitive':
        return <CompetitiveLandscape />;
      case 'technology':
        return <TechnologySecurity />;
      case 'roadmap':
        return <RoadmapMilestones />;
      case 'impact':
        return <ImpactResponsibility />;
      default:
        return (
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="text-center text-gray-500">
              Select a section from the navigation menu to view content.
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Navigation Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 p-4 fixed h-full overflow-y-auto">
        <div className="mb-8">
          <h1 className="text-xl font-bold text-gray-900">GoodDeedz</h1>
          <p className="text-sm text-gray-500">White Paper 2024</p>
        </div>
        <nav className="space-y-1">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`w-full flex items-center gap-2 px-3 py-2 text-left rounded-lg transition-colors ${
                activeSection === section.id
                  ? 'bg-indigo-50 text-indigo-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <section.icon size={18} />
              <span className="text-sm font-medium">{section.title}</span>
              {activeSection === section.id && (
                <ChevronRight size={16} className="ml-auto" />
              )}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="ml-64 flex-1 p-8">
        <div className="max-w-4xl mx-auto">{renderActiveSection()}</div>
      </div>
    </div>
  );
};

export default WhitePaperContainer;
