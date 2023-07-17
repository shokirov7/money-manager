import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js"
import React from "react"
import { Line } from "react-chartjs-2"
import "./Chart.css"

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip
);

function Chart({diagram}) {

  const data = {
		labels: Object.keys(diagram) ? Object.keys(diagram) : '',
		datasets: [
			{
				label: 'Mahulot nomi',
				data: Object.values(diagram) ? Object.values(diagram) : '',
				backgroundColor: context => {
					const gradient = context.chart.canvas
						.getContext('2d')
						.createLinearGradient(0, 0, 0, context.chart.height)
					gradient.addColorStop(0, 'rgba(86, 59, 255, 0.20)')
					gradient.addColorStop(1, 'rgba(86, 59, 255, 0)')
					return gradient
				},
				borderColor: 'rgba(86, 59, 255, 0.50)',
				pointBorderColor: '#5840BB',
				pointBorderWidth: 4,
				tension: 0.5,
				fill: true,
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
      {diagram && <Line data={data} options={options}></Line> || <h1>Yuklanmoqda...</h1>}
    </div>
  );
}

export default Chart;
