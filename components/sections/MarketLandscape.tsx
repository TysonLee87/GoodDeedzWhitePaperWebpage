import React from 'react';
import { whitepaperContent } from '../../content/whitepaper';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';
import {
  TrendingUp,
  Smartphone,
  Users,
} from 'lucide-react';

// Define the props interface for InsightCard
interface InsightCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

// Apply the interface to InsightCard
const InsightCard: React.FC<InsightCardProps> = ({ title, children, className = "" }) => (
  <div className={`bg-indigo-50 p-6 rounded-xl border-l-4 border-indigo-600 ${className}`}>
    <h4 className="font-semibold text-gray-900 mb-2">{title}</h4>
    <p className="text-gray-600">{children}</p>
  </div>
);

const MarketLandscape = () => {
  const { title, landscape } = whitepaperContent.marketLandscape;

  // Data for charts
  const generationalData = [
    { generation: 'Boomers', discovery: 20, engagement: 15, trust: 25 },
    { generation: 'Gen X', discovery: 45, engagement: 40, trust: 35 },
    { generation: 'Millennials', discovery: 75, engagement: 80, trust: 70 },
    { generation: 'Gen Z', discovery: 85, engagement: 90, trust: 80 }
  ];

  const digitalTrends = [
    { year: 2019, traditional: 80, digital: 20 },
    { year: 2020, traditional: 75, digital: 25 },
    { year: 2021, traditional: 65, digital: 35 },
    { year: 2022, traditional: 55, digital: 45 },
    { year: 2023, traditional: 45, digital: 55 }
  ];

  return (
    <section className="market-landscape">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <p className="text-gray-700 whitespace-pre-line">{landscape}</p>

      <div className="space-y-24">
        {/* A. Hero / Intro Block */}
        <section className="relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-indigo-900 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-800 to-indigo-900">
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 1px)`,
                  backgroundSize: '40px 40px'
                }}
              />
            </div>
          </div>

          {/* Content */}
          <div className="relative px-8 py-20 max-w-6xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-white mb-6">
              A Philanthropic Market in Flux—And the Perfect Moment to Innovate
            </h1>
            <p className="text-xl text-indigo-100 mb-12 max-w-3xl mx-auto">
              The trillion-dollar philanthropic sector is experiencing unprecedented growth, 
              with explosive foundation creation and digital giving leading the charge.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-3xl font-bold text-white mb-2">$1.5T+</div>
                <div className="text-indigo-200">Foundation Assets (UBS)</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-3xl font-bold text-white mb-2">72%</div>
                <div className="text-indigo-200">Foundations Formed in Last 25 Years</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-3xl font-bold text-white mb-2">21%</div>
                <div className="text-indigo-200">Annual Digital Donation Growth</div>
              </div>
            </div>
          </div>
        </section>

        {/* B. Generational Shifts in Giving */}
        <section className="max-w-6xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Meet the New Generations of Donors
          </h2>
          
          <div className="grid grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-gray-600">
                Millennials and Gen Z are revolutionizing philanthropy with their digital-first mindset. 
                These generations demand complete transparency, mobile-optimized experiences, and authentic 
                connections to the causes they support.
              </p>
              
              <InsightCard title="GoodDeedz Insight">
                We're building a platform that seamlessly aligns with the preferences of digital 
                natives—ensuring long-term relevance and market capture.
              </InsightCard>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={generationalData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="generation" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="discovery" fill="#818CF8" name="Digital Discovery" />
                    <Bar dataKey="engagement" fill="#4F46E5" name="Platform Engagement" />
                    <Bar dataKey="trust" fill="#312E81" name="Trust Score" />
                  </BarChart>
                </ResponsiveContainer>
                <p className="text-sm text-gray-500 text-center mt-4">
                  Digital Platform Adoption by Generation (%)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* C. The Digital Imperative */}
        <section className="max-w-6xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Digital Giving is the New Standard
          </h2>

          <div className="grid grid-cols-2 gap-12">
            <div className="space-y-8">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <TrendingUp className="w-4 h-4 text-indigo-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Online Giving Up 21% YoY</div>
                    <p className="text-gray-600 text-sm">Consistent growth outpacing traditional channels</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <Smartphone className="w-4 h-4 text-indigo-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">30% Mobile Donations</div>
                    <p className="text-gray-600 text-sm">Mobile-first giving continues to accelerate</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-4 h-4 text-indigo-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Seamless Experience Expected</div>
                    <p className="text-gray-600 text-sm">Donors demand transparent, easy-to-use platforms</p>
                  </div>
                </li>
              </ul>

              <InsightCard title="GoodDeedz Leverages This Trend">
                Our platform brings e-commerce-level convenience and transparency, meeting donors 
                where they are—on their phones, on the go.
              </InsightCard>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={digitalTrends}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Line 
                      type="monotone" 
                      dataKey="digital" 
                      stroke="#4F46E5" 
                      strokeWidth={3}
                      name="Digital Giving"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="traditional" 
                      stroke="#94A3B8" 
                      strokeWidth={2}
                      name="Traditional Giving"
                    />
                  </LineChart>
                </ResponsiveContainer>
                <p className="text-sm text-gray-500 text-center mt-4">
                  Digital vs Traditional Giving Growth (%)
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default MarketLandscape; 