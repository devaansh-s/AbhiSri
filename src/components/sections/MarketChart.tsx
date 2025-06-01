import React from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from 'recharts';

interface MarketChartProps {
  labels: string[];
  sensexData: number[];
  niftyData: number[];
  usdInrData: number[];
}

interface ChartDataPoint {
  month: string;
  sensex: number;
  nifty: number;
  usdInr: number;
}

const MarketChart: React.FC<MarketChartProps> = ({ labels, sensexData, niftyData, usdInrData }) => {
  // Combine labels and data into one array for recharts
  const data: ChartDataPoint[] = labels.map((label, index) => ({
    month: label,
    sensex: sensexData[index],
    nifty: niftyData[index],
    usdInr: usdInrData[index],
  }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend verticalAlign="top" height={36} />
        <Line type="monotone" dataKey="sensex" stroke="#2563eb" strokeWidth={2} dot={false} name="Sensex" />
        <Line type="monotone" dataKey="nifty" stroke="#16a34a" strokeWidth={2} dot={false} name="Nifty 50" />
        <Line type="monotone" dataKey="usdInr" stroke="#db2777" strokeWidth={2} dot={false} name="USD/INR" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default MarketChart;
