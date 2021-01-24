import React from "react";
import styled from "styled-components";
import { BodyType, ParamsType } from "../classes/Body";
import getUniqueId from "../utils/getUniqueId";

type InputProps = {
  className?: string;
  placeholder?: string;
  bodyType: BodyType;
  inputType: ParamsType;
};

const Input: React.FC<InputProps> = ({ className, placeholder, bodyType, inputType }) => {
  const id = getUniqueId("input");
  const getPlaceholder = () => {
    switch (inputType) {
      case "x":
      case "y":
        return bodyType == "circle" ? `${inputType} of origin` : inputType;
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
    switch (inputType) {
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
      <input id={id} placeholder={getPlaceholder()}></input>
      <label htmlFor={id}>{getLabel()}</label>
    </div>
  );
};

export default styled(Input)`
  position: relative;
  display: flex;
  input {
    width: 100%;
    padding: 0 1.5rem 0 0.5rem;
  }
  label {
    position: absolute;
    top: 50%;
    right: 0.5rem;
    transform: translateY(-50%);
    font-family: sans-serif;
  }
`;
