import React, { useState } from "react";
import styled from "styled-components";
import { Canvas } from "../components";
import ToolsContainer from "./ToolsContainer";

type SimulationContainerProps = {
  className?: string;
};

const SimulationContainer: React.FC<SimulationContainerProps> = ({
  className,
}) => {
  const [time, setTime] = useState(0);
  const [active, setActive] = useState(false);
  return (
    <div className={className}>
      <div className="top-container">
        <Canvas />
        <ToolsContainer />
      </div>
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
