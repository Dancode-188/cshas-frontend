import React from "react";
import "./EnergyConsumption.scss";
import { Line } from "react-chartjs-2";

const EnergyConsumption = ({ energyData }) => {
  if (!energyData) {
    return <div>Loading...</div>;
  }

  const chartData = {
    labels: energyData.labels,
    datasets: [
      {
        label: "Energy Consumption",
        data: energyData.values,
        fill: false,
        borderColor: "#00e676",
        tension: 0.1,
      },
    ],
  };

  const chartOptions = {
    scales: {
      x: {
        grid: {
          color: "#424242",
        },
        ticks: {
          color: "#ffffff",
        },
      },
      y: {
        grid: {
          color: "#424242",
        },
        ticks: {
          color: "#ffffff",
        },
      },
    },
  };

  return (
    <div className="energy-consumption">
      <h3 className="energy-consumption-title">Energy Consumption</h3>
      <div className="chart-container">
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default EnergyConsumption;
