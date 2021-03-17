import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Line } from "react-chartjs-2";
import { RootState } from "../modules";
import { IBody } from "../classes";
import { Point } from "../classes/utils/types";
import { calcFallTime, getEnergies } from "../classes/utils/functions";
import { Circle, Rectangle } from "../classes/bodies";

type EnergyChartProps = {
  className?: string;
};

type EnergyChartDataType = {
  labels: string[];
  datasets: [
    {
      label: string;
      data: number[];
      fill: boolean;
      backgroundColor: string;
      borderColor: string;
      borderWidth: number;
    },
    {
      label: string;
      data: number[];
      fill: boolean;
      backgroundColor: string;
      borderColor: string;
      borderWidth: number;
    }
  ];
};
type EnergyChartMode = "Kinetic" | "Potential";

export const Y_PLOT_COUNT = 10;

const EnergyChart: React.FC<EnergyChartProps> = ({ className }) => {
  const body: IBody = useSelector((state: RootState) => state.body);
  const [chartData, setChartData] = useState<EnergyChartDataType>();
  const [chartMode, setChartMode] = useState<EnergyChartMode>("Kinetic");
  const timeRange = 10;
  const labels = () => {
    let labels: string[] = [];
    const t = calcFallTime(body);
    const period = t / Y_PLOT_COUNT;
    for (let i = 0; i <= timeRange; i += body.applyGround ? period : 1) {
      const num = Math.round(i * 1000) / 1000;
      labels.push(String(num));
    }
    return labels;
  };
  const data = (chartMode: EnergyChartMode) => {
    const data = getEnergies(body, timeRange, chartMode);
    return data;
  };
  const chart = () => {
    setChartData({
      labels: labels(),
      datasets: [
        {
          label: `Potential Energy`,
          data: data("Potential"),
          fill: false,
          backgroundColor: "#FC766AFF",
          borderColor: "#FC766AFF",
          borderWidth: 4,
        },
        {
          label: `Kinetic Energy`,
          data: data("Kinetic"),
          fill: false,
          backgroundColor: "#5B84B1FF",
          borderColor: "#5B84B1FF",
          borderWidth: 4,
        },
      ],
    });
  };
  const onClick = () => {
    setChartMode(chartMode === "Kinetic" ? "Potential" : "Kinetic");
  };
  useEffect(() => {
    chart();
  }, [body, chartMode]);
  return (
    <div className={className}>
      {chartData && <Line data={chartData} />}
      {chartData && (
        <button className="chart-mode-btn" onClick={onClick}>
          Plot {chartMode === "Kinetic" ? "Potential" : "Kinetic"} Energy
        </button>
      )}
    </div>
  );
};

export default styled(EnergyChart)`
  width: 1088px;
  margin: auto;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  .chart-mode-btn {
    width: 10rem;
    padding: 0.25rem;
    margin: auto;
    margin-top: 1rem;
  }
`;
