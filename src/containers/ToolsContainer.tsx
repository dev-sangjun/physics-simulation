import React from "react";
import styled from "styled-components";
import { Input } from "../components";

type ToolsContainerProps = {
  className?: string;
};

const ToolsContainer: React.FC<ToolsContainerProps> = ({ className }) => {
  return (
    <div className={className}>
      <div className="buttons-container"></div>
      <div className="inputs-container">
        <Input placeholder="x" inputType="x" />
        <Input placeholder="y" inputType="y" />
        <Input placeholder="width" inputType="w" />
        <Input placeholder="height" inputType="h" />
        <span></span>
      </div>
    </div>
  );
};

export default styled(ToolsContainer)`
  margin-left: 1rem;
  border: 1px solid #e9e9e9;
  width: 20rem;
  height: 752px;
  padding: 1rem;
  .inputs-container {
    display: grid;
    grid-gap: 0.5rem;
    grid-template-columns: repeat(2, 1fr);
  }
`;
