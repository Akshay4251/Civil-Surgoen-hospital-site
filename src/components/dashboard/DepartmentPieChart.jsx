import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const DepartmentPieChart = () => {
  const data = {
    labels: ['Cardiology', 'Orthopedics', 'Neurology', 'Pediatrics', 'OPD'],
    datasets: [
      {
        label: 'Patients',
        data: [300, 150, 100, 200, 450],
        backgroundColor: [
          '#10B981', // green-500
          '#34D399', // green-400
          '#6EE7B7', // green-300
          '#A7F3D0', // green-200
          '#D1FAE5', // green-100
        ],
        borderColor: '#ffffff',
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">Department Workload</h3>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DepartmentPieChart;