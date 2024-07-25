import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend, Title } from "chart.js";
import style from "../DonutChart/donut.module.css";

Chart.register(ArcElement, Tooltip, Legend, Title);

const data = {
  labels: ["Active User", "New User", "Inactive User", "Deleted User"],
  datasets: [
    {
      data: [20, 30, 5, 15],
      backgroundColor: ["#00FF00", "#FFFF00", "#FF0000", "#000000"],
      borderColor: ["#00FF00", "#FFFF00", "#FF0000", "#000000"],
      borderWidth: 1,
    },
  ],
};
const options = {
  plugins: {
    legend: {
      display: true,
      position: "bottom",
      labels: {
        generateLabels: (chart) => {
          const data = chart.data;
          if (data.labels.length && data.datasets.length) {
            return data.labels.map((label, i) => {
              const value = data.datasets[0].data[i];
              return {
                text: `${label}: ${value}%`,
                fillStyle: data.datasets[0].backgroundColor[i],
                strokeStyle: data.datasets[0].borderColor[i],
                lineWidth: data.datasets[0].borderWidth,

                hidden: false,
                index: i,
              };
            });
          }
          return [];
        },

        usePointStyle: true,
        pointStyle: "circle",
        font: {
          size: 11, // Change the font size

          family: "Plus Jakarta Sans", // Change the font family
        },

        padding: 30,
      },
    },
    tooltip: {
      callbacks: {
        label: function (context) {
          return `${context.label}: ${context.raw}%`;
        },
      },
    },
    title: {
      display: true,
      text: "",
    },
  },
  cutout: "90%",
};

const Donony = () => {
  return (
    <div className={style.App}>
      <h1>User Status</h1>
      <div className={style.chart_container}>
        <Doughnut data={data} options={options} />
        <div className={style.chart_middle_text}>
          <h2>100%</h2>
          <p>OVERALL</p>
        </div>
      </div>
    </div>
  );
};

export default Donony;
