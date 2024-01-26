'use client';
// Import statements
import React from 'react';
import dynamic from 'next/dynamic';
// import Chart from 'react-apexcharts';
const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

// Define props type
interface BarChartProps {
  chartData: any; // Replace 'any' with the actual type of your chartData
  chartOptions: any; // Replace 'any' with the actual type of your chartOptions
}

const BarChart: React.FC<BarChartProps> = (props) => {
  const { chartData, chartOptions } = props;

  return (
    <Chart
        className="w-full"
      options={chartOptions}
      type="bar"
      width="100%"
      height="100%"
      series={chartData}
    />
  );
};

export default BarChart;

