import React, { useState, useEffect } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import {
  Sparkles,
  ArrowRight,
  Globe2,
  TrendingUp,
  Users,
  DollarSign,
} from 'lucide-react';

// Example content (You can replace this with data from whitepaperContent if needed)
const marketTrends = [
  { year: 2019, traditional: 800, digital: 200 },
  { year: 2020, traditional: 850, digital: 300 },
  { year: 2021, traditional: 900, digital: 450 },
  { year: 2022, traditional: 950, digital: 650 },
  { year: 2023, traditional: 1000, digital: 900 },
];

const ExecutiveSummary = () => {
  const [animateStats, setAnimateStats] = useState(false);

  useEffect(() => {
    setAnimateStats(true);
  }, []);

  const Stat = ({ number, label }: { number: string; label: string }) => (
    <div
      className={`transform transition-all duration-1000 ${
        animateStats ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}
    >
      <div className="text-3xl font-bold text-white mb-1">{number}</div>
      <div className="text-sm text-indigo-100">{label}</div>
    </div>
  );

  return (
    <div className="space-y-16">
      {/* Executive Summary Section */}
      <div className="relative">
        {/* Background with gradient and pattern */}
        <div className="absolute inset-0 bg-indigo-900 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-800 to-indigo-900">
            {/* Optional: Add subtle grid pattern */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 1px)`,
                backgroundSize: '40px 40px',
              }}
            />
          </div>
        </div>

        {/* Content */}
        <div className="relative px-8 py-20 max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-white/10 p-2 rounded-lg backdrop-blur-sm">
              <Globe2 className="text-white" size={24} />
            </div>
            <span className="text-indigo-200 font-medium">
              GoodDeedz White Paper 2024
            </span>
          </div>

          <div className="max-w-3xl mb-12">
            <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
              Redefining Global Philanthropy: A Transparent, Engaging, Digital-First Platform
            </h1>
            <p className="text-xl text-indigo-100 mb-8">
              GoodDeedz connects donors, nonprofits, and corporate partners to drive real, measurable impact—anytime, anywhere.
            </p>
            <button className="bg-white text-indigo-900 px-8 py-4 rounded-lg font-semibold flex items-center gap-2 hover:bg-indigo-50 transition-colors">
              Request Investor Deck
              <ArrowRight size={20} />
            </button>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-3 gap-12">
            <Stat number="$1.5T" label="Global Foundation Assets" />
            <Stat number="21%" label="YoY Digital Giving Growth" />
            <Stat number="500M+" label="Potential Donors" />
          </div>
        </div>
      </div>

      {/* Market Opportunity Section */}
      <div className="max-w-6xl mx-auto px-8">
        <div className="bg-white rounded-2xl shadow-lg p-12">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              A Trillion-Dollar Market Ripe for Disruption
            </h2>
            <p className="text-gray-600 text-lg">
              Traditional philanthropy suffers from inefficiencies, opacity, and limited engagement. As digital giving accelerates and younger donors demand transparency, the market is primed for transformation.
            </p>
          </div>

          {/* Market Growth Chart */}
          <div className="bg-gray-50 rounded-xl p-8 mb-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Traditional vs. Digital Giving Growth
            </h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={marketTrends}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="traditional"
                    stroke="#94A3B8"
                    strokeWidth={2}
                    name="Traditional Giving"
                  />
                  <Line
                    type="monotone"
                    dataKey="digital"
                    stroke="#4F46E5"
                    strokeWidth={3}
                    name="Digital Giving"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Proof Points */}
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-indigo-50 p-6 rounded-xl">
              <TrendingUp className="text-indigo-600 mb-3" size={24} />
              <div className="font-semibold text-gray-900">Foundation Assets</div>
              <p className="text-gray-600 text-sm">
                $1.5T globally, growing steadily year over year
              </p>
            </div>
            <div className="bg-indigo-50 p-6 rounded-xl">
              <Users className="text-indigo-600 mb-3" size={24} />
              <div className="font-semibold text-gray-900">Digital Adoption</div>
              <p className="text-gray-600 text-sm">
                Digital donations growing above historical rates
              </p>
            </div>
            <div className="bg-indigo-50 p-6 rounded-xl">
              <DollarSign className="text-indigo-600 mb-3" size={24} />
              <div className="font-semibold text-gray-900">Young Donors</div>
              <p className="text-gray-600 text-sm">
                Demanding transparency and real-time impact
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExecutiveSummary;