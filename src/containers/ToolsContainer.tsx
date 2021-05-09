import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import CanvasStore from "../classes/CanvasStore";
import { Input, KeyButton } from "../components";
import { ParamType, Point, Vector } from "../classes/utils/types";
import { IBody, Rectangle } from "../classes/bodies";
import { colors } from "../utils/colors";
import { removeBody } from "../modules/body";

type ToolsContainerProps = {
  className?: string;
};

const inputsInitialState = {
  x: 0,
  y: 0,
  w: 0,
  h: 0,
  m: 0,
  v_x: 0,
  v_y: 0,
  a_x: 0,
  a_y: 0,
};

const ToolsContainer: React.FC<ToolsContainerProps> = ({ className }) => {
  const [animating, setAnimating] = useState(false);
  const [inputs, setInputs] = useState<Record<ParamType, number>>(
    inputsInitialState
  );
  const [bodies, setBodies] = useState<IBody[]>([]);
  // const [applyGround, setApplyGround] = useState(true);
  // const [applyGravity, setApplyGravity] = useState(true);
  const dispatch = useDispatch();
  const coordinates: ParamType[] = ["x", "y", "w", "h"];
  const constants: ParamType[] = ["m"];
  const vectors: ParamType[] = ["v_x", "v_y", "a_x"];

  const onChange = (paramType: ParamType, value: number) => {
    setInputs((inputs: Record<ParamType, number>) => ({
      ...inputs,
      [paramType]: value,
    }));
  };
  const onDraw = () => {
    const ctx = CanvasStore.ctx;

    if (ctx) {
      const color = colors[CanvasStore.id];
      const rect = new Rectangle(ctx, inputs, color);
      CanvasStore.addBody(rect);
      setBodies([...bodies, rect]);
    }
  };
  const onAnimate = () => {
    CanvasStore.animateAll();
    setAnimating(true);
  };
  const onEraseAll = () => {
    CanvasStore.eraseAll();
    dispatch(removeBody());
    setBodies([]);
  };
  const onReset = () => {
    CanvasStore.reset();
    setAnimating(false);
  };
  // const onGround = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
  //   const checkbox = e.target as HTMLInputElement;
  //   setApplyGround(checkbox.checked);
  //   CanvasStore.setGround(checkbox.checked);
  // };
  // const onGravity = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
  //   const checkbox = e.target as HTMLInputElement;
  //   setApplyGravity(checkbox.checked);
  //   CanvasStore.setGravity(checkbox.checked);
  // };
  useEffect(() => {}, []);
  return (
    <div className={className}>
      <div>
        <h3 className="container-header">Coordinates</h3>
        <div className="inputs-container grid">
          {coordinates.map((paramType: ParamType, index: number) => (
            <Input paramType={paramType} onChange={onChange} key={index} />
          ))}
        </div>
      </div>
      <div>
        <h3 className="container-header">Constants</h3>
        <div className="inputs-container grid">
          {constants.map((paramType: ParamType, index: number) => (
            <Input paramType={paramType} onChange={onChange} key={index} />
          ))}
        </div>
      </div>
      <div>
        <h3 className="container-header">Vectors</h3>
        <div className="inputs-container grid">
          {vectors.map((paramType: ParamType, index: number) => (
            <Input paramType={paramType} onChange={onChange} key={index} />
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
      {/* <form className="settings-container">
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
      </form> */}
      <div className="keys-container">
        <h3 className="container-header">Plot</h3>
        <h4>Select the color to plot the graph</h4>
        <div className="key-buttons">
          {bodies.map(body => (
            <KeyButton body={body} color={body.color} key={body.id} />
          ))}
        </div>
      </div>
      <div className="tools-container">
        <h3 className="container-header">Other Tools</h3>
      </div>
    </div>
  );
};

export default styled(ToolsContainer)`
  background-color: white;
  border-radius: 12px;
  margin-left: 1rem;
  width: 20rem;
  height: calc(752px + 4rem);
  padding: 2rem;
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
  .tools-container {
    h4 {
      font-weight: normal;
      margin-bottom: 0.5rem;
    }
    .links {
      list-style: none;
    }
  }
`;
