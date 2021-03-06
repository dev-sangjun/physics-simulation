import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import CanvasStore from "../classes/CanvasStore";
import { Input, BodyButton, KeyButton } from "../components";
import { BodyType, ParamType, Point, Vector } from "../classes/utils/types";
import { IBody, Rectangle, Circle } from "../classes/bodies";
import { colors } from "../utils/colors";
import { removeBody } from "../modules/body";

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
  const [bodies, setBodies] = useState<IBody[]>([]);
  const [applyGround, setApplyGround] = useState(true);
  const [applyGravity, setApplyGravity] = useState(true);
  const dispatch = useDispatch();
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
  // const testDraw = () => {
  //   const ctx = CanvasStore.ctx;
  //   if (ctx) {
  //     for (let i = 0; i < 25; i += 2) {
  //       CanvasStore.addBody(
  //         new Rectangle(ctx, {
  //           x: i,
  //           y: i,
  //           w: 1,
  //           h: 1,
  //           m: 0,
  //           o: {
  //             x: 0,
  //             y: 0,
  //           },
  //           r: 0,
  //           v_x: 0,
  //           v_y: 0,
  //           a_x: 0,
  //           a_y: 0,
  //         })
  //       );
  //     }
  //   }
  // };
  const onDraw = () => {
    const ctx = CanvasStore.ctx;
    if (ctx) {
      const color = colors[CanvasStore.id];
      switch (curBodyType) {
        case "rectangle":
          const rect = new Rectangle(ctx, inputs, color);
          CanvasStore.addBody(rect);
          setBodies([...bodies, rect]);
          break;
        case "circle":
          const circle = new Circle(ctx, inputs, color);
          CanvasStore.addBody(circle);
          setBodies([...bodies, circle]);
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
    dispatch(removeBody());
  };
  const onReset = () => {
    CanvasStore.reset();
    setAnimating(false);
  };
  const onGround = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    const checkbox = e.target as HTMLInputElement;
    setApplyGround(checkbox.checked);
    CanvasStore.setGround(checkbox.checked);
  };
  const onGravity = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    const checkbox = e.target as HTMLInputElement;
    setApplyGravity(checkbox.checked);
    CanvasStore.setGravity(checkbox.checked);
  };
  useEffect(() => {}, []);
  return (
    <div className={className}>
      <div className="buttons-container grid">
        {bodyTypes.map((bodyType: BodyType, index: number) => (
          <BodyButton
            key={index}
            bodyType={bodyType}
            onClick={onClick}
            selected={curBodyType === bodyType ? true : false}
          />
        ))}
      </div>
      <div>
        <h3 className="container-header">Coordinates</h3>
        <div className="inputs-container grid">
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
      <div>
        <h3 className="container-header">Constants</h3>
        <div className="inputs-container grid">
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
      <div>
        <h3 className="container-header">Vectors</h3>
        <div className="inputs-container grid">
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
      <div className="actions-container grid">
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
      <form className="settings-container">
        <div className="checkbox-container">
          <label htmlFor="ground">Enable Ground?</label>
          <input
            type="checkbox"
            id="ground"
            className="checkbox"
            checked={applyGround}
            onChange={() => {}}
            onClick={onGround}
          />
        </div>
        <div className="checkbox-container">
          <label htmlFor="gravity">Enable Gravity?</label>
          <input
            type="checkbox"
            id="gravity"
            className="checkbox"
            checked={applyGravity}
            onChange={() => {}}
            onClick={onGravity}
          />
        </div>
      </form>
      <div className="keys-container">
        <h3 className="container-header">Plot</h3>
        <h4>Select the color to plot the graph</h4>
        <div className="key-buttons">
          {bodies.map(body => (
            <KeyButton body={body} color={body.color} key={body.id} />
          ))}
        </div>
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
  .grid {
    display: grid;
    grid-gap: 0.5rem;
    grid-template-columns: repeat(2, 1fr);
  }
  .buttons-container {
    margin-bottom: 1rem;
  }
  .container-header {
    margin-bottom: 0.5rem;
  }
  .inputs-container {
    margin-bottom: 1rem;
  }
  .actions-container {
    margin-bottom: 1rem;
    button {
      padding: 0.25rem;
    }
    button:last-child {
      grid-column: 1 / 3;
    }
  }
  .settings-container {
    .checkbox-container {
      display: flex;
      align-items: center;
      label {
        font-weight: bold;
        margin-right: 1rem;
      }
    }
    margin-bottom: 1rem;
  }
  .keys-container {
    h4 {
      font-weight: normal;
      margin-bottom: 0.5rem;
    }
    .key-buttons {
      display: grid;
      grid-gap: 0.5rem;
      grid-template-columns: repeat(8, 1fr);
      grid-auto-rows: 1rem;
    }
  }
`;
