import React, { useState } from "react";
import styled from "styled-components";
import { InputType } from "./Calculator";
import { v4 as uuidv4 } from "uuid";

type InputProps = {
  className?: string;
  inputType: InputType;
  onChange: (inputType: InputType, value: number) => void;
  value: number;
};

const getUnit = (inputType: InputType) => {
  switch (inputType) {
    case "x":
    case "y":
      return "m";
    case "m":
      return "kg";
    case "v_x":
    case "v_y":
      return "m/s";
    case "a_x":
    case "a_y":
      return "m/s^2";
    case "t":
      return "s";
    default:
      return "";
  }
};

const Unit = styled.label`
  width: 3rem;
  margin-left: 1rem;
  text-align: left;
`;

const Input: React.FC<InputProps> = ({
  className,
  inputType,
  onChange,
  value,
}) => {
  const id = `input-${uuidv4()}`;

  return (
    <div className={className}>
      <div className={className}>
        <div className="input-container">
          <label className="input-type" htmlFor={id}>
            {inputType}
          </label>
          <input
            id={id}
            type="number"
            step={0.1}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              onChange(inputType, parseFloat(e.target.value));
            }}
            value={value}
            required
          />
          <Unit htmlFor={id}>{getUnit(inputType)}</Unit>
        </div>
      </div>
    </div>
  );
};

export default styled(Input)`
  width: 100%;
  height: 2rem;
  .input-container {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    input {
      width: 100%;
      height: 100%;
      padding: 0.25rem 2rem 0.25rem 0.5rem;
    }
    .input-type {
      font-family: sans-serif;
      text-align: center;
      width: 1.5rem;
      margin-right: 1rem;
    }
  }
  margin-bottom: 1rem;
  &:last-child {
    margin-bottom: 0;
  }
`;
