import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { IBody } from "../classes";
import { Canvas, Chart } from "../components";
import ToolsContainer from "./ToolsContainer";
import { RootState } from "../modules";
import ChartContainer from "./ChartContainer";

type SimulationContainerProps = {
  className?: string;
};

const SimulationContainer: React.FC<SimulationContainerProps> = ({
  className,
}) => {
  const body = useSelector((state: RootState) => state.body);
  return (
    <div className={className}>
      <div className="top-container">
        <Canvas />
        <ToolsContainer />
      </div>
      <div className="btm-container">{body && <ChartContainer />}</div>
    </div>
  );
};

export default styled(SimulationContainer)`
  display: flex;
  flex-direction: column;
  min-width: 1200px;
  padding: 2rem;
  .top-container {
    display: flex;
    justify-content: center;
  }
`;
