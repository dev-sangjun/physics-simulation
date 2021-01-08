import React, { useLayoutEffect, useState } from "react";
import Canvas from "../components/Canvas";
import styled from "styled-components";

type CanvasContainerProps = {
  className?: string;
};

const CanvasContainer = ({ className }: CanvasContainerProps) => {
  const [width, setWidth] = useState(0);
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
    </div>
  );
};

export default styled(CanvasContainer)`
  margin-top: 5rem;
`;
