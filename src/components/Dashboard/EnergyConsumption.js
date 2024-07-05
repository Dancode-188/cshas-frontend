import React, { useState, useEffect } from "react";
import "./EnergyConsumption.scss";
import { Line } from "react-chartjs-2";
import { fetchEnergyData } from "../../services/energyService";

const EnergyConsumption = () => {
  const [energyData, setEnergyData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadEnergyData = async () => {
      try {
        setIsLoading(true);
        const data = await fetchEnergyData();
        setEnergyData(data);
        setIsLoading(false);
      } catch (err) {
        setError("Failed to fetch energy data. Please try again later.");
        setIsLoading(false);
      }
    };

    loadEnergyData();
  }, []);

  if (isLoading) {
    return <div className="energy-consumption">Loading energy data...</div>;
  }

  if (error) {
    return <div className="energy-consumption error">{error}</div>;
  }

  if (!energyData) {
    return <div className="energy-consumption">No energy data available.</div>;
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
