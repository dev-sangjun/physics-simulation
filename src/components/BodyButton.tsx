import React from "react";
import { BodyType } from "../classes/Body";

type BodyButtonProps = {
  className?: string;
  bodyType: BodyType;
  onClick: (bodyType: BodyType) => void;
};

const BodyButton: React.FC<BodyButtonProps> = ({ bodyType, onClick }) => {
  return (
    <button
      onClick={() => {
        onClick(bodyType);
      }}
    >
      {bodyType}
    </button>
  );
};

export default BodyButton;
