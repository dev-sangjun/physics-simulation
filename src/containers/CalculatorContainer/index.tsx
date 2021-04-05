import React, { useState } from "react";
import styled from "styled-components";
import Calculator, { CalculatorType } from "./Calculator";
import { Link } from "react-router-dom";

type CalculatorContainerProps = {
  className?: string;
};

const buttons: { type: CalculatorType }[] = [
  {
    type: "Position",
  },
  {
    type: "Velocity",
  },
  {
    type: "Free Fall",
  },
  {
    type: "Kinetic Energy",
  },
  {
    type: "Potential Energy",
  },
];

const Button = styled.button`
  width: 10rem;
  height: 2rem;
  margin-right: 1rem;
  &:last-child {
    margin-right: 0;
  }
`;

const GoBack = styled.div`
  position: absolute;
  top: 2rem;
  left: 2rem;
`;

const CalculatorContainer: React.FC<CalculatorContainerProps> = ({
  className,
}) => {
  const [calculatorType, setCalculatorType] = useState<CalculatorType>(
    "Position"
  );
  return (
    <div className={className}>
      <div className="button-container">
        {buttons.map((button, index) => (
          <Button key={index} onClick={() => setCalculatorType(button.type)}>
            {button.type as string}
          </Button>
        ))}
      </div>
      <Calculator calculatorType={calculatorType} />
      <GoBack>
        <Link to="/">Go Back</Link>
      </GoBack>
    </div>
  );
};

export default styled(CalculatorContainer)`
  width: 100%;
  .button-container {
    margin: auto;
    margin-top: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
  }
`;
