import React from 'react';
import Section from '../ui/Section';
import { calculatorTools } from '../../data';
import { Calculator, LineChart, PiggyBank, ScrollText } from 'lucide-react';
import MarketChart from './MarketChart';

const getIconComponent = (iconName: string) => {
  const iconMap: Record<string, React.ReactNode> = {
    Calculator: <Calculator className="h-8 w-8" />,
    PiggyBank: <PiggyBank className="h-8 w-8" />,
    ScrollText: <ScrollText className="h-8 w-8" />,
    LineChart: <LineChart className="h-8 w-8" />
  };
  return iconMap[iconName] || <Calculator className="h-8 w-8" />;
};

// Static mock data
const mockMarketData = {
  sensex: { price: '69,500', change: '+0.75', isUp: true },
  nifty: { price: '22,050', change: '-0.32', isUp: false },
  usdInr: { price: '83.25', change: '+0.12', isUp: true }
};

const renderStatCard = (title: string, dataKey: keyof typeof mockMarketData) => {
  const data = mockMarketData[dataKey];
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h4 className="text-lg font-semibold text-gray-900 mb-2">{title}</h4>
      <div className="flex items-center justify-between">
        <span className="text-2xl font-bold">{data.price}</span>
        <span className={`flex items-center ${data.isUp ? 'text-green-500' : 'text-red-500'}`}>
          {data.change}%
          <svg className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                data.isUp
                  ? 'M5 10l7-7m0 0l7 7m-7-7v18'
                  : 'M19 14l-7 7m0 0l-7-7m7 7V3'
              }
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

// Mock chart data
const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
const sensexData = [67890, 68200, 67000, 69000, 68500, 69500];
const niftyData = [21456, 21500, 21000, 22000, 21800, 22500];
const usdInrData = [83.25, 83.50, 83.00, 83.75, 83.40, 83.80];

const Tools: React.FC = () => {
  return (
    <Section id="tools" className="bg-gray-50">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Financial Tools</h2>
        <div className="w-20 h-1 bg-primary mx-auto mt-4 mb-6"></div>
        <p className="text-lg text-gray-700">
          Interactive calculators and tools to help you plan your financial future.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {calculatorTools.map((tool) => (
          <a
            href={`#${tool.id}`}
            key={tool.id}
            className="bg-white rounded-lg shadow-md p-6 transition-transform hover:transform hover:scale-105 hover:shadow-lg"
          >
            <div className="flex items-start">
              <div className="h-14 w-14 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center mr-4">
                {getIconComponent(tool.icon)}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">{tool.title}</h3>
                <p className="mt-2 text-gray-700">{tool.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-16">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Market Insights Dashboard</h3>
            <div className="bg-gray-100 rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {renderStatCard('Sensex', 'sensex')}
                {renderStatCard('Nifty 50', 'nifty')}
                {renderStatCard('USD/INR', 'usdInr')}
              </div>
              <div className="mt-6 bg-white rounded-lg shadow p-4">
                <MarketChart
                  labels={labels}
                  sensexData={sensexData}
                  niftyData={niftyData}
                  usdInrData={usdInrData}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Tools;
