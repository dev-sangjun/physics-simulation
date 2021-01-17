import React from "react";
import styled from "styled-components";
import getUniqueId from "../utils/getUniqueId";

type InputType =
  | "x"
  | "y"
  | "w"
  | "h"
  | "r"
  | "mass"
  | "friction"
  | "spring"
  | "moment of inertia";

type InputProps = {
  className?: string;
  placeholder?: string;
  inputType: InputType;
};

const Input: React.FC<InputProps> = ({ className, placeholder, inputType }) => {
  const id = getUniqueId("input");
  const getLabel = () => {
    switch (inputType) {
      case "w":
      case "h":
      case "r":
        return "m";
      case "mass":
        return "kg";
      default:
        return "";
    }
  };
  return (
    <div className={className}>
      <input id={id} placeholder={placeholder}></input>
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
