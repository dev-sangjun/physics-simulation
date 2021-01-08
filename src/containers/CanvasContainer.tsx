import React, { useLayoutEffect, useState } from "react";
import { CanvasStore, Rectangle, Circle } from "../classes";
import Canvas from "../components/Canvas";
import styled from "styled-components";

type CanvasContainerProps = {
  className?: string;
};

const CanvasContainer = ({ className }: CanvasContainerProps) => {
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
  useLayoutEffect(() => {
    const updateWidth = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", updateWidth);
    updateWidth();
  }, []);
  return (
    <div className={className}>
      <Canvas width={width} />
      <button onClick={onClick}>Draw</button>
    </div>
  );
};

export default styled(CanvasContainer)`
  margin-top: 5rem;
`;
