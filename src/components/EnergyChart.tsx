import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Scatter } from "react-chartjs-2";
import { RootState } from "../modules";
import { IBody } from "../classes";
import { getEnergyData } from "../classes/utils/functions";

type EnergyChartProps = {
  className?: string;
};

type EnergyChartDataType = {
  datasets: [
    {
      label: string;
      data: Array<{ x: number; y: number }>;
      fill: boolean;
      showLine: boolean;
      backgroundColor: string;
      borderColor: string;
      borderWidth: number;
    },
    {
      label: string;
      data: Array<{ x: number; y: number }>;
      fill: boolean;
      showLine: boolean;
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
  const chart = () => {
    setChartData({
      datasets: [
        {
          label: `Potential Energy`,
          data: getEnergyData(body, "Potential"),
          fill: false,
          showLine: true,
          backgroundColor: "#FC766AFF",
          borderColor: "#FC766AFF",
          borderWidth: 1,
        },
        {
          label: `Kinetic Energy`,
          data: getEnergyData(body, "Kinetic"),
          fill: false,
          showLine: true,
          backgroundColor: "#5B84B1FF",
          borderColor: "#5B84B1FF",
          borderWidth: 1,
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
    <div className={className}>{chartData && <Scatter data={chartData} />}</div>
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
