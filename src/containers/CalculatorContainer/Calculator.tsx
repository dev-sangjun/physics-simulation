import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Input from "./Input";
import {
  calcFreeFallTime,
  calcFreeFallVelocity,
  calcPosition,
  calcVelocity,
  calcKE,
  calcPE,
} from "./functions";
import { Vector } from "../../classes/utils/types";

type CalculatorProps = {
  className?: string;
  calculatorType: CalculatorType;
};

export type CalculatorType =
  | "Position"
  | "Velocity"
  | "Free Fall"
  | "Kinetic Energy"
  | "Potential Energy";

export type InputType = "x" | "y" | "m" | "v_x" | "v_y" | "a_x" | "a_y" | "t";

const inputsInitialState = {
  x: 0,
  y: 0,
  m: 0,
  v_x: 0,
  v_y: 0,
  a_x: 0,
  a_y: 0,
  t: 0,
};

const Title = styled.h3`
  text-align: center;
  margin-bottom: 1rem;
`;

const CalculateButton = styled.button`
  width: 8rem;
  height: 2rem;
  margin: auto;
  margin-bottom: 1rem;
`;

const Result = styled.span`
  font-size: 1.2em;
`;

const Calculator: React.FC<CalculatorProps> = ({
  className,
  calculatorType,
}) => {
  const [inputParams, setInputParams] = useState<Record<InputType, number>>(
    inputsInitialState
  );

  const [result, setResult] = useState<null | string>(null);

  const onChange = (inputType: InputType, value: number) => {
    setInputParams({
      ...inputParams,
      [inputType]: value,
    });
  };

  const getInput = (inputType: InputType, key: number) => {
    return <Input key={key} inputType={inputType} onChange={onChange} />;
  };

  const calculatorData: Record<CalculatorType, InputType[]> = {
    Position: ["x", "y", "v_x", "v_y", "a_x", "a_y", "t"],
    Velocity: ["v_x", "v_y", "a_x", "a_y", "t"],
    "Free Fall": ["y"],
    "Kinetic Energy": ["m", "v_x", "v_y"],
    "Potential Energy": ["y", "m"],
  };

  const onClick = () => {
    const { x, y, m, v_x, v_y, a_x, a_y, t } = inputParams;
    const p = { x, y };
    const v = { x: v_x, y: v_y };
    const a = { x: a_x, y: a_y };
    switch (calculatorType) {
      case "Position":
        setResult(
          `x: ${calcPosition(p, v, a, t).x}, y: ${
            calcPosition(p, v, a, t).y
          } (m)`
        );
        break;
      case "Velocity":
        setResult(
          `x: ${calcVelocity(v, a, t).x}, y: ${calcVelocity(v, a, t).y} (m/s)`
        );
        break;
      case "Free Fall":
        const time = calcFreeFallTime(y);
        const v_final = calcFreeFallVelocity(y);
        setResult(`${time.toFixed(3)} (s),   ${v_final.toFixed(3)} (m/s)`);
        break;
      case "Kinetic Energy":
        setResult(`${calcKE(m, v_x, v_y).toFixed(3)} (J)`);
        break;
      case "Potential Energy":
        setResult(`${calcPE(y, m).toFixed(3)} (J)`);
        break;
      default:
        break;
    }
  };

  const getResult = () => {
    if (!result) return "";
    if (typeof result === "number" || typeof result === "string") {
      return result;
    } else {
      const vector = result as Vector;
      return `x: ${vector.x} y: ${vector.y}`;
    }
  };

  useEffect(() => {
    setInputParams(inputsInitialState);
    setResult(null);
  }, [calculatorType]);
  return (
    <div className={className}>
      <Title>{calculatorType as string}</Title>
      <div className="inputs">
        {calculatorData[calculatorType].map((inputType, index) =>
          getInput(inputType, index)
        )}
      </div>
      <CalculateButton onClick={onClick}>Calculate</CalculateButton>
      {result && (
        <Result>
          <strong>Result: </strong>
          {getResult()}
        </Result>
      )}
    </div>
  );
};

export default styled(Calculator)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
  .inputs {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%;
    min-width: 30rem;
    margin-bottom: 1rem;
  }
`;
