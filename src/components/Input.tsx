import React, { useState } from "react";
import styled from "styled-components";
import { ParamType } from "../classes/utils/types";
import { v4 as uuidv4 } from "uuid";

type InputProps = {
  className?: string;
  paramType: ParamType;
  onChange: (paramType: ParamType, value: number) => void;
};

const Input: React.FC<InputProps> = ({ className, paramType, onChange }) => {
  const id = `input-${uuidv4()}`;
  const [val, setVal] = useState("0");
  return (
    <div className={className}>
      <div className="input-container">
        <input
          id={id}
          type="number"
          step={0.1}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            if (!isNaN(parseFloat(e.target.value))) {
              onChange(paramType, parseFloat(e.target.value));
            }
            setVal(e.target.value);
          }}
          value={val}
          required
        />
        <label htmlFor={id}>{paramType}</label>
      </div>
    </div>
  );
};

export default styled(Input)`
  position: relative;
  input {
    width: 100%;
    padding: 0.5rem 2rem 0.5rem 0.5rem;
    border-radius: 6px;
    border: 1px solid #2d3436;
  }
  label {
    position: absolute;
    top: 50%;
    right: 0.5rem;
    transform: translateY(-50%);
    font-family: sans-serif;
    text-align: center;
    width: 1.5rem;
  }
`;
