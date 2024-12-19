import React from 'react';
import { Eye, ShoppingBag, Link, HandHelping, ClipboardList, Shield, ArrowRight } from 'lucide-react';

interface ProblemCardProps {
  icon: typeof Eye; // Replace `typeof Eye` with the appropriate LucideIcon type
  title: string;
  description: string;
  dataPoint?: string;
  visualCue?: React.ReactNode;
}

const ProblemCard: React.FC<ProblemCardProps> = ({
  icon: Icon,
  title,
  description,
  dataPoint,
  visualCue,
}) => (
  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
    <div className="flex items-center space-x-4 mb-4">
      <Icon className="text-indigo-600" size={32} />
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
    </div>
    <p className="text-gray-600 mb-4">{description}</p>
    {dataPoint && <div className="text-sm text-indigo-500 mb-4">{dataPoint}</div>}
    {visualCue && <div className="mt-2">{visualCue}</div>}
  </div>
);

const ProblemStatement: React.FC = () => {
  return (
    <section className="problem-statement">
      {/* A. Hero/Intro Section */}
      <div className="relative bg-indigo-50 rounded-xl overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/fragmented-philanthropy.svg" 
            alt="Fragmented Philanthropy" 
            className="w-full h-full object-cover opacity-10" 
          />
        </div>
        <div className="relative z-10 text-center py-20">
          <h2 className="text-3xl font-bold mb-4">The Gaps Holding Philanthropy Back</h2>
          <p className="text-xl text-gray-700 mb-8">
            Despite trillions in global assets and countless good intentions, philanthropy isn’t reaching its full potential. Here’s what stands in the way.
          </p>
        </div>
      </div>
      
      {/* B. Problem Categories as Interactive Cards */}
      <div className="mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          
          {/* 1. Lack of Transparency & Accountability */}
          <ProblemCard
            icon={Eye}
            title="Opaque Funding Flows"
            description="Donors can’t see where their money goes, breeding skepticism and reducing their willingness to give again."
            dataPoint="40% of donors cite lack of transparency as a barrier to recurring donations."
            visualCue={
              <div className="w-full h-24 bg-gray-200 rounded-md flex items-center justify-center">
                <span className="text-gray-500">Donation Flow Visualization</span>
              </div>
            }
          />
          
          {/* 2. Challenges for Smaller Nonprofits */}
          <ProblemCard
            icon={ShoppingBag}
            title="Invisible High-Impact Players"
            description="Community nonprofits struggle for visibility and can’t access the same fundraising tools as large organizations."
            dataPoint="72% of donors say they’d support smaller nonprofits if they could easily verify their impact."
            visualCue={
              <div className="w-full h-24 bg-gray-200 rounded-md flex items-center justify-center">
                <span className="text-gray-500">Visibility Challenge Illustration</span>
              </div>
            }
          />
          
          {/* 3. Disengaged & Fragmented Donor Experience */}
          <ProblemCard
            icon={Link}
            title="No Follow-Through, No Loyalty"
            description="Donors give once, get no feedback, and rarely return. Without interaction, it’s just a transaction, not a relationship."
            visualCue={
              <div className="w-full h-24 bg-gray-200 rounded-md flex items-center justify-center">
                <span className="text-gray-500">Donor Journey Map</span>
              </div>
            }
          />
          
          {/* 4. Limited Volunteer Integration */}
          <ProblemCard
            icon={HandHelping}
            title="Untapped Human Capital"
            description="Would-be volunteers struggle to find opportunities that match their skills, leaving nonprofits understaffed and donors uninvolved beyond their wallets."
            visualCue={
              <div className="w-full h-24 bg-gray-200 rounded-md flex items-center justify-center">
                <span className="text-gray-500">Volunteer Integration Illustration</span>
              </div>
            }
          />
          
          {/* 5. Inefficient Financial Management & Reporting */}
          <ProblemCard
            icon={ClipboardList}
            title="Administrative Overload"
            description="Nonprofits and donors alike grapple with cumbersome tax tracking, compliance, and reporting, draining resources and goodwill."
            visualCue={
              <div className="w-full h-24 bg-gray-200 rounded-md flex items-center justify-center">
                <span className="text-gray-500">Financial Management Comparison</span>
              </div>
            }
          />
          
          {/* 6. Trust & Brand Integrity Issues */}
          <ProblemCard
            icon={Shield}
            title="Eroding Confidence in the Sector"
            description="High-profile fraud and mismanagement stories make donors wary. Without clear metrics, they can’t distinguish heroes from bad actors."
            dataPoint="35% of donors hesitate to donate due to fears of mismanagement."
            visualCue={
              <div className="w-full h-24 bg-gray-200 rounded-md flex items-center justify-center">
                <span className="text-gray-500">Trust Issues Visualization</span>
              </div>
            }
          />
          
        </div>
      </div>
      
      {/* C. Conclusion / Wrap-Up Section */}
      <div className="mt-24 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Bridging These Gaps, Unlocking True Potential
        </h2>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
          Each of these challenges weakens the philanthropic chain—reducing donor trust, overshadowing worthy causes, and limiting the transformative power of global goodwill. GoodDeedz is built to address these issues head-on, combining transparency, engagement, and cutting-edge technology to ensure every good deed counts, is felt, and is celebrated.
        </p>
        <button 
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-indigo-700 transition-colors"
          onClick={() => window.location.href = "#"}
        >
          See How GoodDeedz Solves This
          <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default ProblemStatement;