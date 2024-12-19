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
  // ... other fields if necessary
}

export interface MarketLandscape {
  title: string;
  landscape: string;
  // ... other fields if necessary
}

export interface ProblemStatement {
  title: string;
  problem: string;
  // ... other fields if necessary
}

export interface GoodDeedzSolution {
  title: string;
  solution: string;
  // ... other fields if necessary
}

export interface CompetitiveLandscape {
  title: string;
  competitive: string;
  // ... other fields if necessary
}

export interface TechnologySecurity {
  title: string;
  technology: string;
  // ... other fields if necessary
}

export interface RoadmapMilestones {
  title: string;
  roadmap: string;
  // ... other fields if necessary
}

export interface ImpactResponsibility {
  title: string;
  impact: string;
  // ... other fields if necessary
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
    mainContent: "GoodDeedz is poised to redefine global philanthropy by leveraging cutting-edge technology to maximize impact...",
    keyMetrics: [
      {
        title: "Market Size",
        value: "$1.5T",
        description: "Combined foundation assets worldwide",
      },
      {
        title: "Growth Rate",
        value: "8% CAGR",
        description: "Projected annual growth rate over the next 5 years",
      },
      // ... more metrics as needed
    ],
    // ... other fields if necessary
  },
  marketLandscape: {
    title: "Market Landscape",
    landscape: "An in-depth analysis of the current market trends, identifying key opportunities and challenges in the philanthropic sector...",
    // ... other fields if necessary
  },
  problemStatement: {
    title: "Problem Statement",
    problem: "Details about the problem GoodDeedz aims to solve, including inefficiencies in current philanthropic efforts and barriers to maximizing impact...",
    // ... other fields if necessary
  },
  goodDeedzSolution: {
    title: "The GoodDeedz Solution",
    solution: "Explanation of the innovative solution provided by GoodDeedz, including the use of blockchain for transparency and AI for impact analysis...",
    // ... other fields if necessary
  },
  competitiveLandscape: {
    title: "Competitive Landscape",
    competitive: "Analysis of competitors and GoodDeedz's unique advantages, highlighting differentiators such as advanced technology integration and strategic partnerships...",
    // ... other fields if necessary
  },
  technologySecurity: {
    title: "Technology & Security",
    technology: "Overview of the technology stack and security measures implemented to ensure data integrity, user privacy, and operational resilience...",
    // ... other fields if necessary
  },
  roadmapMilestones: {
    title: "Roadmap & Milestones",
    roadmap: "Timeline of key milestones achieved and future goals, outlining the strategic plan for growth, feature development, and market expansion...",
    // ... other fields if necessary
  },
  impactResponsibility: {
    title: "Impact & Responsibility",
    impact: "Discussion on the social impact and corporate responsibility initiatives undertaken by GoodDeedz, emphasizing sustainable and ethical practices...",
    // ... other fields if necessary
  },
};
 