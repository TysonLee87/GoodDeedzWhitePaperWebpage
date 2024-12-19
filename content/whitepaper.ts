// Define the structure of the whitepaper content
export interface KeyMetric {
  title: string;
  value: string;
  description: string;
}

export interface ExecutiveSummary {
  title: string;
  mainContent: string;
  keyMetrics: KeyMetric[];
  // ... other fields
}

export interface MarketLandscape {
  title: string;
  landscape: string;
  // ... other fields
}

export interface ProblemStatement {
  title: string;
  problem: string;
  // ... other fields
}

export interface GoodDeedzSolution {
  title: string;
  solution: string;
  // ... other fields
}

export interface CompetitiveLandscape {
  title: string;
  competitive: string;
  // ... other fields
}

export interface TechnologySecurity {
  title: string;
  technology: string;
  // ... other fields
}

export interface RoadmapMilestones {
  title: string;
  roadmap: string;
  // ... other fields
}

export interface ImpactResponsibility {
  title: string;
  impact: string;
  // ... other fields
}

export interface WhitepaperContent {
  executiveSummary: ExecutiveSummary;
  marketLandscape: MarketLandscape;
  problemStatement: ProblemStatement;
  goodDeedzSolution: GoodDeedzSolution;
  competitiveLandscape: CompetitiveLandscape;
  technologySecurity: TechnologySecurity;
  roadmapMilestones: RoadmapMilestones;
  impactResponsibility: ImpactResponsibility;
}

// Example content
export const whitepaperContent: WhitepaperContent = {
  executiveSummary: {
    title: "Executive Summary",
    mainContent: "GoodDeedz is poised to redefine global philanthropy...",
    keyMetrics: [
      {
        title: "Market Size",
        value: "$1.5T",
        description: "Combined foundation assets worldwide",
      },
      // ... more metrics
    ],
    // ... rest of the content
  },
  marketLandscape: {
    title: "Market Landscape",
    landscape: "An in-depth analysis of the current market trends...",
    // ... other fields
  },
  problemStatement: {
    title: "Problem Statement",
    problem: "Details about the problem GoodDeedz aims to solve...",
    // ... other fields
  },
  goodDeedzSolution: {
    title: "The GoodDeedz Solution",
    solution: "Explanation of the innovative solution provided by GoodDeedz...",
    // ... other fields
  },
  competitiveLandscape: {
    title: "Competitive Landscape",
    competitive: "Analysis of competitors and GoodDeedz's unique advantages...",
    // ... other fields
  },
  technologySecurity: {
    title: "Technology & Security",
    technology: "Overview of the technology stack and security measures...",
    // ... other fields
  },
  roadmapMilestones: {
    title: "Roadmap & Milestones",
    roadmap: "Timeline of key milestones achieved and future goals...",
    // ... other fields
  },
  impactResponsibility: {
    title: "Impact & Responsibility",
    impact: "Discussion on the social impact and corporate responsibility...",
    // ... other fields
  },
};
