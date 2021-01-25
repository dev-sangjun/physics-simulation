import React, { useEffect, useState } from "react";
import { act } from "react-dom/test-utils";
import styled from "styled-components";
import { CanvasStore, Rectangle, Circle } from "../classes";
import CanvasContainer from "./CanvasContainer";
import ToolsContainer from "./ToolsContainer";

type BodyContainerProps = {
  className?: string;
};

const BodyContainer: React.FC<BodyContainerProps> = ({ className }) => {
  const [time, setTime] = useState(0);
  const [active, setActive] = useState(false);
  return (
    <div className={className}>
      <div className="top-container">
        <CanvasContainer />
        <ToolsContainer />
      </div>
    </div>
  );
};

export default styled(BodyContainer)`
  display: flex;
  flex-direction: column;
  min-width: 1200px;
  padding: 2rem;
  .top-container {
    display: flex;
    justify-content: center;
  }
`;
