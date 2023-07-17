import React, { useEffect, useState } from "react";
import authService from "../../api/axios";
import { Line } from "react-chartjs-2";
import "./Chart.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip
);

function Chart() {
  const [dataa, setDataa] = useState([]);

  const getStats = async () => {
    try {
      const { data } = await authService.getStats();
      setDataa(data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(dataa);

  useEffect(() => {
    getStats();
  }, []);

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
    <div>
      <div className="chart_title">Mahsulotlar statistikasi</div>
      <Line data={data} options={options}></Line>
    </div>
  );
}

export default Chart;
