import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Line } from "react-chartjs-2";
import { RootState } from "../modules";
import { IBody } from "../classes";
import { Point } from "../classes/utils/types";
import { calcFallTime, getPositions } from "../classes/utils/functions";
import { Circle, Rectangle } from "../classes/bodies";

type ChartProps = {
  className?: string;
};

type ChartDataType = {
  labels: string[];
  datasets: [
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
type ChartMode = "X" | "Y";

export const Y_PLOT_COUNT = 10;

const Chart: React.FC<ChartProps> = ({ className }) => {
  const body: IBody = useSelector((state: RootState) => state.body);
  const [chartData, setChartData] = useState<ChartDataType>();
  const [chartMode, setChartMode] = useState<ChartMode>("X");
  const timeRange = 10;
  const labels = () => {
    let labels: string[] = [];
    const t = calcFallTime(body);
    const period = t / Y_PLOT_COUNT;
    for (
      let i = 0;
      i <= timeRange;
      i += body.applyGround && chartMode === "Y" ? period : 1
    ) {
      const num = chartMode === "Y" ? Math.round(i * 1000) / 1000 : i;
      labels.push(String(num));
    }
    return labels;
  };
  const data = () => {
    const data = getPositions(body, timeRange, chartMode);
    return data;
  };
  const chart = () => {
    setChartData({
      labels: labels(),
      datasets: [
        {
          label: `Position ${chartMode}`,
          data: data(),
          fill: false,
          backgroundColor: body.color,
          borderColor: body.color,
          borderWidth: 4,
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
      {chartData && <Line data={chartData} />}
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
