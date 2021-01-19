import React, { useEffect, useState } from "react";
import { act } from "react-dom/test-utils";
import styled from "styled-components";
import { CanvasStore, Rectangle, Circle } from "../classes";
import CanvasContainer from "./CanvasContainer";
import ToolsContainer from "./ToolsContainer";

type BodyContainerProps = {
  className?: string;
};

const BodyContainer: React.FC<BodyContainerProps> = ({ className }) => {
  const [time, setTime] = useState(0);
  const [active, setActive] = useState(false);
  const onClick = () => {
    const ctx = CanvasStore.ctx;
    if (ctx) {
      CanvasStore.addBody(
        new Rectangle(ctx, {
          x: 0,
          y: 20,
          w: 2,
          h: 2,
          m: 1,
          v: { x: 0, y: 0 },
          a: { x: 0, y: 0 },
        })
      );
      // CanvasStore.addBody(
      //   new Circle(ctx, {
      //     o: {
      //       x: 0,
      //       y: 0,
      //     },
      //     r: 5,
      //     v: { x: 0, y: 0 },
      //     a: { x: 0, y: 0 },
      //   })
      // );
    }
  };
  const onAnimate = () => {
    CanvasStore.animate();
    // setActive(true);
  };
  const onReset = () => {
    CanvasStore.reset();
    // setActive(false);
    // setTime(0);
  };
  return (
    <div className={className}>
      <div className="top-container">
        <CanvasContainer />
        <ToolsContainer />
      </div>
      <div className="btm-container">
        <button onClick={onClick}>Draw</button>
        <button onClick={onAnimate}>Animate</button>
        <button onClick={onReset}>Reset</button>
      </div>
      {/* <span className="timeer">{time}s</span> */}
    </div>
  );
};

export default styled(BodyContainer)`
  display: flex;
  flex-direction: column;
  min-width: 1200px;
  padding: 2rem;
  .top-container {
    display: flex;
    justify-content: center;
  }
`;
