import React from "react";
import { PolarArea } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip);

function PolarChart({diagram}) {
  const data = {
		labels: Object.keys(diagram),
		datasets: [
			{
				label: 'Mahulot nomi',
				data: Object.values(diagram),
				backgroundColor: ['#FFE5EE', 'rgba(86, 59, 255, 0.50)'],
				borderColor: '#000',
				pointBorderColor: '#3b3b3b',
				pointBorderWidth: 4,
				tension: 0.5,
			},
		],
	}

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
          callback: (value) => value + "K",
        },
        font: {
          family: "roboto-reg",
        },
      },
    },
  };

  return (
    <div>
      <div className="chart_title">Mahsulotlar statistikasi</div>
      <PolarArea data={data} options={options}></PolarArea>
    </div>
  );
}

export default PolarChart;
