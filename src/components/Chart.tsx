import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Scatter } from "react-chartjs-2";
import { RootState } from "../modules";
import { IBody } from "../classes";
import { calcFallTime, getPositionData } from "../classes/utils/functions";

type ChartProps = {
  className?: string;
};

type ChartDataType = {
  datasets: [
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
type ChartMode = "X" | "Y";

export const Y_PLOT_COUNT = 10;

const Chart: React.FC<ChartProps> = ({ className }) => {
  const body: IBody = useSelector((state: RootState) => state.body);
  const [chartData, setChartData] = useState<ChartDataType>();
  const [chartMode, setChartMode] = useState<ChartMode>("X");
  const chart = () => {
    setChartData({
      datasets: [
        {
          label: `Position ${chartMode}`,
          data: getPositionData(body, chartMode),
          fill: false,
          showLine: true,
          backgroundColor: body.color,
          borderColor: body.color,
          borderWidth: 1,
        },
      ],
    });
  };
  const onClick = () => {
    setChartMode(chartMode === "X" ? "Y" : "X");
  };
  useEffect(() => {
    chart();
  }, [body, chartMode]);
  return (
    <div className={className}>
      {chartData && <Scatter data={chartData} />}
      {chartData && (
        <button className="chart-mode-btn" onClick={onClick}>
          Plot {chartMode === "X" ? "Y" : "X"}
        </button>
      )}
    </div>
  );
};

export default styled(Chart)`
  width: 1088px;
  margin: auto;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  .chart-mode-btn {
    width: 5rem;
    padding: 0.25rem;
    margin: auto;
    margin-top: 1rem;
  }
`;
