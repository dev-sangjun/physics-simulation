import React, { useRef, useState } from "react";
import { CanvasStore, Rectangle, Circle } from "../classes";
import { Canvas } from "../components";
import styled from "styled-components";

type CanvasContainerProps = {
  className?: string;
};

const CanvasContainer: React.FC<CanvasContainerProps> = ({ className }) => {
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const canvasProps = {
    width: 750,
    height: 750,
    origin: {
      x: 5,
      y: 25,
    },
    gridSize: 25,
  };

  return (
    <div id="canvas-container" className={className} ref={canvasContainerRef}>
      <Canvas {...canvasProps} />
    </div>
  );
};

export default styled(CanvasContainer)`
  width: 752px;
  height: 752px;
  overflow: hidden;
  .btn-container {
  }
`;
