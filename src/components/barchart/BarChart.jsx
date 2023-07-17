// import React from "react";
// import { Bar } from "react-chartjs-2";
// import {
//   Chart,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Legend,
//   Tooltip,
// } from "chart.js/auto";

// function BarChart({diagram}) {
//   // const labels = Object?.keys(diagram)
//   const data = {
//     // labels: Object.keys(diagram),
// 		datasets: [
// 			{
// 				label: 'Mahulot nomi',
// 				// data:  Object.values(diagram),
// 				backgroundColor: context => {
// 					const gradient = context.chart.canvas
// 						.getContext('2d')
// 						.createLinearGradient(0, 0, 0, context.chart.height)
// 					gradient.addColorStop(0, '#4318FF')
// 					gradient.addColorStop(1, 'rgba(150, 0, 147, 0)')
// 					return gradient
// 				},
// 				borderColor: '#24D6A5',
// 				pointBorderColor: '#24D6A5',
// 				pointBorderWidth: 4,
// 				tension: 0.5,
// 			},
// 		],
// 	}

//   const options = {
//     plugins: {
//       legend: false,
//     },
//     scales: {
//       x: {
//         grid: { display: false },
//       },
//       y: {
//         min: 2,
//         max: 10,
//         ticks: {
//           stepSize: 2,
//           callback: (value) => value + "K",
//         },
//         font: {
//           family: "roboto-reg",
//         },
//       },
//     },
//     elements: {
//       bar: {
//         borderRadius: 40,
//       },
//     },
//   };

//   return (
//     <div>
//       <Bar data={data} options={options} />
//     </div>
//   );
// }

// export default BarChart;
