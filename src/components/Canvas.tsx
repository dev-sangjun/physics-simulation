import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import { CanvasStore } from "../classes";

type CanvasProps = {
  className?: string;
};
const Canvas: React.FC<CanvasProps> = ({ className }) => {
  const axesCanvasRef = useRef<HTMLCanvasElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const width = 750;
  const height = 750;
  const origin = { x: 10, y: 20 };
  const gridSize = 25;
  useLayoutEffect(() => {
    if (
      canvasRef &&
      canvasRef.current &&
      axesCanvasRef &&
      axesCanvasRef.current
    ) {
      CanvasStore.initCanvas(
        canvasRef.current,
        axesCanvasRef.current,
        origin,
        gridSize
      );
    }
  }, [axesCanvasRef, canvasRef]);
  return (
    <div className={className}>
      <canvas
        className="body-canvas"
        width={width}
        height={height}
        ref={canvasRef}
      />
      <canvas
        className="axes-canvas"
        width={width}
        height={height}
        style={{
          border: "1px solid black",
        }}
        ref={axesCanvasRef}
      />
    </div>
  );
};

export default styled(Canvas)`
  position: relative;
  width: calc(752px + 4rem);
  height: calc(752px + 4rem);
  background-color: white;
  padding: 2rem;
  border-radius: 12px;

  canvas {
    position: absolute;
  }
`;
