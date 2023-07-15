import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement } from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

function Chart() {
  const data = {
    labels: ["May 12", "May 13", "May 14", "May 15", "May 16", "May 17"],
    datasets: [
      {
        data: [8.2, 7.8, 9.5, 7.3, 6, 8.5, 8.2, 99, 35.5, 50, 22.5, 10.6],
        backgroundColor: "transparent",
        borderColor: "#000",
        pointBorderColor: "transparent",
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
      },
    },
  };

  return (
    <div>
      <Line data={data} options={options}></Line>
    </div>
  );
}

export default Chart;