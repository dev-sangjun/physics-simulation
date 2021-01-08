import React, { useLayoutEffect, useRef } from "react";
import { CanvasStore, Rectangle, Circle } from "../classes";

type CanvasProps = {
  width: number;
  height?: number;
};

const Canvas: React.FC<CanvasProps> = ({ width, height = 720 }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useLayoutEffect(() => {
    if (!canvasRef || !canvasRef.current) return;
    const ctx = canvasRef.current.getContext("2d");
    if (ctx) CanvasStore.getInstance().setContext(ctx);
  }, []);
  return (
    <canvas
      width={width}
      height={height}
      style={{ backgroundColor: "black" }}
      ref={canvasRef}
    />
  );
};

export default Canvas;
