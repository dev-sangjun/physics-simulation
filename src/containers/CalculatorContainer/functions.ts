import { Vector } from "../../classes/utils/types";
import { GRAVITY } from "../../classes/utils/constants";
import { addVector, getMagnitude } from "../../classes/utils/functions";

const ZERO = { x: 0, y: 0 };

export const calcPosition = (
  p: Vector,
  v: Vector,
  a: Vector,
  t: number
): Vector => {
  const x = v.x * t + (1 / 2) * a.x * (t * t) + p.x;
  const y = v.y * t + (1 / 2) * a.y * (t * t) + p.y;
  return { x, y };
};
export const calcVelocity = (v: Vector, a: Vector, t: number) => {
  const x = v.x + a.x * t;
  const y = v.y + a.y * t;
  return { x, y };
};

export const calcFreeFallTime = (h: number) => {
  return Math.sqrt(Math.abs((2 * h) / GRAVITY.y));
};

export const calcFreeFallVelocity = (h: number) => {
  const t = calcFreeFallTime(h);
  return calcVelocity(ZERO, GRAVITY, t).y;
};

export const calcKE = (m: number, v_x: number, v_y: number) => {
  const v_mag = getMagnitude({ x: v_x, y: v_y });
  console.log(v_mag);
  return (1 / 2) * m * (v_mag * v_mag);
};

export const calcPE = (y: number, m: number) => {
  return m * Math.abs(GRAVITY.y) * y;
};
