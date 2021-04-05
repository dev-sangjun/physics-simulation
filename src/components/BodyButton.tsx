import React from "react";
import styled from "styled-components";
import { BodyType } from "../classes/utils/types";

type BodyButtonProps = {
  className?: string;
  bodyType: BodyType;
  onClick: (bodyType: BodyType) => void;
  selected: boolean;
};

const BodyButton: React.FC<BodyButtonProps> = ({
  className,
  bodyType,
  onClick,
}) => {
  return (
    <button
      className={className}
      onClick={() => {
        onClick(bodyType);
      }}
    >
      {bodyType}
    </button>
  );
};

export default styled(BodyButton)`
  padding: 0.25rem;
  border: 1px solid ${props => (props.selected ? "red" : "black")};
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: #e5e5e5;
  }
`;
