import React from 'react';
import { TrendingUp, Smartphone, Users } from 'lucide-react';
import InsightCard from '../common/InsightCard';

const MarketLandscapePartTwo: React.FC = () => {
  return (
    <div className="space-y-24 max-w-6xl mx-auto px-8">
      {/* D. Unlocking Opportunities for Smaller Nonprofits */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Empowering the Underserved
        </h2>

        <div className="grid grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-gray-600">
              Many small nonprofits lack the visibility and tools to stand out, even though they 
              deliver high-impact work. Traditional platforms favor large organizations, leaving 
              grassroots initiatives struggling to reach donors.
            </p>

            <InsightCard title="GoodDeedz Advantage">
              By providing transparent metrics, gamified engagement, and equal visibility, we help smaller nonprofits reach passionate donors directly, fueling new growth and local impact.
            </InsightCard>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-100 p-6 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-2">Before GoodDeedz</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>• Limited visibility</li>
                <li>• High platform costs</li>
                <li>• Complex tools</li>
                <li>• Donor uncertainty</li>
              </ul>
            </div>
            <div className="bg-indigo-100 p-6 rounded-xl">
              <h4 className="font-semibold text-indigo-900 mb-2">With GoodDeedz</h4>
              <ul className="space-y-3 text-sm text-indigo-800">
                <li>• Equal visibility</li>
                <li>• Affordable pricing</li>
                <li>• Intuitive platform</li>
                <li>• Trust metrics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* E. A Global Playing Field */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Borderless Philanthropy
        </h2>

        <div className="bg-white rounded-xl shadow-sm p-8">
          <div className="grid grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-gray-600">
                Philanthropic issues are global, requiring international cooperation. Digital platforms 
                erase geographic boundaries and currency barriers, enabling worldwide impact.
              </p>

              <InsightCard title="Global Scale Built In">
                GoodDeedz is designed for cross-border giving, supporting multiple currencies 
                and languages—amplifying reach and efficiency.
              </InsightCard>

              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <div className="text-lg font-semibold text-indigo-900">180+</div>
                  <div className="text-sm text-indigo-700">Countries Supported</div>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <div className="text-lg font-semibold text-indigo-900">50+</div>
                  <div className="text-sm text-indigo-700">Currencies</div>
                </div>
              </div>
            </div>

            {/* World Map SVG Visualization */}
            <div className="relative">
              <svg className="w-full" viewBox="0 0 400 250">
                {/* Simple world map outline */}
                <path 
                  d="M50,100 Q100,80 150,100 T250,100 T350,100" 
                  fill="none" 
                  stroke="#E0E7FF" 
                  strokeWidth="40"
                />
                {/* Connection lines */}
                <path 
                  d="M75,90 L225,110 M150,80 L300,120" 
                  stroke="#4F46E5" 
                  strokeWidth="2"
                  strokeDasharray="4,4"
                />
                {/* Connection points */}
                <circle cx="75" cy="90" r="4" fill="#4F46E5" />
                <circle cx="150" cy="80" r="4" fill="#4F46E5" />
                <circle cx="225" cy="110" r="4" fill="#4F46E5" />
                <circle cx="300" cy="120" r="4" fill="#4F46E5" />
              </svg>
              <div className="text-sm text-gray-500 text-center mt-4">
                Cross-Border Giving Network
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* F. Why GoodDeedz is Perfectly Timed */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Converging Trends, One Platform
        </h2>

        <div className="bg-white rounded-xl shadow-sm p-8">
          <p className="text-gray-600 mb-8 max-w-2xl">
            This is the moment: demographic shifts, digital disruption, and global connectivity 
            align, creating an unmatched window of opportunity.
          </p>

          {/* Venn Diagram */}
          <div className="relative h-80 flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-64 h-64">
                {/* Digital Growth Circle */}
                <div className="absolute w-48 h-48 rounded-full bg-indigo-100 opacity-60 -left-8 -top-4" />
                {/* Generational Shift Circle */}
                <div className="absolute w-48 h-48 rounded-full bg-blue-100 opacity-60 -right-8 -top-4" />
                {/* Globalization Circle */}
                <div className="absolute w-48 h-48 rounded-full bg-purple-100 opacity-60 left-8 -bottom-4" />
                {/* Center Intersection */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white px-4 py-2 rounded-lg">
                  GoodDeedz
                </div>
              </div>
            </div>
            
            {/* Labels */}
            <div className="absolute top-4 left-12 text-sm font-medium text-indigo-900">Digital Growth</div>
            <div className="absolute top-4 right-12 text-sm font-medium text-indigo-900">Generational Shift</div>
            <div className="absolute bottom-4 text-sm font-medium text-indigo-900">Globalization</div>
          </div>

          <InsightCard title="Key Message" className="mt-8">
            GoodDeedz is engineered to capitalize on these converging forces, offering a platform 
            that doesn't just fit the market—it helps shape its future.
          </InsightCard>
        </div>
      </section>

      {/* G. Wrap-Up & CTA */}
      <section className="bg-gradient-to-r from-indigo-900 to-indigo-800 rounded-2xl p-12 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to See How We Translate Opportunity into Returns?
          </h2>
          <p className="text-indigo-200 mb-8">
            Discover how GoodDeedz is positioned to capture and monetize the future of global giving.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-indigo-900 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors">
              Request Investor Deck
            </button>
            <button className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Next: Value Proposition & Revenue
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MarketLandscapePartTwo; 