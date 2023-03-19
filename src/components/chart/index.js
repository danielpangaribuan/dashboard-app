import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

function Chart() {
  const data = {
    labels: ["04 Apr '22", "06 Apr '22", "08 Apr '22", "10 Apr '22"],
    datasets: [
      {
        label: "First dataset",
        data: [3000000, 4400000, 2750000, 4500000],
        fill: true,
        backgroundColor: ({ chart: { ctx } }) => {
          const gradient = ctx.createLinearGradient(0, 25, 0, 300);
          gradient.addColorStop(0, "rgba(84, 93, 255, .5)");
          gradient.addColorStop(0.5, "rgba(84, 93, 255, .2)");
          gradient.addColorStop(1, "rgba(84, 93, 255, .05)");
          return gradient;
        },
        borderColor: "#545DFF",
        shadowColor: "red",
        lineTension: 0.3825,
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        border: {
          display: false,
        },
        grid: {
          display: false,
        },
        ticks: {
          color: "#bbb",
        },
      },
      y: {
        suggestedMin: 0,
        suggestedMax: 8000000,
        gridLines: {
          borderDash: [2, 5],
        },
        ticks: {
          color: "#bbb",
          callback: function (value, index, ticks) {
            return value % 2000000 || value === 0 ? "" : "Rp " + value;
          },
        },
        border: {
          display: false,
          dash: [3, 5],
        },
        grid: {
          tickWidth: 100,
          tickColor: "#FFF",
          // drawTicks: false,
          color: function (context) {
            return context.tick.value % 2000000 || context.tick.value === 0
              ? "#FFF"
              : "#bbb";
          },
        },
      },
    },
    layout: {
      // borderDash: [2, 4],
    },
  };

  return <Line data={data} options={options} width={"100%"} />;
}

export default Chart;
