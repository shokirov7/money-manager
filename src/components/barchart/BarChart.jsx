import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Legend, Tooltip } from 'chart.js/auto';

function BarChart() {
  const data = {
    labels: ['May 12', 'May 13', 'May 14', 'May 15', 'May 16', 'May 17'],
    datasets: [
      {
        label: 'Mahulot nomi',
        data: [8.2, 7.8, 2.5, 7.3, 6, 8.5],
        backgroundColor: '#fff',
        borderColor: '#000',
        pointBorderColor: '#3b3b3b',
        pointBorderWidth: 4,
        shadowColor: ['rgba(255, 0, 0, 0.7)', 'rgba(0, 255, 0, 0.7)', 'rgba(0, 0, 255, 0.7)'],
        shadowBlur: 20,
        tension: 0.5,
      },
    ],
  };

  const options = {
    plugins: {
      legend: false,
    },
    scales: {
      x: {
        grid: { display: false },
      },
      y: {
        min: 2,
        max: 10,
        ticks: {
          stepSize: 2,
          callback: (value) => value + 'K',
        },
        font: {
          family: 'roboto-reg',
        },
      },
    },
  };

  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
}

export default BarChart;
