import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { IBody } from "../classes/bodies";
import { setBody } from "../modules/body";

type KeyButtonProps = {
  className?: string;
  color: string;
  body: IBody;
};

const KeyButton: React.FC<KeyButtonProps> = ({ className, color, body }) => {
  const dispatch = useDispatch();
  const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    dispatch(setBody(body));
  };
  return (
    <button
      className={className}
      style={{ backgroundColor: color }}
      onClick={onClick}
    />
  );
};

export default styled(KeyButton)`
  padding: 0.25rem;
  border: 1px solid gray;
  border-radius: 0.25rem;
  &:hover {
    cursor: pointer;
  }
`;
