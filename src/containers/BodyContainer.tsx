import React from "react";
import styled from "styled-components";
import CanvasContainer from "./CanvasContainer";
import ToolsContainer from "./ToolsContainer";

type BodyContainerProps = {
  className?: string;
};

const BodyContainer: React.FC<BodyContainerProps> = ({ className }) => {
  return (
    <div className={className}>
      <CanvasContainer />
      <ToolsContainer />
    </div>
  );
};

export default styled(BodyContainer)`
  padding: 2rem;
  display: flex;
`;
