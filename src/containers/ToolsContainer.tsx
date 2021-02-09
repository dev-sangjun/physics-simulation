import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CanvasStore from "../classes/CanvasStore";
import { Input, BodyButton } from "../components";
import { BodyType, ParamType, Point, Vector } from "../classes/utils/types";
import { Rectangle, Circle } from "../classes/bodies";

type ToolsContainerProps = {
  className?: string;
};

const ToolsContainer: React.FC<ToolsContainerProps> = ({ className }) => {
  const [curBodyType, setCurBodyType] = useState<BodyType>("rectangle");
  const [animating, setAnimating] = useState(false);
  const inputsInitialState = {
    x: 0,
    y: 0,
    o: {
      x: 0,
      y: 0,
    },
    w: 0,
    h: 0,
    r: 0,
    m: 0,
    v_x: 0,
    v_y: 0,
    a_x: 0,
    a_y: 0,
  };
  const [inputs, setInputs] = useState<
    Record<ParamType, number | Point | Vector>
  >(inputsInitialState);
  const bodyTypes: BodyType[] = [
    "rectangle",
    "circle",
    "slope",
    "line",
    "spring",
    "ground",
  ];
  const coordinates: Record<BodyType, ParamType[]> = {
    rectangle: ["x", "y", "w", "h"],
    circle: ["x", "y", "r"],
    slope: [],
    line: [],
    spring: [],
    ground: [],
  };
  const constants: Record<BodyType, ParamType[]> = {
    rectangle: ["m"],
    circle: ["m"],
    slope: [],
    line: [],
    spring: [],
    ground: [],
  };
  const vectors: Record<BodyType, ParamType[]> = {
    rectangle: ["v_x", "v_y", "a_x", "a_y"],
    circle: ["v_x", "v_y", "a_x", "a_y"],
    slope: [],
    line: [],
    spring: [],
    ground: [],
  };
  const onClick = (bodyType: BodyType) => {
    setCurBodyType(bodyType);
  };
  const onChange = (paramType: ParamType, value: number) => {
    setInputs((inputs: Record<ParamType, number | Point | Vector>) => ({
      ...inputs,
      [paramType]: value,
    }));
  };
  const testDraw = () => {
    const ctx = CanvasStore.ctx;
    if (ctx) {
      for (let i = 0; i < 25; i += 2) {
        CanvasStore.addBody(
          new Rectangle(ctx, {
            x: i,
            y: i,
            w: 1,
            h: 1,
            m: 0,
            o: {
              x: 0,
              y: 0,
            },
            r: 0,
            v_x: 0,
            v_y: 0,
            a_x: 0,
            a_y: 0,
          })
        );
      }
    }
  };
  const onDraw = () => {
    const ctx = CanvasStore.ctx;
    if (ctx) {
      switch (curBodyType) {
        case "rectangle":
          CanvasStore.addBody(new Rectangle(ctx, inputs));
          break;
        case "circle":
          CanvasStore.addBody(new Circle(ctx, inputs));
          break;
        default:
          break;
      }
    }
  };
  const onAnimate = () => {
    CanvasStore.animateAll();
    setAnimating(true);
    // setActive(true);
  };
  const onEraseAll = () => {
    CanvasStore.eraseAll();
  };
  const onReset = () => {
    CanvasStore.reset();
    setAnimating(false);
  };
  useEffect(() => {}, []);
  return (
    <div className={className}>
      <div className="buttons-container">
        {bodyTypes.map((bodyType: BodyType, index: number) => (
          <BodyButton
            key={index}
            bodyType={bodyType}
            onClick={onClick}
            selected={curBodyType === bodyType ? true : false}
          />
        ))}
      </div>
      <div className="coordinates-container">
        <h3 className="container-header">Coordinates</h3>
        <div className="inputs-container">
          {coordinates[curBodyType] &&
            coordinates[curBodyType].map((param: ParamType, index: number) => (
              <Input
                key={index}
                bodyType={curBodyType}
                paramType={param}
                onChange={onChange}
                value={inputs[param] as number}
              />
            ))}
        </div>
      </div>
      <div className="constants-container">
        <h3 className="container-header">Constants</h3>
        <div className="inputs-container">
          {constants[curBodyType] &&
            constants[curBodyType].map((param: ParamType, index: number) => (
              <Input
                key={index}
                bodyType={curBodyType}
                paramType={param}
                onChange={onChange}
                value={inputs[param] as number}
              />
            ))}
        </div>
      </div>
      <div className="vectors-container">
        <h3 className="container-header">Vectors</h3>
        <div className="inputs-container">
          {vectors[curBodyType] &&
            vectors[curBodyType].map((param: ParamType, index: number) => (
              <Input
                key={index}
                bodyType={curBodyType}
                paramType={param}
                onChange={onChange}
                value={inputs[param] as number}
              />
            ))}
        </div>
      </div>
      <div className="actions-container">
        <button className="actions-btn" onClick={onDraw}>
          Draw
        </button>
        <button className="actions-btn" onClick={onEraseAll}>
          Erase All
        </button>
        <button
          className="actions-btn"
          onClick={animating ? onReset : onAnimate}
        >
          {animating ? "Reset" : "Animate"}
        </button>
      </div>
    </div>
  );
};

export default styled(ToolsContainer)`
  margin-left: 1rem;
  border: 1px solid #e9e9e9;
  width: 20rem;
  height: 752px;
  padding: 1rem;
  .buttons-container {
    display: grid;
    grid-gap: 0.5rem;
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 1rem;
  }
  .container-header {
    margin-bottom: 0.5rem;
  }
  .inputs-container {
    display: grid;
    grid-gap: 0.5rem;
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 1rem;
  }
  .actions-container {
    display: grid;
    grid-gap: 0.5rem;
    grid-template-columns: repeat(2, 1fr);
    button {
      padding: 0.25rem;
    }
    button:last-child {
      grid-column: 1 / 3;
    }
  }
`;
