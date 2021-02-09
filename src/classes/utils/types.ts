export type Point = { x: number; y: number };
export type Vector = { x: number; y: number };
export type Distance = { scalar: number; x: number; y: number };
export type BodyParams = { v: Vector; a: Vector };
export type BodyType =
  | "rectangle"
  | "circle"
  | "slope"
  | "line"
  | "spring"
  | "ground";
export type ParamType =
  | "x"
  | "y"
  | "o"
  | "w"
  | "h"
  | "r"
  | "m"
  | "v_x"
  | "v_y"
  | "a_x"
  | "a_y";
