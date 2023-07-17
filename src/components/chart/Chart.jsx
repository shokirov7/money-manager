import { CategoryScale, Chart as ChartJS, Legend, LineElement, LinearScale, PointElement, Tooltip } from "chart.js";
import React from "react";
import { Line } from "react-chartjs-2";
import "./Chart.css";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip);

function Chart({ diagram }) {
  const data = {
    labels: ["Fanta", "Pepsi", "Tuz", "Yog'1L", "Barni", "Coca Cola"],
    datasets: [
      {
        label: "Nom",
        data: [4.5, 7, 4, 7, 4, 7.5],
        backgroundColor: (context) => {
          const gradient = context.chart.canvas.getContext("2d").createLinearGradient(0, 0, 0, context.chart.height);
          gradient.addColorStop(0, "rgba(86, 59, 255, 0.20)");
          gradient.addColorStop(1, "rgba(86, 59, 255, 0)");
          return gradient;
        },
        borderColor: "rgba(86, 59, 255, 0.50)",
        pointBorderColor: "#5840BB",
        pointBorderWidth: 4,
        tension: 0.5,
        fill: true,
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
    <div className="chart-container">
      <div className="chart_title">Mahsulotlar statistikasi</div>
      {diagram ? <Line data={data} options={options} /> : <h1>Yuklanmoqda...</h1>}
    </div>
  );
}

export default Chart;
