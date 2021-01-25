import React from "react";
import styled from "styled-components";
import { BodyType, ParamType, Point, Vector } from "../classes/Body";
import getUniqueId from "../utils/getUniqueId";

type InputProps = {
  className?: string;
  bodyType: BodyType;
  paramType: ParamType;
  onChange: (paramType: ParamType, value: number) => void;
  value: number;
};

const Input: React.FC<InputProps> = ({
  className,
  bodyType,
  paramType,
  onChange,
  value,
}) => {
  const id = getUniqueId("input");
  const getPlaceholder = () => {
    switch (paramType) {
      case "x":
      case "y":
        return bodyType == "circle" ? `${paramType} of origin` : paramType;
      case "w":
        return "width";
      case "h":
        return "height";
      case "r":
        return "radius";
      case "m":
        return "mass";
      default:
        return "";
    }
  };
  const getLabel = () => {
    switch (paramType) {
      case "w":
      case "h":
      case "r":
        return "m";
      case "m":
        return "kg";
      default:
        return "--";
    }
  };
  return (
    <div className={className}>
      <input
        id={id}
        type="number"
        placeholder={getPlaceholder()}
        step={0.1}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          onChange(paramType, parseFloat(e.target.value));
        }}
        value={value}
        required
      />
      <label htmlFor={id}>{getLabel()}</label>
    </div>
  );
};

export default styled(Input)`
  position: relative;
  display: flex;
  input {
    width: 100%;
    padding: 0.25rem 1.5rem 0.25rem 0.5rem;
  }
  label {
    position: absolute;
    top: 50%;
    right: 0.5rem;
    transform: translateY(-50%);
    font-family: sans-serif;
  }
`;
