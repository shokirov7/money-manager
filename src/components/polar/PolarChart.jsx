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

function PolarChart() {
  const data = {
    labels: ["May 12", "May 13", "May 14", "May 15", "May 16", "May 17"],
    datasets: [
      {
        label: "Mahulot nomi",
        data: [8.2, 7.8, 2.5, 7.3, 6, 8.5, 8.2, 5.5, 0.5, 2, 22.5, 10.6],
        backgroundColor: ['#FFE5EE', 'rgba(86, 59, 255, 0.50)'],
        borderColor: "#000",
        pointBorderColor: "#3b3b3b",
        pointBorderWidth: 4,
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
