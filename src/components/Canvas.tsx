import React from "react";

type CanvasProps = {
  width: number;
  height?: number;
};

const Canvas: React.FC<CanvasProps> = ({ width, height = 640 }) => {
  return (
    <canvas
      width={width}
      height={height}
      style={{ backgroundColor: "black" }}
    />
  );
};

export default Canvas;
