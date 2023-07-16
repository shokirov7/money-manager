import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
} from "chart.js";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
  Tooltip
);

function Nut() {
  const data = {
    labels: ["May 12", "May 13", "May 14", "May 15", "May 16", "May 17"],
    datasets: [
      {
        label: "Mahulot nomi",
        data: [8.2, 7.8, 2.5, 7.3, 6, 8.5, 8.2, 5.5, 0.5, 2, 22.5, 10.6],
        backgroundColor: (context) => {
          const gradient = context.chart.canvas
            .getContext("2d")
            .createLinearGradient(0, 0, 0, context.chart.height);
          gradient.addColorStop(0, "#4318FF");
          gradient.addColorStop(1, "rgba(150, 0, 147, 0)"); 
          return gradient;
        },
        borderColor: "#24D6A5",
        pointBorderColor: "#24D6A5",
        pointBorderWidth: 4,
        tension: 0.5,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
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
      <Doughnut data={data} options={options}></Doughnut>
    </div>
  );
}

export default Nut;