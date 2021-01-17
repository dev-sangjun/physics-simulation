import React, { useLayoutEffect, useRef, useState } from "react";
import { CanvasStore, Rectangle, Circle } from "../classes";
import { Canvas } from "../components";
import styled from "styled-components";

type CanvasContainerProps = {
  className?: string;
};

const CanvasContainer: React.FC<CanvasContainerProps> = ({ className }) => {
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const onClick = () => {
    const ctx = CanvasStore.getInstance().ctx;
    if (ctx) {
      CanvasStore.getInstance().addBody(
        new Rectangle(ctx, {
          x: 50,
          y: 50,
          w: 100,
          h: 100,
          v: { x: 0, y: 0 },
          a: { x: 0, y: 0 },
        })
      );
      CanvasStore.getInstance().addBody(
        new Circle(ctx, {
          o: {
            x: 300,
            y: 60,
          },
          r: 50,
          v: { x: 0, y: 0 },
          a: { x: 0, y: 0 },
        })
      );
    }
  };
  const onDrawGrid = () => {
    const ctx = CanvasStore.getInstance().ctx;
    if (ctx) {
      CanvasStore.getInstance().addAxes();
    }
  };
  useLayoutEffect(() => {
    const updateWidth = () => {
      if (!canvasContainerRef || !canvasContainerRef.current) return;
      const canvasContainerWidth = canvasContainerRef.current.offsetWidth;
      setWidth(canvasContainerWidth);
    };
    window.addEventListener("resize", updateWidth);
    updateWidth();
  }, []);
  return (
    <div id="canvas-container" className={className} ref={canvasContainerRef}>
      <Canvas width={width} />
      <button onClick={onClick}>Draw</button>
      <button onClick={onDrawGrid}>Grid</button>
    </div>
  );
};

export default styled(CanvasContainer)`
  width: 100%;
  overflow: hidden;
`;
