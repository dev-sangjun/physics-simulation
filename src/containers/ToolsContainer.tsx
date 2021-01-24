import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Input, BodyButton } from "../components";
import { BodyType, ParamsType } from "../classes/Body";

type ToolsContainerProps = {
  className?: string;
};

const ToolsContainer: React.FC<ToolsContainerProps> = ({ className }) => {
  const [bodyType, setBodyType] = useState<BodyType>("rectangle");
  const bodyTypes: BodyType[] = [
    "rectangle",
    "circle",
    "slope",
    "line",
    "spring",
    "ground",
  ];
  const params: Record<BodyType, ParamsType[]> = {
    rectangle: ["x", "y", "w", "h", "m", "v", "a"],
    circle: ["x", "y", "w", "h", "m", "v", "a"],
    slope: [],
    line: [],
    spring: [],
    ground: [],
  };
  const onClick = (bodyType: BodyType) => {
    setBodyType(bodyType);
  };
  useEffect(() => {}, []);
  return (
    <div className={className}>
      <div className="buttons-container">
        {bodyTypes.map((bodyType: BodyType, index: number) => (
          <BodyButton key={index} bodyType={bodyType} onClick={onClick} />
        ))}
      </div>
      <div className="inputs-container">
        {params[bodyType] &&
          params[bodyType].map((param: ParamsType, index: number) => (
            <Input key={index} bodyType={bodyType} inputType={param} />
          ))}
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
  .buttons-container {
    display: grid;
    grid-gap: 0.5rem;
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 1rem;
  }
  .inputs-container {
    display: grid;
    grid-gap: 0.5rem;
    grid-template-columns: repeat(2, 1fr);
  }
`;
