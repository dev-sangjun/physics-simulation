import React, { useLayoutEffect, useRef } from "react";
import { CanvasStore, Rectangle, Circle } from "../classes";

type CanvasProps = {
  width: number;
  height?: number;
};

const Canvas: React.FC<CanvasProps> = ({ width, height = 750 }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useLayoutEffect(() => {
    if (!canvasRef || !canvasRef.current) return;
    CanvasStore.getInstance().setCanvas(canvasRef.current);
    const ctx = canvasRef.current.getContext("2d");
    if (ctx) CanvasStore.getInstance().setContext(ctx);
    CanvasStore.getInstance().addAxes();
  }, [canvasRef]);
  return (
    <canvas
      width={width}
      height={height}
      style={{ backgroundColor: "white" }}
      ref={canvasRef}
    />
  );
};

export default Canvas;
