"use client"
import React from 'react';
import ReactApexChart from 'react-apexcharts';

interface CardProps {
  name: string;
  svgIcon: React.ReactElement;
  progress: number;
  value: string;
  chartData: {
    categories: string[];
    series: { name: string; data: number[] }[];
  };
}

const Card: React.FC<CardProps> = ({ name, svgIcon, progress, value, chartData }) => {
  const options = {
    chart: {
      id: 'line-chart',
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: chartData.categories,
    },
  };

  return (
    <div className="card-container border rounded-lg cards bg-white text-gray-800 dark:bg-black dark:border-0 m-2 mr-3 lg:mr-4  p-4 px-6  ">
      <div className="card-header flex items-start">
        <div className="mr-4">{svgIcon}</div>
        <div>
          <h2 className="mb-2">{name}</h2>
          <p className="value">{value}</p>
          <div className="progress mt-2">
            <span>{progress}%</span>
            <div className="progress-bar" style={{ width: `${progress}%` }} />
          </div>
        </div>
      </div>
      <div className="card-chart mt-4">
        <ReactApexChart options={options} series={chartData.series} type="line" height={80} />
      </div>
    </div>
  );
};

const TotalCards: React.FC = () => {
  // ... (unchanged)
  const card1Data = {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    series: [{ name: 'Progress', data: [30, 45, 60, 80, 95] }],
  };

  const card2Data = {
    categories: ['A', 'B', 'C', 'D', 'E'],
    series: [{ name: 'Values', data: [20, 35, 50, 65, 80] }],
  };

  const svgIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="19.6429" stroke="#E6E6E6" strokeWidth="0.714286" />
    </svg>
  );

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 ">
      <Card
        name="Card 1"
        svgIcon={svgIcon}
        progress={75}
        value="300"
        chartData={card1Data}
      />
      <Card
        name="Card 2"
        svgIcon={svgIcon}
        progress={50}
        value="500"
        chartData={card2Data}
      />
      <Card
        name="Card 3"
        svgIcon={svgIcon}
        progress={50}
        value="500"
        chartData={card2Data}
      />
      <Card
        name="Card 4"
        svgIcon={svgIcon}
        progress={50}
        value="500"
        chartData={card2Data}
      />
    </div>
  );
};

export default TotalCards;