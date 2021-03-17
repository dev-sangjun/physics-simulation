import React from "react";
import styled from "styled-components";

type CalculatorContainerProps = {
  className?: string;
};

const CalculatorContainer: React.FC<CalculatorContainerProps> = ({
  className,
}) => {
  return (
    <div className={className}>
      <div className="button-container">
        <button>Position</button>
        <button>Velocity</button>
        <button>Free Fall</button>
        <button>Time</button>
        <button>Kinetic Energy</button>
        <button>Potential Energy</button>
      </div>
    </div>
  );
};

export default styled(CalculatorContainer)`
  width: 100%;
  border: 1px solid black;
  .button-container {
    margin: auto;
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    button {
      margin-right: 1rem;
      &:last-child {
        margin-right: 0;
      }
    }
  }
`;
