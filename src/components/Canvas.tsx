import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import { CanvasStore, Rectangle, Circle } from "../classes";

type CanvasProps = {
  className?: string;
  width: number;
  height: number;
  origin: {
    x: number;
    y: number;
  };
  gridSize: number;
};

const Canvas: React.FC<CanvasProps> = ({
  className,
  width,
  height = 750,
  origin = { x: 0, y: 0 },
  gridSize = 25,
}) => {
  const axesCanvasRef = useRef<HTMLCanvasElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useLayoutEffect(() => {
    if (
      !axesCanvasRef ||
      !axesCanvasRef.current ||
      !canvasRef ||
      !canvasRef.current
    )
      return;
    CanvasStore.setCanvas(canvasRef.current, axesCanvasRef.current);
    const ctx = canvasRef.current.getContext("2d");
    const axesCtx = axesCanvasRef.current.getContext("2d");
    if (axesCtx && ctx) {
      CanvasStore.setContext(ctx, axesCtx);
      CanvasStore.addAxes(origin, gridSize);
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
  canvas {
    position: absolute;
  }
`;
